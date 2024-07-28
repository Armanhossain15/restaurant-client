import FoodCard from "../../Shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <div className='grid gap-10 grid-cols-3'>
            {
                items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;