import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoggoutButton() {
  const navigate = useNavigate()
  const loggout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
      <button onClick={loggout}>Loggout</button>
    </>
  )
}

export default LoggoutButton