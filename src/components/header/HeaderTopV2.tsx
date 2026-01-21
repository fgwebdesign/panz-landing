import Link from 'next/link';
import Image from 'next/image';

const HeaderTopV2 = () => {
    return (
        <>
            <div className="bg-theme text-light top-bar-style-two">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="topbar-two-items">
                                <div className="topbar-info">
                                    <div className="icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="info">
                                        <h5>Delivery y Reservas</h5>
                                        <a href="tel:+47229551">4722 9551</a>
                                    </div>
                                </div>
                                <div className="logo">
                                    <Link href="/">
                                        <Image src="/assets/img/panzred.png" alt="Logo PanZ" width={800} height={800} />
                                    </Link>
                                </div>
                                <div className="topbar-info">
                                    <div className="icon">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="info">
                                        <h5>18 de Julio y Setembrino Pereda.</h5>
                                        <p>
                                            Paysandú, Uruguay
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopV2;