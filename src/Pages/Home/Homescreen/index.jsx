import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Education from "../Education";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import Projects from "../project";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
    </>
  );
}
