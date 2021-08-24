export const obtenerGifs = async (item) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=3trU6PshGeAc5nyPZu4y1DnDC3cVt2EY&q=${ encodeURI(item)}&limit=10`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    const gifs = data.map( (gif)=>{
        return {
            titulo: gif.title,
            imagen: gif.images.downsized_medium.url
        }
    })
    return gifs;
}

