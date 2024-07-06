
import PropTypes from 'prop-types';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item || {}
    return (
            <div className='flex items-center gap-x-5'>
                <img  style={{borderRadius: '0 200px 200px 200px'}} src={image} alt=""  className='w-2/12 '/>
                <div>
                <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-medium'>{name}  ---------------</h3>
                <p className='text-[#BB8506] text-2xl'>{price}</p>
                </div>
                <p className='text-base w-2/3'>{recipe}</p>
                </div>
            </div>

    );
};

MenuItem.propTypes = {
    item: PropTypes.object
};
export default MenuItem;


