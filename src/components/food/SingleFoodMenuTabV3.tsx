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

const SingleFoodMenuTabV3 = ({ data }: { data: DataType }) => {
    const { id, thumb, name, price, priceFull, leftInfo, rightInfo } = data

    return (
        <>
            <li>
                <div className="thumbnail food-menu-thumb-fixed">
                    <Image
                        src={`/assets/img/productos/${thumb}`}
                        alt={name}
                        width={176}
                        height={176}
                        className="food-menu-thumb-img"
                    />
                </div>
                <div className="content">
                    <div className="top">
                        <div className="title">
                            <h4><Link href={`/shop-single/${id}`}>{name}</Link></h4>
                        </div>
                        <div className="price">
                            <span>${price}</span>
                            <span>${priceFull}</span>
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

export default SingleFoodMenuTabV3;