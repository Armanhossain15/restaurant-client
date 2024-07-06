import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('./menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItem = data?.filter(each => each?.category === 'popular');
                setMenu(popularItem);
                // console.log('from useeffect', menu);
            });
    }, []); // Run effect only once on mount
    console.log('after useeffect', menu);
    return (
        <div>
            <section>
                <SectionTitle
                    heading={'FROM OUR MENU'}
                    subHeading={'Check it out'}
                ></SectionTitle>
            </section>
            <section>
                <div className="grid grid-cols-2 gap-10 my-6">
                    {
                        menu?.map(item => (
                            <MenuItem 
                                key={item._id}
                                item={item}
                            ></MenuItem>
                        ))
                    }
                </div>
                <div className="text-center">
                <button className="btn border-0 bg-transparent border-b-4 border-black">View Full Menu</button>
                </div>
            </section>
        </div>
    );
};

export default PopularMenu;
