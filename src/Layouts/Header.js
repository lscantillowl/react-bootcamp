import React from 'react'
import { HeaderStyled } from '../Styles/Layouts/Header';

const Header = () => {
  return (   
    <HeaderStyled>
      <div className='navbar-container'>
        <h1 className='navbar-item bold'>Ecommerce App</h1>
          <p className='navbar-item item-right'>
            <a href= "/" >Products</a>
          </p>
          <div className="navbar-item item-right">  
            <SearchIcon width={24} height={24} />
          </div>
          <div className="navbar-item item-right">  
            <ShoppingCartIcon width={24} height={24}/>
          </div>
          <div className="navbar-item item-right">  
            <BurgerMenuIcon width={24} height={24}/>
          </div>           
      </div>
    </HeaderStyled> 
  )
}

const ShoppingCartIcon = (props) => {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      ></path>
    </svg>
  );
}

function BurgerMenuIcon( props ) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  );
}

function SearchIcon( props ) {
  const { width, height } = props;
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      ></path>
    </svg>
  );
}
export default Header;
