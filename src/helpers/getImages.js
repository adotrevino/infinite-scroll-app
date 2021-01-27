async function getImages(page) {
    let url = `https://api.thedogapi.com/v1/breeds?attach_breed=0&limit=12&page=${page}`
    const data = await fetch(url);
    if(!data.ok){
        const {status, statusText} = data; 
        throw Error(`${status} - ${statusText}`)
    }
    const dogs = await data.json();

    return dogs;
}

export default getImages;