import Home from './components/Home.vue'
import Login from './components/Login.vue'
const routes = [
    { path: '/home/:id', component: Home },
    { path: '/',component: Login}
]
export default routes