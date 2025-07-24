import React from 'react'
import Image from 'next/image'
import ProfileImage from '../../../../public/assets/profile-image.jpg'
import GitHibIcon from '../../../../public/assets/gitHubRed.png'
import LinkedInIcon from '../../../../public/assets/linkedinIcon.png'

const Profile = () => {
  return (
    <div className="w-full">
      <div className="metal-texture lg:rounded-xl sm:rounded-2xl text-center p-3 sm:p-2 flex flex-col items-center gap-2 sm:gap-3 lg:ml-20 lg:p-2 lg:pt-10 shadow-2xl metal-ruby-effect">
        
        {/* Imagem do perfil */}
        <div className="relative">
          <Image
            src={ProfileImage}
            alt="Foto de Perfil de Victor M. Torres"
            width={120}
            height={120}
            className="sm:w-[150px] sm:h-[150px] sm:rounded-full lg:w-[120] lg:h-[150] lg:rounded-3xl lg:fit-cover lg:object-cover border-4 border-black shadow-md"
          />
        </div>
        
        {/* Nome */}
        <h1 className="text-xl sm:text-2xl font-bold text-white">
          Victor M. Torres
        </h1>
        
        {/* Descrição */}
        <p className="text-xs sm:text-sm leading-relaxed px-2 text-gray-300">
          Analista dedicado ao constante autodesenvolvimento, buscando
          aprimorar habilidades técnicas e interpessoais. Movido pelo
          propósito de impactar positivamente a sociedade.
        </p>
        
        {/* Links sociais */}
        <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
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
              width={28}
              height={28}
              className="sm:w-[32px] sm:h-[32px]"
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
              width={28}
              height={28}
              className="sm:w-[32px] sm:h-[32px]"
            />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Profile