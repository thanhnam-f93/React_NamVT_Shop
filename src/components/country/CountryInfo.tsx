import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { callAPICountry } from "../../service/dataCountry";
import { CONSTANTS } from "../../utils/constant";
const CountryInfo = () => {
  const { state } = useLocation();
  const official = state;
  const country = {
    name: CONSTANTS.EMPTY,
    population: CONSTANTS.EMPTY,
    area: CONSTANTS.EMPTY,
    languages: CONSTANTS.EMPTY,
    currencies: CONSTANTS.EMPTY,
    flags: CONSTANTS.EMPTY,
    googleMaps: CONSTANTS.EMPTY,
    openStreetMaps: CONSTANTS.EMPTY,
    timezones: CONSTANTS.EMPTY,
  };
  const [data, setData] = useState(country);

  useEffect(() => {
    callAPICountry
      .getByFullname(official?.name)
      .then((res) => {
        const dataobj = res.data[0];
        country.name = dataobj.name.official;
        country.population = dataobj.population;
        country.area = dataobj.area;
        country.languages = JSON.stringify(
          Object.values(dataobj.languages).join(" & ")
        );
        country.currencies = dataobj.cca3;
        country.flags = dataobj.flags.svg;
        country.googleMaps = dataobj.googleMaps;
        country.openStreetMaps = dataobj.openStreetMaps;
        country.timezones = dataobj.timezones;
        setData({ ...data, ...country });
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <div className="container mx-auto">
      {/* <!-- Country Information Card --> */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h1 className="text-3xl font-bold mb-4">{data.name}</h1>

        {/* <!-- General Information --> */}
        <div className="mb-4">
          <p className="text-gray-600">Population: {data.population}</p>
          <p className="text-gray-600">Area: {data.area} sq.km</p>
          {/* <!-- Add more general information as needed --> */}
        </div>

        {/* <!-- Language Information --> */}
        <div className="mb-4">
          <p className="text-gray-600">Official Language: {data.languages}</p>
          {/* <!-- Add more language information as needed --> */}
        </div>

        {/* <!-- Currency Information --> */}
        <div className="mb-4">
          <p className="text-gray-600">Currency: {data.currencies}$</p>
          {/* <!-- Add more currency information as needed --> */}
        </div>

        {/* <!-- Flag Image --> */}
        <div className="mb-4">
          <img src={data.flags} alt="IMG" className="w-32 h-auto" />
        </div>

        {/* <!-- Maps Links --> */}
        <div className="mb-4">
          <p className="text-gray-600">
            Google Maps:
            <a href={data.googleMaps} target="_blank">
              Link
            </a>
          </p>
          <p className="text-gray-600">
            OpenStreet Maps:
            <a href={data.openStreetMaps} target="_blank">
              Link
            </a>
          </p>
        </div>

        {/* <!-- Borders Information --> */}
        <div className="mb-4">
          <p className="text-gray-600">Borders: {data.timezones}</p>
          {/* <!-- Add more border information as needed --> */}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
