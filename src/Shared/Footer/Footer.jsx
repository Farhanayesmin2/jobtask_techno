
const Footer = () => {
    return (
        <>
         
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-4 border border-red-500 bg-gray-200">First Column (spanning 4 columns)</div>
      <div className="col-span-3 border border-blue-500 bg-gray-300">Second Column (spanning 3 columns)</div>
      <div className="col-span-5 border border-green-500 bg-gray-400">Third Column (spanning 5 columns)</div>
    </div>
 

        </>
    );
};

export default Footer;