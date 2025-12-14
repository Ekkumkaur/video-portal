import React from "react";

const rows = [
  {
    pos: 1,
    name: "Southern Lions",
    logo: "/1.png",
  },
  {
    pos: 2,
    name: "North East Panthers",
    logo: "/2.png",
  },
  {
    pos: 3,
    name: "Norther Dabanggss",
    logo: "/3.png",
  },
  {
    pos: 4,
    name: "Western Heroes",
    logo: "/4.png",
  },
  {
    pos: 5,
    name: "Central Strikers",
    logo: "/5.png",
  },
  {
    pos: 6,
    name: "Eastern Rhions",
    logo: "/6.png",
  },
];

const PointsTable: React.FC = () => {
  return (
    <section className="relative w-full">
      {/* Background behind table (stadium feel) */}
      <div className="relative py-10 md:py-12 lg:py-14 px-4 md:px-8 lg:px-12 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/artist.png')" }}
        />
        {/* Light dark tint so background is clearly visible */}
        <div className="absolute inset-0 bg-[#020617]/45" />

        {/* Centered table card over full-width background */}
        <div className="relative max-w-7xl mx-auto">
          {/* Title */}
          <h2
            className="text-center text-white text-3xl md:text-4xl lg:text-[40px] font-extrabold mb-8 md:mb-10 tracking-[0.05em]"
            style={{ fontFamily: "'Rye', serif" }}
          >
            Points Table
          </h2>

          {/* Table wrapper */}
          <div className="overflow-hidden shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
            {/* Header row */}
            <div className="bg-white">
              <div className="grid grid-cols-[80px_minmax(0,2fr)_repeat(5,minmax(0,1fr))] text-[13px] md:text-sm font-extrabold tracking-wider uppercase text-[#111a45]">
                <div className="py-5 pl-10 text-left">Pos</div>
                <div className="py-5 text-center">Team</div>
                <div className="py-5 text-center">Play</div>
                <div className="py-5 text-center">Win</div>
                <div className="py-5 text-center">Loss</div>
                <div className="py-5 text-center">Run Rate</div>
                <div className="py-5 text-center pr-10">Pts</div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-white/10">
              {rows.map((row, index) => (
                <div
                  key={row.pos}
                  className={
                    "grid grid-cols-[80px_minmax(0,2fr)_repeat(5,minmax(0,1fr))] text-sm md:text-base text-white items-center h-20" +
                    (index % 2 === 0
                      ? " bg-[#2d3c84]" // Lighter blue for 1st, 3rd, 5th (indices 0, 2, 4)
                      : " bg-[#182046]") // Darker blue for 2nd, 4th, 6th
                  }
                >
                  <div className="pl-10 font-semibold text-lg text-left">{row.pos}</div>

                  <div className="flex items-center justify-center gap-24 px-4">
                    <div className="h-12 w-12 flex items-center justify-center shrink-0">
                      <img
                        src={row.logo}
                        alt={row.name}
                        className="h-full w-full object-contain drop-shadow-md"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <span className="font-medium whitespace-nowrap min-w-[140px] text-left">
                      {row.name}
                    </span>
                  </div>

                  {["0", "0", "0", "0", "0"].map((value, idx) => (
                    <div
                      key={idx}
                      className={
                        "text-center font-medium text-lg" +
                        (idx === 4 ? " pr-10" : "")
                      }
                    >
                      {value}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PointsTable;
