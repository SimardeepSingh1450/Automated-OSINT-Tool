import React from "react";
import { useState } from "react";
import axios from "axios";
//css
import "../css/searchFeed.css";
//Material UI Buttton
import Button from "@mui/material/Button";

const SearchFeed = (props) => {
  const [button_state, set_button_state] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [googleArray, setGoogleArray] = useState([]);

  const getsearchData = async () => {
    const googleSearch = await axios.get(
      `https://asgardian.pythonanywhere.com/googlesearch/${userInput}`
    );
    console.log(googleSearch);
    setGoogleArray(googleSearch.data);
    // console.log(googleSearch);
    props.googlesearch(googleSearch.data);
    set_button_state(true);
  };

  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          className="searchfeedInput"
          placeholder="Enter the Search Field..."
        />
        <Button
          style={{ backgroundColor: "red" }}
          onClick={() => {
            set_button_state(false);
            getsearchData();
          }}
          variant="contained"
        >
          {button_state ? "Fetch Google Data" : "Under fetching..."}
        </Button>
      </div>

      <div className="left-right-search-main">
        <div className="searchfeedLeft">
          <div className="maingoogleCardDiv">
            {googleArray ? (
              googleArray.map((item) => {
                return (
                  <div className="googleCardDiv">
                    {/* <h3><span className='spanGoogle'>User Input :</span>{item["User Input"]}</h3> */}
                    <h3>
                      <span className="spanGoogle">Source Website :</span>
                      {item.Website}
                    </h3>
                    <h3>
                      <span className="spanGoogle">Source Link :</span>
                      {item.Link}
                    </h3>
                    <h3>
                      <span className="spanGoogle">Source Title :</span>
                      {item.Title}
                    </h3>
                    <h3>
                      <span className="spanGoogle">Videos Link :</span>
                      {item.Videos}
                    </h3>
                    <h3>
                      <span className="spanGoogle">Images Link :</span>
                      {item["Google Images"]}
                    </h3>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;
