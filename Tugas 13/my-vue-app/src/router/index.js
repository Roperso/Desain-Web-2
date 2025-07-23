import { createRouter , createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import ProductDetail from '../views/ProductDetail.vue'
import About from '../views/About.vue'

const routes = [
    { path: '/', component: Home},
    { path: '/products', component: Products },
    { path: '/products/:id', name: ProductDetail, component: ProductDetail, props: true },
    { path: '/about', component: About },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router