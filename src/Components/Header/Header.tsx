
import h from'./Header.module.css'
import logo from './../../Images/Group 3cat.png'

const Header = () => {
    return (
        <header className={h.header}>
            <img src= {logo}/>
        </header>
    )
}

export default Header