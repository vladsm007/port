import Main from "./pages/main/Main";
import Articles from "./pages/articles/Articles";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";


export default function Home() {
  return (
    <>
    <Navbar />
    <Main />
    <Articles />
    <Experience />
    <Projects />
    </>
  );
}
