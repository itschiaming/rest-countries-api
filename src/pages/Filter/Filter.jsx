import React, { useState } from "react";
import useDark from "../../hooks/useDark";
import classes from "./Filter.module.css";

const Filter = ({ filterHandler, searchHandler }) => {
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(null);
  const [search, setSearch] = useState(null);
  const { isDarkMode, darkTheme } = useDark();

  const darkStyle = {
    color: darkTheme.color,
    backgroundColor: darkTheme.elementsBackground,
  };

  const checkedHandler = (e) => {
    let region = e.target.value.toLowerCase();
    setVisible(false);
    setChecked(region);
    filterHandler(region);
  };

  const searchChangeHandler = (e) => {
    let searched = e.target.value.toLowerCase();
    setSearch(searched);
    searchHandler(searched);
  };

  return (
    <section className={classes.searchAndFilter}>
      <section
        className={classes.searchContainer}
        style={isDarkMode ? darkStyle : null}
      >
        <i className={`fa-solid fa-magnifying-glass ${classes.search}`}></i>
        <input
          type="text"
          placeholder="Search for a country..."
          className={classes.searchInput}
          onChange={searchChangeHandler}
          style={isDarkMode ? darkStyle : null}
        />
      </section>
      <section
        className={classes.filterContainer}
        onClick={() => setVisible(!visible)}
        style={isDarkMode ? darkStyle : null}
      >
        <button
          className={classes.filterBtn}
          style={isDarkMode ? darkStyle : null}
        >
          <p className={classes.filterByText}>
            {checked ? `Filter by ${checked}` : " Filter by Region"}
          </p>
          <i className={`fa-solid fa-angle-down ${classes.down}`}></i>
        </button>
        <div
          className={`${classes.checkboxes} ${
            visible ? classes.filterVisible : ""
          }`}
          style={isDarkMode ? darkStyle : null}
        >
          <input
            type="radio"
            id="africa"
            className={classes.checkbox}
            name="country"
            value="africa"
            onChange={checkedHandler}
          />
          <label htmlFor="africa" className={classes.label}>
            Africa
          </label>
          <input
            type="radio"
            id="america"
            className={classes.checkbox}
            name="country"
            value="americas"
            onChange={checkedHandler}
          />
          <label htmlFor="america" className={classes.label}>
            America
          </label>
          <input
            type="radio"
            id="asia"
            className={classes.checkbox}
            name="country"
            value="asia"
            onChange={checkedHandler}
          />
          <label htmlFor="asia" className={classes.label}>
            Asia
          </label>
          <input
            type="radio"
            id="europe"
            className={classes.checkbox}
            name="country"
            value="europe"
            onChange={checkedHandler}
          />
          <label htmlFor="europe" className={classes.label}>
            Europe
          </label>
          <input
            type="radio"
            id="oceania"
            className={classes.checkbox}
            name="country"
            value="oceania"
            onChange={checkedHandler}
          />
          <label htmlFor="oceania" className={classes.label}>
            Oceania
          </label>
        </div>
      </section>
    </section>
  );
};

export default Filter;
