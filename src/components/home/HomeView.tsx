import React from "react";
import HomeCard from ".././card/HomeCard";
import { dataHomeView } from "../../utils/data";
import BookingCard from ".././card/BookingCard";
import Testimonial from "../atoms/Testimonial";

const HomeView = () => {
  return (
    <div className="max-w-[1470px] mx-auto p-5 my-5">
      <div className="flex gap-10 justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl text-primary-black font-semibold">
            Tampilan Rumah
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {dataHomeView.map((data) => {
              return (
                // <div className="grid grid-col-3 grid-row-2">
                <HomeCard key={data.id} {...data} />
                // </div>
              );
            })}
          </div>
        </div>

        <div>
          <BookingCard />
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
