const Contact = require('../model/contactModel');
const nodemailer = require('nodemailer');

// Configure Nodemailer Transporter
// Ideally these should be in .env
const transporter = nodemailer.createTransport({
    service: 'gmail', // or your email provider
    auth: {
        user: 'ektadev531@gmail.com', // Replace with environment variable
        pass: 'iaaw zdey hzgw bqen' // Replace with environment variable
    }
});

exports.submitContact = async (req, res) => {
    try {
        const { firstName, lastName, mobileNumber, email, message } = req.body;

        // 1. Save to Database
        const newContact = new Contact({
            firstName,
            lastName,
            mobileNumber,
            email,
            message
        });
        await newContact.save();

        // 2. Send Email to Company
        const mailOptions = {
            from: process.env.EMAIL_USER || 'ektadev531@gmail.com', // Sender address
            to: process.env.COMPANY_EMAIL || 'info@brpl.net', // Receiver address (Company)
            subject: `New Contact Inquiry from ${firstName} ${lastName}`,
            html: `
                <h3>New Contact Us Form Submission</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobileNumber}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        };

        // Attempt to send email, but don't fail the request if email fails (log it)
        try {
            await transporter.sendMail(mailOptions);
            console.log('Contact email sent successfully');
        } catch (emailError) {
            console.error('Error sending contact email:', emailError);
            // We still proceed as DB save was successful
        }

        res.status(201).json({
            success: true,
            message: 'Contact details submitted successfully'
        });

    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while processing your request'
        });
    }
};
