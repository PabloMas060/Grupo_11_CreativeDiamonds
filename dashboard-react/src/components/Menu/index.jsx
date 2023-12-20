import { Link } from 'react-router-dom';
import styles from './index.module.css';
/* import logo from '../../images/logoCreativeSouls.png'; */

export const Menu = () => {
  return (
 

     
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">


    <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
        <div className="sidebar-brand-icon">
            <img className="w-50" src={styles.logo} alt="CreativeSouls" />
        </div>
    </Link>
    
    
    <hr className="sidebar-divider my-0" />
    
    
    <li className="nav-item active">
        <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Creative Souls</span></Link>
    </li>
    
    
    <hr className="sidebar-divider" />
    
    
    <div className="sidebar-heading">Secciones</div>
    
    
    <li className="nav-item">
        <Link className="nav-link collapsed" to="/favorites">
            <i className="fas fa-fw fa-user"></i>
            <span>Mis Favoritos</span>
        </Link>
    </li>
    
    
    <li className="nav-item">
        <Link className="nav-link" to="/playlist">
            <i className="fas fa-fw fa-cart-shopping"></i>
            <span>Mi Playlist</span></Link>
    </li>
    
    
    <li className="nav-item">
        <Link className="nav-link" to="/best">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Mas escuchados</span></Link>
    </li>
    
    
    <hr className="sidebar-divider d-none d-md-block" />
    </ul>
    
    
  )
}
