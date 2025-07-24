import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OpenIcon from '../../../../public/assets/open-24.png'

const CardInfoExp = ({
    href = "#",
    title,
    text,
    date,
}) => {
  return (
    <Link href={href} passHref>
        <div className="metal-texture metal-ruby-effect rounded-lg p-3 sm:p-4 relative min-h-[100px] sm:h-35 lg:h-40 transition duration-200 ease-in-out">
            <div className="flex flex-col pr-6">
              <h6 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                {title}
              </h6>
              <p className="md:text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {text}
              </p>
              <p className="text-xs sm:text-sm text-neutral-300">
                {date}
              </p>
           </div>
            <Image 
            src={OpenIcon}
            alt="Ir para experiência"
            width={16}
            height={16}
            className="sm:w-[20px] sm:h-[20px] absolute top-2 right-2 hover:scale-110 sm:hover:scale-120 transition-transform duration-200"
            />
        </div>
     </Link>
  )
}

export default CardInfoExp