import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ItemTool = ({
    href = "#",
    toolImage,
    title,
    subtitle

}) => {
  return (
    <Link href={href} passHref>
    <div className="metal-texture metal-ruby-effect rounded-lg m-1 sm:m-3 p-3 sm:p-4 relative min-h-[100px] sm:h-35 flex sm:grid sm:grid-cols-3 gap-3 sm:gap-0 items-center sm:justify-between transition duration-200 ease-in-out">
          <div className="flex-shrink-0">
            <Image 
              src={toolImage}
              alt="Link para a ferramenta"             
              className="sm:w-[100px] sm:h-[100px] md:w-[70px] md:h-[70px] "
              />
          </div>

           <div className="flex-grow flex flex-col justify-center text-left sm:text-center sm:col-span-2">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2">
                {title}
              </h4>
              <h6 className="text-xs sm:text-sm text-neutral-300">
                {subtitle}
              </h6>
           </div>
        </div>
         </Link>
  )
}

export default ItemTool