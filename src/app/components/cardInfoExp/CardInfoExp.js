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
        <div className=" metal-texture metal-ruby-effect rounded-lg p-4 relative h-35 transition duration-200 ease-in-out">
            <div className="flex flex-col">
              <h6 className="text-2xl font-bold text-white mb-2">
                {title}
              </h6>
              <p className="text-sm text-neutral-300">
                {text}
              </p>
              <p className="text-sm pt-2 text-neutral-300">
                {date}
              </p>
           </div>
            <Image 
            src={OpenIcon}
            alt="Ir para experiência"
            width={20}
            height={20}
            className="absolute top-2 right-2 hover:scale-120 transition-transform duration-200"
            />
        </div>
     </Link>
  )
}

export default CardInfoExp