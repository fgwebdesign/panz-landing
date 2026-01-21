import Link from 'next/link';
import SocialShare from '../social/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterRowContent = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-3 col-md-6 footer-item mt-50">
                    <div className="f-item about">
                        <h4 className="widget-title">Sobre Nosotros</h4>
                        <p>
                            Desde hace más de 30 años acompañamos a la gente de Paysandú en sus momentos más importantes. Todos nuestros productos son de elaboración propia, preparados con dedicación y profesionalismo.
                        </p>
                        <ul className="footer-social">
                            <SocialShare />
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
                    <div className="f-item link">
                        <h4 className="widget-title">Explorar</h4>
                        <ul>
                            <li>
                                <Link href="/about-us">Sobre Nosotros</Link>
                            </li>
                            <li>
                                <Link href="/food-menu">Menú</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contacto</Link>
                            </li>
                            <li>
                                <Link href="/food-menu">Nuestros Platos</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-item  mt-50">
                    <div className="f-item contact">
                        <h4 className="widget-title">Información de Contacto</h4>
                        <ul>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="content">
                                    Paysandú, Uruguay
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="content">
                                    <a href="tel:+47229551">4722 9551</a>
                                </div>
                            </li>
                            <li>
                                <div className="icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="content">
                                    <a href="mailto:info@panz.com.uy">info@panz.com.uy</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 footer-item mt-50">
                    <h4 className="widget-title">Newsletter</h4>
                    <p>
                        Únete a nuestra lista de suscriptores para recibir las últimas noticias y ofertas especiales.
                    </p>
                    <FooterNewsLetter />
                </div>
            </div>
        </>
    );
};

export default FooterRowContent;