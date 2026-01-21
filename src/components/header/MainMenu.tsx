import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    isOpen: boolean;
    closeMenu: () => void;
    toggleSubMenu: (menuId: string) => void;
    isMenuOpen: (menuId: string) => boolean;
    getMenuStyle: (menuId: string) => React.CSSProperties;
    navbarPlacement: string;
}

const MainMenu = ({ isOpen, closeMenu, navbarPlacement, toggleSubMenu, isMenuOpen, getMenuStyle }: DataType) => {

    return (
        <>
            <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                <Image src="/assets/img/panzred.png" width={675} height={332} alt="Logo PanZ" />
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                    <i className="fa fa-times"></i>
                </button>
                <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                    <li>
                        <Link href="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="about-us"
                        >
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href="/food-menu">
                            Menu
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default MainMenu;