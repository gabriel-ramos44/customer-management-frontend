import React from 'react'
import Plot from 'react-plotly.js'

const CartesianPlane = ({ optimizedRoute }) => {
  const xCoordinates = [0, ...optimizedRoute.map((customer) => customer.coordx)]
  const yCoordinates = [0, ...optimizedRoute.map((customer) => customer.coordy)]

  const customerNames = ['', ...optimizedRoute.map((customer) => customer.fullname)]

  const layout = {
    title: 'Rota Otimizada',
    xaxis: { title: 'Coordenada X' },
    yaxis: { title: 'Coordenada Y' },

  }

  const data = [
    {
      type: 'scatter',
      mode: 'markers+lines+text',
      x: xCoordinates,
      y: yCoordinates,
      text: customerNames,
      textposition: 'top center',
      textfont: { size: 10 },
      marker: { size: 8, color: 'blue' },
      line: { color: 'black' },
    },
  ]

  return (
    <Plot
      data={data}
      layout={layout}
      style={{ width: '500px', height: '500px' }}
      config={{ responsive: true }}
    />
  )
}

export default CartesianPlane
