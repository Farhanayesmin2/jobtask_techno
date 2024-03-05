import { FaMinus } from "react-icons/fa6";
import fb from "../../../public/fb.svg"
import tw from "../../../public/tw.svg"
import yt from "../../../public/yt.svg"
import CopyImage from "../../../public/Copy.svg"
import { Link } from "react-router-dom";
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

        <div className="text-xs my-5 text-white">
          <span className="mb-3">Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</span>
          <p className="mt-3">Designed & developed by Bigger Picture</p>
        </div>
</div>

      </div>
      <div className="col-span-3 ">
        
<h1 className="text-white text-4xl ">Miro.</h1>
<hr className="text-white mt-8 w-[178px]"></hr>
<div className="mt-14">
<ul className="list-none">
      <li className="flex items-center font-bold text-[#FFC247] my-5 text-md">
        <FaMinus className="mr-3" />
        iPhone
      </li>
      <li className="flex items-center font-bold my-5 text-[#FFC247] text-md">
        <FaMinus className="mr-3" />
        Android
      </li>
      <li className="flex items-center font-bold my-5 text-[#FFC247] text-md">
        <FaMinus className="mr-3" />
        Help
      </li>
      <li className="flex items-center font-bold my-5 text-[#FFC247] text-md">
        <FaMinus className="mr-3" />
        About
      </li>
      <li className="flex items-center font-bold text-[#FFC247] text-md">
        <FaMinus className="mr-3" />
        Insights
      </li>
    </ul>
    </div>
      </div>
      <div className="col-span-5">
    <div className="bg-[#FFC247] rounded-[50px] relative">
        <div className="bg-cover bg-center z-10 flex justify-center items-center">
            <img src={CopyImage} alt="Copy Image" />
        </div>
        <div className="absolute inset-0 p-6 flex flex-col text-start">
            <h1 className="text-black font-bold text-xl mb-5">Sign up to our newsletter</h1>
            <p className="text-black text-sm">Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
            <form className="flex items-center mt-6">
                <div className="flex">
                    <fieldset className="w-full space-y-1">
                        <div className="flex">
                            <input type="email" name="email" placeholder="Email address" className="w-full p-2 text-start border sm:text-sm rounded-l-full" />
                            <span className="flex items-center bg-[#050038] text-white px-4 py-2 pointer-events-none sm:text-sm rounded-r-full">Submit</span>
                        </div>
                    </fieldset>
                </div>
            </form>
        </div>
    </div>
</div>




</div>
<div className="text-white text-xs pb-12 lg:text-start text-center">
<span>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other <br></br>countries. App Store is a service mark of Apple Inc. Android, Google Play <br></br> and the Google Play logo are trademarks of Google LLC.</span>
   
</div>

   </div>
   
    </div>
   
   
        </>
    );
};

export default Footer;