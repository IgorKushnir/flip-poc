import React, { useState, useEffect } from 'react'
import HTMLFlipBook from 'react-pageflip'

const pokemonData = [
  {
    id: '006',
    name: 'Charizard',
    types: ['Fire', 'Flying'],
    description:
      'Flies in search of strong opponents. Breathes extremely hot fire that melts anything, but never uses it on weaker foes.',
  },
  {
    id: '025',
    name: 'Pikachu',
    types: ['Electric'],
    description:
      'When Pikachu meet, they touch tails to exchange electricity as a greeting.',
  },
  {
    id: '125',
    name: 'Electabuzz',
    types: ['Electric'],
    description:
      'Often kept at power plants to regulate electricity. Competes with others to attract lightning during storms.',
  },
  {
    id: '185',
    name: 'Sudowoodo',
    types: ['Rock'],
    description:
      'Despite looking like a tree, its body is more like rock. Hates water and hides when it rains.',
  },
  {
    id: '448',
    name: 'Lucario',
    types: ['Fighting', 'Steel'],
    description:
      "Can read thoughts and movements by sensing others' aura. No foe can hide from Lucario.",
  },
  {
    id: '658',
    name: 'Greninja',
    types: ['Water', 'Dark'],
    description:
      'Creates throwing stars from compressed water that can slice through metal when thrown at high speed.',
  },
  {
    id: '491',
    name: 'Darkrai',
    types: ['Dark'],
    description:
      'A legendary Pokémon that appears on moonless nights, putting people to sleep and giving them nightmares.',
  },
]

function Book() {
  const flipbookRef = React.useRef(null)

  const nextPage = () => {
    console.log(flipbookRef.current?.pageFlip().flipNext())
  }

  const prevPage = () => {
    console.log(flipbookRef.current?.pageFlip().flipPrev())
  }

  return (
    <div className="book-container">
      <HTMLFlipBook
        width={370}
        height={500}
        maxShadowOpacity={0.5}
        drawShadow={true}
        showCover={false}
        size="fixed"
        useMouseEvents={false}
        onFlip={(e) => console.log(e)}
        ref={flipbookRef}
      >
        {/* <div className="page" style={{ background: 'transparent' }}>
          <div className="page-content cover"></div>
        </div> */}

        {pokemonData.map((pokemon) => (
          <div className="page" key={pokemon.id}>
            <div className="page-content">
              <div className="pokemon-container">
                <img
                  src={`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                  alt={pokemon.name}
                />
                <div className="pokemon-info">
                  <h2 className="pokemon-name">{pokemon.name}</h2>
                  <p className="pokemon-number">#{pokemon.id}</p>
                  <div>
                    {pokemon.types.map((type) => (
                      <span
                        key={type}
                        className={`pokemon-type type-${type.toLowerCase()}`}
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                  <p className="pokemon-description">{pokemon.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </HTMLFlipBook>
      <div className="navigation">
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </div>
  )
}

export default Book
