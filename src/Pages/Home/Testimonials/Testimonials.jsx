import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    // console.log(reviews);
    return (
        <div>
            <section>
                <SectionTitle
                    heading={'TESTIMONIALS'}
                    subHeading={'What Our Clients Say'}
                ></SectionTitle>
            </section>
            <section className="my-8">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
                    {
                        reviews.map(eachReview => <SwiperSlide
                            key={eachReview._id}>
                            <div className="text-center flex items-center justify-center flex-col w-2/3 mx-auto">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={eachReview.rating}
                                    readOnly
                                />
                                <p>{eachReview.details}</p>
                                <h2 className="text-2xl text-orange-400">{eachReview.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;