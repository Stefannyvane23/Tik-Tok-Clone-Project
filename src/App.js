import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./pages/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { async } from "@firebase/util";

function App() {

   let maxHeight ;
   if(window.innerHeight <=800){
     maxHeight = window.innerHeight
   }

  const [video, setVideo] = useState([]);

   async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videoSnapshot = await getDocs(videoCollection);
    const videoList = videoSnapshot.docs.map((doc) => doc.data());
    setVideo(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight : maxHeight + "px"}}>
      <div className="app__videos">
        {video.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
