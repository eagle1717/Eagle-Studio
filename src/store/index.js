import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            socials: [],
        };
    },

    getters: {
        email(state) {
            if (state.socials.email) {
                return state.socials.email.path;
            }
        },
        github(state) {
            return state.socials.github;
        },
        linkedin(state) {
            return state.socials.linkedin;
        },
        telegram(state) {
            return state.socials.telegram;
        },
        whatsapp(state) {
            return state.socials.whatsapp;
        },
    },

    mutations: {
        SET_SOCIALS(state, payload) {
            let result = [];
            payload.map((el) => {
                return (result[el.id] = el);
            });
            state.socials = result;
        },
    },

    actions: {
        loadSocialNetworksData({ commit }) {
            return axios.get("socials.json").then((res) => {
                commit("SET_SOCIALS", res.data);
            });
        },
    },
});

export default store;
