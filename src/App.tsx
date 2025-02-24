import "./styles/App.css";
import Footer from "./components/sections/footer/Footer";
import Header from "./components/sections/header/Header";
import Contact from "./components/sections/contact/Contact";
import Home from "./components/sections/home/Home";
import Projects from "./components/sections/projects/Projects";
import ScrollUp from "./components/common/scrollup/ScrollUp";
import About from "./components/sections/about/About";
import Skills from "./components/sections/skills/Skills";
import WorkExperience from "./components/sections/work/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>

    // <ThemeProvider>
    //   <Layout>
    //     <Hero />
    //     <About />
    //     <Projects />
    //     <Contact />
    //   </Layout>
    // </ThemeProvider>
  );
}

export default App;
