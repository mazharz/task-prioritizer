import { cinzel } from "../helper/font/font";

const Header = () => {
  return (
    <header className={`${cinzel.className} bg-gray-700`}>
      <div className="max-w-7xl mx-auto py-2 flex justify-between">
        <div className="text-2xl">
          Task <span className="font-medium">Prioritizer</span>
        </div>
      </div>
    </header>
  );
};

export { Header };
