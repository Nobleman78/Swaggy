import { Link, Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ContextApi } from '../components/Context/Context';
import { useContext, useEffect, useState } from 'react';

const Menu = () => {
    const { menuTwo } = useContext(ContextApi);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [menuItems, setMenuItems] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setMenuItems(data))
    })
    const toggleDropDown = (name) => {
        setOpenDropdown(openDropdown === name ? null : name)
    }
    return (
        <div className='sm:max-w-7xl mx-auto px-2 relative '>
            <Helmet>
                <title>Menu | Food King</title>
            </Helmet>

            {menuTwo && (
                <div className='w-full bg-white shadow-xl px-10 absolute  rounded-lg'>
                    <ul className='flex gap-5 items-start py-6 relative'>
                        {menuItems.map((item, index) => (
                            <div key={index} className='relative'>
                                <button  onClick={() => toggleDropDown(item.category)} className='font-medium text-sm hover:text-green-600 bg-gray-300 rounded-full cursor-pointer px-3 py-2'>{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</button>
                                {openDropdown === item.category && (
                                    <ul className='absolute bg-white shadow-lg  mt-2 rounded-md py-3 text-center  min-w-[180px] space-y-2'>
                                        {item.children.map((child, idx) => (
                                            <li key={idx} className='hover:bg-gray-200' >
                                                <Link to={child.path} className='block w-full' onClick={() => setOpenDropdown(null)}>
                                                    
                                                        {child.name}
                                                   
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                        <Outlet />
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Menu;
