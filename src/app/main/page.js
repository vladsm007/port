import React from 'react'
import CardsHome from '../components/cardsHome/CardsHome'

const Main = () => {
  return (
    <div className="m-4 sm:m-8 lg:m-20 rounded-xl p-4 sm:p-6 lg:p-8 text-left shadow-md intel-one-mono">
      <h2 className=' sm:text-6xl lg:text-8xl text-white mb-4 sm:mb-6 leading-tight  lg:font-extrabold'>
        ANALISTA
         <br></br>
          DE SISTEMAS
      </h2>

      <div className="space-y-4 text-gray-600">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-white italic">
          Um analista apaixonado por tecnologia e desenvolvimento.
          Este é o meu espaço onde compartilho projetos, experiências e conhecimentos.
        </p>
      </div>

      <div className="text-neutral-400 mt-6 sm:mt-8">
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
          <li className="text-center sm:text-left">
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">+13</p>
            <p className="text-xs sm:text-sm">ANOS DE EXPERIÊNCIA</p>
          </li>
          <li className="text-center sm:text-left">
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">+13</p>
            <p className="text-xs sm:text-sm">PROJETOS COMPLETOS</p>
          </li>
          <li className="text-center sm:text-left">
            <p className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">+13</p>
            <p className="text-xs sm:text-sm">CLIENTES AO REDOR DO MUNDO</p>
          </li>
        </ul>
      </div>

      {/* Cards de destaque */}
      <CardsHome />
    </div>
  )
}

export default Main