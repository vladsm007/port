import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import OpenIcon from '../../../../public/assets/open-24.png'

const ThoughtsInfo = ({
  href ='#',
  title,
  text,
  date,
  readingTime
}) => {
  return (
    <Link href={href} passHref>
        <div className="metal-texture metal-ruby-effect rounded-lg m-1 sm:m-3 p-3 sm:p-4 relative min-h-[120px] sm:h-40 lg:h-45 transition duration-200 ease-in-out flex flex-col">
            <div className="flex-grow pr-6">
              <h6 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                {title}
              </h6>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {text}
              </p>
            </div>
            
            <div className='flex justify-between items-end mt-auto pt-2'>
              <p className="text-xs sm:text-sm text-neutral-300 m-0">{date}</p>
              <p className="text-xs sm:text-sm text-neutral-300 m-0">{readingTime}</p>
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

export default ThoughtsInfo