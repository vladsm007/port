import React from 'react'
import ItemTool from '../components/itemTool/ItemTool'
import Image from 'next/image'

import FigmaIcon from '../../../public/assets/figma-144.png'
import ReactIcon from '../../../public/assets/react-160.png'
import NextIcon from '../../../public/assets/nextjs-144.png'
import JavaIcon from '../../../public/assets/java-144.png'

const Tools = () => {
  return (
    <div className="m-20 rounded-xl p-8 text-left shadow-md">
        <div>
            <h2 className="text-7xl font-bold text-white mb-6">
                FERRAMENTAS
                <br></br>
                PREMIUM
            </h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
            <ItemTool 
            href='https://www.figma.com/'
            toolImage={FigmaIcon}
            title="Figma"
            subtitle="Desing Tool"
            />
            <ItemTool 
            href='https://react.dev/'
            toolImage={ReactIcon}
            title="React"
            subtitle="javascript library"
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
            subtitle="Programming language"
            />
        </div>
        
    </div>
  )
}

export default Tools