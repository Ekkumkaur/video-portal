import PageBanner from "@/components/PageBanner";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <PageBanner title="Terms & Condition" currentPage="Terms Conditions" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 lg:py-16">
                <div className="p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">

                    <h1 className="text-3xl font-extrabold text-[#111a45] mb-6">Terms & Condition</h1>

                    <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-600">
                        <p>
                            Greetings from <span className="font-extrabold text-gray-900">Beyond Reach Premier League (BRPL)</span> (hereinafter referred to as the "<Link to="/" className="font-extrabold text-blue-600 hover:underline">Website</Link>"). The Website is owned and operated by <span className="font-extrabold text-gray-900">BRPL PVT. LTD.</span>, having its registered address at Ground Floor, Suite G-01, Procapitus Business Park, D-247/4A, D Block, Sector 63, Noida, Uttar Pradesh 201309.
                        </p>
                        <p>
                            <span className="font-extrabold text-gray-900">BRPL PVT. LTD.</span> is a sports management organization dedicated to scouting talented cricketers and providing high-quality sports experiences to individuals across the nation.
                        </p>
                        <p>
                            We scout players from remote fields, offering a robust platform to showcase their talent at the BRPL League. Selected players will compete at the district level, with top performers advancing to state and national levels, gaining recognition and opportunities for aspiring cricketers.
                        </p>
                        <p>
                            <span className="font-extrabold text-gray-900">BRPL</span> is committed to bridging the gap between talent and opportunity, providing a platform where raw, untapped talent can shine on a grand stage. We aim to revolutionize grassroots cricket and bring players to the forefront of success, nurturing the passion and career aspirations of aspiring cricketers.
                        </p>
                        <p>
                            The <span className="font-extrabold text-gray-900">BRPL League</span> is inclusive of <span className="font-extrabold">Multiple seasons</span>. <span className="font-extrabold">All Seasons / Trading & Teams</span> participation rules same as basic Terms and Condition of player registration and submission.
                        </p>
                        <p>
                            By accessing or using the Website through any computer, laptop, mobile phone, tablet, or any other electronic device, you expressly agree to be bound by these <Link to="/terms-and-conditions" className="font-extrabold text-gray-900 hover:underline">Terms and Conditions</Link> (hereinafter referred to as the "<Link to="/terms-and-conditions" className="font-extrabold text-blue-600 hover:underline">Terms</Link>").
                        </p>
                        <p>
                            If you do not agree with these Terms, you must not access or use this Website. Please read these Terms carefully before accessing. These Terms constitute a binding legal agreement between you and <span className="font-extrabold">BRPL PVT. LTD.</span> governing your use.
                        </p>
                        <p>
                            By creating an account, registering for upcoming seasons, or using other services (collectively referred to as "<span className="font-extrabold text-gray-900">The Services</span>"), you must not use the Website for any illegal, harmful, or fraudulent activities. You confirm that you have read, understood, and agreed to these Terms, Privacy Policy, and Community Guidelines (if any), and you represent that you are of legal age to enter into this agreement.
                        </p>
                    </div>

                    <div className="mt-10 space-y-8">
                        {/* Website Purpose */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">Website Purpose</h2>
                            <p className="text-gray-600 mb-4">The Website serves as a platform for players interested in selling and participating in <span className="font-extrabold">The BRPL League</span>.<br />Users can register, sign up, pay registration fees, and create a profile for participating in open trials.<br />Selection will rely on <span className="font-extrabold">enrollment fee of 499 + applicable GST</span> to submit the registration form. This fee is <span className="font-extrabold">non-refundable and non-transferable</span> under any circumstances.<br />* Fees must be paid via verified internet transaction methods. The <span className="font-extrabold">League Committee</span> reserves the right to reject any incomplete or inaccurate forms without issuance of notice or refund.<br />* Upon successful player profile generation aimed for review by the BRPL League selection committee/scouts/Franchise owners. Qualified players will be notified by the League Owners via all communication channels (website, system, social media, messaging, or email) regarding selection related updates and trials.</p>
                        </section>

                        {/* Player Registration & Selection Details */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">Player Registration & Selection Details</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li><strong>Registration Opening Date:</strong> 20th Jan 2025</li>
                                <li>Trials/Selection dates will be notified as per specific announcements.</li>
                                <li>Try-outs will be conducted at venue which will be announced later.</li>
                                <li>Selected players will be notified for further rounds or team selection.</li>
                                <li>Any changes to dates/venues will be communicated on the platform. Any delay due to force majeure will be notified.</li>
                            </ul>
                            <p className="text-gray-600 mt-4">These Terms constitute a <span className="font-extrabold">legally binding electronic contract</span> between you and BRPL PVT. LTD. This includes our PRIVACY POLICY and other posted guidelines or rules. By using or registering with the Website, you expressly consent to these Terms regarding using, browsing, and accessing. If you do NOT agree with these terms, you must immediately discontinue use of the Website and terminate your account.</p>
                            <p className="text-gray-600 mt-2">All notices, communications, and updates will be provided via the primary email or contact details provided by you. Any notice is deemed received 24 hours after it is posted.</p>
                        </section>

                        {/* 3. Eligibility */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">3. Eligibility</h2>
                            <p className="text-gray-600">The minimum age valid to enroll is <span className="font-extrabold">16 years</span>.<br />By using the Website, you represent and warrant that you meet legal age and have legal authority to enter into this agreement.<br />If you are using the Website on behalf of an entity, you represent and warrant that you are authorized to bind that entity to these Terms.</p>
                        </section>

                        {/* 4. Website Account */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">4. Website Account</h2>
                            <p className="text-gray-600">To access certain features, you may be required to <span className="font-extrabold">create a registered account</span>. You must provide true, accurate, current, and complete information during registration. Providing false information constitutes a violation of these Terms.<br />You are solely responsible for maintaining the confidentiality of your account credentials. Any use of your account is your responsibility.<br />For registering, you must provide accurate information (name, contact, location, DOB). If you suspect unauthorized access, contact support immediately at <a href="mailto:support@brpl.net" className="text-blue-600 hover:underline">support@brpl.net</a>.<br />We reserve the right to suspend or terminate accounts for providing false or misleading information.</p>
                        </section>

                        {/* 5. Term and Termination */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">5. Term and Termination</h2>
                            <p className="text-gray-600">These Terms remain in effect while you use the Website.<br />You may terminate your account at any time by contacting support.<br />BRPL reserves the right to suspend or terminate your account (temporarily or permanently) without notice if you breach these Terms or engage in any prohibited conduct.<br />Upon termination, clauses that by their nature are intended to survive will continue in effect.</p>
                        </section>

                        {/* 6. Website Usage */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">6. Website Usage</h2>
                            <p className="text-gray-600">The Website is for <span className="font-extrabold">personal usage only</span>, not commercial use.</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
                                <li>Using the platform for unauthorized commercial or promotional purposes is prohibited.</li>
                                <li>Sharing account access or selling accounts is strictly prohibited.</li>
                                <li>Respecting security and data integrity rules.</li>
                            </ul>
                            <p className="text-gray-600 mt-2">Any violation will result in suspension or ban from services, and you agree to indemnify BRPL against any claims.</p>
                        </section>

                        {/* 7. Account Security */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">7. Account Security</h2>
                            <p className="text-gray-600">You are responsible for maintaining your account credentials.<br />Report unauthorized access immediately to <a href="mailto:support@brpl.net" className="text-blue-600 hover:underline">support@brpl.net</a>.<br />BRPL will not be liable for loss arising from unauthorized access.</p>
                        </section>

                        {/* 8. Proprietary Rights */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">8. Proprietary Rights</h2>
                            <p className="text-gray-600">All content (materials, text, branding, images, videos, graphics, audio) is the exclusive property of <span className="font-extrabold">BRPL Pvt. Ltd.</span> and its licensors.<br />You must not copy, distribute, or display any content without written consent.<br />By posting any content, you grant BRPL a perpetual, royalty-free, worldwide license to use, display, and distribute such content in connection with the services.</p>
                        </section>

                        {/* 9. User Information */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">9. User Information</h2>
                            <p className="text-gray-600">For details regarding the information collected and its use, please refer to our <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.<br />We implement industry-standard measures to protect your data (SSL encryption, secure servers, secure gateways).</p>
                        </section>

                        {/* 10. Prohibited Activities */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">10. Prohibited Activities</h2>
                            <p className="text-gray-600">You agree NOT to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Violate any applicable laws or regulations.</li>
                                <li>Use the website for illegal or unauthorized purposes.</li>
                                <li>Attempt to interfere with website security or networks.</li>
                                <li>Collect/harvest data of other users without consent.</li>
                                <li>Modify, duplicate, or reverse engineer platform content.</li>
                            </ul>
                        </section>

                        {/* 11. Content Posted by You */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">11. Content Posted by You</h2>
                            <p className="text-gray-600">You are solely responsible for any content you post on the Website.<br />You may not post content that is illegal, offensive, defamatory, pornographic, or infringing on any third-party rights.<br />By posting content, you grant BRPL a license to use, modify, distribute, display, and perform such content exclusively for league promotional or operational purposes.<br />BRPL reserves the right to remove content found in violation of these terms.</p>
                        </section>

                        {/* 12. Payments and Refunds */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">12. Payments and Refunds</h2>
                            <p className="text-gray-600">All payments are processed through our trusted third-party gateways.<br />Processing charges may apply as per bank norms.<br />
                                <span className="font-extrabold text-orange-600">⚠ Enrollment fees are strictly non-refundable and non-transferable irrespective of circumstances.</span><br />
                                No cancellations once payment is made, verify details before payment.</p>
                        </section>

                        {/* 13. Modifications to the Website */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">13. Modifications to the Website</h2>
                            <p className="text-gray-600">BRPL reserves the right to modify, suspend, or discontinue (fully or partially) the features at any time without notice.<br />By continuing to use, you agree to accept such changes.</p>
                        </section>

                        {/* 14. Disclaimer of Warranty */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">14. Disclaimer of Warranty</h2>
                            <p className="text-gray-600">The website is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties, express or implied.<br />BRPL does not guarantee error-free, uninterrupted access, or complete accuracy of content at all times.<br />Users access the website at their own risk. BRPL represents no warranty resulting from user inability to use the website.</p>
                        </section>

                        {/* 15. Limitation of Liability */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">15. Limitation of Liability</h2>
                            <p className="text-gray-600">To the fullest amount permitted by law, BRPL shall not be liable for any indirect, incidental, consequential damages arising out of use or inability to use, unless arising out of our negligence.</p>
                        </section>

                        {/* 16. Indemnification */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">16. Indemnification</h2>
                            <p className="text-gray-600">You agree to indemnify and hold harmless BRPL Pvt Ltd, its officers, directors, agents, corporate partners, and employees from any claim resulting from your use of the Website or violation of these Terms.</p>
                        </section>

                        {/* 17. Miscellaneous */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">17. Miscellaneous</h2>
                            <ul className="list-disc pl-6 space-y-2 text-gray-600">
                                <li>Entire Agreement: These Terms act solely as full agreement between you and BRPL.</li>
                                <li>Amendment: BRPL reserves the right to amend these Terms at any time. Continued usage implies acceptance.</li>
                                <li>Governing Law: These Terms are governed by the laws of India.</li>
                                <li>No Assignment: You may not assign your rights or obligations under these Terms.</li>
                                <li>Severability: If any provision is deemed unenforceable, remaining provision continues in effect.</li>
                                <li>Waiver: Failure to enforce any right does not constitute waiver of such right.</li>
                            </ul>
                        </section>

                        {/* 18. Contact Us */}
                        <section>
                            <h2 className="text-xl font-extrabold text-[#111a45] mb-4">18. Contact Us</h2>
                            <p className="text-gray-600">For any questions or concerns, please contact us at: <a href="mailto:support@brpl.net" className="text-blue-600 hover:underline">support@brpl.net</a></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
