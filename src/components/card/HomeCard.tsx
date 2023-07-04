import Image, { ImageProps } from "next/image";
import { NextPage } from "next";

interface HomeViewProps {
  id: number;
  img_url: ImageProps["src"];
  title: string;
  size: string;
}

const HomeCard: NextPage<HomeViewProps> = (data) => {
  return (
    <div className="flex">
      <div className="flex flex-col gap-5 p-4 border border-[#E6E6E6] rounded-lg">
        <Image src={data?.img_url} alt="img card" />
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-primary-black">{data.title}</h3>
          <p className="text-sm">{data.size}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;