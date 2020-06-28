export const getGifs = async ( category ) => {

    // API url
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=lMAcAiHfMF46rg1ITdQQsbhuSXO3Lx0W`;
    // Http call
    const res = await fetch(url);
    // data in Json estructure
    const { data } = await res.json();

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }

    })

    return gifs;
}
