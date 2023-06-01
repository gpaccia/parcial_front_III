import React from 'react'

const Card = ({usuario}) => {
    return (
        <>
          <h2>Bienvenido, {usuario.nombre}</h2>
          <h2>Tu jedi favorito es: {usuario.jediFav}</h2>
        </>
      )
    }

export default Card
