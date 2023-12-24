import React, { useEffect, useState } from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const CakeOrderForm = () => {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [description, setDescription] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [city,setCity] = useState(null);


  const renderButton = (value, onClick, isSelected) => (
    <button
      className={`mb-2 md:mb-0 md:mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
        isSelected ? 'bg-blue-700' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [emailData, setEmailData] = useState({
    to: 'televeininfo@gmail.com',
    subject: 'Regarding Your Inquiry',
    selectedWeight,
    selectedLayer,
    selectedTheme,
    selectedFlavor,
    description,
    deliveryDate,
    fullName,
    address,
    phoneNumber,
    city,
    message: 'This is the content of my email.',
  });

  const handleButtonClick = async () => {
    // Update emailData before sending email
    setEmailData({
      to: 'televeininfo@gmail.com',
      subject: 'Our customer ordered the cake.',
      selectedWeight: selectedWeight,
      selectedLayer: selectedLayer,
      selectedTheme: selectedTheme,
      selectedFlavor: selectedFlavor,
      description: description,
      deliveryDate: deliveryDate,
      fullName:fullName,
      address:address,
      phoneNumber:phoneNumber,
      city:city,
      message: 'This is the order details.',
  });

  };
  
  
    const sendEmail = async () => {
      if((emailData.selectedWeight !== null)&&(emailData.selectedLayer!== null)&&(emailData.selectedTheme!== null)&&(emailData.selectedFlavor!== null)&&(emailData.description!== null)&&(emailData.deliveryDate!== null)&&(emailData.fullName!== null)&&(emailData.address!== null)&&(emailData.phoneNumber!== null)&&(emailData.city!== null)){
                try {
          // const response = await fetch('http://localhost:3002/send-email', {
          const response = await fetch('https://server-aimq.onrender.com/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(emailData),
          });
          console.log("4");
          if (response.ok) {
            setOrderPlaced(true);
            setTimeout(() => {
              setOrderPlaced(false);
              navigate('/');
            }, 1500);
            console.log('Email sent successfully!');
            console.log(selectedLayer);
          } else {
            console.error('Failed to send email.');
           
          }
        } catch (error) {
          console.error('Error sending email:', error);
        }
      }
      else{
        setWrong(true);
        setTimeout(() => {
          setWrong(false);
          // navigate('/');
        }, 1500);
      }
    }

  useEffect(() => {
    // This will run after aim has been updated to "bye"
    sendEmail();
  }, [emailData]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mt-24 lg:mt-6 mx-auto p-5 ">
     <div className=" lg:mx-5 lg:mt-6">
      <h1 className="text-grey-600 font-bold  py-5 text-2xl lg:text-3xl text-left">
          Order <span className="text-blue-500">Cake</span>
        </h1>
        <hr />
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Cake Weight</h2>
        <div className="flex flex-col md:flex-row" name="selectedWeight">
          {renderButton('500g', () => setSelectedWeight('500g'), selectedWeight === '500g')}
          {renderButton('1000g', () => setSelectedWeight('1000g'), selectedWeight === '1000g')}
          {renderButton('1500g', () => setSelectedWeight('1500g'), selectedWeight === '1500g')}
          {renderButton('2000g', () => setSelectedWeight('2000g'), selectedWeight === '2000g')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Cake Layers</h2>
        <div className="flex flex-col md:flex-row">
          {renderButton('Single Layer', () => setSelectedLayer('Single Layer'), selectedLayer === 'Single Layer')}
          {renderButton('Double Layer', () => setSelectedLayer('Double Layer'), selectedLayer === 'Double Layer')}
          {renderButton('Triple Layer', () => setSelectedLayer('Triple Layer'), selectedLayer === 'Triple Layer')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Cake Theme</h2>
        <div className="flex flex-col md:flex-row">
          {renderButton('Birthday', () => setSelectedTheme('Birthday'), selectedTheme === 'Birthday')}
          {renderButton('Anniversary', () => setSelectedTheme('Anniversary'), selectedTheme === 'Anniversary')}
          {renderButton('Wedding', () => setSelectedTheme('Wedding'), selectedTheme === 'Wedding')}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Cake Flavor</h2>
        <div className="flex flex-col md:flex-row">
          {renderButton('Vanilla', () => setSelectedFlavor('Vanilla'), selectedFlavor === 'Vanilla')}
          {renderButton('Chocolate', () => setSelectedFlavor('Chocolate'), selectedFlavor === 'Chocolate')}
          {renderButton('Blueberry', () => setSelectedFlavor('Blueberry'), selectedFlavor === 'Blueberry')}
          {renderButton('Pista', () => setSelectedFlavor('Pista'), selectedFlavor === 'Pista')}
          {renderButton('Pineapple', () => setSelectedFlavor('Pineapple'), selectedFlavor === 'Pineapple')}
          {renderButton('Strawberry', () => setSelectedFlavor('Strawberry'), selectedFlavor === 'Strawberry')}
        </div>
      </div>
      <div className="mb-3">
      <h2 className="text-2xl font-bold mb-2">Delivery Date</h2>
{/*  */}  <input
          className="border rounded w-full p-2"
          placeholder="19-12-2023"
              type="date"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              required
            />
        </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Cake Description</h2>
        <textarea
          className="border rounded w-full p-2"
          placeholder="Enter cake description..." 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
       <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Name</h2>
        <input
          className="border rounded w-full p-2"
          placeholder="John Smith"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Address</h2>
        <input
          className="border rounded w-full p-2"
          placeholder="123 Main St, City, Country"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
      </div>
      <div  className="mb-4">
      <h2 className="text-2xl font-bold mb-2">City</h2>
      <select
                  className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  value={city}
                  onChange={(e) =>
                    setCity( e.target.value )
                  }
                  required
                >
                  {/* Options for city */}
                  {[
                    '','Karur','Erode','Tirpur','Namakkal'
                  ].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
      </div>
      {/* <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">District</h2>
        <input
          className="border rounded w-full p-2"
          placeholder="Erode"
              type="text"
              value={address}
              onChange={(e) => setDistrict(e.target.value)}
              required
            />
      </div> */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Phone Number</h2>
        <input
          className="border rounded w-full p-2"
          placeholder="+91XXXXXXXXXX"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
      </div>
     
        <button  onClick={handleButtonClick} className="bg-blue-400 hover:bg-blue-500 mt-4">
          Place Order
        </button>
        {orderPlaced && (
            <div
              className="font-bold flex items-center absolute  bg-green-500 text-white rounded p-2 transition-transform duration-300 animate-bounce"
            >
              <h1>Order Placed</h1> <AiOutlineCheck/>
            </div>
          )}
        {wrong && (
            <div
              className="font-bold flex items-center absolute  bg-red-500 text-white rounded p-2 transition-transform duration-300 animate-bounce"
            >
              <h1>Fill all the column</h1>
            </div>
          )}
     </div>
    </div>
  );
};

export default CakeOrderForm;

