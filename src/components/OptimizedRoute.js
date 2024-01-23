import React, { useEffect, useState } from 'react'
import { List, ListItem, ListItemText, Button } from '@mui/material'
import CartesianPlane from './CartesianPlane'
import { getOptimizedRoute } from '../services/api'

const OptimizedRoute = ({ onClose }) => {
  const [optimizedRoute, setOptimizedRoute] = useState([])
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    const fetchOptimizedRoute = async () => {
      try {
        const result = await getOptimizedRoute()
        setOptimizedRoute(result.optimizedRoute)
      } catch (error) {
        console.error('Erro ao obter rota otimizada:', error)
      }
    }

    fetchOptimizedRoute()
  }, [])

  const handleToggleView = () => {
    setShowList((prevShowList) => !prevShowList)
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleToggleView}>
        Alternar Visualização
      </Button>
      {showList ? (
        <div style={{ width: '500px', height: '500px' }}>

          <List>
            {optimizedRoute.map((customer, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={`${index + 1} - ${customer.fullname}`}
                  secondary={`Coordenadas: (${customer.coordx}, ${customer.coordy})`}
                />
              </ListItem>
            ))}
          </List>
        </div>
      ) : (
        <CartesianPlane optimizedRoute={optimizedRoute} />
      )}
    </div>
  )
}

export default OptimizedRoute
