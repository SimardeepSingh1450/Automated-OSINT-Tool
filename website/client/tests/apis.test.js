//importing API Fns from JS File
const {redditApi,googleSearchApi,duckApi,sherlockApi,sockApi}=require('./apis')

describe('API Tests',()=>{
    //remove skip from infront of test.skip to test
    test.skip('reddit API Test',async()=>{
        const res=await redditApi('Superman');//Here Superman is an example search keyword
        try{
            console.log(res.data);
        }catch(err){
            console.log('Error at reddit API response',err);
        }
    },13000);//13 second timeout for test

    test.skip('googleSearch API Test',async()=>{
        const res=await googleSearchApi('Obama');//Here Obama is an example search keyword
        try{
            console.log(res.data);
        }catch(err){
            console.log('Error at googleSearch API response',err);
        }
    },5000);//5 second timeout for test

    test.skip('duckduckGo API Test',async()=>{
        const res=await duckApi('Narendra Modi');//Here Narendra Modi is an example search keyword
        try{
            console.log(res.data);
        }catch(err){
            console.log('Error at duckduckGo API response',err);
        }
    },13000);//13 second timeout for test

    test.skip('SherlockAPI Test',async()=>{
        const res=await sherlockApi('KulwinderSingh07');//Here KulwinderSingh07 is an example search keyword
        try{
            console.log(res.data);
        }catch(err){
            console.log('Error at duckduckGo API response',err);
        }
    },130000);//130secs=3minutes timeout for test

    test('sockAPI Test',async()=>{
        const res=await sockApi();//Here Narendra Modi is an example search keyword
        try{
            console.log(res.data);
        }catch(err){
            console.log('Error at duckduckGo API response',err);
        }
    },10000);//10 second timeout for test
})