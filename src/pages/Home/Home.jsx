import React, { useEffect, useState } from "react";
import classes from "./Home.module.css";
import Filter from "../Filter/Filter";
import { Link } from "react-router-dom";
import useDark from "../../hooks/useDark";

const Home = () => {
  let content;
  const [countries, setCountries] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode, darkTheme } = useDark();

  const darkStyle = {
    color: darkTheme.color,
    backgroundColor: darkTheme.elementsBackground,
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("https://restcountries.com/v3/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
      });
  }, []);

  const filterHandler = (checked) => {
    const result = countries
      .filter((country) => {
        return country.region.toLowerCase() === checked;
      })
      .map((country) => {
        let id = country.name.common.replaceAll(" ", "-");
        return (
          <Link to={`${id}`} key={id} state={{ country: country }}>
            <li className={classes.country}>
              <div className={classes.countryImg}>
                <img
                  src={country.flags[1]}
                  alt={`${country.name.common} flag`}
                />
              </div>
              <div
                className={classes.countryInfo}
                style={isDarkMode ? darkStyle : null}
              >
                <h2>{country.name.common}</h2>
                <ul className={classes.countryInfoList}>
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region}</li>
                  <li>capital: {country.capital}</li>
                </ul>
              </div>
            </li>
          </Link>
        );
      });
    setFilterItems(result);
  };

  const searchHandler = (searched) => {
    const result = countries
      .filter((country) => {
        return country.name.common.toLowerCase().includes(searched);
      })
      .map((country) => {
        let id = country.name.common.replaceAll(" ", "-");
        return (
          <Link to={`${id}`} key={id} state={{ country: country }}>
            <li className={classes.country}>
              <div className={classes.countryImg}>
                <img
                  src={country.flags[1]}
                  alt={`${country.name.common} flag`}
                />
              </div>
              <div
                className={classes.countryInfo}
                style={isDarkMode ? darkStyle : null}
              >
                <h2>{country.name.common}</h2>
                <ul className={classes.countryInfoList}>
                  <li>Population: {country.population}</li>
                  <li>Region: {country.region}</li>
                  <li>capital: {country.capital}</li>
                </ul>
              </div>
            </li>
          </Link>
        );
      });
    setFilterItems(result);
  };

  content = countries.map((country) => {
    let id = country.name.common.replaceAll(" ", "-");
    return (
      <Link to={`${id}`} key={id} state={{ country: country }}>
        <li className={classes.country}>
          <div className={classes.countryImg}>
            <img src={country.flags[1]} alt={`${country.name.common} flag`} />
          </div>
          <div
            className={classes.countryInfo}
            style={isDarkMode ? darkStyle : null}
          >
            <h2>{country.name.common}</h2>
            <ul className={classes.countryInfoList}>
              <li>Population: {country.population}</li>
              <li>Region: {country.region}</li>
              <li>capital: {country.capital}</li>
            </ul>
          </div>
        </li>
      </Link>
    );
  });

  return (
    <div className={classes.home}>
      <Filter filterHandler={filterHandler} searchHandler={searchHandler} />
      <main className={classes.main}>
        <ul className={classes.countriesList}>
          {isLoading && <p className={classes.loading}>Loading...</p>}
          {filterItems.length > 0 ? filterItems : content}
        </ul>
      </main>
    </div>
  );
};

export default Home;
