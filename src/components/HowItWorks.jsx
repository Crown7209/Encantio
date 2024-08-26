import { Choose } from "./Image/Choose"
import { Request } from "./Image/Request"
import { Revise } from "./Image/Revise"

export const HowItWorks = () => {
    return (
        <div className="max-w-[90vw] w-full pt-[120px] pb-[50px] flex flex-col items-center gap-20">
            <div className="flex flex-col gap-[30px] items-center">
                <p className="header-text">HOW IT WORKS</p>
                <p className="title text-[#090a18]">Your vision, our design</p> 
            </div>
            <div className="flex gap-[70px] max-w-[1140px] w-full">
                <div className="flex flex-col items-center gap-10 w-[99%]">
                    <Choose />
                    <div className="flex flex-col gap-5 items-center">
                        <p className="bold-text">Choose your package</p>
                        <p className="text-center text">Select the package that aligns perfectly with your needs, whether it's a website or recurring design.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 w-[99%]">
                    <Request />
                    <div className="flex flex-col gap-5 items-center">
                        <p className="bold-text">Request your design</p>
                        <p className="text-center text">Complete the project brief and let us create designs that align with your brand and target audience.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-10 w-[99%]">
                    <Revise />
                    <div className="flex flex-col gap-5 items-center">
                        <p className="bold-text">Revise and Launch</p>
                        <p className="text-center text">We'll revise the design until you are 100% satisfied, and then watch your business grow.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}