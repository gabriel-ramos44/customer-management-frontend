import React, { useState } from 'react'
import { Typography, TextField, Button, Grid } from '@mui/material'
import { createNewCustomer } from '../services/api'
import InputMask from 'react-input-mask'

const CustomerForm = ({ customersUpdated, setCustomersUpdated }) => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [coordX, setCoordX] = useState('')
    const [coordY, setCoordY] = useState('')

    const isFormValid = fullname && email && phone && coordX && coordY

    const handleAddCustomer = async () => {
      try {
        const numericPhone = phone.replace(/\D/g, '')

        await createNewCustomer({ fullname, email, phone: numericPhone, coordX, coordY })
        resetForm()
        setCustomersUpdated(true)
      } catch (error) {
        console.error('Erro ao adicionar cliente:', error)
      }
    }

    const resetForm = () => {
      setFullname('')
      setEmail('')
      setPhone('')
      setCoordX('')
      setCoordY('')
    }


    const handleCoordXChange = (e) => {
      const value = e.target.value.replace(/[^0-9.]/g, '')
      setCoordX(value)
    }

    const handleCoordYChange = (e) => {
      const value = e.target.value.replace(/[^0-9.]/g, '')
      setCoordY(value)
    }

    return (
      <div>
        <Typography variant="h5">Adicionar Cliente</Typography>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nome"
                variant="outlined"
                fullWidth
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
                <InputMask
                mask="(99) 9 9999-9999"
                maskPlaceholder=""
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                >
                {(inputProps) => (
                    <TextField
                    {...inputProps}
                    label="Telefone"
                    variant="outlined"
                    fullWidth
                    type="tel"
                    />
                )}
                </InputMask>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Coordenada X"
                variant="outlined"
                fullWidth
                value={coordX}
                onChange={handleCoordXChange}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Coordenada Y"
                variant="outlined"
                fullWidth
                value={coordY}
                onChange={handleCoordYChange}
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddCustomer}
                disabled={!isFormValid}
              >
                Adicionar Cliente
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    )
  }

  export default CustomerForm