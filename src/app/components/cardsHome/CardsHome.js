import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ArrowIcon from '../../../../public/assets/black-arrow-r.png'
import DynamicIcon from '../../../../public/assets/dynamic.png'
import ViewIcon from '../../../../public/assets/view-quilt.png'

const CardsHome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className=" metal-texture rounded-lg p-4 relative h-48 flex flex-col justify-between metal-ruby-effect">
            <Image 
            src={DynamicIcon}
            alt='icone dinâmico'
            width={40}
            height={40}
            />
            <h4 className=" text-4xl text-left font-bold text-white">
                Animações Dinâmicas
            </h4>
            <Link href="/experience">
            <Image 
            src={ArrowIcon}
            alt='Experiencia'
            width={30}
            height={30}
            className="absolute bottom-1 right-4 hover:scale-120 transition-transform duration-200"
            />
            </ Link>
        </div>
        
        <div className="metal-texture metal-ruby-effect rounded-lg p-4 relative h-48 flex flex-col justify-between">
          <Image 
            src={ViewIcon}
            alt='icone view-quilt'
            width={40}
            height={40}
            />
            <h4 className="text-4xl text-left font-bold text-white">
                React, Next.js, Java
            </h4>
            <Link href="/projects">
            <Image 
            src={ArrowIcon}
            alt='Projetos'
            width={30}
            height={30}
            className="absolute bottom-1 right-4 hover:scale-120 transition-transform duration-200"
            />
            </Link>
        </div>
      </div>
  )
}

export default CardsHome