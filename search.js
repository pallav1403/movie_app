var inputElement =document.querySelector('#inputValue')
 var buttonElement=  document.querySelector('#search')
var movieArea=document.querySelector('#movieArea')
const Image_Url='https://image.tmdb.org/t/p/w500'
function getPoster(movies){
   return  movies.map((movie)=>{
        if(movie.poster_path){
          return ` <img src=${Image_Url +movie.poster_path} movie-id=${movie.id} />
         <div > <i style="color:black"; > ${movie.release_date}</i>
          <i style="color:black"; >${movie.title}</i></div>`
          
   }})
}

function movieContainer(movies){
     // const movieElement=document.createElement('div');
     // movieElement.setAttribute('class','movie')
    const movieArea=document.getElementById('movieArea')
     const movieTemplate=`${getPoster(movies)} `
        
     //     </span>`
     movieArea.innerHTML=movieTemplate;
     return movieArea;
}

// f98b92b439845a5a22169d2d41d429fd
// ruifuiyioyiioukhyhloljyjjtkjg

 buttonElement.onclick=function(event){
     event.preventDefault()
     const value=inputElement.value
     console.log(value)
     var url='https://api.themoviedb.org/3/search/movie?api_key=f98b92b439845a5a22169d2d41d429fd'+'&query='+value
     fetch(url)
     .then((res)=>  res.json()

     )
     .then((data)=>{
          movieArea.innerHTML='';
          const movies=data.results;
          const movieContainer1=movieContainer(movies);
          movieArea.appendChild(movieContainer1);
          console.log('data is',data);
     })
     .catch((error)=>{
console.log('error:',error)
     })
 }
