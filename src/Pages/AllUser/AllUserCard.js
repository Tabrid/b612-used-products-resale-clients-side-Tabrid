import React from 'react';

const AllUserCard = ({allUsers}) => {
    const {name,mail,role} = allUsers;
    return (
        <div>
        <tbody>
      <tr>
        <td>{name}</td> 
        <td>{mail}</td> 
        <td>{role}</td> 
        
      </tr>
      
    </tbody> 
        </div>
    
    );
};

export default AllUserCard;