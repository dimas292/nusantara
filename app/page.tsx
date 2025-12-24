import Hero from "./atoms/hero";
import IntroSection from "./atoms/intro-section";
import Marquee from "./atoms/marquee";
import Timeline from "./atoms/timeline";
import { Provinsi } from "./constant/provinsi";
export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee className="py-2 sm:py-3 md:py-4">
        {Provinsi.map((prov, idx) => (
          <span key={idx} className="text-base sm:text-lg md:text-xl font-bold">
            {prov.name}
          </span>
        ))}
      </Marquee>
      <IntroSection />
      <Timeline />
    </main>
  );
}
