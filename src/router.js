import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import AboutView from "./views/AboutView.vue";
import LoginView from "./views/LoginView.vue";
import RegisterView from "./views/RegisterView.vue";
import CreatePostView from "./views/CreatePostView.vue";
import PostDetailView from "./views/PostDetailView.vue"; 
import { auth } from "./firebase";

const routes = [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/login", name: "login", component: LoginView },
    { path: "/register", name: "register", component: RegisterView },
    {
        path: "/create-post",
        name: "create-post",
        component: CreatePostView,
        meta: { requiresAuth: true },
    },
    { path: "/post/:id", name: "post-detail", component: PostDetailView }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
    const isAuthenticated = auth.currentUser;
    if (requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router;
