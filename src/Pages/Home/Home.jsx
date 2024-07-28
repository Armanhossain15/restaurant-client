// import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import Categorys from "./Categorys/Categorys";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    // const allData = useLoaderData()
    // // console.log('allData', allData);
    // const popularData = allData.filter(item => item.filter(each => each?.category === 'popular'))
    // console.log('popularData', popularData);
    return (
        <div>
             <Helmet>
                <title>Restrurent Web - Home</title>
            </Helmet>
            <Banner/>
            <Categorys/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
        </div>
    );
};

export default Home;