import React from 'react'
import Image from 'next/image'
import ProfileImage from '../../../../public/assets/profile-image.jpg'
import GitHibIcon from '../../../../public/assets/gitHubRed.png'
import LinkedInIcon from '../../../../public/assets/linkedinIcon.png'

const Profile = () => {
  return (
    <div className="w-full">
        <div className="w-70 mt-35 ml-40 bg-stone-500 rounded-2xl text-center p-5 flex flex-col items-center gap-4">
            <div className="relative">
                <Image
                  src={ProfileImage}
                  alt="Foto de Perfil de Victor M. Torres"
                  width={150}
                  height={150}
                  className="rounded-3xl object-cover"
                />
            </div>
            <h1 className="text-2xl font-bold text-white mt-4">Victor M. Torres</h1>
            <p className="text-white justify-center">
              Analista dedicado ao constante autodesenvolvimento, buscando
              aprimorar habilidades técnicas e interpessoais. Movido pelo
              propósito de impactar positivamente a sociedade.
            </p>
            <div className="flex items-center gap-6 mt-4">
                <a href="https://github.com/vladsm007" target="_blank" rel="noopener noreferrer" aria-label="Perfil do GitHub">
                    <Image
                      src={GitHibIcon}
                      alt="Ícone do GitHub"
                      width={30}
                      height={30}
                    />
                </a>
                <a href="https://www.linkedin.com/in/victor-torres-6a605ba3/" target="_blank" rel="noopener noreferrer" aria-label="Perfil do LinkedIn">
                    <Image
                      src={LinkedInIcon}
                      alt="Ícone do LinkedIn"
                      width={30}
                      height={30}
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Profile