import React from 'react'
import ThoughtsInfo from '../components/thoughtsInfo/ThoughtsInfo'

const Articles = () => {
  return (
    <div className="m-20 rounded-xl p-8 text-left shadow-md">
      <h2 className="text-7xl font-bold text-white mb-6">
        IDEIAS DE
         <br></br>
         <span className=" text-neutral-800">
          DESIGN
          </span>
      </h2>
      <section>
        <ThoughtsInfo 
        href='https://github.com/vladsm007'
        title="Título da Matéria "
        text="orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium sem quis eleifend mollis. Sed vestibulum pulvinar ipsum nec ultrices. In dignissim, nisl ac feugiat viverra, nunc massa fermentum velit, eu rutrum sapien purus a purus."
        date="2025"
        readingTime="13 min"
        />
        <ThoughtsInfo 
        href='https://github.com/vladsm007'
        title="Título da Matéria "
        text="orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium sem quis eleifend mollis. Sed vestibulum pulvinar ipsum nec ultrices. In dignissim, nisl ac feugiat viverra, nunc massa fermentum velit, eu rutrum sapien purus a purus."
        date="2025"
        readingTime="13 min"
        />
        <ThoughtsInfo 
        href='https://github.com/vladsm007'
        title="Título da Matéria "
        text="orem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium sem quis eleifend mollis. Sed vestibulum pulvinar ipsum nec ultrices. In dignissim, nisl ac feugiat viverra, nunc massa fermentum velit, eu rutrum sapien purus a purus."
        date="2025"
        readingTime="13 min"
        />
      </section>
    </div>
  )
}

export default Articles