const getDataFromApi = () => {
  // hacemos la llamada al servidor y retornamos la promesa
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      // console.log(data.results);
      return data.results.map((character) => {
        console.log(character);
        // los datos que quiero sacar de todos los que hay en la API son:
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          episode: character.episode,
          status: character.status,
          type: character.type,
        };
      });
    });
};

export default getDataFromApi;
