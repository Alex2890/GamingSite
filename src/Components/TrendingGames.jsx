import { useEffect } from 'react'

function TrendingGames({gameList}) {
    useEffect(()=>{
        console.log(gameList)
    },[])

  return (
    <div className='mt-5'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
    <div className='hidden md:grid md:grid-cols-2 gap-4 mt-5 lg:grid-cols-4'>
      {gameList.map((item2,index)=>index<4&&(
        <div key={item2} className='bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
            <img src={item2.background_image} className='h-[270px] rounded-t-lg object-cover'/>
            <h2 className='dark:text-white text-[20px] p-2 font-bold'>{item2.name}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default TrendingGames
