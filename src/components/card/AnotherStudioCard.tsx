import Image from "next/image";
import { dataAnotherStudioCard } from "@/utils/data";

import logoStudio from "../../assets/icons/logo-studio-sae.svg";
import Spesification from "../atoms/Spesification";

const AnotherStudioCard = () => {
  return (
    <div className="max-w-[1470px] mx-auto mt-20 mb-5 p-5 flex flex-col gap-4">
      <h2 className="text-2xl text-primary-black font-semibold">
        Desain Lainnya oleh Studio SAe
      </h2>
      <div className="flex gap-2 justify-between">
        {dataAnotherStudioCard.map(({ id, img_url, name, title }) => (
          <div
            key={id}
            className="border border-[#E6E6E6] hover:shadow-md cursor-pointer transition-all duration-150 rounded-lg p-5 flex flex-col gap-3"
          >
            <div className="flex justify-center">
              <Image src={img_url} alt="image data" />
            </div>
            <div className="flex items-center gap-5">
              <h3 className="text-xl text-primary-black font-bold">{title}</h3>
              <span className="px-3 py-2 text-sm bg-[#F1F1F1] rounded-2xl">
                {name}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Image src={logoStudio} alt="logo studio sae" />
              <p className="text-sm">Studio SAe</p>
            </div>
            <Spesification />
            <hr />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col">
                <p className="text-sm">Harga Desain</p>
                <h2 className="text-[32px] font-semibold">Rp. 32.500.000</h2>
                <span className="text-sm text-[#808080]">
                  Harga konstruksi mulai dari Rp 560.000.000
                </span>
              </div>
              <button className="px-5 py-2 font-semibold text-primary-red border border-primary-red hover:border-red-600 rounded-md transition-all duration-100 ease-in outline-none active:ring active:ring-red-300">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnotherStudioCard;
