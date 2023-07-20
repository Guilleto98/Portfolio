
import CardProject from "../components/CardProject";

const ShowProjects = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat bg-fixed pb-48 pt-10"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,1) 100%), url('/img/fondo.jpg')",
      }}
      name="project-section"
    >
      <div className="container p-10 mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-600 pb-10">
          <span className="text-white">My {""}</span>
          PROJECTS
        </h2>
        <p className="text-center text-xl leading-relaxed font-bold text-white">
          Here you can find some of my most recent projects, ranging from
          full-stack applications with Node.js and React to simpler applications
          that make use of queries to different APIs. Each of these projects
          represents a unique challenge that I have worked on, and they have
          allowed me to improve my skills and learn new technologies. I hope you
          enjoy exploring my work and don't hesitate to get in touch if you have
          any questions or if you're interested in working with me on a future
          project.
        </p>
      </div>
      <div className="container mx-auto md:grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 p-5 items-center">
        <CardProject
          imageSrc="/img/project-1.jpeg"
          title="Full Paca Ecommerce"
          href="https://paca-hack.vercel.app/"
        />
        <CardProject
          imageSrc="/img/project-2.jpeg"
          title="Veterinary Patient Manager"
          href="https://frontend-agencia-veterinaria-c7r1.vercel.app/"
        />
        <CardProject
          imageSrc="/img/project-3.jpeg"
          title="Cryptocurrency Calculator"
          href="https://proyectocotizadordecriptomonedasgtorr.netlify.app/"
        />
        <CardProject
          imageSrc="/img/project-4.jpeg"
          title="Car Insurance Calculator"
          href="https://cotizadordesegurosgtorres.netlify.app/"
        />
        <CardProject
          imageSrc="/img/project-5.jpeg"
          title="Loan Calculator"
          href="https://cotizadorprestamosreactgtorres.netlify.app/"
        />
        <CardProject
          imageSrc="/img/project-6.jpeg"
          title="City Weather"
          href="https://buscadordeclimagtorres.netlify.app/"
        />
        <CardProject
          imageSrc="/img/project-7.jpeg"
          title="Elisur Web Page in progress"
          href="https://www.elisur.uy/"
        />
        <CardProject
          imageSrc="/img/project-8.jpeg"
          title="PWA Palco.uy"
          href="https://placos-uy.vercel.app/"
        />
      </div>
    </div>
  );
};

export default ShowProjects;
