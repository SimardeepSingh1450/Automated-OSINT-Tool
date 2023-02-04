import React from 'react'
import { useState } from 'react';
import axios from "axios";
//Material UI Buttton
import Button from '@mui/material/Button';
//CSS
import '../css/Reddit.css'

const Reddit = () => {
  const [button_state, set_button_state] = useState(true);
  const [searchField,setSearchField]=useState('');
  const [redditJson,setReditJson]=useState([]);

  
  const getRedditData=async()=>{
    let redditPythonCode=await axios.get(`https://asgardian.pythonanywhere.com/runredditPython/${searchField}`);
    console.log('Ran Python Code',redditPythonCode);
    // let slicedArray=redditPythonCode.data.slice(0,5);
    // setReditJson(slicedArray);

    setReditJson(redditPythonCode.data);
    // console.log(redditJson);
    set_button_state(true);
  }

  return (
    <div className='redditParent'>
        <div>
            <input onChange={(e)=>{setSearchField(e.target.value)}} className='redditInput' placeholder='Search Reddit...'/>
            <Button style={{backgroundColor:'red'}} onClick={() => {
          set_button_state(false);
          getRedditData();
        }} variant="contained">
  
        {button_state ? "Fetch Reddit Data" : "Under fetching..."}
      
      </Button>
      <div className='mainredditCardDiv'>
        {redditJson ? redditJson.map((item)=>{
            return(
            <div className='redditDataCard'>
                <h3><span className='span-reddit'>Subreddit :</span> {item.subreddit}</h3>
                <h3><span className='span-reddit'>Title :</span> {item.title}</h3>
                <h3><span className='span-reddit'>Comments :</span>  {item.comments}</h3>
                <h3><span className='span-reddit'>Upvotes :</span> {item.upvotes}</h3>
                <h3><span className='span-reddit'>Awards :</span> {item.awards}</h3>
                <button className='redditLinkButton' onClick={()=>{window.open(`${item.link}`,"_blank")}}><span className='span-reddit-button'>Reddit Link</span></button>

            </div>)
}):<></>}
      </div>
        </div>
    </div>
  )
}

export default Reddit