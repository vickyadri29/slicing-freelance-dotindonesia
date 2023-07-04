import { dataSpesification } from "@/utils/data";
import Image from "next/image";

const Spesification = () => {
  return (
    <div className="flex gap-5">
      {dataSpesification.map(({ id, desc, title, icon_url }) => (
        <div key={id} className="flex flex-col items-center gap-1">
          <Image src={icon_url} alt="icon spesification" />
          <p className="text-xs text-[#808080]">{title}</p>
          <span className="text-sm">{desc}</span>
        </div>
      ))}
    </div>
  );
};

export default Spesification;
