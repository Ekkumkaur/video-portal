import PageBanner from "@/components/PageBanner";

const teams = [
    {
        name: "North East Panthers",
        logo: "/2.png",
    },
    {
        name: "Central Strikers",
        logo: "/5.png",
    },
    {
        name: "Western Heroes",
        logo: "/4.png",
    },
    {
        name: "Norther Dabanggss",
        logo: "/3.png",
    },
    {
        name: "Southern Lions",
        logo: "/1.png",
    },
    {
        name: "Eastern Rhinos",
        logo: "/6.png",
    },
];

const TeamsPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <PageBanner title="Teams" currentPage="Teams" />

            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8 justify-items-center">
                    {teams.map((team) => (
                        <div key={team.name} className="flex flex-col items-center">
                            <div className="h-60 w-60 md:h-55 md:w-55 lg:h-70 lg:w-70 rounded-full shadow-[0_12px_30px_rgba(0,0,0,0.16)] flex items-center justify-center overflow-hidden">
                                <img
                                    src={team.logo}
                                    alt={team.name}
                                    className="h-32 w-32 md:h-36 md:w-36 lg:h-65 lg:w-65 object-contain"
                                />
                            </div>
                            <p className="mt-4 text-base md:text-lg font-extrabold text-[#111a45] text-center">
                                {team.name}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeamsPage;
