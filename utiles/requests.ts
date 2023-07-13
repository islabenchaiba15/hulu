const API_KEY=process.env.API_KEY
interface NavLink {
    title: string;
    url: string;
  }
  
  interface NavLinks {
    [key: string]: NavLink;
  }

export const navLinks:NavLinks ={
    fetchTrending:{
        title:"trending",
        url:"/trending/all/week?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&language=en-US"
    },
    fetchTopRated:{
        title:"Top Rated",
        url:"/movie/top_rated?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&language=en-US"
    },
    fetchActionMovies:{
        title:"Action",
        url:"/discover/movie?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&with_genres=28"
    },
    fetchHorrorMovies:{
        title:"Horror",
        url:"/discover/movie?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&with_genres=27"
    },
    fetchMystery:{
        title:"Mystery",
        url:"/discover/movie?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&with_genres=9648"
    },
    fetch:{
        title:"romance",
        url:"/discover/movie?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&with_genres=9648"
    },
    fetchold:{
        title:"trending",
        url:"/trending/all/week?api_key=4737f9da6e4cc9fdbcb0be1f5f8eef14&language=en-US"
    },
}