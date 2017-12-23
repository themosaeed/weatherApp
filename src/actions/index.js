import axios from 'axios'

const API_KEY = '1b3ef97ab47a92f83f5330023b61a076'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function FetchData (city) {
    const URL = `${ROOT_URL}&q=${city},us`
    const request = axios.get(URL)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}