import Nav from "./components/Nav";
import Main from "./layouts/Main";
import ShowProjects from "./layouts/ShowProjects";
import Aboutme from "./layouts/Aboutme";
import Aboutme2 from "./layouts/Aboutme2";
import ContactSection from "./layouts/ContactSection";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <ShowProjects id="project-section"/>
      <Aboutme id="aboutme-section" />
      <Aboutme2 />
      <ContactSection/>
    </>
  );
}

export default App;
