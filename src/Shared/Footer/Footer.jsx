import fb from "../../../public/fb.svg"
import tw from "../../../public/tw.svg"
import yt from "../../../public/yt.svg"
const Footer = () => {
    return (
        <>
        <div className="bg-[#02033B]">

        
          <div className="max-w-5xl mx-auto mt-12">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 ">
        <h1 className="text-white text-2xl"  >  Scan. Detect. Remove.</h1>

        <div className="mt-14">


<h2 className="text-[#050038] lg:text-start text-center mb-5 text-opacity-60 text-sm"> Integrate your favorite tools</h2>
<div className="flex gap-6  lg:items-start lg:justify-start items-center justify-center">
<img src={fb} alt="Brainstorming Image" className="w-[26px] h-[26px]" />
<img src={tw} alt="Brainstorming Image" className="w-[26px] h-[26px]" />
<img src={yt} alt="Brainstorming Image" className="w-[32px] h-[28px]" />

</div>

</div>

      </div>
      <div className="col-span-3 border border-blue-500 bg-gray-300">Second Column (spanning 3 columns)</div>
      <div className="col-span-5 border border-green-500 bg-gray-400">Third Column (spanning 5 columns)</div>
    </div>
    </div>
    </div>
        </>
    );
};

export default Footer;