import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/Authcontext/AuthContext';


const AllRecoveredItems = () => {
    const {user} = useContext(AuthContext);
    const [recoverItem, setRecoverItem] = useState([]);
    console.log(user)
  
    useEffect(() => {
        if (user && user.email) { 
          fetch(`https://b10a11-server-side-noorjahan220.vercel.app/recoveredItem?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => setRecoverItem(data))
            .catch((error) => console.error("Error fetching recovered items:", error));
        }
      }, [user]);
    return (
        <div>
            <h2>here the recover items :{recoverItem.length} </h2>
        </div>
    );
};

export default AllRecoveredItems;