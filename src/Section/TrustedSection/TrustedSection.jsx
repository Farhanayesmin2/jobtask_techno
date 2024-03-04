import img1 from "../../../public/Walmart_Index_Only.svg.svg";
import img2 from "../../../public/cisco.svg.svg";
import img3 from "../../../public/Volvo_Index_Only.svg.svg";
import img4 from "../../../public/Vector.svg";
import img5 from "../../../public/Volvo_Index_Only.svg.svg";
function TrustedSection() {
  return (
    <section className="min-h-screen">
         <div className="max-w-4xl mx-auto">
        <h2 className="text-gray-500 text-md text-center mb-8">Trusted by 45M+ Users</h2>
        <div className="grid grid-cols-5 gap-5">
          <div className="bg-white   p-3 flex justify-center items-center">
            <img src={img1} alt="SVG 1" className="max-w-full " />
          </div>
          <div className="bg-white   p-3 flex justify-center items-center">
            <img src={img2} alt="SVG 2" className="max-w-full " />
          </div>
          <div className="bg-white   p-3 flex justify-center items-center">
            <img src={img3} alt="SVG 3" className="max-w-full " />
          </div>
          <div className="bg-white   p-3 flex justify-center items-center">
            <img src={img4} alt="SVG 4" className="max-w-full " />
          </div>
          <div className="bg-white   p-3 flex justify-center items-center">
            <img src={img5} alt="SVG 5" className="max-w-full " />
          </div>
        </div>
        </div>
    </section>
  );
}

export default TrustedSection;
