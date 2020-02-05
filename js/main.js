import SplashPage from "./modules/SplashPage.js";
import AppPage from "./modules/AppPage.js";
import ErrorPage from "./modules/ErrorPage.js";


const router = new VueRouter ({ //This acts like app.get router using node and express
    routes: [
        { path: '/', name: "splash", component: SplashPage }, //SplashPage will be rendered out inside router-view!!!!!!!!!!!!
        { path: '/app', name: "app", component: AppPage }, //AppPage will be rendered out inside router-view!!!!!!!!!!!!
        { path: '*', name: "error", component: ErrorPage } //* catches anything that doesnt match MAKE THIS THE VERY LAST TO AVOID PROBLEMSe

    ]
})

const vm = new Vue ({ //make this first
    data : {
        
    },

    created: function() {
        console.log('yo is workin');
    },

    methods: {

    },

    router //shorthand for router ???????
}).$mount('#app');