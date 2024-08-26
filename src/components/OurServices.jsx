import { WebflowIcon } from "./Svg/WebflowIcon"
import { FigmaIcon } from "./Svg/FigmaIcon"
import { WebDesignImage } from "./Image/WebDesign"

export const OurServices = () => {
    return (
        <section className="max-w-[90vw] w pt-[100px] pb-[50px] flex flex-col gap-[80px] items-center">
            <div className="flex flex-col items-center gap-[30px]">
                <p className="header-text">OUR SERVICES</p>
                <p className="title text-[#090a18]">Your one-stop solution</p>
            </div>
            <div className="flex flex-col gap-y-[60px] items-center">
                <div className="flex gap-6">
                    <button className="bg-[#090a18] text-white py-[18px] px-[30px] rounded-[10px] border border-[#090a1899] text-lg font-medium leading-[105%]">Web Design</button>
                    <button className="bg-[#fff0] text-[#090a1899] py-[18px] px-[30px] rounded-[10px] border border-[#090a1899] text-lg font-medium leading-[105%]">Branding</button>
                    <button className="bg-[#fff0] text-[#090a1899] py-[18px] px-[30px] rounded-[10px] border border-[#090a1899] text-lg font-medium leading-[105%]">Digital Design</button>
                </div>
                <div className="bg-[#fff] border-2 border-[#e8e6e9] p-10 rounded-[20px] max-w-[1076px]">
                    <div className="flex ">
                        <div className="flex flex-col gap-[35px] py-5 pr-[30px] pl-5">
                            <div className="flex flex-col gap-4">
                                <p className="text-[#090a18] text-[38px] font-semibold leading-[120%] font-title">Web Design & Development</p>
                                <p className="text-[#090a18b3] text-xl font-normal leading-[140%] font-text">Get a reliable and high-converting website that turns visitors into clients.</p>
                            </div>
                            <div className="flex gap-4 flex-wrap">
                                <p className="tag">Landing page</p>
                                <p className="tag">Responsive design</p>
                                <p className="tag">Multi-page website</p>
                                <p className="tag flex gap-1.5"><FigmaIcon />Figma design</p>
                                <p className="tag flex gap-1.5"><WebflowIcon />Webflow development</p>
                            </div>
                        </div>
                        <div className="max-w-[476px]">
                            <WebDesignImage />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}