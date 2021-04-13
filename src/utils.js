export const domain = "http://localhost:3100";
export const secret_ID = "770137991345-qd5ralem02mqmmekkukfqp4nnhrc47v3.apps.googleusercontent.com";
export const api_key_calender = "AIzaSyAupx-L18yrgyMlOxKegcUOIVaRwQgTmrg"
export const xyz = "iajbfakncaicubackajbcahcvisrjngf74t509rwijf2398u329h9v398h3298j";

const BASE_URL = "https://api.rawg.io/api";
const API = "871b8db4c8c14c308a2a68ddd8621fad";

//dates
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const POPULAR_GAMES = `/games?key=${API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=15`;

const NEW_GAMES = `/games?key=${API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=15`;
const UPCOMING_GAMES = `/games?key=${API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=15`;

export const popularGamesURL = () => `${BASE_URL}${POPULAR_GAMES}`;
export const upcomingGamesURL = () => `${BASE_URL}${UPCOMING_GAMES}`;
export const newGamesURL = () => `${BASE_URL}${NEW_GAMES}`;

//game details
export const gameDetailsURL = (gameId) => `${BASE_URL}/games/${gameId}`;