import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
  function scrollToTop() {
    scroll.scrollToTop();
  }

  function scrollToAboutMe() {
    scroll.scrollTo("#aboutme-section", {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-10 p-5 items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 0.2,
            type: "spring",
          }}
          className="flex flex-col items-start"
        >
          <h1 className="pb-10 leading-relaxed item-start font-bold text-5xl">
            Hi! I'm Guille <span className="text-blue-500">full-stack </span>
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
            <Link to="aboutme-section" spy={true} smooth={true} duration={500}>
              <button className="px-8 py-3 mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out">
                More about me
              </button>
            </Link>
            <Link to="project-section" spy={true} smooth={true} duration={500}>
              <button className="px-8 py-3 mt-10 bg-transparent hover:bg-gray-100 border-2 font-semibold rounded-lg transition duration-300 ease-in-out">
                My projects
              </button>
            </Link>
          </div>
        </motion.div>
        <div className="py-10">
          <img src="/img/developer.jpg" alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
