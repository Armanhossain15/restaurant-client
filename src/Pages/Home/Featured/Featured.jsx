import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import image from './../../../assets/home/featured.jpg'
import './Features.css'
const Featured = () => {
    return (
        <div className="featuredSection text-white my-24 bg-fixed ">

            <section className="pt-10 bg-slate-900 bg-opacity-70">
                <SectionTitle
                    heading={'FROM OUR MENU'}
                    subHeading={'Check it out'}
                ></SectionTitle>
            </section>
            <section className="md:flex justify-between items-center py-20 bg-slate-900 bg-opacity-70 px-28">

                <div>
                    <img src={image} alt="" />
                </div>
                <div className="md:ml-5">
                    <h2>March 20, 2023</h2>
                    <h2>WHERE CAN I GET SOME?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn">Read More</button>
                </div>
            </section>
        </div>
    );
};

export default Featured;