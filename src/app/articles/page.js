import React from 'react'
import ThoughtsInfo from '../components/thoughtsInfo/ThoughtsInfo'

const Articles = () => {
  return (
    <div className="m-4 sm:m-8 lg:m-20 rounded-xl p-4 sm:p-6 lg:p-8 text-left shadow-md">
      <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
        IDEIAS DE
         <br></br>
         DESIGN
      </h2>
      
      <section>
        <ThoughtsInfo 
        href='https://github.com/vladsm007'
        title="Título da Matéria "
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium sem quis eleifend mollis. Sed vestibulum pulvinar ipsum nec ultrices. In dignissim, nisl ac feugiat viverra, nunc massa fermentum velit, eu rutrum sapien purus a purus."
        date="2025"
        readingTime="13 min"
        />
        <ThoughtsInfo 
        href='https://github.com/vladsm007'
        title="Título da Matéria "
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium sem quis eleifend mollis. Sed vestibulum pulvinar ipsum nec ultrices. In dignissim, nisl ac feugiat viverra, nunc massa fermentum velit, eu rutrum sapien purus a purus."
        date="2025"
        readingTime="13 min"
        />
        <ThoughtsInfo 
        href='https://github.com/vladsm007'
        title="Título da Matéria "
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pretium sem quis eleifend mollis. Sed vestibulum pulvinar ipsum nec ultrices. In dignissim, nisl ac feugiat viverra, nunc massa fermentum velit, eu rutrum sapien purus a purus."
        date="2025"
        readingTime="13 min"
        />
      </section>
    </div>
  )
}

export default Articles