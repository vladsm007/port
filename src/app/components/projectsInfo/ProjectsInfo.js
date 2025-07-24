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
    <div className="metal-texture metal-ruby-effect rounded-lg sm:p-4 relative min-h-[120px] sm:h-35 lg:h-50 flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-0 sm:justify-between lg:pb-20 transition duration-200 ease-in-out">
          <div className="flex justify-center sm:justify-start">
            <Image 
              src={mainImage}
              alt={mainImageAlt}
              className="sm:w-[200px] sm:h-[200px] lg:w-[200px] lg:h-[150px] rounded-lg object-cover"
              />
          </div>

           <div className="flex-grow flex flex-col items-center justify-center text-center sm:col-span-2">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                {title}
              </h4>
              <h6 className="text-xs sm:text-sm text-neutral-300 px-2">
                {subtitle}
              </h6>
           </div>
            <Image 
            src={OpenIcon}
            alt="Ir para projeto"
            width={16}
            height={16}
            className="sm:w-[20px] sm:h-[20px] absolute top-2 right-2 hover:scale-110 sm:hover:scale-120 transition-transform duration-200"
            />
        </div>
         </Link>
  )
}

export default ProjectsInfo