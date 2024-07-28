import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";


const MenuCategory = ({ items, coverDescription, img, coverTitle }) => {
    return (
        <div>
            <div className="my-10">
                {
                    img && <Cover
                        img={img}
                        coverTitle={coverTitle}
                        coverDescription={coverDescription}
                    ></Cover>
                }
            </div>
            <div className="grid grid-cols-2 gap-10 my-6 mt-24">
                {
                    items?.map(item => (
                        <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>
                    ))
                }
            </div>
            <Link to={`/order/${coverTitle}`}>
                <div className="text-center mb-8">
                    <button className="btn border-0 bg-transparent border-b-4 border-black">View Full Menu</button>
                </div>
            </Link>
        </div>
    );
};

export default MenuCategory;