import Image from "next/image";
import { SportEvent } from "../../types/sport-event";

const SportCard: React.FC<{ item: SportEvent }> = ({ item }) => {
  return (
    <>
      <div className="dark:bg-[#3B3E47] lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal p-2">
        <Image
          width={600}
          height={1000}
          alt="sports-person"
          src={item?.imgLink}
          className="mb-3 object-cover h-96"
        />
        <div className="py-2">
          <div className="font-bold text-lg hover:text-indigo-600 inline-block dark:text-white">
            {item?.title}
          </div>
          <div className="dark:bg-[#292B32] grid grid-flow-col p-3 justify-between">
            <div className="grid">
              <span className="text-[#DFDFDF]">Total Events</span>{" "}
              <span className="dark:text-white">
                {item?.totalEvents} Events
              </span>
            </div>
            <div className="grid">
              <span className="text-[#DFDFDF]">Sport</span>{" "}
              <span className="dark:text-white">{item?.sport}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportCard;
