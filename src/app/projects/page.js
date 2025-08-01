import React from 'react'
import ProjectsInfo from '../components/projectsInfo/ProjectsInfo'
import Image from 'next/image'
import WebAppImage1 from "../../../public/assets/webApp1.jpg"
import WebAppImage2 from "../../../public/assets/webApp2.jpg"
import WebAppImage3 from "../../../public/assets/webApp3.jpg"
import Link from 'next/link'

const Projects = () => {
  return (
      <div className="m-4 sm:m-8 lg:m-20 rounded-xl p-4 sm:p-6 lg:p-8 text-left shadow-md">
      <h2 className="sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight">
        PROJETOS
         <br></br>
          RECENTES
      </h2>
      <section className="grid grid-cols-1 gap-4 sm:gap-6">
        <ProjectsInfo
        href="https://github.com/vladsm007"
        mainImage={WebAppImage1}
        mainImageAlt="Descrição da imagen do projeto"
        title="Título do projeto"
        subtitle="Descrição do projeto"
        />
        <ProjectsInfo
        href="https://github.com/vladsm007"
        mainImage={WebAppImage2}
        mainImageAlt="Descrição da imagen do projeto"
        title="Título do projeto"
        subtitle="Descrição do projeto"
        />
        <ProjectsInfo
        href="https://github.com/vladsm007"
        mainImage={WebAppImage3}
        mainImageAlt="Descrição da imagen do projeto"
        title="Título do projeto"
        subtitle="Descrição do projeto"
        />
        
      </section>
      
    </div>
  )
}

export default Projects