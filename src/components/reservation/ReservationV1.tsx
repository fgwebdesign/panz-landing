import ReservationForm from '../form/ReservationForm';

interface DataType {
    btnClass?: string;
    sectionClass?: string;
}

const ReservationV1 = ({ btnClass, sectionClass }: DataType) => {
    return (
        <>
            <div className={`reservation-area default-padding-top bg-cover shadow dark ${sectionClass}`}
                style={{ backgroundImage: 'url(/assets/img/banner/panzhero.jpg)' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="reservation-info modern text-light">
                                <h4 className="sub-heading">Reservar ahora</h4>
                                <h2 className="title">Reserva tu mesa con anticipación</h2>
                                <p>
                                    Disfruta de una experiencia gastronómica única. Te garantizamos un ambiente acogedor, servicio de calidad y los mejores sabores de Paysandú.
                                </p>
                                <div className="reservation-time modern">
                                    <ul>
                                        <li>
                                            <h4>🍽️ Menú del Día</h4>
                                            <p>
                                                30+ platos disponibles
                                            </p>
                                        </li>
                                        <li>
                                            <h4>🌙 Menú de Cena</h4>
                                            <p>
                                                50+ platos disponibles
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="whatsapp-badge">
                                    <i className="fab fa-whatsapp"></i>
                                    <span>Reserva también por WhatsApp</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="reservation-form modern animate" data-aos="fade-up" data-aos-delay="300">
                                <ReservationForm btnClass={btnClass} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReservationV1;