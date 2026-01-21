import Link from 'next/link';
import Image from 'next/image';

interface DataType {
    bgThumb: string;
    subTitle: string;
    titleFirst: string;
    titleLast: string;
    textFirst: string;
    textLast: string;
    btnText: string;
}

const SingleBannerV2 = ({ banner }: { banner: DataType }) => {
    const { bgThumb, subTitle, titleFirst, titleLast, textFirst, textLast, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark"
                style={{ background: `url(/assets/img/banner/${bgThumb})` }}>
            </div>
            <div className="container">
                <div className="content">
                    <div className="row align-center">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="info">
                                <h4>{subTitle}</h4>
                                {/* Logo de PANZ en lugar de texto */}
                                <div style={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center',
                                    gap: '10px',
                                    margin: '20px 0'
                                }}>
                                    <Image 
                                        src="/assets/img/panzwhite.png"
                                        alt="PANZ Logo"
                                        width={350}
                                        height={172}
                                        priority
                                        style={{
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                    <h2 style={{ marginTop: '10px' }}>{titleLast}</h2>
                                </div>
                                <p>{textFirst} <br /> {textLast}</p>
                                <div className="button mt-30">
                                    <Link className="btn btn-md btn-theme animation" href="/food-menu">{btnText}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBannerV2;