import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Navigation from './Navigation'
import { useRouter } from 'next/router'
import { useWindowSize } from '@/hooks/useWindowSize'
import Link from 'next/link'

function Header() {
  const router = useRouter()
  const viewport = useWindowSize()
  const viewportWidth = viewport?.width

  return (
    <React.Fragment>
      <header id='header'>
        <div class='d-flex flex-column'>
          <div class='profile'>
            <img
              src='../assets/img/profile-img.jpg'
              alt=''
              class='img-fluid rounded-circle'
            />
            <h1 class='text-light'>
              <a href='index.html'>Robert California</a>
            </h1>
          </div>

          <nav id='navbar' class='nav-menu navbar'>
            <ul>
              <li>
                <Link href='/' class='nav-link scrollto active'>
                  <i class='bx bx-home'></i> <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href='/apply' class='nav-link scrollto'>
                  <i class='bx bx-user'></i> <span>Apply</span>
                </Link>
              </li>
              <li>
                <Link href='/claim' class='nav-link scrollto'>
                  <i class='bx bx-file-blank'></i> <span>Claim</span>
                </Link>
              </li>
              <li>
                <Link href='/profile' class='nav-link scrollto'>
                  <i class='bx bx-book-content'></i> <span>My Profile</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand href='#home' id='name-title'>
            Alex Smith
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto' style={{ marginRight: '0px !important' }}>
              {router.pathname === '/' ? (
                // display this HTML on the home page
                <React.Fragment>
                  {viewportWidth > 800 ? (
                    <React.Fragment>
                      <Nav.Link href='#features'>All(31)</Nav.Link>
                      <Nav.Link href='#features'>Live(5)</Nav.Link>
                      <Nav.Link href='#features'>Ongoing(2)</Nav.Link>
                      <Nav.Link href='#features'>Ended(24)</Nav.Link>
                    </React.Fragment>
                  ) : (
                    <Navigation />
                  )}
                </React.Fragment>
              ) : router.pathname === '/apply' ? (
                <React.Fragment>
                  {viewportWidth > 800 ? (
                    <React.Fragment>
                      <Nav.Link href='#features'>Apply Page</Nav.Link>
                    </React.Fragment>
                  ) : (
                    <Navigation />
                  )}
                </React.Fragment>
              ) : router.pathname === '/claim' ? (
                <React.Fragment>
                  {viewportWidth > 800 ? (
                    <React.Fragment>
                      <Nav.Link href='/claim'>Claim Page</Nav.Link>
                    </React.Fragment>
                  ) : (
                    <Navigation />
                  )}
                </React.Fragment>
              ) : router.pathname === '/profile' ? (
                <React.Fragment>
                  {viewportWidth > 800 ? (
                    <React.Fragment>
                      <Nav.Link href='/profile'>Profile Page</Nav.Link>
                    </React.Fragment>
                  ) : (
                    <Navigation />
                  )}
                </React.Fragment>
              ) : (
                // display this HTML on all other pages
                <h1>Display on all other pages</h1>
              )}
            </Nav>
            <Nav>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success' id='search-button'>
                  Search
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </React.Fragment>
  )
}

export default Header
