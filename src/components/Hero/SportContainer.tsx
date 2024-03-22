import { SportEvent } from "../../types/sport-event";
import SportCard from "./SportCard";
import SportsAds from "./SportsAds";

const SportContainer: React.FC = () => {
  const cartData: SportEvent[] = [
    {
      imgLink: "/Sports/sports-1.jpeg",
      title: "Sacramento River Cats",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 48,
    },
    {
      imgLink: "/Sports/sports-2.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 28,
    },
    {
      imgLink: "/Sports/sports-3.jpeg",
      title: "New Jersey Devils",
      event: "Total Events",
      sport: "Ice Hockey",
      totalEvents: 15,
    },
    {
      imgLink: "/Sports/sports-4.jpeg",
      title: "Las Vegas Aviators",
      event: "Total Events",
      sport: "Baseball",
      totalEvents: 28,
    },
  ];

  return (
    <>
      <main className="grid md:grid-cols-2 lg:flex gap-2">
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
          {cartData?.map((item, idx) => (
            <SportCard key={idx} item={item} />
          ))}
        </div>
        <SportsAds />
      </main>
    </>
  );
};

export default SportContainer;
