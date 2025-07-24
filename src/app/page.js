
import Main from './main/page'
import Articles from './articles/page'
import Experience from './experience/page'
import Projects from './projects/page'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import Footer from './components/footer/Footer'
import ItemTool from './components/itemTool/ItemTool'
import Image from 'next/image'
import Tools from './tools/page'



export default function Home() {
  return (
    <div className="min-h-screen text-white bg-cover bg-center bg-fixed intel-one-mono"
    style={{ 
      backgroundImage: "url('/assets/wallpaper.jpg')", 
      backgroundColor: "#000",
      backgroundRepeat: "no-repeat",
      }}>
      <Navbar />
      
      {/* Container principal com layout responsivo */}
      <div className="pt-16 sm:pt-20 px-2 sm:px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8">
          
          {/* Profile - Coluna da esquerda */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <Profile />
            </div>
          </div>
          
          {/* Conteúdo principal - Colunas do centro e direita */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="space-y-6 sm:space-y-12">
              <section id="main">
                <Main />
              </section>
              
              <section id="projects">
                <Projects />
              </section>

              <section id="experience">
                <Experience />
              </section>

              <section id="tools">
                <Tools />
              </section>
              
              <section id="articles">
                <Articles />
              </section>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pb-16 sm:pb-8">
        <Footer />
      </div>
    </div>
  );
}