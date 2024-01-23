import React, { useState } from 'react'
import { Container, CssBaseline, AppBar, Toolbar, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, Paper } from '@mui/material'
import CustomerList from './components/CustomerList'
import CustomerForm from './components/CustomerForm'
import OptimizedRoute from './components/OptimizedRoute'


function App() {
  const [isAddCustomerModalOpen, setAddCustomerModalOpen] = useState(false)
  const [isOptimizedRouteModalOpen, setOptimizedRouteModalOpen] = useState(false)
  const [customersUpdated, setCustomersUpdated] = useState(false)


  const handleOpenAddCustomerModal = () => {
    setAddCustomerModalOpen(true)
  }

  const handleCloseAddCustomerModal = () => {
    setAddCustomerModalOpen(false)
  }

  const handleOpenOptimizedRouteModal = () => {
    setOptimizedRouteModalOpen(true)
  }

  const handleCloseOptimizedRouteModal = () => {
    setOptimizedRouteModalOpen(false)
  }

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" sx={{ background: '#1976D2' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gerenciamento de Clientes
          </Typography>
          <Button color="inherit" onClick={handleOpenAddCustomerModal}>
            Adicionar Cliente
          </Button>
          <Button color="inherit" onClick={handleOpenOptimizedRouteModal}>
            Exibir Rota de Visitação
          </Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ paddingTop: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Paper elevation={3} sx={{ padding: 3, minHeight: '500px' }}>
              <CustomerList customersUpdated={customersUpdated} setCustomersUpdated={setCustomersUpdated} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={isAddCustomerModalOpen} onClose={handleCloseAddCustomerModal}>
        <DialogTitle>Adicionar Cliente</DialogTitle>
        <DialogContent>
          <CustomerForm onClose={handleCloseAddCustomerModal} customersUpdated={customersUpdated} setCustomersUpdated={setCustomersUpdated}/>
        </DialogContent>
      </Dialog>

      <Dialog open={isOptimizedRouteModalOpen} onClose={handleCloseOptimizedRouteModal}>
        <DialogTitle>Rota de Visitação</DialogTitle>
        <DialogContent>
          <OptimizedRoute onClose={handleCloseOptimizedRouteModal} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default App
