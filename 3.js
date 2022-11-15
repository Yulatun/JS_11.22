class RickAndMorty {
  getCharacter(id) {
    if (
      typeof id !== 'number' ||
      id === Infinity ||
      id === -Infinity ||
      isNaN(id) ||
      id < 0
    ) {
      throw Error();
    } else {
      return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
      })
        .then((response) => {
          return response.json();
        })
        .then((character) => {
          if (character.error) {
            if (character.error === 'Character not found') {
              return null;
            } else {
              throw new Error();
            }
          } else {
            return character;
          }
        });
    }
  }
  async getEpisode(idOfEpisode) {
    if (
      typeof idOfEpisode !== 'number' ||
      idOfEpisode === Infinity ||
      idOfEpisode === -Infinity ||
      isNaN(idOfEpisode) ||
      idOfEpisode < 0
    ) {
      throw Error();
    } else {
      let response = await fetch(
        `https://rickandmortyapi.com/api/episode/${idOfEpisode}`,
        {
          method: 'GET',
        }
      );
      let episode = await response.json();
      if (episode.error === 'Episode not found') {
        return null;
      } else if (episode.error) {
        throw new Error();
      } else {
        return episode;
      }
    }
  }
}
