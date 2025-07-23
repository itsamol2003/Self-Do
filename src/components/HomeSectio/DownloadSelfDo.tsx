import React from "react";
import googlePlay from "../../../Assets/Googlestor.png";
import appStore from "../../../Assets/AppStor.png";
import phoneMockupCar from "../../../Assets/Mobile.jpg";

const DownloadSelfDo = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 px-4 md:px-8 lg:pl-20">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1A1A1A] leading-snug font-inter md:max-w-[500px]">
          Download <span className="font-bold">Self Do App</span>
          <br />
          for <span className="text-[#F15A29] font-extrabold">FREE</span>
        </h2>

        <p className="text-[#333333] text-base mt-6 leading-loose max-w-md font-normal">
          Self-drive gives you total freedom, privacy, and control over your
          journey. No waiting on drivers, no compromises — just you, the
          road, and your schedule. Explore at your pace with comfort and
          confidence.
        </p>

        <p className="text-[#F15A29] text-sm mt-4 font-medium">
          For faster, easier booking and exclusive deals.
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href="https://play.google.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={googlePlay}
              alt="Google Play"
              className="h-12 w-auto cursor-pointer"
            />
          </a>

          <a
            href="https://www.apple.com/in/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={appStore}
              alt="App Store"
              className="h-12 w-auto cursor-pointer"
            />
          </a>
        </div>
      </div>

      {/* Right Phone UI Image */}
      <div className="md:w-1/2 flex justify-end items-end">
        <img
          src={phoneMockupCar}
          alt="Mobile mockup with orange car"
          className="w-[300px] md:w-[360px] lg:w-[400px] xl:w-[450px] object-contain mt-[120px] self-end mb-[-48px]"
        />
      </div>
    </section>
  );
};

export default DownloadSelfDo;
