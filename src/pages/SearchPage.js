import React from 'react';
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";

function SearchPage() {
  const [{term}, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term);
  console.log("🚀 ~ file: SearchPage.js ~ line 9 ~ SearchPage ~ data", data)

  //* http://developers.google.com/custom-search/v1/using_rest

  //* https://cse.google.com/cse/create/new
  
  return (
    <div className="SearchPage">
      <div className="SearchPage__header">
        <Link to="/">
          <img
            className="SearchPage__logo"
            src="https:www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="SearchPage__headerBody">
          <Search hideButtons />

          <div className="SearchPage__options">
            <div className="SearchPage__optionsLeft">
              <div className="SearchPage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="SearchPage__option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="SearchPage__option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="SearchPage__option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="SearchPage__option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
            </div>
            <div className="SearchPage__optionsRight">
              <div className="SearchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="SearchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="SearchPage__results">
          <p className="SearchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="SearchPage__result">
              <a className="SearchPage__resultLink" href={item.link}>
                {item.displayLink} ▼
              </a>
              <a className="SearchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <a className="SearchPage__resultSnippet">{item.snippet}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage
