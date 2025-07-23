import React from 'react'
import CardInfoExp from '../components/cardInfoExp/CardInfoExp'

const Experience = () => {
  return (
  <div className="m-20 rounded-xl p-8 text-left shadow-md">
      <h2 className="text-7xl font-bold text-white mb-6">
        13 ANOS DE
         <br></br>
          EXPERIÊNCIA
      </h2>
      
      <section className="grid grid-cols-1 gap-6">
        <CardInfoExp 
        href='https://github.com/vladsm007'
        title="Título da Experiência"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue porta diam, vel lobortis tortor. Nulla id ornare arcu. Integer pharetra erat augue. Nullam hendrerit ornare velit nec interdum."
        date="1987 to present"
        />
        <CardInfoExp 
        href='https://github.com/vladsm007'
        title="Título da Experiência"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue porta diam, vel lobortis tortor. Nulla id ornare arcu. Integer pharetra erat augue. Nullam hendrerit ornare velit nec interdum."
        date="1987 to present"
        />
        <CardInfoExp 
        href='https://github.com/vladsm007'
        title="Título da Experiência"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue porta diam, vel lobortis tortor. Nulla id ornare arcu. Integer pharetra erat augue. Nullam hendrerit ornare velit nec interdum."
        date="1987 to present"
        />
      </section>
      
    </div>
  )
}

export default Experience