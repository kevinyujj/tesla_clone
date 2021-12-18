import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import { selectCars } from '../features/car/carSlice'
// import { useSelector } from 'react-redux'

function Header() {

    const [sidebar, setSidebar] = useState(false)
    // const cars = useSelector(selectCars)
    // console.log(cars)

    return (
        <Container>
            <a>
                <img src="/images/logo.svg" alt='logo'/>
            </a>
            <Menu>
                <a href='#'>Model S</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Model Y</a>
            </Menu>
            <RightMenu>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <CustomMenu onClick={() => setSidebar(true)}/>
            </RightMenu>

                <BurgerNav show={sidebar}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setSidebar(false)}/>
                    </CloseWrapper>
                    <li><a href='#'>Existing Inventory</a></li>
                    <li><a href='#'>Used Inventory</a></li>
                    <li><a href='#'>Trade-In</a></li>
                    <li><a href='#'>Test Driving</a></li>
                    <li><a href='#'>Powerwall</a></li>
                    <li><a href='#'>Energy</a></li>
                    <li><a href='#'>Commercial Energy</a></li>
                    <li><a href='#'>Utilities</a></li>
                    <li><a href='#'>Charging</a></li>
                    <li><a href='#'>Find Us</a></li>
                    <li><a href='#'>Support</a></li>
                    <li><a href='#'>Investor Ralations</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Account</a></li>
                    <li><a href='#'>More</a></li>
                </BurgerNav>
 
        </Container>
    )
}

export default Header

const Container = styled.div`
    z-index: 1;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;

        @media(max-width: 768px){
            display: none;
        }
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    transform: ${props => props.show? 'traslateX(0)':'translateX(100%)'};
    transition: transform 0.2s;
    
    li{
        padding: 15px 10px;
        border-bottom: 1;
        border-radius: 2em;
        margin-top: 5px;

        a{
            font-weight: 600;
            font-size: 0.5em;
        }
    }

    li:hover{
        background-color: lightgray;
        cursor:pointer;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`