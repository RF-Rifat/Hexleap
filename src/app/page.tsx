import SportContainer from "@/components/Hero/SportContainer";
import { CardSwiper } from "@/components/Swiper/CardSwiper";

const Home: React.FC = () => {
  return (
    <main className="max-w-[1444px] mx-auto relative">
      <div className="px-4 py-4 md:px-10 md:py-6 xl:px-16 xl:py-10 space-y-4">
        <span className="border-b-4 border-[#738FFF] font-bold text-xl dark:text-white pb-1 ml-1">
          Sports
        </span>
        <SportContainer />

        <div className="p-6 md:p-20 bg-[#f4f2ff] dark:bg-gradient-to-b from-[#18282A] to-[#221A2C]">
          <h1 className="text-5xl font-bold text-center pb-4 dark:text-white">
            Collection Spotlight
          </h1>
          <p className="py-4 text-center dark:text-white pb-8 px-2 md:px-6 lg:px-10">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
          <CardSwiper />
        </div>
      </div>
    </main>
  );
};
export default Home;
