import PageBanner from "@/components/PageBanner";
import AboutSection from "@/components/AboutSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import MeetOurTeamSection from "@/components/MeetOurTeamSection";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageBanner title="About us" currentPage="About us" />

            <AboutSection />
            <MissionVisionSection />
            <MeetOurTeamSection />
        </div>
    );
};

export default AboutUs;
