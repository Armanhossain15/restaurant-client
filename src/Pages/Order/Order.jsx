import Cover from '../Shared/Cover/Cover';
import orderImg from './../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../Hooks/UseMenu";
import { useState } from 'react';
// import FoodCard from '../Shared/FoodCard/FoodCard';
import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Order = () => {
    const [menu] = UseMenu()
    // const offered = menu.filter(item => item.category === 'offered')
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const categories = ['dessert', 'pizza', 'salad', 'Soup']
    const { category } = useParams()
    const initialIndex = categories?.indexOf(category)
    console.log('initialIndex', initialIndex);
    console.log('category', category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    return (
        <div>
            <Helmet>
                <title>Restrurent Web - Order Food</title>
            </Helmet>
            <Cover
                img={orderImg}
                coverTitle={'OUR SHOP'}
                coverDescription={'Would you like to try a dish?'}
            ></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Dessert</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Soup</Tab>
                </TabList>

                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;