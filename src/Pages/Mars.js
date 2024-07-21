import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Mars = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedDate, setSelectedDate] = useState();
  const [noPhotos, setNoPhotos] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate.startDate}&api_key=DEMO_KEY`
      );
      const data = await response.json();
      if (data.photos.length === 0) {
        setNoPhotos(true);
      } else {
        setNoPhotos(false);
        setPhotos(data.photos);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (selectedDate) {
      fetchData();
    }
  };

  return (
    <div style={{ minHeight: "100vh" }} className="mx-auto max-w-7xl mb-20">
      <h1 className="text-white text-3xl mb-4">Mars Photos</h1>
      <div className="max-w-8xl w-full rounded overflow-hidden shadow-lg bg-gray-800 p-6 text-white mb-8 opacity-80">
        <p className="mb-4">
          This API is designed to collect image data gathered by NASA's
          Curiosity, Opportunity, and Spirit rovers on Mars and make it more
          easily available to other developers, educators, and citizen
          scientists. This API is maintained by Chris Cerami.
        </p>
        <p className="mb-4">
          Each rover has its own set of photos stored in the database, which can
          be queried separately. There are several possible queries that can be
          made against the API. Photos are organized by the sol (Martian
          rotation or day) on which they were taken, counting up from the
          rover's landing date. A photo taken on Curiosity's 1000th Martian sol
          exploring Mars, for example, will have a sol attribute of 1000. If
          instead you prefer to search by the Earth date on which a photo was
          taken, you can do that, too.
        </p>
      </div>
      <div className="flex items-center justify-start">
        <div className="flex items-center">
          <Datepicker
            useRange={false}
            asSingle={true}
            format="yyyy-MM-dd"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="mr-4"
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-8">
        {loading && <p className="text-white">Loading...</p>}
        {noPhotos && (
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 p-6 text-white">
            <p>No images available for the selected date.</p>
          </div>
        )}
        {photos.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id}>
                <img
                  className="w-full h-auto rounded-lg border-2 border-white-600"
                  src={photo.img_src}
                  alt={`Mars ${photo.id}`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Mars;
