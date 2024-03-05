import ButtonGroup from "../../Component/Button/ButtonGroup/ButtonGroup";

const BuiltBrain = () => {
    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Built for the way you work</h1>
                <div className="flex space-x-4">
                  <ButtonGroup></ButtonGroup>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-1">
                        <h2 className="text-lg md:text-xl font-bold mb-2">Brainstorming</h2>
                        <p className="mb-4 md:text-sm">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>
                        <a href="#" className="text-blue-500 hover:underline">Learn more →</a>
                    </div>
                    <div className="md:col-span-1">
                        <img src="https://via.placeholder.com/150" alt="Brainstorming Image" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuiltBrain;