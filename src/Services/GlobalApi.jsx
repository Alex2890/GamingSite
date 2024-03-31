import axios from "axios";


const key="8a645667b359450fb33875c5d0d46a42";
const axiosCreate=axios.create({
    baseURL: 'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
const getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);

export default{getGenreList, getAllGames, getGameListByGenreId}