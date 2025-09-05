import styles from './NavBar.module.scss'
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav className={styles.menu}>
            <span>Douglas</span> {/*Arrumar estilização do link*/}
            
            <ul className={styles.containerItems}>
                <li><Link to="/" className={styles.menuItem}>Home</Link></li>
                <li><Link to="/sobre" className={styles.menuItem}>Sobre</Link></li>
                <li><Link to="/" className={styles.menuItem}>Projetos</Link></li>
                <li><Link to="/" className={styles.menuItem}>Contato</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar
// 