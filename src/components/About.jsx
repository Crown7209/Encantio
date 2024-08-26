import { Profile } from "./Image/Profile";
import { ArgentinaIcon } from "./Svg/ArgentinaIcon";
import { ItalyIcon } from "./Svg/ItalyIcon";
import { USAIcon } from "./Svg/USAIcon";

export const About = () => {
  return (
    <div className="pt-20 max-w-[90vw] w-full flex flex-col items-center gap-10">
      <div className="background4 rounded-[22px] p-[2px] max-w-[1140px] w-full">
        <div className="py-10 pr-20 pl-10 bg-[#171826] rounded-[20px] flex justify-between items-center ">
          <Profile />
          <div className="flex flex-col gap-10 ">
            <div className="max-w-[423px] flex flex-col gap-[25px]">
              <p className="text-[46px] font-medium leading-[120%] text-[#fff] font-title">
                I’m Tom, Digital & Web Designer
              </p>
              <div className="flex flex-col gap-[15px]">
                <p className="text-lg font-text font-normal leading-[140%] text-[#b5b5ba]">
                  Since 2018, I've collaborated with successful companies
                  worldwide.
                </p>
                <p className="text-lg font-text font-normal leading-[140%] text-[#b5b5ba]">
                  With a background in investment management and personal
                  finances, my profound admiration for financial services
                  businesses inspired the creation of Encantio. Dedicated to
                  enhancing visual communication, we specialize in helping
                  finance professinals build trust through design.
                </p>
              </div>
            </div>
            <div className="flex gap-[15px]">
              <div className="flex gap-2 border border-[#fff3] px-[15px] bg-[#ffffff0a] rounded-lg items-center h-[35px]">
                <USAIcon />
                <p className="text-sm font-normal font-text leading-[105%] text-[#fff9]">
                  Born in USA
                </p>
              </div>
              <div className="flex gap-2 border border-[#fff3] px-[15px] bg-[#ffffff0a] rounded-lg items-center h-[35px]">
                <ArgentinaIcon />
                <p className="text-sm font-normal font-text leading-[105%] text-[#fff9]">
                  Raised in Argentina
                </p>
              </div>
              <div className="flex gap-2 border border-[#fff3] px-[15px] bg-[#ffffff0a] rounded-lg items-center h-[35px]">
                <ItalyIcon />
                <p className="text-sm font-normal font-text leading-[105%] text-[#fff9]">
                  Living in Italy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1140px] w-full background4 rounded-[22px] p-[2px] ">
        <div className="py-20 px-[90px] bg-[#171826] rounded-[20px] flex items-center justify-center flex-col gap-[50px]">
          <div className="flex flex-col gap-[30px] items-center max-w-[770px] w-full">
            <p className="text-white text-[50px] leading-[120%] font-semibold text-center tracking-[-.01em] font-title">
              Your success is not just a goal,
              <span className="bg-gradient-to-r from-[#38b7ff] to-[#d782ff] bg-clip-text text-transparent text-[50px] leading-[120%] font-semibold tracking-[-.01em] font-title">
                {" "}
                it's our top priopity{" "}
              </span>
            </p>
            <p className="text-center w-[80%] text-lg font-text font-normal leading-[140%] text-[#b5b5ba]">To ensure quality work, we work with a limited amount of clients per month. Secure your spot for dedicated attention and exceptional results.</p>
          </div>
          <button className="bg-white rounded-[10px] py-5 px-10 text-[#090a18] text-[19px] font-medium leading-[105%] font-text max-w-[270px] w-full shadow-[inset_0_-4px_#e8e6e9]">Secure my spot</button>
        </div>
      </div>
    </div>
  );
};
