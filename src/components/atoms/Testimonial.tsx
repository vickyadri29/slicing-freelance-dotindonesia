import { dataTestimonial } from "@/utils/data";
import star from "../../assets/icons/star.svg";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="flex flex-col gap-3 my-5 w-[364px]">
      <h2 className="text-2xl text-primary-black font-semibold">Testimoni</h2>
      <div className="flex flex-col gap-5">
        {dataTestimonial.map(({ id, name, review, image_url, desc }) => (
          <div key={id} className="flex items-start gap-5">
            <Image src={image_url} alt="profile" className="shrink-0" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <h3 className="font-semibold">{name}</h3>
                <span>|</span>
                <div className="mb-[1px]">
                  <Image src={star} alt="star icon" />
                </div>
                <span className="text-sm text-[#4A5568]">{review}</span>
              </div>
              <p className="text-[#666666]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
