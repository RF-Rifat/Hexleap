import SportContainer from "@/components/Hero/SportContainer";
import { CardSwiper } from "@/components/Swiper/CardSwiper";

export default function Home() {
  return (
    <main className="max-w-[1444px] mx-auto relative">
      <div className="px-4 py-4 md:px-10 md:py-6 xl:px-16 xl:py-10 space-y-4">
        <span className="border-b-4 border-[#738FFF] font-bold text-xl dark:text-white pb-1 ml-1">
          Sports
        </span>
        <SportContainer />
        {/* swiper */}
        <div
          style={{
            background: "linear-gradient(180deg, #18282A 0%, #221A2C 100%)",
          }}
          className="p-24"
        >
          <CardSwiper />
        </div>
      </div>
    </main>
  );
}
