import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/UseAdmin';
import useSeller from '../Hooks/useSeller';
import useBuyer from '../Hooks/useBuyer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashbordLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
    console.log('from dashbord', isSeller);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                    

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {
                           isSeller && 

                            <>
                            <li><Link to='/dashboard/addproduct'>Add Product</Link></li>
                        <li><Link to='/dashboard/myproduct'>My product</Link></li>
                        </>}

                       { 
                         isBuyer &&
                       
                       <li><Link to='/dashboard/booking'>My Booking</Link></li>}


                        { isAdmin &&
                            <li><Link to='/dashboard/users'>All Users</Link></li>
                         }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashbordLayout;