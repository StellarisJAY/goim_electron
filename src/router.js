import LoginPage from './pages/login.vue'
import ChatPage from './pages/chat.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {path: "/login", component: LoginPage},
    {path: "/chat", component: ChatPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router

