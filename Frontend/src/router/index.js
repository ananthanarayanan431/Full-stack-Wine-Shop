
import { createRouter, createWebHistory } from "vue-router";
import ProductDetailsPage from "@/pages/ProductDetailsPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import ShoppingCartPage from "@/pages/ShoppingCartPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";

const routes=[
    {
        path:"/products/:ProductId",
        component:ProductDetailsPage,
    },
    {
        path:"/products",
        component:ProductPage,
    },
    {
        path:"/cart",
        component:ShoppingCartPage,
    },
    {
        path:'/:pathMatch(.*)*',
        component: NotFoundPage,
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;