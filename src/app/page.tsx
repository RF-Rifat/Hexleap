import SportContainer from "@/components/Hero/SportContainer";

export default function Home() {
  return (
    <main className="max-w-[1444px] mx-auto">
      <div className="px-4 py-4 md:px-10 md:py-6 xl:px-16 xl:py-10 space-y-4">
        <span className="border-b-4 border-[#738FFF] font-bold text-xl dark:text-white pb-1 ml-1">
          Sports
        </span>
        <SportContainer />
      </div>
    </main>
  );
}
