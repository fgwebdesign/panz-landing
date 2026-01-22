import FooterRowContent from './FooterRowContent';
import Link from 'next/link';
import Image from 'next/image';

const FooterV2 = () => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-style-two default-padding">
                    <div className="container">
                        <div className="footer-bottom-shape">
                            <Image src="/assets/img/shape/9.png" alt="Image Not Found" width={616} height={800} />
                        </div>
                        <div className="footer-top text-center">
                            <div className="row">
                                <div className="col-lg-12">
                                    <Link href="/">
                                        <Image src="/assets/img/panzred.png" alt="Logo PanZ" width={675} height={332} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <FooterRowContent />
                    </div>
                </div>
                <div className="footer-bottom-two">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())} PanZ Pizzería & Restaurante. Todos los derechos reservados.</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <p className="design-credit">
                                    Website designed by:{' '}
                                    <Link 
                                        href="https://www.fgwebdesign.dev/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="design-link"
                                    >
                                        <span className="design-text"> <strong>FG Web Design</strong></span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV2;