import Image from "next/image";

import arrowRightIcon from "../assets/icons/arrow-right.svg";
import imageHome from "../assets/images/image-home.png";

const HeaderContent = () => {
  return (
    <div className="my-7">
      <div className="flex items-center gap-3">
        <h2 className="font-semibold text-primary-red text-sm">Home</h2>
        <Image src={arrowRightIcon} alt="arrow right" />
        <h2 className="font-semibold text-primary-red text-sm">
          Layanan Desain
        </h2>
        <Image src={arrowRightIcon} alt="arrow right" />
        <h2 className="font-semibold text-primary-gray text-sm">Omah Apik 3</h2>
      </div>
      <div>
        <Image src={imageHome} alt="image home" />
      </div>
    </div>
  );
};

export default HeaderContent;
