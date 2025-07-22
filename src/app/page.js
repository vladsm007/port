import Main from './main/page'
import Articles from './articles/page'
import Experience from './experience/page'
import Projects from './projects/page'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'


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
