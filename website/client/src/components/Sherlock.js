import React from "react";
import { useState } from "react";
import axios from "axios";
//css
import "../css/Sherlock.css";
//Material UI Buttton
import Button from "@mui/material/Button";

const Sherlock = () => {
  const [button_state, set_button_state] = useState(true);
  const [sherlockData, setSherlockData] = useState();
  const [userInput,setUserInput]=useState('');


  const fetchSherlock = async () => {
    const runPython = await axios.get(
      `https://api-hacktu.onrender.com/sherlock/${userInput}`
    );
    console.log("From Backend Response :", runPython.data);
    set_button_state(true);
    setSherlockData(runPython.data);
   
  };

  return (
    <div>
      <div className='sherlockParent'>
        <input
          className="sherlock-input"
          placeholder="Enter Username to Fetch IDs"
          onChange={(e)=>{setUserInput(e.target.value)}}
        />
        <Button
          style={{ borderRadius: "0", background: "black" }}
          onClick={() => {
            set_button_state(false);
            fetchSherlock();
          }}
          variant="contained"
        >
          {button_state ? "Gather USERID" : "Gathering USERID..."}
        </Button>
      </div>
      <div>
        {sherlockData ? (
          <div className='sherlockMainDiv'>
            {sherlockData["7Cups"]?<h3><span>7CUPS</span> {sherlockData["7Cups"]}</h3>:<></>}
            {sherlockData["9GAG"]?<h3><span>9GAG</span> {sherlockData["9GAG"]}</h3>:<></>}
            {sherlockData["Arduino"]?<h3><span>Arduino</span>{sherlockData["Arduino"]}</h3>:<></>}
            {sherlockData["About.me"]?<h3><span>About.me</span> {sherlockData["About.me"]}</h3>:<></>}
            {sherlockData["Academia.edu"]?<h3><span>Academia.edu</span> {sherlockData["Academia.edu"]}</h3>:<></>}
            {sherlockData["AllMyLinks"]?<h3><span>AllMyLinks</span> {sherlockData["AllMyLinks"]}</h3>:<></>}
            {sherlockData["AnilList"]?<h3><span>AnilList</span> {sherlockData["AnilList"]}</h3>:<></>}
            {sherlockData["Apple Developer"]?<h3><span>Apple Developer</span> {sherlockData["Apple Developer"]}</h3>:<></>}
            {sherlockData["Apple Discussions"]?<h3><span>Apple Discussions</span> {sherlockData["Apple Discussions"]}</h3>:<></>}
            {sherlockData["AskFM"]?<h3><span>AskFM</span> {sherlockData["AskFM"]}</h3>:<></>}
            {sherlockData["Audiojungle"]?<h3><span>Audiojungle</span> {sherlockData["Audiojungle"]}</h3>:<></>}
            {sherlockData["BLIP.fm"]?<h3><span>BLIP.fm</span> {sherlockData["BLIP.fm"]}</h3>:<></>}
            {sherlockData["Behance"]?<h3><span>Behance</span> {sherlockData["Behance"]}</h3>:<></>}
            {sherlockData["BitBucket"]?<h3><span>BitBucket</span> {sherlockData["BitBucket"]}</h3>:<></>}
            {sherlockData["Blogger"]?<h3><span>Blogger</span> {sherlockData["Blogger"]}</h3>:<></>}
            {sherlockData["Bookcrossing"]?<h3><span>Bookcrossing</span> {sherlockData["Bookcrossing"]}</h3>:<></>}
            {sherlockData["BraveCommunit"]?<h3><span>BraveCommunit</span> {sherlockData["BraveCommunit"]}</h3>:<></>}
            {sherlockData["BuyMeACoffee"]?<h3><span>BuyMeACoffee</span> {sherlockData["BuyMeACoffee"]}</h3>:<></>}
            {sherlockData["BuzzFeed"]?<h3><span>BuzzFeed</span> {sherlockData["BuzzFeed"]}</h3>:<></>}
            {sherlockData["CGTrader"]?<h3><span>CGTrader</span> {sherlockData["CGTrader"]}</h3>:<></>}
            {sherlockData["Championat"]?<h3><span>Championat</span> {sherlockData["Championat"]}</h3>:<></>}
            {sherlockData["Codecademy"]?<h3><span>Codecademy</span> {sherlockData["Codecademy"]}</h3>:<></>}
            {sherlockData["Codechef"]?<h3><span>Codechef</span> {sherlockData["Codechef"]}</h3>:<></>}
            {sherlockData["Codewars"]?<h3><span>Codewars</span> {sherlockData["Codewars"]}</h3>:<></>}
            {sherlockData["Crowdin"]?<h3><span>Crowdin</span> {sherlockData["Crowdin"]}</h3>:<></>}
            {sherlockData["Cults3D"]?<h3><span>Cults3D</span> {sherlockData["Cults3D"]}</h3>:<></>}
            {sherlockData["DeviantART"]?<h3><span>DeviantART</span> {sherlockData["DeviantART"]}</h3>:<></>}
            {sherlockData["Discogs"]?<h3><span>Discogs</span> {sherlockData["Discogs"]}</h3>:<></>}
            {sherlockData["Disqus"]?<h3><span>Disqus</span> {sherlockData["Disqus"]}</h3>:<></>}
            {sherlockData["Docker Hub"]?<h3><span>Docker Hub</span> {sherlockData["Docker Hub"]}</h3>:<></>}
            {sherlockData["Dribbble"]?<h3><span>Dribbble</span> {sherlockData["Dribbble"]}</h3>:<></>}
            {sherlockData["Duolingo"]?<h3><span>Duolingo</span> {sherlockData["Duolingo"]}</h3>:<></>}
            {sherlockData["Enjin"]?<h3><span>Enjin</span> {sherlockData["Enjin"]}</h3>:<></>}
            {sherlockData["F3.cool"]?<h3><span>F3.cool</span> {sherlockData["F3.cool"]}</h3>:<></>}
            {sherlockData["Facebook"]?<h3><span>Facebook</span> {sherlockData["Facebook"]}</h3>:<></>}
            {sherlockData["Flipboard"]?<h3><span>Flipboard</span> {sherlockData["Flipboard"]}</h3>:<></>}
            {sherlockData["FortniteTracker"]?<h3><span>FortniteTracker</span> {sherlockData["FortniteTracker"]}</h3>:<></>}
            {sherlockData["Freelancer"]?<h3><span>Freelancer</span> {sherlockData["Freelancer"]}</h3>:<></>}
            {sherlockData["Freesound"]?<h3><span>Freesound</span> {sherlockData["Freesound"]}</h3>:<></>}
            {sherlockData["GaiaOnline"]?<h3><span>GaiaOnline</span> {sherlockData["GaiaOnline"]}</h3>:<></>}
            {sherlockData["GeeksforGeeks"]?<h3><span>GeeksforGeeks</span> {sherlockData["GeeksforGeeks"]}</h3>:<></>}
            {sherlockData["Genius (Artists)"]?<h3><span>Genius (Artists)</span> {sherlockData["Genius (Artists)"]}</h3>:<></>}
            {sherlockData["Genius (Users)"]?<h3><span>Genius (Users)</span> {sherlockData["Genius (Users)"]}</h3>:<></>}
            {sherlockData["Giphy"]?<h3><span>Giphy</span> {sherlockData["Giphy"]}</h3>:<></>}
            {sherlockData["GitHub"]?<h3><span>GitHub</span> {sherlockData["GitHub"]}</h3>:<></>}
            {sherlockData["GitLab"]?<h3><span>GitLab</span> {sherlockData["GitLab"]}</h3>:<></>}
            {sherlockData["Gitee"]?<h3><span>Gitee</span> {sherlockData["Gitee"]}</h3>:<></>}
            {sherlockData["GoodReads"]?<h3><span>GoodReads</span> {sherlockData["GoodReads"]}</h3>:<></>}
            {sherlockData["Grailed"]?<h3><span>Grailed</span> {sherlockData["Grailed"]}</h3>:<></>}
            {sherlockData["Gravatar"]?<h3><span>Gravatar</span> {sherlockData["Gravatar"]}</h3>:<></>}
            {sherlockData["Gumroad"]?<h3><span>Gumroad</span> {sherlockData["Gumroad"]}</h3>:<></>}
            {sherlockData["Hackaday"]?<h3><span>Hackaday</span> {sherlockData["Hackaday"]}</h3>:<></>}
            {sherlockData["HackerEarth"]?<h3><span>HackerEarth</span> {sherlockData["HackerEarth"]}</h3>:<></>}
            {sherlockData["HackerNews"]?<h3><span>HackerNews</span> {sherlockData["HackerNews"]}</h3>:<></>}
            {sherlockData["HackerRank"]?<h3><span>HackerRank</span> {sherlockData["HackerRank"]}</h3>:<></>}
            {sherlockData["Hashnode"]?<h3><span>Hashnode</span> {sherlockData["Hashnode"]}</h3>:<></>}
            {sherlockData["Houzz"]?<h3><span>Houzz</span> {sherlockData["Houzz"]}</h3>:<></>}
            {sherlockData["IFTTT"]?<h3><span>IFTTT</span> {sherlockData["IFTTT"]}</h3>:<></>}
            {sherlockData["Imgur"]?<h3><span>Imgur</span> {sherlockData["Imgur"]}</h3>:<></>}
            {sherlockData["Instructables"]?<h3><span>Instructables</span> {sherlockData["Instructables"]}</h3>:<></>}
            {sherlockData["Issuu"]?<h3><span>Issuu</span> {sherlockData["Issuu"]}</h3>:<></>}
            {sherlockData["koo"]?<h3><span>Koo</span>{sherlockData["koo"]}</h3>:<></>}
            {sherlockData["LeetCode"]?<h3><span>LeetCode</span> {sherlockData["LeetCode"]}</h3>:<></>}
            {sherlockData["Letterboxd"]?<h3><span>Letterboxd</span> {sherlockData["Letterboxd"]}</h3>:<></>}
            {sherlockData["Lichess"]?<h3><span>Lichess</span> {sherlockData["Lichess"]}</h3>:<></>}
            {sherlockData["Linktree"]?<h3><span>Linktree</span> {sherlockData["Linktree"]}</h3>:<></>}
            {sherlockData["LiveJournal"]?<h3><span>LiveJournal</span> {sherlockData["LiveJournal"]}</h3>:<></>}
            {sherlockData["Medium"]?<h3><span>Medium</span> {sherlockData["Medium"]}</h3>:<></>}
            {sherlockData["Memrise"]?<h3><span>Memrise</span> {sherlockData["Memrise"]}</h3>:<></>}
            {sherlockData["Strava"]?<h3><span>Strava</span> {sherlockData["Strava"]}</h3>:<></>}
            {sherlockData["zoomit"]?<h3><span>Zoomit</span>{sherlockData["zoomit"]}</h3>:<></>}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Sherlock;
