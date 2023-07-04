import Image from "next/image";
import React from "react";

import logoStudio from "../../assets/icons/logo-studio-sae.svg";
import checklist from "../../assets/icons/checklist.svg";
import Spesification from "../atoms/Spesification";

const BookingCard = () => {
  return (
    <div className="border border-[#E6E6E6] w-[364px] rounded-2xl p-6">
      <div className="flex flex-col gap-5">
        <h2 className="text-2xl text-primary-black font-semibold">
          Omah Apik 3
        </h2>
        <div className="flex items-center gap-1">
          <Image src={logoStudio} alt="logo studio sae" />
          <p className="text-sm">Studio SAe</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex items-center gap-9">
            <p className="text-secondary-gray">Jenis Rumah</p>
            <span>Scandinavian</span>
          </div>
          <div className="flex items-center gap-10">
            <p className="text-secondary-gray">Tipe Desain</p>
            <span className="flex items-center  gap-2 text-primary-black">
              <Image src={checklist} alt="checklist" /> Dapat Dimodifikasi
            </span>
          </div>
        </div>
        <hr />
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
          <button className="px-5 py-3 font-semibold text-white bg-primary-red hover:bg-red-600 rounded-md transition-all duration-100 ease-in outline-none active:ring active:ring-red-300">
            Konsultasi Sekarang
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
