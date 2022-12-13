import { Link,NavLink } from "react-router-dom";
import { useRef } from "react";

function NavBar ({ user, setUser }) {
    function handleLogoutClick() {
      fetch("https://storebooks-production.up.railway.app/logout",{ 
        method: "DELETE" })
        .then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }
    
  
    const menuRef = useRef()

    const showMenu = () => {
        menuRef.current.classList.toggle("hidden")
    }
    

    return ( 
        <div className="navbar-container">
                <nav className='md:py-6 py-4 px-4'>
                    <div className="navbar md:flex  justify-around items-center " >
                        <div className='flex items-center justify-between'>
                           
                        <img src={user.image}className="p-1 w-20 h-20 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"  alt="Avatar" />
                            <Link to='/' className='md:text-3xl text-2xl uppercase font-semibold '>Halisi BookStore</Link>
                            <button onClick={showMenu} className="md:hidden">
                                <i className="text-xl fa fa-bars"></i> 
                                {/* <i className="fa fa-times"></i> */}
                            </button>
                        </div>

                        <div ref={menuRef} className="md:flex hidden ">
                            <ul className="md:flex items-center md:text-lg font-medium">
                            
                            
                            
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <NavLink to='/Home'>Home</NavLink>
                                </li>
                                
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <NavLink to='/Author'>Authors</NavLink>
                                </li>
                                <li className='md:mx-8 md:my-0 my-2'>
                                    <NavLink to='/Genre'>Genres</NavLink>
                                </li>
                                <li className='md:mx-8 md:my-0 my-2 '>
                                    <NavLink to="/About" className="bg-green-400 hover:bg-green-600 hover:text-gray-100
                                     px-4 py-2 rounded-md">About us</NavLink>
                                </li>
                                <li className='md:mx-8 md:my-0 my-2 '>
                                    <button onClick={handleLogoutClick}> Logout
                                    </button>

                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            
            </div>
     );
}
 
export default NavBar;