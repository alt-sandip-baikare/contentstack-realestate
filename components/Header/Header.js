import Navbar from './Navbar/Navbar'
import Style from './Header.module.scss'

function Header({navitems}) {
  
  return (
    <header className={Style.header}>
        <Navbar navitems={navitems}/>
    </header>
  )
}

export default Header