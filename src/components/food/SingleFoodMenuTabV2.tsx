import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    id: number
    thumb: string
    name: string
    price: number
    priceFull: number
    leftInfo: string
    rightInfo: string
}

const SingleFoodMenuTabV2 = ({ data }: { data: DataType }) => {
    const { id, thumb, name, price, priceFull, leftInfo, rightInfo } = data
    
    // Mostrar solo un precio si ambos son iguales
    const showSinglePrice = price === priceFull;

    return (
        <>
            <li>
                <div className="thumbnail">
                    <Image src={`/assets/img/productos/${thumb}`} alt="Image Not Found" width={200} height={200} />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="title">
                            <h4><Link href={`/shop-single/${id}`}>{name}</Link></h4>
                        </div>
                        <div className="price">
                            {showSinglePrice ? (
                                <span style={{ fontSize: '22px', fontWeight: '700' }}>${price}</span>
                            ) : (
                                <>
                                    <span>${price}</span>
                                    <span>${priceFull}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <p>
                                {leftInfo}
                            </p>
                        </div>
                        <div className="right">
                            <p>
                                {rightInfo}
                            </p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    );
};

export default SingleFoodMenuTabV2;