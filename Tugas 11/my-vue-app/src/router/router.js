import { createWebHistory, createRouter } from "vue-router";

import UserList from "../pages/UserList.vue";
import UserDetail from "../pages/UserDetail.vue";
import CreateUser from "../pages/CreateUser.vue";
import Home from "../pages/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/users", component: UserList },
    { path: "/users/:id", component: UserDetail},
    { path: "/create", component: CreateUser },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;