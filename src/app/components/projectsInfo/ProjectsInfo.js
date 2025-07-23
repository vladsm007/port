import React from 'react'
import Image from 'next/image'
import OpenIcon from "../../../../public/assets/open-24.png"
import Link from 'next/link'

const ProjectsInfo = ({
  href = "#",
  mainImage,
  title,
  subtitle,
  mainImageAlt="Project image"

}) => {
  return (
    <Link href={href} passHref>
    <div className="metal-texture metal-ruby-effect rounded-lg p-4 relative h-35 grid grid-cols-3 justify-between transition duration-200 ease-in-out">
          <Image 
            src={mainImage}
            alt={mainImageAlt}
            width={200}
            height={200}
            className=""
            />

           <div className="flex-grow flex flex-col items-center justify-center text-center">
              <h4 className="text-2xl font-bold text-white mb-2">
                {title}
              </h4>
              <h6 className="text-x0.5 text-neutral-300">
                {subtitle}
              </h6>
           </div>
            <Image 
            src={OpenIcon}
            alt="Ir para projeto"
            width={20}
            height={20}
            className="absolute top-2 right-2"
            />
        </div>
         </Link>
  )
}

export default ProjectsInfo