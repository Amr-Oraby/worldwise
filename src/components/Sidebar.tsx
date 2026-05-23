import { Outlet } from 'react-router-dom';
import AppNav from './AppNav';
import Footer from './Footer';
import Logo from './Logo';
import styles from './Sidebar.module.css'
function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Logo />
            <AppNav />
            {/* for displaying nested routes and it should be inside the parent route element */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default Sidebar
