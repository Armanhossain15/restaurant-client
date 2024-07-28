import { Helmet } from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import dessertCover from "./../../assets/menu/dessert-bg.jpeg"
import saladCover from "./../../assets/menu/salad-bg.jpg"
import pizzaCover from "./../../assets/menu/pizza-bg.jpg"
import SoupCover from "./../../assets/menu/soup-bg.jpg"
import menubg from './../../assets/menu/banner3.jpg'
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import UseMenu from "../../Hooks/UseMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = UseMenu()
    const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Restrurent Web - Menu</title>
            </Helmet>
            <Cover
                img={menubg}
                coverTitle='OUR MENU'
                coverDescription='Would you like to try a dish?'
            ></Cover>
            <SectionTitle
                heading={"TODAY'S OFFER"}
                subHeading={"Don't miss"}
            ></SectionTitle>
            <MenuCategory
                items={offered}
            ></MenuCategory>
            <MenuCategory
                items={dessert}
                coverTitle={'dessert'}
                coverDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={dessertCover}
            ></MenuCategory>
            <MenuCategory
                items={salad}
                coverTitle={'salad'}
                coverDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={saladCover}
            ></MenuCategory>
            <MenuCategory
                items={pizza}
                coverTitle={'pizza'}
                coverDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={pizzaCover}
            ></MenuCategory>
            <MenuCategory
                items={soup}
                coverTitle={'Soup'}
                coverDescription={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                img={SoupCover}
            ></MenuCategory>


        </div>
    );
};

export default Menu;