async function GetDataMovie(){
    let response = await fetch('http://www.omdbapi.com/?t=the+simpsons&apikey=7fb789f2');
    response = await response.json();
    console.log(response);
    return response;
}
GetDataMovie().then(
    (response) => renderView(response)
).catch((error) =>{
    console.error("hay un error en una url")
})

function renderView(e){
    let infoMovie = document.getElementById('caja');
    infoMovie.innerHTML = `<img src="${e.Poster}">
    <span class="title">${e.Title}</span>
    <span class="subtitle">${e.Language}</span>`
    
}