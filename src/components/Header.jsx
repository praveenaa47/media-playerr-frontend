import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      
      <Navbar className="bg-">
        <Container>
          <Navbar.Brand  className='fw-bolder'>
           <Link t0={'/'} style={{textDecoration:'none',color:''}}>
           <i class="fa-solid fa-forward fa-fade me-3 fs-4"></i>
            Media-Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Header
