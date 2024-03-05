import fb from "../../../public/fb.svg"
import tw from "../../../public/tw.svg"
import yt from "../../../public/yt.svg"
const Footer = () => {
    return (
        <>
        <div className="bg-[#02033B]">

        
          <div className="max-w-5xl mx-auto mt-12">
    <div className="grid grid-cols-12 gap-4 py-20  ">
      <div className="col-span-4 ">
        <h1 className="text-white text-2xl"  >  Scan. Detect. Remove.</h1>
       
        <div className="">


<h2 className="text-[#050038] lg:text-start text-center  text-opacity-60 text-sm"> Integrate your favorite tools</h2>
<div className="flex gap-6 my-12 lg:items-start lg:justify-start items-center justify-center">
<img src={fb} alt="Facebook Image" className="w-[36px] h-[36px]" />
<img src={tw} alt="Twitter Image" className="w-[36px] h-[36px]" />
<img src={yt} alt="Youtube Image" className="w-[36px] h-[36px]" />

</div>
<div className="flex gap-4 text-white text-xs ">
          <a className="underline"  href="/privacy-policy">Privacy Policy</a>
          <a className="underline"  href="/terms-of-service">Terms of Service</a>
        </div>

        <div className="text-xs my-4 text-white">
          <span className="mb-3">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</span>
          <p className="mt-3">Designed & developed by Bigger Picture</p>
        </div>
</div>

      </div>
      <div className="col-span-3 ">
        
<h1 className="text-white text-4xl ">Miro.</h1>
<hr className="text-white mt-4 w-[178px]"></hr>


      </div>
      <div className="col-span-5 border border-green-500 bg-gray-400">Third Column (spanning 5 columns)</div>
    </div>
    </div>
    </div>
        </>
    );
};

export default Footer;