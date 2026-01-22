import Link from 'next/link';
import Image from 'next/image';

const DeliveryV1 = () => {
    return (
        <>
            <div className="deliverya-process-area shadow dark default-padding bg-dark text-light bg-cover"
                style={{ backgroundImage: "url(/assets/img/banner/9.jpg)" }}>
                <div className="shape">
                    <Image src="/assets/img/illustration/11.png" alt="Image Not Found" width={697} height={822} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-8">
                            <div className="delivary-projcess">
                                <h2>¡Delivery en 30 Minutos!</h2>
                                <p>
                                    Ambiente relajante y agradable, buena música, cena y cócteles. Disfruta de una experiencia gastronómica única con delivery rápido y eficiente. Te garantizamos la mejor calidad y sabor en cada pedido.
                                </p>
                                <Link className="btn btn-theme btn-md animation mt-10" href="/shop">Pedir Ahora <i className="far fa-shopping-cart"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliveryV1;
