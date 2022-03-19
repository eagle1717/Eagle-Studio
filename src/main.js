import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/tailwind.scss";

axios.defaults.baseURL = "https://eagle-studio-default-rtdb.firebaseio.com/";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

const app = createApp(App);

const requireComponent = require.context(
    "@/components/Base",
    false,
    /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
    const componentConfig = requireComponent(fileName);
    const componentName = upperFirst(
        camelCase(
            fileName
                .split("/")
                .pop()
                .replace(/\.\w+$/, "")
        )
    );
    app.component(componentName, componentConfig.default || componentConfig);
});

app.use(router);
app.use(store)
app.use(VueAxios, axios);
app.mount("#app");
