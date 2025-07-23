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
    <div className=" hover:bg-gradient-to-r hover:bg-red-600 rounded-lg p-4 relative h-35 grid grid-cols-3 justify-between transition duration-200 ease-in-out">
          <Image 
            src={toolImage}
            alt="Link para a ferramenta"
            width={100}
            height={100}
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
        </div>
         </Link>
  )
}

export default ItemTool