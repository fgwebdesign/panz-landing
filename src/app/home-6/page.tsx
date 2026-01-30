import AboutV2 from "@/components/about/AboutV2";
import BannerV2 from "@/components/banner/BannerV2";
import BodyColor2 from "@/components/classes/BodyColor2";
import FoodMenuV2 from "@/components/food/FoodMenuV2";
import GalleryV2 from "@/components/gallery/GalleryV2";
import LayoutV5 from "@/components/layouts/LayoutV5";
import ReservationV1 from "@/components/reservation/ReservationV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";
import PageLoader from "@/components/preloader/PageLoader";

const Home6 = () => {
    return (
        <>
            <PageLoader />
            <LayoutV5>
                <BannerV2 />
                <AboutV2 />
                <ReservationV1 btnClass="reservation-btn" />
                <FoodMenuV2 />
                <GalleryV2 />
                <TestimonialV1 />
                <BodyColor2 />
            </LayoutV5>
        </>
    );
};

export default Home6;