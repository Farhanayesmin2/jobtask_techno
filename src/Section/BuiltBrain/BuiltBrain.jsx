import ButtonGroup from '../../Component/Button/ButtonGroup/ButtonGroup';
import LearnMore from '../../Component/Button/LearnMore/LearnMore';
import RightSideImage from '../../../public/Brainstormwithoutshadow.jpg.svg';

const BuiltBrain = () => {
  return (
    <>
      <div className="max-w-5xl mx-auto mt-12 py-8">
        <h1 className="lg:text-5xl text-[#050038] font-bold mb-4">Built for the way you work</h1>
        <div className="">
          <ButtonGroup />
        </div>
        <div className="mt-8 grid  lg:grid-cols-3  grid-cols-2 gap-4">
          <div className="col-span-1 justify-center">
            <div>
              <p className="text-lg text-[#050038]">Brainstorming</p>
              <div className='my-8'>

            
              <span className="text-opacity-75   text-[#050038] md:text-sm">Unleash creative ideas and build on<br></br> them with the help of sticky notes, <br></br>images, mind maps, videos, drawing<br></br> capabilities — the list goes on.</span>
            </div>  </div>
            <LearnMore />
          </div>
          <div className="lg:col-span-2 col-span-1">
            <img src={RightSideImage} alt="Brainstorming Image" className="rounded-lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default BuiltBrain;
