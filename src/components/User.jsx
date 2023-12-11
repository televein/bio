import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Link } from "react-router-dom";

function User() {
  // const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { setLoginStatus} = useAuth();
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Delivery Details:', {
      fullName,
      address,
      phoneNumber,

    });
    setFullName('');
    setAddress('');
    setPhoneNumber('');

  };
  // try {
  //   const response = fetch('http://localhost:3002/user', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({loginStatus}),
  //   });

    // if (response.ok) {
    //    setData= response.json();
      // setLoginStatus(username);
      // console.log(username);
      // console.log('Login successful');
      // setName(username);
      // setPass(password);

      // Redirect to the home page upon successful login
      // navigate('/');
  //   } else {
  //     setLogin('failure');
  //     setLoginStatus('failure');
  //     console.error('Login failed');
  //   }
  // } catch (error) {
  //   setLoginStatus('failure');
  //   console.error(error);
  // }
  // // const [userData, setUserData] = useState(null);
  // const [name,setName] = useAuth('');
  // const [pass,setPass] = useAuth('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // useEffect(() => {
    // const fetchUserData = async () => {
      // try {
      //   const response = await fetch('http://localhost:3002/user', {
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify({ username, password }),
      //   });
  
      //   if (response.ok) {
      //     // setLoginStatus('success');
      //     console.log(' successful');
  
      //     // Redirect to the home page upon successful login
      //     // navigate('/');
      //   } else {
      //     // setLogin('failure');
      //     // setLoginStatus('failure');
      //     console.error(' failed');
      //   }
      // } catch (error) {
      //   setLoginStatus('failure');
      //   console.error(error);
      // }
    
    // };

    // if (user) {
    //   fetchUserData();
    // }
  // }, [user]);

  const handleLogout = () => {
    setLoginStatus('failure');
    navigate('/');
  };

  return (
    <div className="container mt-24 lg:mt-6 mx-auto p-5 ">
      <div className=" lg:mx-5 lg:mt-6">
        <h1 className="text-grey-600 font-bold text-2xl lg:text-3xl py-5 text-left">
          User <span className="text-blue-500">Details</span>
        </h1>
        <hr />

      
          <div className="user-details text-grey-600 font-bold text-2xl lg:text-3xl py-5 text-left">
            <p>
              <strong >Username:</strong>
               {localStorage.getItem('username')}
            </p>
            {/* Add more user details as needed */}
            <p>
              <strong >Password:</strong> 
             {localStorage.getItem('password') }
            </p>
            <Link to="/address" className="bg-blue-400 hover:bg-blue-500 px-5 py-1 hover:shadow-lg rounded-full ">
                <button >
                  Address
                </button>
              </Link>
              <div className="mt-5 p-5 border border-gray-200">
      <h1 className="font-bold mb-2">Address:</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
            Full Name
          </label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="John Smith"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
            Address
          </label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="123 Main St, City, Country"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
            Phone Number
          </label>
          <div>
            <input
              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
              placeholder="+91XXXXXXXXXX"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div> 
            <h1  className="text-grey-600 font-bold text-2xl lg:text-3xl py-5 text-left">Orders</h1>
            {/* Add more user details as needed */}
          </div>
        {/* ) : (
          <p>Loading user details...</p>
        )} */}

        <div className="orders">
          {/* <h2 className="font-bold text-xl mt-4">Orders</h2> */}
          {/* Display user's order history */}
          {/* You can fetch and display the orders from your backend */}
          {/* Example: userData.orders.map(order => <OrderComponent key={order.id} order={order} />) */}
        </div>

        <button
          type="button"
          className="bg-blue-400 hover:bg-blue-500 mt-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default User;
