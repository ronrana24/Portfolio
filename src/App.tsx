import "./styles/App.css";
import Footer from "./components/layout/footer/Footer";
import Header from "./components/layout/header/Header";
import Layout from "./components/layout/Layout";
import Contact from "./components/sections/contact/Contact";
import Hero from "./components/sections/Hero";
import Home from "./components/sections/home/Home";
import Projects from "./components/sections/projects/Projects";
import Qualification from "./components/sections/qualification/Qualification";
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
        {/* <Qualification /> */}
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
