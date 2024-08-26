import { Line } from "./Image/Line";
import { Check } from "./Svg/Check";
import { ColorfulIcon, ColorfulIcon1 } from "./Svg/ColorfulIcon";
import { PaymentIcon } from "./Svg/PaymentIcon";

export const Packages = () => {
  return (
    <div className="max-w-[90vw] w-full pt-[120px] pb-[50px] flex flex-col items-center gap-20">
      <div className="flex flex-col items-center gap-[30px]">
        <p className="header-text">PACKAGES</p>
        <p className="title text-white">
          Ready to boost your online credibility?
        </p>
      </div>
      <div className="mt-2.5 packages-grid max-w-[880px] gap-10">
        <div className="row-span-3 background1 bg-[#ffffff1a] p-[2px] rounded-[12px]">
          <div className="py-[35px] px-[34px] w-full h-full rounded-[10px] bg-[#171826] flex flex-col gap-[35px] relative">
            <div className="absolute py-2 px-[13px] bg-[#38b7ff] top-0 right-0 rounded-tr-[7px] rounded-bl-[7px]">
              <p className="text-white tracking-[.07em] text-[10px] font-bold leading-[105%] font-text">
                MOST POPULAR
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-white text-[25px] font-medium leading-[120%] font-title">
                Website Package
              </p>
              <p className="text-[#ffffffb3] text-[15px] font-normal leading-[140%] font-text">
                Ideal for businesses in need of a trusted and high-converting
                website.
              </p>
              <div className="flex ">
                <p className="bg-[#ffffff1a] rounded-lg mt-2.5 py-[9px] px-[15px] text-[#fff9] text-[13px] font-normal leading-[105%] font-text flex gap-1.5">
                  <span>Starting at</span>
                  <span> 1,999 USD</span>
                </p>
              </div>
            </div>
            <Line />
            <div className="pt-2 flex flex-col gap-[18px] h-[237.58px]">
              <p className="packages-text">2 to 6-week delivery</p>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">Custom web design</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">Webflow development</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">On-page SEO implementation</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">Updates every 48 hours</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-[30px]">
              <button className="w-full bg-white rounded-[10px] py-5 px-10 text-[19px] text-[#090a18] font-medium font-text leading-[105%] shadow-[inset_0_-4px_#e8e6e9]">
                Book a free call
              </button>
              <div className="flex gap-3 justify-center items-center">
                <ColorfulIcon />
                <p className="text-white text-sm font-normal leading-[120%] font-text">
                  100% Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row-span-3 background2 bg-[#ffffff1a] p-[2px] rounded-[12px]">
          <div className="py-[35px] px-[34px] w-full h-full rounded-[10px] bg-[#171826] flex flex-col gap-[35px]">
            <div className="flex flex-col gap-4">
              <p className="text-white text-[25px] font-medium leading-[120%] font-title">
                Design Partner
              </p>
              <p className="text-[#ffffffb3] text-[15px] font-normal leading-[140%] font-text">
                Ideal for businesses in need of digital design support on an
                ongoing basics.
              </p>
              <div className="flex ">
                <p className="bg-[#ffffff1a] rounded-lg mt-2.5 py-[9px] px-[15px] text-[#fff9] text-[13px] font-normal leading-[105%] font-text flex">
                  2,499 USD /month
                </p>
              </div>
            </div>
            <Line />
            <div className="pt-2 flex flex-col gap-[18px] h-[237.58px]">
              <div className="flex items-center gap-[15px]">
                <Check />
                <p className="packages-text">Dedicated senior designer</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">Unlimited requests</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">Two requests at a time</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">48-hour delivery</p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Check />
                <p className="packages-text">Pause or cancel anytime</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-[30px]">
              <button className="w-full bg-white rounded-[10px] py-5 px-10 text-[19px] text-[#090a18] font-medium font-text leading-[105%] shadow-[inset_0_-4px_#e8e6e9]">
                Get started now
              </button>
              <div className="flex gap-3 justify-center items-center">
                <ColorfulIcon />
                <p className="text-white text-sm font-normal leading-[120%] font-text">
                  100% Satisfaction Guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 background3 p-[2px] rounded-[12px]">
          <div className="py-[35px] px-[34px] w-full h-full rounded-[10px] bg-[#1e1630] flex flex-col gap-[25px]">
            <div className="flex flex-col items-center gap-5">
              <ColorfulIcon1 />
              <p className="text-[26px] text-white font-semibold leading-[120%] font-title">
                Our 100% Satisfaction Guarantee
              </p>
            </div>
            <p className="text-center text-white text-base font-normal leading-[150%] font-text">
              We stand behind our ability to deliver exceptional results. If
              you’re not completely satisfied after the project is completed, we
              will continue to work with you until you are happy with the
              outcome.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[15px] items-center justify-center">
        <PaymentIcon />
        <p className="text-[15px] font-normal leading-[105%] font-text text-[#b5b5ba]">Payment securely done via Stripe</p>
      </div>
    </div>
  );
};
