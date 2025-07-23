import React from 'react'
import Image from 'next/image'
import ProfileImage from '../../../../public/assets/profile-image.jpg'
import GitHibIcon from '../../../../public/assets/gitHubRed.png'
import LinkedInIcon from '../../../../public/assets/linkedinIcon.png'

const Profile = () => {
  return (
    <div className="w-full">
      <div className="metal-texture rounded-2xl text-center p-2 flex flex-col items-center gap-3 shadow-2xl metal-ruby-effect" >
        
        {/* Imagem do perfil */}
        <div className="relative">
          <Image
            src={ProfileImage}
            alt="Foto de Perfil de Victor M. Torres"
            width={150}
            height={150}
            className="rounded-full object-cover border-4 border-black shadow-md"
          />
        </div>
        
        {/* Nome */}
        <h1 className="text-2xl font-bold">
          Victor M. Torres
        </h1>
        
        {/* Descrição */}
        <p className=" text-sm leading-relaxed px-2">
          Analista dedicado ao constante autodesenvolvimento, buscando
          aprimorar habilidades técnicas e interpessoais. Movido pelo
          propósito de impactar positivamente a sociedade.
        </p>
        
        {/* Links sociais */}
        <div className="flex items-center gap-4 mt-4">
          <a 
            href="https://github.com/vladsm007" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Perfil do GitHub"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src={GitHibIcon}
              alt="Ícone do GitHub"
              width={32}
              height={32}
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/victor-torres-6a605ba3/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Perfil do LinkedIn"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src={LinkedInIcon}
              alt="Ícone do LinkedIn"
              width={32}
              height={32}
            />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Profile