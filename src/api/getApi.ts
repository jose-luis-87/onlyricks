/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import axios from "axios";

export const getDataApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
})
