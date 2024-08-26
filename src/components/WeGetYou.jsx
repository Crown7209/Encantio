import { DisLikeIcon } from "./Svg/DisLikeIcon"
import { DownIcon } from "./Svg/DownIcon"
import { SadIcon } from "./Svg/SadIcon"

export const WeGetYou = () => {
    return (
        <div className="max-w-[90vw] pt-[120px] pb-[50px] flex flex-col gap-20 items-center">
            <p className="title text-[#090a18] ">We get you...</p>
            <div className="flex gap-[60px]">
                <div className="max-w-[340px] flex flex-col gap-8">
                    <div className="p-[17px] rounded-full bg-white m-auto">
                        <DownIcon />
                    </div>
                    <p className="bold-text text-center">Failing to convert website visitors into clients</p>
                </div>
                <div className="max-w-[340px] flex flex-col gap-8">
                    <div className="p-[17px] rounded-full bg-white m-auto">
                        <SadIcon />
                    </div>
                    <p className="bold-text text-center">Difficulty in conveying trust and expertise online</p>
                </div>
                <div className="max-w-[340px] flex flex-col gap-8">
                    <div className="p-[17px] rounded-full bg-white m-auto">
                        <DisLikeIcon />
                    </div>
                    <p className="bold-text text-center">Struggling to stand out in a saturated market</p>
                </div>
            </div>
        </div>
    )
}