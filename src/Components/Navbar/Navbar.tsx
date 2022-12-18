import  i from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={i.nav}>
        <div className={i.item}>
          Profile
        </div>
        <div className={i.item}>
          Messages
        </div >
        <div className={i.item}>
          News
        </div>
        <div className={i.item}>
          Music
        </div>
        <div className={i.item}>
          Settings
        </div>
      </nav>
    )
}

export default Navbar