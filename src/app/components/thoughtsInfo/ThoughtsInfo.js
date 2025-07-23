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
        <div className="metal-texture metal-ruby-effect rounded-lg m-3 p-4 relative h-40 transition duration-200 ease-in-out flex flex-col">
            <div className="flex-grow">
              <h6 className="text-2xl font-bold text-white mb-2">
                {title}
              </h6>
              <p className="text-sm text-neutral-300">
                {text}
              </p>
            </div>
            
            <div className='flex justify-between items-end mt-auto'>
              <p className="text-sm text-neutral-300 m-0">{date}</p>
              <p className="text-sm text-neutral-300 m-0">{readingTime}</p>
            </div>
            
            <Image 
              src={OpenIcon}
              alt="Ir para experiência"
              width={20}
              height={20}
              className="absolute top-2 right-2"
            />
        </div>
     </Link>
  )
}

export default ThoughtsInfo