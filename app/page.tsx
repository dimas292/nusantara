import Hero from "./atoms/hero";
import IntroSection from "./atoms/intro-section";
import Marquee from "./atoms/marquee";
import Timeline from "./atoms/timeline";
import { Provinsi } from "./constant/provinsi";
export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee className="py-4">
        {Provinsi.map((prov, idx) => (
          <span key={idx} className="text-xl font-bold">
            {prov.name}
          </span>
        ))}
      </Marquee>
      <IntroSection />
      <Timeline />
    </main>
  );
}
