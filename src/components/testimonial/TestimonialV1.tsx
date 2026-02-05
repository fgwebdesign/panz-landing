"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import TestimonialV1Data from "@/assets/jsonData/testimonial/TestimonialV1Data.json"
import SingleTestimonialV1 from './SingleTestimonialV1';

const TestimonialV1 = () => {
    return (
        <>
            <div className="testimonial-area bg-gray default-padding">
                <div className="testimonial-shape">
                    <Image src="/assets/img/shape/5.png" width={636} height={500} alt="Image Not Found" />
                    <Image src="/assets/img/shape/7.png" width={750} height={500} alt="Image Not Found" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Clientes Felices</h4>
                                <h2 className="title">Opiniones de nuestros clientes</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row align-center ">
                        <div className="col-lg-5">
                            <div className="testimonial-thumb">
                                <Image src="/assets/img/productos/26.jpeg" width={800} height={800} alt="Pizza al horno PanZ" style={{ objectFit: 'cover' }} quality={90} />
                                <Image src="/assets/img/productos/milahuevonois.jpeg" width={300} height={300} alt="Milanesa con huevo PanZ" style={{ objectFit: 'cover' }} quality={85} />
                                <Image src="/assets/img/productos/picada.jpeg" width={300} height={300} alt="Picada PanZ" style={{ objectFit: 'cover' }} quality={85} />
                                <Image src="/assets/img/productos/27.jpeg" width={300} height={300} alt="Chivito PanZ" style={{ objectFit: 'cover' }} quality={85} />
                            </div>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <Swiper
                                className="testimonial-carousel"
                                modules={[Keyboard, Autoplay, Navigation, Pagination]}
                                direction={'horizontal'}
                                loop={true}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    el: ".swiper-pagination",
                                    clickable: true,
                                }}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV1Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV1 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                                <div className="swiper-pagination"></div>
                            </Swiper>
                            
                            {/* Botón para ver reseñas en Google */}
                            <div className="google-reviews-btn">
                                <Link 
                                    href="https://www.google.com/search?q=panz+paysandu&" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-google-reviews"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                                    </svg>
                                    <span>Ver todas las reseñas en Google</span>
                                    <i className="fas fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;