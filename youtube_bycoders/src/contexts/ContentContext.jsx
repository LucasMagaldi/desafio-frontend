import React, { useState, useEffect } from "react";
import mainAPI from "../services/axiosApi";

export const ContentContext = React.createContext();

const ContentContextProvider = ({children}) => {

  const [popularVideos, setPopularVideos] = useState([]);
  const [comedyVideos, setComedyVideos] = useState([]);
  const [sportsVideos, setSportsVideos] = useState([]);
  const [scienceVideos, setScienceVideos] = useState([]);


  const getPopularVideos = async () => {
      const res =  await mainAPI.get('/videos', {
        params: {
          chart: "mostPopular",
          maxResults: 12,
        }
      });
      console.log("Popular");
      console.log(res)
      let popularList = res.data.items;
      setPopularVideos(popularList);
      if ((!popularList ||!popularList.length)) return null
    }


    const getCategories = async () => {
      const res =  await mainAPI.get('/videoCategories', {
        params: {
          regionCode: "BR"
        }
      });
    }

    const getComedy =  async () => {
      const res =  await mainAPI.get('/videos', {
        params: {
          chart: "mostPopular",
          videoCategoryId: "23",
          maxResults: 12,
        }
      });
      console.log("Comedy");
      console.log(res)
      let comedyList = res.data.items;
      setComedyVideos(comedyList);
    }

    const getSports =  async () => {
      const res =  await mainAPI.get('/videos', {
        params: {
          chart: "mostPopular",
          videoCategoryId: "17",
          maxResults: 12,
        }
      });
      console.log(res)
      console.log("Sports");
      let sportsList = res.data.items;
      setSportsVideos(sportsList);
    }

    const getScience =  async () => {
      const res = await mainAPI.get('/videos',{
        params: {
          chart: "mostPopular",
          videoCategoryId: "28",
          maxResults: 12,
        }
      });
      console.log(res)
      console.log("Science");
      let scienceList = res.data.items;
      setScienceVideos(scienceList);
    }

return (
    <ContentContext.Provider value={{
      scienceVideos,
      getScience,
      getCategories,
      getSports,
      getComedy,
      getPopularVideos,
      sportsVideos,
      comedyVideos,
      popularVideos       
    }}>
        {children}
    </ContentContext.Provider>
)

}


export default ContentContextProvider;