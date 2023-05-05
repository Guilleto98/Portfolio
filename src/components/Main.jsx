import { motion } from "framer-motion";

const Main = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 mt-10 gap-10 p-5 items-center">
        <div>
          <p className="p-10 leading-10 font-bold text-xl">
            I am a dedicated front-end developer with
            <span class="relative bg-gray-800 p-2 rounded text-xl text-white">
              experience in React
            </span>
            . I am passionate about creating beautiful and functional web
            applications. I graduated from Hack Academy's Coding Bootcamp, where
            I invested over 600 hours learning the most prominent programming
            languages. As a professional,
            <span class="relative bg-gray-800 p-2 rounded text-xl text-white">
              I am committed to delivering high-quality work,
            </span>{" "}
            and I have developed strong technical skills. I am also a team
            player who collaborates well with colleagues and other departments
            to achieve common objectives. I am always looking to improve my
            skills and stay up-to-date with the latest industry trends, and I am
            open to new challenges that can help me grow as a professional.
          </p>
        </div>
        <div>
          <img src="../public/img/developer.jpg" alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
