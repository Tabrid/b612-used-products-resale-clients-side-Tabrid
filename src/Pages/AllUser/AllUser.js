import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const AllUser = () => {
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        fetch('https://finnal-project-server.vercel.app/users')
            .then((response) => response.json())
            .then((data) => setAllUsers(data));


    }, [])

    const handleMakeAdmin = id => {

        fetch(`https://finnal-project-server.vercel.app/users/admin/${id}`, {


            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make admin successful')
                }
            })
    }
    const handleMakeVerify = id => {

        fetch(`https://finnal-project-server.vercel.app/users/verify/${id}`, {


            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
                // if (data.modifiedCount > 0) {
                //     toast.success('make verify successful')
                // }
            })
    }



    return (
        <div className="overflow-x-auto">
            <table className="table table-compact w-full">
                <thead>
                    <tr>

                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>make admin</th>
                        <th>Verify</th>
                        <th>make verify</th>
                        <th>delete</th>
                    </tr>
                </thead>
                {

                    allUsers.map((allUsers, i) => <tr key={allUsers._id}>

                        <th>{i + 1}</th>
                        <th>{allUsers.name}</th>
                        <th>{allUsers.mail}</th>
                        <th>{allUsers.role}</th>
                        <th>{allUsers?.role !== "admin" && <button onClick={() => handleMakeAdmin(allUsers._id)} className='btn btn-xs btn-accent'>make admin</button>}</th>
                        <th>{allUsers.verified}</th>
                        <th>{    allUsers?.verified !== "verified" &&        <button className='btn btn-xs btn-accent'onClick={() => handleMakeVerify(allUsers._id)}>make</button>}</th>
                        <th><button className='btn btn-xs btn-accent'>delete</button></th>
                    </tr>)



                }


            </table>
        </div>
    );
};

export default AllUser;