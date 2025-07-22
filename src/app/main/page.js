import React from 'react'
import CardsHome from '../components/cardsHome/CardsHome'

const Main = () => {
  return (
    <div className="m-20 rounded-xl p-8 text-left shadow-md">
      <h2 className="text-8xl font-bold text-white mb-6">
        ANALISTA
         <br></br>
         <span className=" text-neutral-800">
          DE SISTEMAS
          </span>
      </h2>

      <div className="space-y-4 text-gray-600">
        <p className="text-lg leading-relaxed">
          Um analista apaixonado por tecnologia e desenvolvimento.
          Este é o meu espaço onde compartilho projetos, experiências e conhecimentos.
        </p>
      </div>

      <div className="text-neutral-400">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <li>
            <p className="text-white text-5xl font-extrabold">+13</p>
            <p>ANOS DE EXPERIÊNCIA</p>
          </li>
          <li>
            <p className="text-white text-5xl font-extrabold">+13</p>
            <p>PROJETOS COMPLETOS</p>
          </li>
          <li>
            <p className="text-white text-5xl font-extrabold">+13</p>
            <p>CLIENTES AO REDOR DO MUNDO</p>
          </li>
        </ul>
      </div>

      {/* Cards de destaque */}
      <CardsHome />
    </div>
  )
}

export default Main