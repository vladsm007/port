import Main from './main/page'
import Articles from './articles/page'
import Experience from './experience/page'
import Projects from './projects/page'
import Navbar from './components/navbar/Navbar'
import Profile from './components/profile/Profile'
import ItemTool from './components/itemTool/ItemTool'
import Image from 'next/image'


import Tools from './tools/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      
      {/* Container principal com layout em grid */}
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Profile - Coluna da esquerda */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="sticky top-24">
              <Profile />
            </div>
          </div>
          
          {/* Conteúdo principal - Colunas do centro e direita */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="space-y-12">
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
    </div>
  );
}