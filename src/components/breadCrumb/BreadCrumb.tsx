import Link from 'next/link';

interface DataType {
    breadCrumb?: string;
    title?: string;
}

const BreadCrumb = ({ breadCrumb, title }: DataType) => {
    return (
        <>
            <div className="breadcrumb-area bg-cover shadow dark text-center text-light"
                style={{ backgroundImage: "url(/assets/img/shape/5.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h1>{title ? title : "Página de Error"}</h1>
                            <ul className="breadcrumb">
                                <li><Link href="#"><i className="fas fa-home"></i> Inicio</Link></li>
                                <li>{breadCrumb ? breadCrumb : "no-encontrado"}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreadCrumb;