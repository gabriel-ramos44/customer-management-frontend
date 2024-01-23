import React, { useEffect, useState } from 'react'
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  Collapse,
  Box,
} from '@mui/material'
import InputMask from 'react-input-mask'
import { getAllCustomers, deleteCustomerById } from '../services/api'

const formatPhoneNumber = (phoneNumber) => {
  const formattedNumber = phoneNumber.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, '($1) $2 $3-$4')
  return formattedNumber
}

const CustomerList = ({ customersUpdated, setCustomersUpdated }) => {
  const [customers, setCustomers] = useState([])
  const [nameFilter, setNameFilter] = useState('')
  const [emailFilter, setEmailFilter] = useState('')
  const [phoneFilter, setPhoneFilter] = useState('')
  const [isFilterExpanded, setFilterExpanded] = useState(false)

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value)
  }

  const handleEmailFilterChange = (e) => {
    setEmailFilter(e.target.value)
  }

  const handlePhoneFilterChange = (e) => {
    setPhoneFilter(e.target.value)
  }

  const handleFilterButtonClick = async () => {
    const numericPhone = phoneFilter ? phoneFilter.replace(/\D/g, '') : phoneFilter

    try {
      const fetchedCustomers = await getAllCustomers({
        name: nameFilter,
        email: emailFilter,
        phone: numericPhone,
      })
      setCustomers(fetchedCustomers)
    } catch (error) {
      console.error('Erro ao obter clientes:', error)
    }
  }

  const handleDeleteCustomer = async (customerId) => {
    try {
      await deleteCustomerById(customerId)
      setCustomersUpdated(true)
    } catch (error) {
      console.error('Erro ao excluir cliente:', error)
    }
  }

  const handleFilterExpandClick = () => {
    setFilterExpanded(!isFilterExpanded)
  }

  useEffect(() => {
    handleFilterButtonClick()
    if (customersUpdated) {
      setCustomersUpdated(false)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (customersUpdated) {
      setCustomersUpdated(false)
    }
  }, [customersUpdated, setCustomersUpdated]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <Typography variant="h5">Lista de Clientes</Typography>

      <Button onClick={handleFilterExpandClick} sx={{ marginBottom: 2 }}>
        {isFilterExpanded ? 'Esconder Filtros' : 'Mostrar Filtros'}
      </Button>

      <Collapse in={isFilterExpanded}>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            label="Filtrar por nome"
            variant="outlined"
            fullWidth
            value={nameFilter}
            onChange={handleNameFilterChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Filtrar por email"
            variant="outlined"
            fullWidth
            value={emailFilter}
            onChange={handleEmailFilterChange}
            sx={{ marginBottom: 2 }}
          />
          <InputMask
            mask="(99) 9 9999-9999"
            value={phoneFilter}
            onChange={handlePhoneFilterChange}
          >
            {(inputProps) => (
              <TextField
                label="Filtrar por telefone"
                variant="outlined"
                fullWidth
                {...inputProps}
                sx={{ marginBottom: 2 }}
              />
            )}
          </InputMask>
          <Button variant="contained" onClick={handleFilterButtonClick}>
            Filtrar
          </Button>
        </Box>
      </Collapse>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Telefone</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Coordenada X</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Coordenada Y</TableCell>
              <TableCell></TableCell> {/* Empty cell for the delete button */}
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.id}</TableCell>
                <TableCell>{customer.fullname}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{formatPhoneNumber(customer.phone)}</TableCell>
                <TableCell>{customer.coordx}</TableCell>
                <TableCell>{customer.coordy}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDeleteCustomer(customer.id)}
                  >
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CustomerList
