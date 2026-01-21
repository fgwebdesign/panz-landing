"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

const PageLoader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Simular carga de la página
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 500); // Tiempo para la animación de fade out
        }, 500); // medio segundos de loader

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div 
            className={`page-loader ${fadeOut ? 'fade-out' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'var(--white)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                transition: 'opacity 0.5s ease-in-out',
                opacity: fadeOut ? 0 : 1,
            }}
        >
            {/* Solo visible en desktop */}
            <style jsx>{`
                @media (max-width: 991px) {
                    .page-loader {
                        display: none !important;
                    }
                }

                .page-loader.fade-out {
                    pointer-events: none;
                }

                .logo-container {
                    margin-bottom: 40px;
                    animation: pulse 2s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: scale(1.05);
                        opacity: 0.9;
                    }
                }

                .spinner-container {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }

                .spinner-dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, var(--color-primary) 30%, var(--color-secondary) 100%);
                    animation: bounce 1.4s ease-in-out infinite;
                }

                .spinner-dot:nth-child(1) {
                    animation-delay: -0.32s;
                }

                .spinner-dot:nth-child(2) {
                    animation-delay: -0.16s;
                }

                @keyframes bounce {
                    0%, 80%, 100% {
                        transform: scale(0);
                        opacity: 0.5;
                    }
                    40% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }

                .loading-text {
                    margin-top: 30px;
                    font-family: var(--font-default);
                    font-size: 16px;
                    color: var(--color-paragraph);
                    letter-spacing: 2px;
                    text-transform: uppercase;
                }
            `}</style>

            <div className="logo-container">
                <Image 
                    src="/assets/img/panzred.png" 
                    alt="PANZ Logo" 
                    width={200} 
                    height={98}
                    priority
                />
            </div>

            <div className="spinner-container">
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
                <div className="spinner-dot"></div>
            </div>

            <div className="loading-text">
                Cargando
            </div>
        </div>
    );
};

export default PageLoader;
