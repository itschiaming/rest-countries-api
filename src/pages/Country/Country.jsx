import React from "react";
import { useLocation, Link } from "react-router-dom";
import useDark from "../../hooks/useDark";
import classes from "./Country.module.css";

const Country = () => {
  const { isDarkMode, darkTheme } = useDark();

  const darkStyle = {
    color: darkTheme.color,
    backgroundColor: darkTheme.elementsBackground,
  };

  const location = useLocation();
  const { country } = location.state;
  let languages = [],
    currencies = [];

  for (let language in country.languages) {
    languages.push(language);
  }

  for (let currency in country.currencies) {
    currencies.push(currency);
  }

  let key = languages[0];
  let nativeName = country.name.nativeName[key].common;

  return (
    <>
      <article className={classes.countryDetail}>
        <Link
          to="/"
          className={classes.goback}
          style={isDarkMode ? darkStyle : null}
        >
          Go back
        </Link>
        <div className={classes.detailWrapper}>
          <div className={classes.countryDetailImg}>
            <img src={country.flags[1]} alt={`${country.name.common} flag`} />
          </div>
          <div className={classes.countryDetailInfo}>
            <p className={classes.detailTitle}>{country.name.common}</p>
            <ul className={classes.countryDetailInfoList}>
              <div className={classes.firstPart}>
                <li>
                  <span className={classes.subtitle}>Native Name: </span>
                  <span className={classes.detailText}>{nativeName}</span>
                </li>
                <li>
                  <span className={classes.subtitle}>Population: </span>
                  <span className={classes.detailText}>
                    {country.population}
                  </span>
                </li>
                <li>
                  <span className={classes.subtitle}>Region: </span>
                  <span className={classes.detailText}>{country.region}</span>
                </li>
                <li>
                  <span className={classes.subtitle}>Sub Region: </span>
                  <span className={classes.detailText}>
                    {country.subregion}
                  </span>
                </li>
                <li className={classes.capital}>
                  <span className={classes.subtitle}>Capital: </span>
                  <span className={classes.detailText}>{country.capital}</span>
                </li>
              </div>
              <div className={classes.secondPart}>
                <li>
                  <span className={classes.subtitle}>Top Level Domain: </span>
                  <span className={classes.detailText}>{country.tld[0]}</span>
                </li>
                <li>
                  <span className={classes.subtitle}>Currencies: </span>
                  {currencies.map((currency, index) => {
                    return (
                      <span className={classes.detailText} key={index}>
                        {currency}{" "}
                      </span>
                    );
                  })}
                </li>
                <li>
                  <span className={classes.subtitle}>Languages: </span>
                  {languages.map((language, index) => {
                    return (
                      <span className={classes.detailText} key={index}>
                        {language}{" "}
                      </span>
                    );
                  })}
                </li>
              </div>
            </ul>
            <p className={classes.detailTitle}>Border Countries</p>
            <ul className={classes.borderCountries}>
              {country.borders?.map((border, index) => {
                return (
                  <li
                    key={index}
                    style={isDarkMode ? darkStyle : null}
                    className={classes.detailText}
                  >
                    {border}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
};

export default Country;
