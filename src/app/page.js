import Main from "./pages/main/Main";
import Articles from "./pages/articles/Articles";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";


export default function Home() {
  return (
    <>
    <Navbar />
    <Profile />
    <Main />
    <Articles />
    <Experience />
    <Projects />
    </>
  );
}
