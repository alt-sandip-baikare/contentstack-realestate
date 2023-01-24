import Navbar from './Navbar/Navbar'
import Style from './Header.module.scss'

function Header() {
  
  return (
    <header className={Style.header}>
        <Navbar />
    </header>
  )
}

export default Header