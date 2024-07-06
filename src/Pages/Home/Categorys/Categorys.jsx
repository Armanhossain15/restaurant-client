import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import sliderImg1 from './../../../assets/home/slide1.jpg'
import sliderImg2 from './../../../assets/home/slide2.jpg'
import sliderImg3 from './../../../assets/home/slide3.jpg'
import sliderImg4 from './../../../assets/home/slide4.jpg'
import sliderImg5 from './../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
const Categorys = () => {
    return (
        <div>
            <section>
                <SectionTitle
                heading={'ORDER ONLINE'}
                subHeading = {'From 11:00am to 10:00pm'}
                ></SectionTitle>
            </section>
            <section>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24 mt-10"
                >
                    <SwiperSlide>
                        <img src={sliderImg1} alt="" />
                        <h1 className='text-3xl  uppercase text-center -mt-16 text-white'>SALADS</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg2} alt="" />
                        <h1 className='text-3xl  uppercase text-center -mt-16 text-white'>pizza</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg3} alt="" />
                        <h1 className='text-3xl  uppercase text-center -mt-16 text-white'>soups</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg4} alt="" />
                        <h1 className='text-3xl  uppercase text-center -mt-16 text-white'>desserts</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={sliderImg5} alt="" />
                        <h1 className='text-3xl  uppercase text-center -mt-16 text-white'>salads</h1>
                    </SwiperSlide>
                </Swiper>
            </section>
        </div>
    );
};

export default Categorys;