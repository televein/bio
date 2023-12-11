// Address.jsx

import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';

const Address = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryDate, setDeliveryDate] = useState({
    day: '01',
    month: 'January',
    year: '2020',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Delivery Details:', {
      fullName,
      address,
      phoneNumber,
      deliveryDate,
    });

    // Reset the form fields after submission
    setFullName('');
    setAddress('');
    setPhoneNumber('');
    setDeliveryDate({
      day: '01',
      month: 'January',
      year: '2020',
    });
  };

  return (
    <div className="mt-5 p-5 border border-gray-200">
      <h1 className="font-bold mb-2">Delivery:</h1>
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
        <div className="mb-3">
          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
            Delivery Date
          </label>
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
                {[...Array(10).keys()].map((year) => {
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
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Address;
