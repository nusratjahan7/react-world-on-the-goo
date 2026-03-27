import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navgationData = [
    {
      id: 1,
      name: "Home",
      path: "/"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog"
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact"
    }
  ];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links =  navgationData.map(route => <Link key={route.id} route = {route}></Link>);
    return (
        <nav className='flex justify-between mx-10 mt-4'>
            <span className='flex' onClick={() => setOpen(!open)}>
             {
                open ? 
                    <X className='md:hidden'></X> : 
                    <Menu className='md:hidden'></Menu>
             }    
              <ul className={`md:hidden absolute duration-1000
                ${open ? 'top-11' : '-top-40'}`}>
                {links}
              </ul>
            <h3 className='ml-4'>My navbar</h3>
            </span>
            <ul className='md:flex hidden'>
            {
               links
            }
            </ul>

             {/* <ul className='flex'>
            //     {
            //         navgationData.map(route => <li className='mr-10'>
            //             <a href={route.path}>{route.name}</a>
            //             </li>)
            //     }
            // </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href='/'>Home</a></li>
                <li className='mr-10'><a href='/'>Blog</a></li>
                <li className='mr-10'><a href='/'>Home</a></li>
            </ul> */}

            <button className='btn'>Sign In</button>

        </nav>
    );
};

export default Navbar;