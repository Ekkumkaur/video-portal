import React from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    id: 0,
    background: "/bg-cricket1.jpg",
    title: "BHARAT KI LEAGUE",
    subtitle: "BHARTIYO KA SAPNA",
  },
  {
    id: 1,
    background: "/artist.png",
    title: "BHARAT KI LEAGUE",
    subtitle: "BHARTIYO KA SAPNA",
  },
  {
    id: 2,
    background: "/artist.png",
    title: "BHARAT KI LEAGUE",
    subtitle: "BHARTIYO KA SAPNA",
  },
];

const Banner = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [api]);

  const handleDotClick = (index: number) => {
    if (!api) return;
    api.scrollTo(index);
  };

  return (
    <div className="relative w-full h-[680px] md:h-[680px] lg:h-[680px] overflow-hidden font-sans">
      <Carousel setApi={setApi} className="h-full">
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative w-full h-full">
                <div
                  className="absolute inset-0 z-0 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url('${slide.background}')`,
                    backgroundPosition: "left center",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="absolute inset-0 bg-[#070d1e]/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/20 via-transparent to-[#020617]/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/20 via-transparent to-[#020617]/20" />
                </div>

                <div className="relative z-10 w-full h-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-16 flex items-center">
                  <div className="absolute left-2 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 hidden md:block select-none pointer-events-none">
                    <span
                      className="block text-[170px] lg:text-[170px] xl:text-[80px] font-black text-transparent leading-none opacity-60 tracking-[0.15em] filter blur-[0.2px]"
                      style={{
                        WebkitTextStroke: "6px rgba(147, 147, 147, 0.63)",
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        fontFamily: "Suez One, serif",
                      }}
                    >
                      CRICKET
                    </span>
                  </div>

                  <div className="flex flex-col items-end justify-center w-full max-w-4xl ml-auto text-right gap-1.5 md:gap-1.5 lg:gap-1.5 pr-4 md:pr-10 lg:pr-24">
                    <h1 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold text-[#f4f7fb] uppercase leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                      {slide.title}
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-[40px] xl:text-[44px] font-extrabold text-[#FFC928] uppercase leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.9)]">
                      {slide.subtitle}
                    </h2>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-7 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            className="focus:outline-none"
          >
            {index === current ? (
              <div className="w-14 h-[6px] rounded-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.7)]" />
            ) : (
              <div className="w-14 h-[6px] rounded-full border border-white bg-transparent" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Banner;