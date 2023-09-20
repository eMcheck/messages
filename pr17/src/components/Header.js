import { NavLink } from 'react-router-dom';
import cls from './Header.module.css';


function Header() {
    return (
        <div className={cls.container}>
            <nav >
                <ul className={cls.list}>
                    <li><NavLink exact="true" to='/' className={cls.nav}>Home</NavLink></li>
                    <li><NavLink to='/note' className={cls.nav}>Note</NavLink></li>
                    <li><NavLink to='/create' className={cls.nav}>Cteate</NavLink></li>
                    <li><NavLink to='/about' className={cls.nav}>About</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
