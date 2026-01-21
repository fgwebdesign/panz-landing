"use client"
import Link from 'next/link';
import { toast } from 'react-toastify';
import SocialShare from '../social/SocialShare';
import Image from 'next/image';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

interface DataType {
    isInfoOpen: boolean;
    closeInfoBar: () => void;
}

const SidebarInfoV2 = ({ closeInfoBar, isInfoOpen }: DataType) => {

    const handleSubscribe: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("¡Gracias por suscribirte!")
    }

    return (
        <>
            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <Link href="#" className="close-side" onClick={closeInfoBar}><i className="fas fa-times"></i></Link>
                <div className="widget">
                    <div className="logo">
                        <Image src="/assets/img/panzwhite.png" width={612} height={222} alt="Logo PanZ" />
                    </div>
                    <p>
                        Desde hace más de 30 años acompañamos a la gente de Paysandú en sus momentos más importantes. Todos nuestros productos son de elaboración propia, preparados con dedicación y profesionalismo, utilizando siempre ingredientes frescos y de primera calidad.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Dirección</p>
                                    <strong>18 de Julio y Setembrino Pereda.</strong>
                                    <p>Paysandú, Uruguay</p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <a href="mailto:info@panz.com.uy"><strong>info@panz.com.uy</strong></a>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Teléfono</p>
                                    <a href="tel:+47229551"> <strong>4722 9551</strong></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">¡Suscríbete!</h4>
                    <form onSubmit={handleSubscribe}>
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Ingresa tu email" className="form-control" name="email" autoComplete='off' required />
                            <span className="input-group-addon">
                                <button type="submit">
                                    <i className="fas fa-arrow-right"></i>
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialShare />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarInfoV2;