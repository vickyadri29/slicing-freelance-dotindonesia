import Image from "next/image";

import logoLight from "../../assets/icons/logo-light.svg";
import email from "../../assets/icons/email.svg";
import {
  aboutUs,
  dataCredit,
  dataCreditCard,
  dataTech,
  dataTransferBank,
  productAndServices,
  socialMedia,
} from "@/utils/data";

import logoSig from "../../assets/icons/logo-sig.svg";

const Footer = () => {
  return (
    <div className="bg-primary-dark-blue px-16 py-10 text-white flex flex-col gap-14">
      <div className="flex gap-60">
        {/* Content Left */}
        <div className="flex flex-col gap-7">
          <Image src={logoLight} alt="logo light" />
          <p>
            SobatBangun adalah platform digital dari SIG yang bergerak dengan
            misi mengembangkan <br /> proses pembangunan dan renovasi rumah
            secara lebih baik serta berkelanjutan.
          </p>
          <div className="flex items-center gap-4">
            <Image src={email} alt="email" />
            <span>sobat@sobatbangum.com</span>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Sosial Media :</h3>
            <div className="flex items-center gap-5">
              {socialMedia.map(({ id, icon_url }) => (
                <Image
                  key={id}
                  src={icon_url}
                  alt="Icons"
                  className={`${
                    id === 0 ? "bg-[#2C373E]" : "bg-white"
                  } p-[15px] w-12 h-12 rounded-full shrink-0`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product and Services */}
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold">Produk & Layanan</h2>
          <ul className="flex flex-col gap-7">
            {productAndServices.map(({ id, name }) => (
              <li key={id} className="cursor-pointer">
                {name}
              </li>
            ))}
          </ul>
        </div>

        {/* About us */}
        <div className="flex flex-col gap-8">
          <h2 className="text-xl font-bold">Tentang Kami</h2>
          <ul className="flex flex-col gap-7">
            {aboutUs.map(({ id, name }) => (
              <li key={id} className="cursor-pointer">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">Kredit Bangun Rumah</h3>
          <ul className="flex flex-row items-center gap-7">
            {dataCredit.map(({ id, img_url }) => (
              <li key={id} className="cursor-pointer">
                <Image src={img_url} alt="kredit bangun rumah" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Tunai Via Bank Transfer</h3>
          <ul className="flex flex-row items-center gap-7">
            {dataTransferBank.map(({ id, img_url }) => (
              <li key={id} className="cursor-pointer">
                <Image src={img_url} alt="kredit bangun rumah" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Kartu Kredit</h3>
          <ul className="flex flex-row items-center gap-7">
            {dataCreditCard.map(({ id, img_url }) => (
              <li key={id} className="cursor-pointer">
                <Image src={img_url} alt="kredit bangun rumah" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Rekan Teknologi Tambahan</h3>
          <ul className="flex flex-row items-center gap-7">
            {dataTech.map(({ id, img_url }) => (
              <li key={id} className="cursor-pointer">
                <Image src={img_url} alt="kredit bangun rumah" />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="mt-3">Powered by:</span>
          <Image src={logoSig} alt="sig logo" />
        </div>
        <span className="text-sm">Copyright © 2023 SobatBangun. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
