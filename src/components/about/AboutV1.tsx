import Link from 'next/link';
import Image from 'next/image';

const AboutV1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="about-thumb">
                    <div className="item animate" data-aos="fade-left" data-aos-delay="100" style={{ backgroundImage: "url(/assets/img/about/2.png)" }}></div>
                    <div className="item animate" data-aos="fade-left" data-aos-delay="200" style={{ backgroundImage: "url(/assets/img/about/1.png)" }}></div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-6">
                            <div className="about-style-one-info animate" data-aos="fade-up" data-aos-delay="400">
                                <Image src="/assets/img/shape/2.png" alt="Image Not Found" width={1061} height={500} />
                                <h4 className="sub-heading">Sobre nosotros</h4>
                                <h2 className="title">Te invitamos a <br /> visitarnos</h2>
                                <p>
                                Desde hace más de 30 años acompañamos a la gente de Paysandú en sus momentos más importantes.
Despedidas, brindis, festejos y muchas otras ocasiones especiales nos han convertido en un punto de encuentro y disfrute para gran parte de la comunidad sanducera. <br />
 Esperamos que disfrutes tu tiempo con nosotros, porque trabajamos cada día para ello. <br />
 Todos nuestros productos son de elaboración propia, preparados con dedicación, profesionalismo, ingredientes frescos y excelencia. <br />
 Nuestras carnes de alta calidad, pastas caseras y pizzas tradicionales hechas a mano son algunas de las razones por las que tanto locales como visitantes nos eligen.                                </p>
                                <Link className="btn btn-theme btn-md animation mt-10" href="/about-us">Descubrir más</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;