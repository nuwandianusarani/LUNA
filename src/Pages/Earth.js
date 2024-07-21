import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Earth = () => {
  const [imageURL, setImageURL] = useState("");
  const [selectedDate, setSelectedDate] = useState();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/earth/assets?lon=100.75&lat=1.5&date=${selectedDate.startDate}&dim=0.15&api_key=959WvZf6OwGI5J6hVB9YvHc0CU3Jeb3hnZ24bm5X`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setImageURL(data.url);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (selectedDate) {
      fetchData();
    }
  }, [selectedDate]);

  return (
    <div style={{ minHeight: "75vh" }} className="mx-auto max-w-7xl mb-20">
      <h1 className="text-white text-3xl mb-4">Earth Photos</h1>
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-black opacity-70 z-10" />
        <div className="relative z-20 p-4">
          <h2 className="text-white">
            <b>
              Note that the returned object may not match the supplied date
              exactly. Instead, the image closest to the supplied date is
              returned.
            </b>
          </h2>
        </div>
      </div>
      <div className="flex mb-5">
        <div className="w-60 ml-10 mr-10">
          <Datepicker
            useRange={false}
            asSingle={true}
            format="yyyy-MM-dd"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-1 mt-1"
          onClick={fetchData}
        >
          Submit
        </button>
      </div>
      <div>
        {imageURL && (
          <div className="border-2 border-white-600 rounded">
            <img src={imageURL} alt="NASA Image" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Earth;
