export const getGifs = async (category) => {

    //const url = `https://api.giphy.com/v1/gifs/search?apy_key=pQNDAxMlyECuEnQdUTtTn3VX151sXClr?q=${category}`;
    const limite = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pQNDAxMlyECuEnQdUTtTn3VX151sXClr&q=${category}&limit=${limite}`;
    const resp = await fetch (url);
    const { data } = await resp.json();
    const gifs = data.map( img => ({            
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url            
    }))

    return gifs;
};