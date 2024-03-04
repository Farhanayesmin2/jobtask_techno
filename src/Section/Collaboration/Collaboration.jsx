import FreeSignUpSmall from "../../Component/Button/FreeSignUpSmall/FreeSignUpSmall";


const Collaboration = () => {
  return (
    <>
      <div >
        {/* First child div */}
        <div className="">
          {/* Header text */}
          <h2>Header Text</h2>
          {/* Positional text on right corner */}
          <p className="absolute top-0 right-0">Positional Text</p>
        </div>
        {/* Second child div */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Three grid text paragraphs */}
          <p>Grid Text 1</p>
          <p>Grid Text 2</p>
          <p>Grid Text 3</p>
        </div>
      </div>
      
      <div className=" text-center">
        {/* Sign up free button */}
        <FreeSignUpSmall></FreeSignUpSmall>
      </div>
    </>
  );
};

export default Collaboration;
