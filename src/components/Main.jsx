import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-10 p-5 items-center">
        <div className="flex flex-col items-start">
          <h1 className="pb-10 leading-relaxed item-start font-bold text-5xl">
            Hi! I'm Guille{" "}
            <span className="text-blue-500">full-stack  </span>
            developer focused in
            <span className="text-blue-500"> React.js </span>
            and
            <span className="text-blue-500"> Node.js</span>
          </h1>
          <p className="text-start font-bold text-gray-500 ">
            As a professional, I am committed to delivering high-quality work,
            and I have developed strong technical skills. I am also a team
            player who collaborates well with colleagues and other departments
            to achieve common objectives.
          </p>

          <div className="flex justify-center gap-3">
            <button className="px-8 py-3 mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
              More about me
            </button>
            <button className="px-8 py-3 mt-10 bg-gray-500 hover:bg-gray-400 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
              My projects
            </button>
          </div>
        </div>
        <div>
          <img src="../public/img/developer.jpg" alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
