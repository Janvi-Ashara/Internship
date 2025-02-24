import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

function Weather() {
  const [cities, setCities] = useState([]); //hold city and weather data
  const [inputCity, setInputCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("Cloudy");
  const [humidity, setHumidity] = useState("");
  const [windspeed, setWindspeed] = useState("");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedCityIndex, setSelectedCityIndex] = useState(null);

  // // console.log(cities.filter(city=>city.city.toLowerCase().includes("rajkot")))
  // // const  keys = ["city"]
  // // console.log(cities[1]["city"])

  const inputRef = useRef(null); //  Create a ref
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus(); //  Focus when form is opened
    }
  }, [open]);

  // const formopen = () => {
  //   setOpen(!open)
  // };
  useEffect(() => {
    const CityData = JSON.parse(localStorage.getItem("city")) || [];
    setCities(CityData);
  }, []);

  const formopen = (index = null) => {
    setOpen(true);

    // update city code
    if (index !== null && cities[index]) {
      // Ensure city exists before accessing properties
      setSelectedCityIndex(index); //This helps track which city is being edited.

      const cityToEdit = cities[index]; //Retrieves the city object from the cities array at the given index.

      setInputCity(cityToEdit.city);
      setTemperature(cityToEdit.temperature);
      setWeather(cityToEdit.weather);
      setHumidity(cityToEdit.humidity);
      setWindspeed(cityToEdit.windspeed);
    } else {
      // Reset form for new entry (empty form is open), Ensures the user starts with a blank field when entering a new city.
      setSelectedCityIndex(null);
      setInputCity("");
      setTemperature("");
      setWeather("Cloudy");
      setHumidity("");
      setWindspeed("");
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault(); // Prevent form refresh

    if (inputCity && temperature && weather && humidity && windspeed) {
      const newCityData = {
        city: inputCity,
        temperature,
        weather,
        humidity,
        windspeed,
      };

      if (selectedCityIndex !== null) {
        // **Update existing city**
        const updatedCities = [...cities];
        updatedCities[selectedCityIndex] = newCityData;
        setCities(updatedCities);
        localStorage.setItem("city", JSON.stringify(updatedCities));
      } else {
        // **Add new city**
        const updatedCities = [...cities, newCityData];
        setCities(updatedCities);
        localStorage.setItem("city", JSON.stringify(updatedCities));
      }

      // Reset form fields
      setInputCity("");
      setTemperature("");
      setWeather("Cloudy");
      setHumidity("");
      setWindspeed("");
      setSelectedCityIndex(null);

      // Close form
      setOpen(false);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="block sm:flex mx-auto">
        <input
          type="search"
          placeholder="Enter your city"
          className="border w-64 sm:w-full rounded-xl p-3 sm:mx-3 mx-2 mt-6 outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="border w-auto rounded-xl bg-white p-3 mt-6 mx-2 sm:mx-3"
          onClick={formopen}
        >
          Add
        </button>
      </div>

      <p className="text-xl sm:text-4xl font-bold text-center m-2 sm:m-6 text-yellow-400">
        Weather Forecasting Data
      </p>
      <div className="overflow-x-auto p-2 ">
        <table className="w-full border">
          <thead className="bg-gray-300">
            <tr className="text-center">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Temperature</th>
              <th className="px-4 py-3">Weather Condition</th>
              <th className="px-4 py-3">Humidity</th>
              <th className="px-4 py-3">Wind Speed</th>
              <th className="px-4 py-3">Update</th>
              <th className="px-4 py-3">Delete</th>
            </tr>
          </thead>

          <tbody>
            {cities.filter(
              (city) =>
                city.city &&
                city.city.toLowerCase().includes(search.toLowerCase())
            ).length === 0 ? (
              //.filter((city) => city.toLowerCase().includes(search.toLowerCase()))
              <></> // Empty because the message will be outside the table
            ) : (
              cities
                .filter(
                  (city) =>
                    city.city &&
                    city.city.toLowerCase().includes(search.toLowerCase())
                )
                .map((city, index) => (
                  <tr
                    key={index}
                    className="text-center border even:bg-gray-200 odd:bg-slate-100"
                  >
                    <td>{index + 1}</td>
                    <td>{city.city}</td>
                    <td>{city.temperature}°C</td>
                    <td>{city.weather}</td>
                    <td>{city.humidity}%</td>
                    <td>{city.windspeed} km/h</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-blue-600 p-2 rounded-lg text-white"
                        onClick={() => formopen(index)}
                      >
                        Update
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-red-600 p-2 rounded-lg"
                        onClick={() => {
                          const updatedCity = [...cities]; // Create a copy of the array
                          updatedCity.splice(index, 1);
                          setCities(updatedCity);
                          localStorage.setItem(
                            "city",
                            JSON.stringify(updatedCity)
                          );
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
        {/* No data found message outside the table */}
        {cities.filter(
          //filter return new array
          (city) =>
            city.city && city.city.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <p className="font-bold text-2xl p-1 text-nowrap flex justify-center">
            No data found !!
          </p>
        )}
      </div>
      {/* update form */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black  bg-opacity-50 transition-opacity duration-300">
          <div className="w-full sm:w-96 bg-white rounded-lg shadow-lg p-6 transform duration-300 transition-all transition-discrete scale-100">
            <button
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-500"
              onClick={() => setOpen(false)}
            >
              <IoClose />
            </button>
            <p className="text-xl sm:text-4xl font-bold text-center m-2 sm:m-6 text-yellow-400">
              Weather Data
            </p>
            <form className="border rounded-md sm:p-3 p-2 m-2 bg-white ">
              <label className="text-base font-semibold">City </label>
              <input
                type="text"
                className="border outline-none p-1 rounded mb-2 w-full"
                value={inputCity}
                ref={inputRef}
                onChange={(e) => setInputCity(e.target.value)}
                required
              />
              <br />
              <label className="text-base font-semibold">Temperature </label>
              <input
                type="number"
                className="border outline-none p-1 rounded mb-2 w-full"
                value={temperature}
                // onChange={(e) => setTemrature(e.target.value)}
                onChange={(e) => {
                  let value = e.target.value;
                  if (value === "-" || (value >= -99 && value <= 99)) {
                    setTemperature(value);
                  }
                }}
                required
              />
              <br />
              <label className="text-base font-semibold mr-3 sm:mr-0">
                Weather Condition{" "}
              </label>
              <select
                className="p-1 outline-none border rounded mb-2 w-full "
                value={weather}
                onChange={(e) => setWeather(e.target.value)}
              >
                <option value="Cloudy">Cloudy</option>
                <option value="Sunny">Sunny</option>
                <option value="Snow">Snow</option>
                <option value="Rainy">Rainy</option>
                <option value="Thunder">Thunder</option>
                <option value="Wind">Wind</option>
              </select>
              <br />

              <label className="text-base font-semibold">Humidity </label>

              <input
                type="number"
                className="border outline-none p-1 rounded mb-2 w-full"
                value={humidity}
                onChange={(e) => {
                  let value = e.target.value;
                  if (value === "-" || (value >= -99 && value <= 99)) {
                    setHumidity(value);
                  }
                }}
                required
              />
              <br />
              <label className="text-base font-semibold">Wind speed </label>

              <input
                type="number"
                className="border outline-none p-1 rounded w-full"
                value={windspeed}
                onChange={(e) => {
                  let value = e.target.value;
                  if (value === "-" || (value >= -99 && value <= 110)) {
                    setWindspeed(value);
                  }
                }}
                required
              />
              <br />
              <div className="flex items-center justify-center m-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={handleAddItem}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
