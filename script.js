// unsplash API
const count = 10;
const apiKey ='XLPceTvxpaBKIza-01usmDbeQQdOuidvKty1K3ijLL0';
const apiUrl = 'https://api.unsplash.com/photos/random/?client_id=1Nkxtxde0uu_f2ywqNL60Su1j3IBNH5ga7JNHqNEQ8I&count=${count}';

// get photos from unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }   catch (error){
        //cacth error here
    }
}
// on load
getPhotos();