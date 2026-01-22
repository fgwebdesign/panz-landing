import ReactPlayer from 'react-player';
import Image from 'next/image';

const BusinessHours = () => {
    return (
        <>
            <div className="opening-hours-area default-padding overflow-hidden">
                <div className="container">
                    <div className="opening-hour-items">
                        <h2 className="text-fixed">Restan</h2>
                        <div className="shape">
                            <Image src="/assets/img/shape/4.png" width={1304} height={673} alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="opening-hours-thumb video-bg-live">
                                    <div className="player">
                                        <ReactPlayer src='https://www.youtube.com/watch?v=F3zw1Gvn4Mk' width="100%" height="506px" playing={true} muted={true} loop={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="opening-hours-info animate" data-aos="fade-left">
                                    <h3>Horarios de Apertura</h3>
                                    <p>
                                        Un ambiente relajante y agradable, buen nivel gastronómico y una barra de tragos para disfrutar con tu grupo familiar o amigos.
                                    </p>
                                    <ul className="opening-hours-table">
                                        <li>
                                            <h6>Lunes a domingo:</h6> <span>20:00 - 00:00</span>
                                        </li>
                                        <li>
                                            <h6>Sábado y domingo:</h6> <span>11:30 - 16:00</span>
                                        </li>
                                    </ul>
                                    <div className="call-to-action">
                                        <div className="icon">
                                            <Image src="/assets/img/icon/6.png" alt="Image Not Found" width={64} height={64} />
                                        </div>
                                        <div className="info">
                                            <p>Llama en cualquier momento</p>
                                            <h4><a href="tel:+59891285003">+598 91 285 003</a></h4>
                                        </div>
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

export default BusinessHours;