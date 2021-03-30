import React from 'react';
import { Link } from 'react-router-dom'
import './header.styles.css'
import  Logo  from '../../assets/seafood Ex.png'

const Header = () => (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link className='navbar-brand' to='/'>
        <img src={Logo} alt="" width='100' height='100'/>
        </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link className='nav-link  ' to='/stallion'>
               STALLION
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/sharon'>
            SHARON
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/magulf'>
            MAGULF
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/joma'>
            JOMA
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/windek'>
            WINDEK
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/ADMIRAL'>
            ADMIRAL
        </Link>
        </li>
        <li class="nav-item">
        <Link className='nav-link' to='/seafood'>
            SEAFOOD
        </Link>
        </li>
      </ul>
      <form class="d-flex" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
        <Link className='nav-link' to='/register'>
        <i class="fas fa-user-alt"></i>
        </Link>
      </form>
    </div>
  </div>
</nav>
   
)
export default Header