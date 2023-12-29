export const CONSTANTS = {
    EMPTY: '',
    ZERO: 0,
    CHECKED: true,
    UNCHECK: false,
    NULL: null,
    UNDEFINE: undefined,
    BASE_URL: `http://localhost:3000/`,
    PAGE: {
        PRODUCT: '/product',
        PRODUCT_LIST: '/product/list',
        PRODUCT_NEW: "product/new",
        SALE: '/sale',
        COUNTRY: '/country',
        COUNTRY_INFO: '/country/info',
        500: '/500',
        404: '/404',
        PROFILE: '/profile',
        TODO: "/todo",
        MOVIE: "/movie",
        MOVIE_PLAY: "/movie-play"
    },
    URL: {
        CART: 'https://react-namvt-default-rtdb.firebaseio.com/cart.json/',
        DOG: 'https://react-namvt-default-rtdb.firebaseio.com/dog.json/',
        USER: 'https://react-namvt-default-rtdb.firebaseio.com/user.json/',
        PAYMENT: 'https://react-namvt-default-rtdb.firebaseio.com/payment.json',
        COUNTRY: 'https://restcountries.com/v3.1/',
        TODO: 'https://react-namvt-default-rtdb.firebaseio.com/todo.json/',
        MOVIE: 'https://react-namvt-default-rtdb.firebaseio.com/movie.json/',
        MOVIE_CART: 'https://react-namvt-default-rtdb.firebaseio.com/cart-movie.json/',
        MAIL: 'http://localhost:3001/api/send-email.json',
    },
    STATUS: {
        ERR_SERVER: "500",
        NOT_FOUND: 404,
        CREATE: 201,
        OK: 200
    },
    METHOD: {
        POST: 'POST',
        PUT: 'PUT',
        GET: 'GET',
        DELETE: 'DELETE'
    },
    RECORD_ON_PAGE: 10,
    ALL: "Search All",
    NAME: "Name",
    CODE: "Code",
    FULL_NAME: "Full Name",
    REGION: "Region",
    SUBREGION: "Subregion",
    LANGUAGE: "Language",
    // Define status todo list
    COMPLETED: "Completed",
    IMPROGRESS: "Improgress",

};