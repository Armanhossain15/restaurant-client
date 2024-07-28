// import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const PopularMenu = () => {

    const [menu] = UseMenu();
    const popular = menu.filter(item=> item.category === 'popular')
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
                        popular?.map(item => (
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
