import React from 'react'
import Image from 'next/image'
import HomeIcon from "../../../../public/assets/homeIcon.png"
import ProjectsIcon from "../../../../public/assets/projectsIcon.png"
import ExpIcon from "../../../../public/assets/expIcon.png"
import ToolsIcon from "../../../../public/assets/toolsIcon.png"
import ThoughtsIcon from "../../../../public/assets/thoughtsIcon.png"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-md z-50" >
        <div className="flex justify-center p-1">
            <div className='w-65 h-fit relative flex justify-center p-1 m-2 bg-stone-800 rounded-3xl'>
                <div className=" m-2">
                    <Link href='/'>
                        <Image
                        src={HomeIcon}
                        alt='Home'
                        width={25}
                        height={25}
                        />
                    </Link>
                </div>
                <div className=" m-2">
                    <Link href='/projects'>
                        <Image
                        src={ProjectsIcon}
                        alt='Projects'
                        width={25}
                        height={25}
                        />
                    </Link>
                </div>
                <div className=" m-2">
                   <Link href='/experience'>
                        <Image
                        src={ExpIcon}
                        alt='Experience'
                        width={25}
                        height={25}
                        />
                    </Link>
                </div>
                <div className=" m-2">
                    <Link href='/tools'>
                        <Image
                        src={ToolsIcon}
                        alt='Tools'
                        width={25}
                        height={25}
                        />
                    </Link>
                </div>
                <div className=" m-2">
                    <Link href='/thoughts'>
                        <Image
                        src={ThoughtsIcon}
                        alt='Thoughts'
                        width={25}
                        height={25}
                        />
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar