export const BASE_URL = 'https://';
// export const BASE_URL = 'http://localhost:3000';

// Это для обработки ошибок
const handleResponse = (res: Response) => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

// Для авторизации
export const login = (email: string, password: string) => {
    return fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
      .then(res => handleResponse(res)
      )
      .then((res) => {
        if (res) {
          localStorage.setItem('token', res.token);
          return res;
        } else {
          return;
        }
      })
  }
  

// Для получения данных по профессиям
export const getProfessions = () => {
      const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/profession`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
        }
    }).then(res => handleResponse(res))
}

// Для получения данных по городам
export const getCity = () => {
      const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/cities`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
        }
    }).then(res => handleResponse(res))
}


// Для получения данных по гражданствам
export const getCitizenship = () => {
      const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/citizenships/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
        }
    }).then(res => handleResponse(res))
}

// Для получения данных по иностранным языкам
export const getLanguages = () => {
      const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}/language`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
        }
    }).then(res => handleResponse(res))
}


// export const saveFilm = (filmData) => {
//   const token = localStorage.getItem('token');
//   return fetch(`${BASE_URL}/movies`, {
//     method: 'POST',
//     headers: {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       country: filmData.country,
//       director: filmData.director,
//       duration: filmData.duration,
//       year: filmData.year,
//       description: filmData.description,
//       image: filmData.image,
//       trailerLink: filmData.trailerLink,
//       nameRU: filmData.nameRU,
//       nameEN: filmData.nameEN,
//       thumbnail: filmData.thumbnail,
//       movieId: filmData.movieId
//     })
//   })
//   .then(res => handleResponse(res))
// }

// export const getSavedFilms = () => {
//   const token = localStorage.getItem('token');
//   return fetch(`${BASE_URL}/movies`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     }
//   })
//     .then(res => handleResponse(res))

// }