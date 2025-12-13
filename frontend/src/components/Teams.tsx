import React from "react";

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
];

const Teams: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Stadium background same style as design */}
      <div className="relative py-8 md:py-12 lg:py-14 px-4 md:px-8 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/artist.png')" }}
        />
        {/* Slight dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#020617]/50" />

        <div className="relative max-w-6xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-center text-white text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-[0.18em] uppercase mb-7 md:mb-9">
            Teams
          </h2>

          {/* Logos row */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-9 lg:gap-12">
            {teams.map((team) => (
              <div
                key={team.name}
                className="h-40 w-40 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-36 lg:w-36 rounded-full bg-white flex items-center justify-center shadow-[0_18px_45px_rgba(0,0,0,0.9)] overflow-hidden"
              >
                <img
                  src={team.logo}
                  alt={team.name}
                  className="h-[100%] w-[100%] object-contain"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
