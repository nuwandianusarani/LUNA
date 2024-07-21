import React, { useState, useEffect } from "react";

const Card1 = () => {
  // State to store APOD data
  const [apodData, setApodData] = useState(null);

  // Fetch APOD data when component mounts
  useEffect(() => {
    fetchApodData();
  }, []);

  // Function to fetch APOD data from NASA API
  const fetchApodData = async () => {
    try {
      const response = await fetch(
        "https://api.nasa.gov/planetary/apod?api_key=959WvZf6OwGI5J6hVB9YvHc0CU3Jeb3hnZ24bm5X"
      );
      const data = await response.json();
      // Set fetched data to state
      setApodData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {/* APOD Section */}
      <section className="bg-primary text-white py-40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* APOD Text Content */}
            <div className="space-y-3 xl: p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 w-full">
              {apodData && (
                <div>
                  {/* APOD Title */}
                  <h5 className="text-3xl font-bold tracking-wide">
                    Astronomy Picture Of The Day
                  </h5>
                  {/* APOD Title */}
                  <p
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="text-sky-800 uppercase"
                  >
                    {apodData.title}
                  </p>
                  {/* APOD Explanation */}
                  <p data-aos="fade-up" data-aos-delay="700">
                    {apodData.explanation}
                  </p>
                </div>
              )}
              {/* Button to View All */}
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            {/* APOD Image */}
            <div data-aos="zoom-in">
              {apodData ? (
                // Display APOD Image
                <img
                  src={apodData.url}
                  alt=""
                  className="sm:w-[80%] mx-auto max-h-[350px] object-cover"
                />
              ) : (
                // Loading state while fetching data
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                  Loading...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card1;
