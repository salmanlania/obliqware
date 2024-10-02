'use client'
import { useRootContext } from "@/Provider/context";
import React, { useEffect, useState } from "react";

const Search = () => {

  const { openSearch, toggleSearch } = useRootContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
    toggleSearch();
  };
  if (!mounted) {
    return null;
  }


  return (
    <div className={`search-popup ${openSearch ? " active" : ""}`}>
      <div
        onClick={toggleSearch}
        className='search-popup__overlay search-toggler'
      ></div>

      <div className='search-popup__content'>
        <form onSubmit={handleSearch} className='search-popup__form' action='#'>
          <input type='text' id='search' placeholder='Search Here...' />
          <button
            type='submit'
            aria-label='search submit'
            className='tolak-btn'
          >
            <b>
              <i className='icon-magnifying-glass'></i>
            </b>
            <span></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
