import { Icon1 } from "./Svg/Icon1"
import { Icon2 } from "./Svg/Icon2"
import { Icon3 } from "./Svg/Icon3"
import { Icon4 } from "./Svg/Icon4"

export const OurBenefits = () => {
    return (
        <section className="max-w-[90vw] w-full flex flex-col gap-20 pt-[100px] pb-[50px] items-center">
            <div className="flex flex-col gap-[30px] items-center">
                <p className="header-text">OUR BENEFITS</p>
                <p className="title text-[#090a18]">Why choose us?</p>
            </div>
            <div className="flex gap-[70px]">
                <div className="flex flex-col gap-8 max-w-[410px] items-center">
                    <Icon1 />
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <p className="bold-text">Expertise in Finance</p>
                        <p className="text text-center">With a background in finance, we understand your language and what your clients seek.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 max-w-[410px] items-center">
                    <Icon2 />
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <p className="bold-text">Custom Design & Strategy</p>
                        <p className="text text-center">Tailored solutions that resonate with both financial experts and finance businesses alike.</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[70px]">
                <div className="flex flex-col gap-8 max-w-[410px] items-center">
                    <Icon3 />
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <p className="bold-text">Conversion-Focused</p>
                        <p className="text text-center">We don't just aim for aesthetics; we design for results – more leads, more clients, more growth.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 max-w-[410px] items-center">
                    <Icon4 />
                    <div className="flex flex-col gap-5 items-center justify-center">
                        <p className="bold-text">All-In-One Design Solution</p>
                        <p className="text text-center">We can offer a wide range of design solutions for your finance business.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}