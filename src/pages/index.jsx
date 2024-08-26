import { Background } from "@/components/Image/Background";
import { Header, OurBenefits, OurServices, ClientsSay, WeGetYou, Packages, About, HowItWorks, Partners } from "@/components/Index";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="bg-gradient-to-r from-[#fbf7ff] to-[#f5fbff] w-full flex flex-col items-center">
        <WeGetYou />
        <OurServices />
        <OurBenefits />
        <ClientsSay />
      </div>
      <div className="bg-[#090a18] w-full pb-[100px] relative  flex flex-col items-center mt-[100px]">
        <Packages />
        <About />
      </div>
      <div className="bg-gradient-to-r from-[#fbf7ff] to-[#f5fbff] w-full flex flex-col items-center">
        <HowItWorks />
        <Partners />
      </div>
    </div>
  );
}
