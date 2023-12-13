import { Movie } from "../model/Movie";
import { CONSTANTS } from "../utils/constant";
import axios, { AxiosError } from "axios";
import { ListCategory } from "../utils/data"
const endpoint = CONSTANTS.URL.MOVIE;
const endpointCart = CONSTANTS.URL.MOVIE_CART;
const callAPIMovie = {
    // http://localhost:3000/movie/?rated=R&year_gte=1990&year_lte=2010&?_page=1&_limit=10
    async get_all(page: string) {

        const url = endpoint + `?_page=${page}&_limit=8`
        return axios.get(url);
    },
    async get_all_by_category(page: string, category: string) {
        let url = "?";
        if (ListCategory.includes(category)) {
            url = endpoint + `?genre_like=${category}&_page=${page}&_limit=8`
        } else if (category == 'Top Rated') {
            url = endpoint + `?_sort=imdbRating&_order=desc&_page=${page}&_limit=8`
        } else if (category == 'Lasted') {
            url = endpoint + `?_sort=year&_order=desc&_page=${page}&_limit=8`
        } else if (category == 'Top View') {
            url = endpoint + `?_sort=imdbVotes&_order=desc&_page=${page}&_limit=8`
        } else if (category == 'Top Price') {
            url = endpoint + `?_sort=price&_order=desc&_page=${page}&_limit=8`
        }

        return axios.get(url);
    },
    async get_movie_by(input: any) {

        let url = "?";
        if (input.data.comingSoon) {
            url += `comingSoon=${input.data.comingSoon}&`
        }
        if (input.data.rated) {
            url += `rated=${input.data.rated}&`
        }
        // If Chosse year range else nothing
        if (input.data.year) {
            url += `year_gte=${input.data.year[0]}&year_lte=${input.data.year[1]}&`
        }
        if (input.data.typeSearch && input.data.textInput) {
            url += `${input.data.typeSearch}_like=${input.data.textInput}&`
        } else if (input.data.textInput && !input.data.typeSearch) {
            url += `title_like=${input.data.textInput}&`
        }
        // Check data page

        url += `?_page=${input.data.gotoPage}&_limit=8`

        // url = endpoint + "?_page=1&_limit=10"
        return axios.get(endpoint + url);
    },
    async getMovieComingSoon() {
        const url = endpoint + `?comingSoon=true`
        return axios.get(url);
    },
    async addCart(movieCart: any) {
        return await axios.post(endpointCart, movieCart);
    },
    async getByType(input: string) {
        const url = endpoint + `genre/${input}`
        return axios.get(url);
    },
    async getByYear(input: string) {
        const url = endpoint + `year/${input}`
        return axios.get(url);
    },
    async getByLanguage(input: string) {
        const url = endpoint + `language/${input}`
        return axios.get(url);
    },
    async getByRating(input: string) {
        const url = endpoint + `imdbRating/${input}`
        return axios.get(url);
    },
    async getByVote(input: string) {
        const url = endpoint + `imdbVotes/${input}`
        return axios.get(url);
    },
    async getLasted(input: string) {
        const url = endpoint + `?_sort=year&_order=desc&_limit=${input}`
        return axios.get(url);
    },
    async add(data: any) {
        return await axios.post(endpoint, data);
    },
    async update(id: string, data: any) {
        return await axios.put(`${endpoint}/${id}`, data);
    },
    async delete(id: string) {
        return await axios.delete(`${endpoint}/${id}`);
    },
};
export { callAPIMovie }
