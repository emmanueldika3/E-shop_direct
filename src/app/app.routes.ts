import { Routes } from '@angular/router';
import { NotFound } from './not-found/not-found';
import { MainLayout } from './layouts/main-layout/main-layout';
import { AdminLayout } from './layouts/admin-layout/admin-layout';
import { Dashboard } from './pages/admin/dashboard/dashboard';
import { Product } from './pages/admin/product/product';
import { commandes } from './pages/admin/commandes/commandes';
import { Checkout } from './pages/checkout/checkout';
import { Home } from './pages/home/home';

// Importations des composants de catégories
import { News } from './pages/news/news';
import { Tech } from './pages/tech/tech';
import { Phones } from './pages/phones/phones';
import { Accessories } from './pages/accessories/accessories';
import { Gaming } from './pages/gaming/gaming';
import { Promo } from './pages/promo/promo';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "",
        component: MainLayout,
        children: [
            
            
            // J'ai ajouté tes autres pages ici pour qu'elles profitent du MainLayout (avec Navbar et Footer)
            { path: 'nouveautes', component: News },
            { path: 'informatique', component: Tech },
            { path: 'smartphones', component: Phones },
            { path: 'accessoires', component: Accessories },
            { path: 'gaming', component: Gaming },
            { path: 'promotions', component: Promo },
            { path: 'checkout', component: Checkout },
            { path: 'home', component: Home }
        ]
    },
    {
        path: "admin",
        redirectTo: "/admin/dashboard",
        pathMatch: "full"
    },
    {
        path: "admin",
        component: AdminLayout,
        children: [
            { path: "dashboard", component: Dashboard },
            { path: "products", component: Product },
            { path: "users", component: commandes },
        ]
    },
    { path: "**", component: NotFound }
];