import { Background } from "./Image/Background"
import { BlueBackground } from "./Image/BlueBackground"
import { PurpleBackground } from "./Image/PurpleBackground"

export const Header = () => {
    return (
        <section className="bg-[#090a18] w-full pt-[180px] pb-[100px] flex flex-col gap-[90px] relative">
            <Background />
            <BlueBackground />
            {/* <PurpleBackground /> */}
            <div className="m-auto flex flex-col items-center gap-[50px] max-w-[90vw]">
                <button className="bg-[#38b7ff1a] py-2.5 pr-5 pl-[18px] border-[#38b7ff] border rounded-lg flex justify-center items-center ">
                    <p className="text-[#38b7ff] text-[15px] font-medium leading-[105%] ">Spots available</p>
                </button>
                <div className="flex flex-col gap-10 relative">
                    <img className="absolute right-[-75px] bottom-[30px]" src="https://cdn.prod.website-files.com/65d2044848caa778400b33ce/665dfba333a3d91ce5d18c74_Encantio%20Cursor.svg" alt="" />
                    <h1 className="max-w-[880px] flex flex-col justify-center">
                        <span className="text-[#fff] text-6xl leading-[110%] font-semibold text-center tracking-[0.5px] font-title">Financial Design That Builds Trust &
                            <span className="bg-gradient-to-r from-[#38b7ff] to-[#d782ff] bg-clip-text text-transparent text-6xl leading-[110%] font-semibold tracking-[0.5px] font-title"> Drives Conversions</span>
                        </span>
                    </h1>
                    <p className="text-[#b5b5ba] text-2xl font-normal leading-[130%] text-center">Empower your financial brand with a professional website and digital assets</p>
                </div>
                <div className="flex flex-col items-center gap-[35px] pt-2.5 ">
                    <button className="rounded-[10px] px-10 py-5 bg-white text-[#090a18] text-[19px] font-medium leading-[105%]">See packages</button>
                    <div className="flex gap-2.5">
                        <img src="https://cdn.prod.website-files.com/65d2044848caa778400b33ce/65dba3a5982a2b1567ffbf4d_Vectors-Wrapper.svg" alt="" />
                        <p className="text-[#ffffffb3] text-sm font-normal leading-[100%]">Trusted by 20+ businesses</p>
                    </div>
                </div>
            </div>
            <div className="">
                <img className="max-h-[580px]" src="https://cdn.prod.website-files.com/65d2044848caa778400b33ce/65f72b9e02aea38a08b1013b_HIG.png" alt="" />
            </div>
            <div className="flex justify-center">
                <button className="border rounded-[10px] py-5 px-[29px] bg-[#fff0] border-[#fff] text-[#fff] font-medium text-[19px] leading-[105%] w-[245px]">View recent work</button>
            </div>
        </section>
    )
}