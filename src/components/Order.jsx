import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const CakeOrderForm = () => {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [description, setDescription] = useState('');
  const [deliveryDate, setDeliveryDate] = useState({
    day: '01',
    month: 'January',
    year: '2020',
  });

  const form = useRef();

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

  const sendEmail = (e) => {
    e.preventDefault();

  

    // You can also include the order details in the email, for example:
    const orderDetails = {
      selectedWeight,
      selectedLayer,
      selectedTheme,
      selectedFlavor,
      description,
      deliveryDate,
    };

    emailjs.sendForm('service_6ojok14', 'template_ivinqlz', form.current, 'Z2njvmvcI-wjo7maa')
    .then((result) => {
      console.log(result.text);
      console.log(selectedWeight);
    }, (error) => {
      console.log(error.text);
    });
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Delivery Details:', deliveryDate);
    setDeliveryDate({
      day: '01',
      month: 'January',
      year: '2020',
    });
  };

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

          <div className="-mx-2 flex items-end">
            <div className="px-2 w-2/8">
              <div>
                <select
                  className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  value={deliveryDate.day}
                  onChange={(e) =>
                    setDeliveryDate({ ...deliveryDate, day: e.target.value })
                  }
                >
                  {/* Options for day */}
                  {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                      {day + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="px-2 w-3/8">
              <div>
                <select
                  className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                  value={deliveryDate.month}
                  onChange={(e) =>
                    setDeliveryDate({ ...deliveryDate, month: e.target.value })
                  }
                >
                  {/* Options for month */}
                  {[
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                  ].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="px-2 w-3/8">
              <select
                className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                value={deliveryDate.year}
                onChange={(e) =>
                  setDeliveryDate({ ...deliveryDate, year: e.target.value })
                }
              >
                {/* Options for year */}
                {[...Array(2).keys()].map((year) => {
                  const currentYear = new Date().getFullYear();
                  return (
                    <option key={currentYear + year} value={currentYear + year}>
                      {currentYear + year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
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
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="selectedTheme" value={selectedTheme} />
        <button type="submit" className="bg-blue-400 hover:bg-blue-500 mt-4">
          Place Order
        </button>
      </form>
    </div>
    </div>
  );
};

export default CakeOrderForm;
