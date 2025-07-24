import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '../../../../public/assets/black-arrow-r.png'
import DynamicIcon from '../../../../public/assets/dynamic.png'
import ViewIcon from '../../../../public/assets/view-quilt.png'

const CardsHome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
        <div className="metal-texture rounded-lg p-4 relative h-36 sm:h-48 flex flex-col justify-between metal-ruby-effect">
            <Image 
            src={DynamicIcon}
            alt='icone dinâmico'
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px]"
            />
            <h4 className="text-2xl sm:text-3xl lg:text-4xl text-left font-bold text-white leading-tight">
                Animações Dinâmicas
            </h4>
            <Link href="/experience">
            <Image 
            src={ArrowIcon}
            alt='Experiencia'
            width={24}
            height={24}
            className="sm:w-[30px] sm:h-[30px] absolute bottom-2 sm:bottom-1 right-3 sm:right-4 hover:scale-110 sm:hover:scale-120 transition-transform duration-200"
            />
            </Link>
        </div>
        
        <div className="metal-texture metal-ruby-effect rounded-lg p-4 relative h-36 sm:h-48 flex flex-col justify-between">
          <Image 
            src={ViewIcon}
            alt='icone view-quilt'
            width={32}
            height={32}
            className="sm:w-[40px] sm:h-[40px]"
            />
            <h4 className="text-2xl sm:text-3xl lg:text-4xl text-left font-bold text-white leading-tight">
                React, Next.js, Java
            </h4>
            <Link href="/projects">
            <Image 
            src={ArrowIcon}
            alt='Projetos'
            width={24}
            height={24}
            className="sm:w-[30px] sm:h-[30px] absolute bottom-2 sm:bottom-1 right-3 sm:right-4 hover:scale-110 sm:hover:scale-120 transition-transform duration-200"
            />
            </Link>
        </div>
      </div>
  )
}

export default CardsHome