import {Navbar, Hero, Skills, Projects, Contact, Footer} from "./components/index.js";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className=" ">
        <div>
          <Navbar />
        </div>
        <div>
          <Hero id="home"/>
        </div>
        <div>
          <Skills id="skills"/>
        </div>
        <div>
          <Projects id="projects"/>
        </div>
        <div>
          <Contact id="contact"/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
