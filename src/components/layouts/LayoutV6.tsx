import HeaderTopV2 from '../header/HeaderTopV2';
import FooterV2 from '../footer/FooterV2';
import HeaderV5 from '../header/HeaderV5';
import BreadCrumb from '../breadCrumb/BreadCrumb';

interface DataType {
    children: React.ReactNode;
    breadCrumb?: string;
    title?: string;
    logoWhite?: boolean;
}

const LayoutV6 = ({ children, breadCrumb, title, logoWhite }: DataType) => {
    return (
        <>
            <div className="wrapper">
                <HeaderTopV2 />
                <HeaderV5 />
                {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
                {children}
                <FooterV2 />
            </div>
        </>
    );
};

export default LayoutV6;