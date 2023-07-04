"use client";
import Image from "next/image";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { dataHomeContent } from "@/utils/data";
import { Navigation } from "swiper/modules";

const HeaderContent = () => {
  return (
    <div className="my-5">
      <div className="max-w-[1470px] m-auto p-5">
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
        {/* <div className="">
          <div className="flex justify-between items-center w-full max-w-[1470px] m-auto">
            <Image src={arrowRightBgIcon} alt="image home" />
            <Image src={arrowLeftBgIcon} alt="image home" />
          </div>
        </div> */}
        <Swiper
          modules={[Navigation]}
          loop={true}
          scrollbar={{ draggable: true }}
          navigation={{ enabled: true }}
          className=""
        >
          {dataHomeContent.map(({ id, img_url }) => (
            <SwiperSlide key={id}>
              <div className="bg-white drop-shadow-md rounded-[10px]">
                <Image
                  src={img_url}
                  alt=""
                  className="w-full h-[40rem] p-1 drop-shadow-md rounded-[10px] object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeaderContent;
