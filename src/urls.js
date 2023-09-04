import { API_KEY} from './constants/constants';

// export const originals=`discover/movie?api_key=${API_KEY}&with_original_language=ml`
export const originals=`discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml`
export const action=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml&with_genres=28`
export const comedy=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml&with_genres=35`
export const horror=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml&with_genres=27`
export const romance=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml&with_genres=10749`
export const fantasy=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml&with_genres=14`
export const historical=`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_original_language=ml&with_genres=36`
