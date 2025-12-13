import React from 'react';

const Banner = () => {
    return (
        <div className="relative w-full h-[680px] md:h-[680px] lg:h-[680px] overflow-hidden font-sans">

            <div
                className="absolute inset-0 z-0 bg-cover bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg-cricket1.jpg')",
                    backgroundPosition: "left center",
                    backgroundSize: "cover", // Ensure it covers the area

                }}
            >
                <div className="absolute inset-0 bg-[#070d1e]/50"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/20 via-transparent to-[#020617]/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/20 via-transparent to-[#020617]/20"></div>

            </div>

            {/* 2. Content Container */}
            <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 flex items-center">

                {/* 3. Vertical Text "CRICKET" - Left Side (Exact Match) */}
                <div className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:block select-none pointer-events-none">
                    <span
                        className="block text-[130px] lg:text-[170px] xl:text-[70px] font-black text-transparent leading-none opacity-60 tracking-[0.15em] filter blur-[1px]"
                        style={{
                            // Adjusting stroke width and color for a more subtle, visible effect
                            WebkitTextStroke: "2px rgba(156, 172, 190, 0.85)",
                            writingMode: "vertical-rl",
                            transform: "rotate(180deg)",

                            // You'll need to ensure Oswald is linked in your HTML/CSS for this to work
                            fontFamily: "'Oswald', sans-serif"
                        }}
                    >
                        CRICKET
                    </span>
                </div>

                <div className="flex flex-col items-end justify-center w-full max-w-4xl ml-auto text-right gap-1.5 md:gap-1.5 lg:gap-1.5 pr-4 md:pr-10 lg:pr-24">
                    <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold text-[#f4f7fb] uppercase leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                        BHARAT KI LEAGUE
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold text-[#FFC928] uppercase leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                        BHARTIYO KA SAPNA
                    </h2>
                </div>

            </div>

            {/* 5. Custom Slider Dots - Bottom Center (Exact Match) */}
            <div className="absolute bottom-7 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {/* Active Dot - Filled Pill (Slightly more yellow/yellowish-white to match) */}
                <div className="w-12 h-[3px] bg-white rounded-full shadow-[0_0_8px_rgba(0,0,0,0.7)]"></div>

                {/* Inactive Dots - Outlined/Thinner */}
                <div className="w-6 h-[2px] rounded-full border border-white/60 bg-transparent opacity-70"></div>
                <div className="w-6 h-[2px] rounded-full border border-white/60 bg-transparent opacity-70"></div>
            </div>
        </div>
    );
};

export default Banner;