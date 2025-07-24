import React from 'react'
import ItemTool from '../components/itemTool/ItemTool'
import Image from 'next/image'

import FigmaIcon from '../../../public/assets/figma-144.png'
import ReactIcon from '../../../public/assets/react-160.png'
import NextIcon from '../../../public/assets/nextjs-144.png'
import JavaIcon from '../../../public/assets/java-144.png'

const Tools = () => {
  return (
    <div className="m-4 sm:m-8 lg:m-20 rounded-xl p-4 sm:p-6 lg:p-8 text-left shadow-md">
        <div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                FERRAMENTAS
                <br></br>
                PREMIUM
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <ItemTool 
            href='https://www.figma.com/'
            toolImage={FigmaIcon}
            title="Figma"
            subtitle="Design Tool"
            />
            <ItemTool 
            href='https://react.dev/'
            toolImage={ReactIcon}
            title="React"
            subtitle="Javascript Library"
            />
            <ItemTool 
            href='https://nextjs.org/'
            toolImage={NextIcon}
            title="Next.js"
            subtitle="React Framework"
            />
            <ItemTool 
            href='https://www.java.com/'
            toolImage={JavaIcon}
            title="Java"
            subtitle="Programming Language"
            />
        </div>
        
    </div>
  )
}

export default Tools