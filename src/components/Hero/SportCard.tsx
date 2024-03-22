import Image from "next/image";

const SportCard = () => {
  return (
    <>
      <div className="dark:bg-dark lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <Image
          width={600}
          height={600}
          alt="sports-person"
          src="/Sports/sports-1.jpeg"
          className="w-44 mb-3"
        />
        <div className="p-4 pt-2">
          <div className="font-bold text-lg mb-2 hover:text-indigo-600 inline-block dark:text-white">
            Sacramento River Cats
          </div>
        </div>
      </div>
    </>
  );
};

export default SportCard;
