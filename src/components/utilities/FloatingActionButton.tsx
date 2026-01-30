"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FloatingActionButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
    const [message, setMessage] = useState('');
    const [mounted, setMounted] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const whatsappNumber = '59891285003';
    const pedidosYaUrl = 'https://www.pedidosya.com.uy/restaurantes/paysandu/pan-z-menu';

    // Esperar a que el componente esté montado para evitar flash de hidratación
    useEffect(() => {
        setMounted(true);
    }, []);

    // Cerrar el menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
                setShowWhatsAppForm(false);
                setMessage('');
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Mostrar el formulario de WhatsApp cuando se hace clic en WhatsApp
    const handleWhatsAppClick = () => {
        setShowWhatsAppForm(true);
    };

    // Volver al menú principal
    const handleBackToMenu = () => {
        setShowWhatsAppForm(false);
        setMessage('');
    };

    // Enviar mensaje a WhatsApp
    const handleSendMessage = (e?: React.MouseEvent) => {
        if (e) {
            e.stopPropagation();
        }
        
        if (!message.trim()) {
            return;
        }

        const encodedMessage = encodeURIComponent(message.trim());
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        
        if (isMobile) {
            // En móviles, usar el protocolo whatsapp://
            window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
        } else {
            // En desktop, usar WhatsApp Web
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        }
        
        setMessage('');
        setShowWhatsAppForm(false);
        setIsOpen(false);
    };

    const handlePedidosYaClick = () => {
        window.open(pedidosYaUrl, '_blank');
        setIsOpen(false);
        setShowWhatsAppForm(false);
    };

    const toggleMenu = () => {
        if (showWhatsAppForm) {
            setShowWhatsAppForm(false);
            setMessage('');
        }
        setIsOpen(!isOpen);
    };

    // No renderizar nada hasta que esté montado en el cliente
    if (!mounted) {
        return null;
    }

    return (
        <>
            <style jsx>{`
                .fab-modern-container {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    z-index: 9998;
                    font-family: var(--font-default);
                }

                .fab-modern-panel {
                    position: absolute;
                    bottom: 80px;
                    right: 0;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                    min-width: 320px;
                    transform-origin: bottom right;
                    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                                transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                                visibility 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    opacity: 0;
                    visibility: hidden;
                    transform: scale(0.85) translateY(20px);
                    pointer-events: none;
                }

                .fab-modern-panel.active {
                    opacity: 1;
                    visibility: visible;
                    transform: scale(1) translateY(0);
                    pointer-events: all;
                }

                .fab-panel-header {
                    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
                    padding: 24px 20px;
                    color: white;
                }

                .fab-panel-title {
                    font-size: 20px;
                    font-weight: 700;
                    color: white;
                    margin: 0 0 6px 0;
                    font-family: var(--font-heading);
                }

                .fab-panel-subtitle {
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.9);
                    margin: 0;
                    font-weight: 400;
                }

                .fab-options-grid {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .fab-option-card {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    padding: 18px;
                    border: none;
                    border-radius: 14px;
                    background: white;
                    cursor: pointer;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
                    width: 100%;
                    text-align: left;
                }

                .fab-option-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
                }

                .fab-option-card.whatsapp:hover {
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                }

                .fab-option-card.pedidosya:hover {
                    background: linear-gradient(135deg, #FA0050 0%, #C70039 100%);
                }

                .fab-option-icon {
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 26px;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                }

                .fab-option-icon.whatsapp {
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    color: white;
                }

                .fab-option-icon.pedidosya {
                    background: linear-gradient(135deg, #FA0050 0%, #C70039 100%);
                    padding: 10px;
                }

                .fab-option-card.whatsapp:hover .fab-option-icon {
                    background: white;
                    color: #25D366;
                    transform: scale(1.1);
                }

                .fab-option-card.pedidosya:hover .fab-option-icon {
                    background: white;
                    transform: scale(1.1);
                }

                .fab-option-content {
                    flex: 1;
                }

                .fab-option-title {
                    font-size: 17px;
                    font-weight: 700;
                    color: var(--color-heading);
                    margin-bottom: 4px;
                    transition: color 0.3s ease;
                }

                .fab-option-card.whatsapp:hover .fab-option-title,
                .fab-option-card.pedidosya:hover .fab-option-title {
                    color: white;
                }

                .fab-option-description {
                    font-size: 13px;
                    color: var(--color-paragraph);
                    transition: color 0.3s ease;
                    font-weight: 500;
                }

                .fab-option-card.whatsapp:hover .fab-option-description,
                .fab-option-card.pedidosya:hover .fab-option-description {
                    color: rgba(255, 255, 255, 0.95);
                }

                .fab-option-arrow {
                    font-size: 18px;
                    color: var(--color-paragraph);
                    transition: all 0.3s ease;
                    opacity: 0.5;
                }

                .fab-option-card:hover .fab-option-arrow {
                    transform: translateX(4px);
                    opacity: 1;
                    color: white;
                }

                .fab-main-trigger {
                    width: 68px;
                    height: 68px;
                    border-radius: 50%;
                    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
                    color: white;
                    font-size: 32px;
                    cursor: pointer;
                    box-shadow: 0 6px 24px rgba(190, 8, 20, 0.4);
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 3px solid white;
                }

                .fab-main-trigger:hover {
                    transform: scale(1.12);
                    box-shadow: 0 8px 32px rgba(190, 8, 20, 0.5);
                }

                .fab-main-trigger.active {
                    transform: rotate(135deg);
                    background: #2c3e50;
                    box-shadow: 0 8px 32px rgba(44, 62, 80, 0.4);
                }

                .fab-main-trigger.active:hover {
                    transform: rotate(135deg) scale(1.12);
                }

                .fab-whatsapp-form-modern {
                    padding: 20px;
                }

                .fab-whatsapp-header-modern {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #f0f0f0;
                }

                .fab-back-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: #f5f5f5;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    font-size: 16px;
                    color: #333;
                }

                .fab-back-btn:hover {
                    background: #e0e0e0;
                    transform: translateX(-4px);
                }

                .fab-whatsapp-title-modern {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex: 1;
                }

                .fab-whatsapp-title-modern h4 {
                    margin: 0;
                    font-size: 18px;
                    font-weight: 700;
                    color: var(--color-heading);
                }

                .fab-schedule-modern {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    padding: 16px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                    border-left: 4px solid #25D366;
                }

                .fab-schedule-title {
                    font-weight: 700;
                    color: var(--color-heading);
                    margin-bottom: 6px;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .fab-schedule-time {
                    color: var(--color-paragraph);
                    font-size: 13px;
                }

                .fab-textarea-modern {
                    width: 100%;
                    min-height: 110px;
                    padding: 14px;
                    border: 2px solid #e0e0e0;
                    border-radius: 12px;
                    font-family: var(--font-default);
                    font-size: 14px;
                    resize: vertical;
                    transition: all 0.3s ease;
                    margin-bottom: 16px;
                }

                .fab-textarea-modern:focus {
                    outline: none;
                    border-color: #25D366;
                    box-shadow: 0 0 0 4px rgba(37, 211, 102, 0.1);
                }

                .fab-send-btn-modern {
                    width: 100%;
                    padding: 16px;
                    border: none;
                    border-radius: 12px;
                    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
                    color: white;
                    font-size: 16px;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
                }

                .fab-send-btn-modern:hover:not(.disabled) {
                    transform: translateY(-3px);
                    box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
                }

                .fab-send-btn-modern.disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                @media (max-width: 768px) {
                    .fab-modern-container {
                        bottom: 20px;
                        right: 20px;
                    }

                    .fab-modern-panel {
                        min-width: calc(100vw - 80px);
                        max-width: 340px;
                    }

                    .fab-main-trigger {
                        width: 60px;
                        height: 60px;
                        font-size: 28px;
                    }
                }
            `}</style>

            <div className="fab-modern-container" ref={containerRef}>
                {/* Panel moderno con header bordo */}
                <div 
                    className={`fab-modern-panel ${isOpen ? 'active' : ''}`} 
                    ref={menuRef}
                    style={{
                        opacity: isOpen ? 1 : 0,
                        visibility: isOpen ? 'visible' : 'hidden',
                        transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(20px)',
                        pointerEvents: isOpen ? 'auto' : 'none',
                    }}
                >
                    {!showWhatsAppForm ? (
                        <>
                            <div className="fab-panel-header">
                                <h3 className="fab-panel-title">¿Cómo querés pedir?</h3>
                                <p className="fab-panel-subtitle">Elegí tu método preferido</p>
                            </div>

                            <div className="fab-options-grid">
                                {/* WhatsApp */}
                                <div className="fab-option-card whatsapp" onClick={handleWhatsAppClick}>
                                    <div className="fab-option-icon whatsapp">
                                        <i className="fab fa-whatsapp"></i>
                                    </div>
                                    <div className="fab-option-content">
                                        <div className="fab-option-title">WhatsApp</div>
                                        <div className="fab-option-description">Chateá con nosotros</div>
                                    </div>
                                    <i className="fas fa-arrow-right fab-option-arrow"></i>
                                </div>

                                {/* PedidosYa */}
                                <div className="fab-option-card pedidosya" onClick={handlePedidosYaClick}>
                                    <div className="fab-option-icon pedidosya">
                                        <Image 
                                            src="/assets/img/icon/py.png"
                                            alt="PedidosYa"
                                            width={32}
                                            height={32}
                                        />
                                    </div>
                                    <div className="fab-option-content">
                                        <div className="fab-option-title">PedidosYa</div>
                                        <div className="fab-option-description">Pedí desde la app</div>
                                    </div>
                                    <i className="fas fa-arrow-right fab-option-arrow"></i>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="fab-panel-header">
                                <h3 className="fab-panel-title">Contactar por WhatsApp</h3>
                                <p className="fab-panel-subtitle">Envianos tu consulta</p>
                            </div>
                            
                            <div className="fab-whatsapp-form-modern">
                                <div className="fab-whatsapp-header-modern">
                                    <div className="fab-back-btn" onClick={handleBackToMenu}>
                                        <i className="fas fa-arrow-left"></i>
                                    </div>
                                    <div className="fab-whatsapp-title-modern">
                                        <div className="fab-option-icon whatsapp" style={{ width: '36px', height: '36px', fontSize: '18px' }}>
                                            <i className="fab fa-whatsapp"></i>
                                        </div>
                                        <h4>WhatsApp</h4>
                                    </div>
                                </div>

                                <div className="fab-schedule-modern">
                                    <div className="fab-schedule-title">
                                        <i className="far fa-clock"></i>
                                        <span>Horario de Atención</span>
                                    </div>
                                    <div className="fab-schedule-time">Lunes a Viernes: 7:00 AM – 6:00 PM</div>
                                </div>

                                <textarea
                                    className="fab-textarea-modern"
                                    placeholder="Escribe tu mensaje..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSendMessage();
                                        }
                                    }}
                                />

                                <div 
                                    className={`fab-send-btn-modern ${!message.trim() ? 'disabled' : ''}`}
                                    onClick={message.trim() ? handleSendMessage : undefined}
                                >
                                    <i className="fab fa-whatsapp"></i>
                                    <span>Enviar Mensaje</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Botón principal moderno */}
                <div
                    className={`fab-main-trigger ${isOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    role="button"
                    aria-label="Menú de contacto"
                >
                    <i className="fas fa-plus"></i>
                </div>
            </div>
        </>
    );
};

export default FloatingActionButton;
