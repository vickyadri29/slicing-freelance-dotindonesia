import Image from "next/image";

import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import arrowRightBgIcon from "../../assets/icons/arrow-left-bg.svg";
import arrowLeftBgIcon from "../../assets/icons/arrow-right-bg.svg";
import imageHome from "../../assets/images/image-home.png";

const HeaderContent = () => {
  return (
    <div className="my-5">
      <div className="max-w-7xl m-auto p-5">
        <div className="flex items-center gap-3">
          <h2 className="font-semibold text-primary-red text-sm">Home</h2>
          <Image src={arrowRightIcon} alt="arrow right" />
          <h2 className="font-semibold text-primary-red text-sm">
            Layanan Desain
          </h2>
          <Image src={arrowRightIcon} alt="arrow right" />
          <h2 className="font-semibold text-primary-gray text-sm">
            Omah Apik 3
          </h2>
        </div>
      </div>
      <div className="relative">
        <div className="absolute w-full top-[45%] z-50">
          <div className="flex justify-between items-center w-full max-w-7xl m-auto">
            <Image src={arrowRightBgIcon} alt="image home" />
            <Image src={arrowLeftBgIcon} alt="image home" />
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Image src={imageHome} alt="image home" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
