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
        <div className="relative max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-center text-white text-3xl md:text-4xl font-extrabold mb-5 md:mb-7 tracking-[0.18em] uppercase">
            Points Table
          </h2>

          {/* Table wrapper (no extra dark background, just subtle shadow) */}
          <div className="overflow-hidden shadow-[0_18px_55px_rgba(0,0,0,0.7)]">
            {/* Header row */}
            <div className="bg-white">
              <div className="grid grid-cols-[70px_minmax(0,2.6fr)_repeat(5,minmax(0,1fr))] text-[11px] md:text-xs font-semibold tracking-[0.18em] uppercase text-[#111a45]">
                <div className="py-3 pl-6">Pos</div>
                <div className="py-3">Team</div>
                <div className="py-3 text-center">Play</div>
                <div className="py-3 text-center">Win</div>
                <div className="py-3 text-center">Loss</div>
                <div className="py-3 text-center">Run Rate</div>
                <div className="py-3 text-center pr-6">Pts</div>
              </div>
            </div>

            {/* Rows */}
            <div>
              {rows.map((row, index) => (
                <div
                  key={row.pos}
                  className={
                    "grid grid-cols-[70px_minmax(0,2.6fr)_repeat(5,minmax(0,1fr))] text-xs md:text-sm text-white" +
                    (index % 2 === 0
                      ? " bg-[#2f4092]"
                      : " bg-[#111a45]")
                  }
                >
                  <div className="py-3.5 pl-6 font-semibold">{row.pos}</div>

                  <div className="py-3.5 flex items-center gap-3 pr-2">
                    <div className="h-12 w-12 flex items-center justify-center overflow-hidden">
                      <img
                        src={row.logo}
                        alt={row.name}
                        className="h-full w-full object-contain"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <span className="text-sm md:text-base font-medium whitespace-nowrap">
                      {row.name}
                    </span>
                  </div>

                  {["0", "0", "0", "0", "0"].map((value, idx) => (
                    <div
                      key={idx}
                      className={
                        "py-3.5 text-center text-sm font-medium" +
                        (idx === 4 ? " pr-6" : "")
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
