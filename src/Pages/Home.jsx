import { useEffect, useState } from "react"
import GenreList from "../Components/GenreList"
import GlobalApi from "../Services/GlobalApi"
import Banner from "../Components/Banner";
import TrendingGames from "../Components/TrendingGames";
import GamesByGenresId from "../Components/GamesByGenresId.jsx";

function Home() {
  const [allGameList,setAllGameList] = useState();
  const [gameListByGenres,setGameListByGenres] = useState([]);
  const [selectedGenresName,setSelectedGenresName] = useState('Action');

  useEffect(()=>{
    getAllGamesList();
    getGameListByGenreId(4);
  },[])

  const getAllGamesList=()=>{
    GlobalApi.getAllGames.then((res)=>{      
      setAllGameList(res.data.results);      
    })
  }

  const getGameListByGenreId=(id)=>{
    GlobalApi.getGameListByGenreId(id).then((res)=>{
      console.log("Game List By GenresId", res.data.results)
      setGameListByGenres(res.data.results);    
    })
  }

  return (
    <div className='grid grid-cols-4 px-8'>
        <div className='hidden md:block'>
          <GenreList setGenresId={(setGenresId)=>getGameListByGenreId(setGenresId)} selectedGenresName={(name)=>setSelectedGenresName(name)}/>
        </div>
        <div className='col-span-4 md:col-span-3'>
          {allGameList?.length>0&&gameListByGenres.length>0?
          <div>
          <Banner gameBanner={allGameList[0]} /> 
          <TrendingGames gameList={allGameList}/>
          <GamesByGenresId gameListGenre={gameListByGenres} selectedGenresName={selectedGenresName}/>
          </div>
          :null}
          </div>        
    </div>
  )
}

export default Home
