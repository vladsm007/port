import React from 'react'
import Image from 'next/image'
import HomeIcon from "../../../../public/assets/homeIcon.png"
import ProjectsIcon from "../../../../public/assets/projectsIcon.png"
import ExpIcon from "../../../../public/assets/expIcon.png"
import ToolsIcon from "../../../../public/assets/toolsIcon.png"
import ThoughtsIcon from "../../../../public/assets/thoughtsIcon.png"


const Navbar = () => {
   return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-md z-50 px-2" >
        <div className="flex justify-center p-1">
            <div className='w-fit h-fit relative flex justify-center p-1 sm:p-2 m-1 sm:m-2 metal-texture rounded-2xl sm:rounded-3xl shadow-2xl metal-ruby-effect'>
                <div className="m-1 sm:m-2">
                    <a href="#main" >
                        <Image
                        src={HomeIcon}
                        alt='Home'
                        width={20}
                        height={20}
                        className="sm:w-[25px] sm:h-[25px] hover:scale-110 sm:hover:scale-130 transition-transform duration-200"
                        />
                    </a>
                </div>
                <div className="m-1 sm:m-2">
                    <a href='#projects'>
                        <Image
                        src={ProjectsIcon}
                        alt='Projects'
                        width={20}
                        height={20}
                        className="sm:w-[25px] sm:h-[25px] hover:scale-110 sm:hover:scale-130 transition-transform duration-200"
                        />
                    </a>
                </div>
                <div className="m-1 sm:m-2">
                   <a href='#experience'>
                        <Image
                        src={ExpIcon}
                        alt='Experience'
                        width={20}
                        height={20}
                        className="sm:w-[25px] sm:h-[25px] hover:scale-110 sm:hover:scale-130 transition-transform duration-200"
                        />
                    </a>
                </div>
                <div className="m-1 sm:m-2">
                    <a href='#tools'>
                        <Image
                        src={ToolsIcon}
                        alt='Tools'
                        width={20}
                        height={20}
                        className="sm:w-[25px] sm:h-[25px] hover:scale-110 sm:hover:scale-130 transition-transform duration-200"
                        />
                    </a>
                </div>
                <div className="m-1 sm:m-2">
                    <a href='#articles'>
                        <Image
                        src={ThoughtsIcon}
                        alt='Thoughts'
                        width={20}
                        height={20}
                        className="sm:w-[25px] sm:h-[25px] hover:scale-110 sm:hover:scale-130 transition-transform duration-200"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar