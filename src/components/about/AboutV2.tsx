"use client"
import Link from 'next/link';
import Image from 'next/image';
import PlatosDestacadosPanZ from '@/assets/jsonData/food/PlatosDestacadosPanZ.json';
import SingleFoodMenuV6 from '../food/SingleFoodMenuV6';
import { useState } from 'react';

const AboutV2 = () => {
    const [activeServiceId, setActiveServiceId] = useState(PlatosDestacadosPanZ[0]?.id || null);

    const whatsappNumber = '59891285003';
    const defaultMessage = '¡Hola! Me gustaría hacer una consulta.';

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(defaultMessage);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            // En móviles, usar el protocolo whatsapp://
            window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
        } else {
            // En desktop, usar WhatsApp Web
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        }
    };

    return (
        <>
            <style jsx>{`
                .about-delivery-section {
                    padding-top: 120px;
                    padding-bottom: 120px;
                }
                .about-delivery-thumb-box {
                    min-height: 800px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .about-delivery-info {
                    padding-top: 40px;
                    padding-bottom: 40px;
                }
                @media (max-width: 991px) {
                    .about-delivery-section {
                        padding-top: 60px;
                        padding-bottom: 60px;
                    }
                    .about-delivery-thumb-box {
                        min-height: auto;
                    }
                    .about-delivery-info {
                        padding-top: 20px;
                        padding-bottom: 20px;
                    }
                }
                @media (max-width: 767px) {
                    .about-delivery-section {
                        padding-top: 40px;
                        padding-bottom: 40px;
                    }
                    .about-delivery-info {
                        padding-top: 15px;
                        padding-bottom: 15px;
                    }
                }
            `}</style>
            <div className="about-style-two-area default-padding-bottom about-delivery-section">
                <div className="shape-overlay">
                    <Image className="animate" data-aos="fade-left" data-aos-delay="100" src="/assets/img/illustration/2.png" alt="Image Not Found" width={528} height={528} />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6 order-lg-last">
                            <div className="about-delivery-thumb-box">
                                <div className="about-style-two-thumb video-container" style={{ 
                                    width: '100%', 
                                    maxWidth: '650px',
                                    borderRadius: '0',
                                    overflow: 'visible'
                                }}>
                                    <video 
                                        className="animate" 
                                        data-aos="fade-up" 
                                        data-aos-delay="100"
                                        autoPlay
                                        muted
                                        playsInline
                                        style={{ 
                                            width: '100%', 
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    >
                                        <source src="/assets/img/banner/pedidosya.mp4" type="video/mp4" />
                                        Tu navegador no soporta videos HTML5.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="about-style-two-info about-delivery-info">
                                <h4 className="sub-heading">¿Antojo de algo rico? <strong style={{ fontWeight: '700' }}>Lo llevamos nosotros.</strong></h4>
                                <h2 className="title">Pedí por<span className="pedidosYaText">PedidosYa</span>  o <span className="whatsAppText">WhatsApp</span>. <br /> Mismo sabor, misma calidad, directo a tu mesa.</h2>
   
                                <div className="author-info">
                                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'nowrap', alignItems: 'center', marginBottom: '30px' }}>
                                        <a
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleWhatsAppClick();
                                            }}
                                            className="modern-order-btn modern-order-btn-whatsapp"
                                        >
                                            <div className="modern-order-icon">
                                                <Image 
                                                    src="/assets/img/icon/wpp.png" 
                                                    alt="WhatsApp" 
                                                    width={80} 
                                                    height={80}
                                                />
                                            </div>
                                            <span className="modern-order-text">Pedir por WhatsApp</span>
                                        </a>
                                        <a 
                                            href="https://www.pedidosya.com.uy/restaurantes/paysandu/pan-z-menu" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="modern-order-btn modern-order-btn-pedidosya"
                                        >
                                            <div className="modern-order-icon">
                                                <Image 
                                                    src="/assets/img/icon/py.png" 
                                                    alt="PedidosYa" 
                                                    width={80} 
                                                    height={80}
                                                />
                                            </div>
                                            <span className="modern-order-text">Pedir en PedidosYa</span>
                                        </a>
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

export default AboutV2;