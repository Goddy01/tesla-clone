import React, {useState} from 'react'
import styled from 'styled-components'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  
  const cars = useSelector(selectCars)
  console.log(cars);

  return (
    <Container>
        <a>
          <img src="/images/logo.svg" />
        </a>
      <Menu>
        <p>
          <a href="">Vehicles</a>
        </p>
        <p>
          <a href="">Energy</a>
        </p>
        <p>
          <a href="">Charging</a>
        </p>
        <p>
          <a href="">Discover</a>
        </p>
        <p>
          <a href="">Shop</a>
        </p>
      </Menu>
      <RightMenu>
        <a>
          <img src="/images/question-mark.svg" />
        </a>
        <a>
          <img src="/images/globe.svg" />
        </a>
        <a>
          <img src="/images/profile.svg" />
        </a>
      </RightMenu>
      <Hamburger onClick={()=>setIsOpen(true)}>
        Menu
      </Hamburger>

      <HamburgerMenu show={isOpen}>
      {/* {cars && cars.map((car, index) => (
        
      ))} */}
        <li>
          <a onClick={()=>setIsOpen(false)}>
            <img src="/images/close.svg" />
          </a>
        </li>
        <li>
          <a href="">
            Vehicles
          </a>

        </li>
        <li>
          <a href="">
            Energy
          </a>

        </li>
        <li>
          <a href="">
            Charging
          </a>

        </li>
        <li>
          <a href="">
            Discover
          </a>

        </li>
        <li>
          <a href="">
            Shop
          </a>

        </li>
        <li>
          <a href="">
            Support
          </a>

        </li>
        <li>
        <ItemDiv>
          <img src="/images/globe.svg"/>
            <a href="">
              United States
            </a>

            <p>
              English
            </p>
          </ItemDiv>
        </li>
        <li>
          <ItemDiv>
            <img src="/images/profile.svg"/>
            <a href="">
              Account
            </a>
          </ItemDiv>
        </li>
      </HamburgerMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
  background-color: #fff;
  height: 60px;
  position: fixed;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  left: 0;
  right: 0;

  img {
    height: 100px;
    width: 130px;
  }
  
`

const Menu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  @media(max-width: 815px) {
    display: none;
  }
  a {
    text-decoration: none;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    padding: 0 18px;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  img {
    height: 30px;
    width: 50px;
  }

  @media(max-width: 815px) {
    display: none;
  }
`

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 600;
  border-radius: 5px;
  padding: 10px;
  background-color: #7AB6DC;
  color: #171A20;
  cursor: pointer;

  @media(min-width: 816px) {
    display: none;
  }
`

const HamburgerMenu = styled.div`

@media(min-width: 816px) {
    display: none;
  }

  list-style: none;
  position: fixed;
  top: 0;
  right: 0;
  padding: 7px 60px 60px 0;
  min-height: 100vh;
  background-color: #7AB6DC;
  width: 100vw;
  display: flex;
  flex-direction: column;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.1s ease-in;

  li {
    flex: 1;
    display: flex;
    padding: 20px 30px;
    width: 100vw;
    margin-bottom: 20px;
    position: relative;
    display: flex;
    align-items: center;
  }

  li:not(:first-child) img {
  width: 23px;
  height: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  left: 24px;
  justify-content: center;
  }

  li:first-child img {
    position: absolute;
    top: 10px;
    right: -30px;
    height: 20px;
    ${'' /* float: right; */}
    ${'' /* background-color: red; */}
  }

  li:not(:first-child):hover {
  background-color: #ffffff;
  color: #333333;
}

li:not(:first-child):hover a {
  color: #333333;
}

li:not(:first-child):hover p {
  color: #333333;
}


  a {
    padding: 0;
    ${'' /* margin: 0; */}
    ${'' /* justify-content: center; */}
    align-items: center;
    text-decoration: none;
    font-weight: 600;
    color: #ffffff;
  }

  p {
    font-size: 13px;
    left: 65px;
    top: 48px;
    position: absolute;
    font-weight: 600;
    color: #ffffff;
    ${'' /* width: 400px; */}
  }
`

const ItemDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;

  a {
    margin-left: 20px;
  }
`
