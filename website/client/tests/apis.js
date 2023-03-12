const axios=require('axios');

const redditApi=(searchQuery)=>{
    const res=axios
    .get(`https://asgardian.pythonanywhere.com/runredditPython/${searchQuery}`)
    .then((val)=>val)
    .catch((err)=>console.error(err));
    return res;
}

const googleSearchApi=(searchQuery)=>{
    const res=axios
    .get(`https://asgardian.pythonanywhere.com/googlesearch/${searchQuery}`)
    .then((val)=>val)
    .catch((err)=>console.error(err));
    return res;
}

const duckApi=(searchQuery)=>{
    const res=axios
    .get(`https://asgardian.pythonanywhere.com/googlesearch/${searchQuery}`)
    .then((val)=>val)
    .catch((err)=>console.error(err));
    return res;
}

const sherlockApi=(searchQuery)=>{
    const res=axios
    .get(`https://api-hacktu.onrender.com/sherlock/${searchQuery}`)
    .then((val)=>val)
    .catch((err)=>console.error(err));
    return res;
}

const sockApi=()=>{
    const res=axios
    .get(`https://selenium-sock-api.onrender.com/sockgenerator`)
    .then((val)=>val)
    .catch((err)=>console.error(err));
    return res;
}

module.exports={redditApi,googleSearchApi,duckApi,sherlockApi,sockApi};