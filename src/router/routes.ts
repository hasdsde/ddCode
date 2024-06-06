import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
    {
        // name: "main",
        path: '/',
        component: () => import('layouts/mainLayout/index.vue'),
        children: [
            {path: '', redirect: '/dashboard/home'},
            {path: '/dashboard/home', component: () => import('pages/dashboard/home/index.vue')},
            {path: '/front/table', component: () => import('pages/front/table/index.vue')},
            {path: '/front/func', component: () => import('pages/front/func/index.vue')},
            {path: '/front/icon', component: () => import('pages/front/icon/index.vue')},
            {path: '/front/echart', component: () => import('pages/front/echart/index.vue')},
            {path: '/front/tailwind', component: () => import('pages/front/tailwind/index.vue')},
            //特殊文件：代码生成器
        ],
    },
];

// 动态路由，该代码在firefox中不可用
// if (localStorage.getItem("childrenMenu") !== null) {
//     childrenMenu = JSON.parse(localStorage.getItem("childrenMenu") as string)
//     // @ts-ignore
//     routes[0].children.push(...childrenMenu.map((c: any) => {
//         return {name: c.name, path: c.url, component: () => import('../pages' + c.url + '/index.vue')}
//     }))
// } else {
//     api.get("/menu/child").then((children: BaseApi) => {
//         //@ts-ignore
//         routes[0].children.push(...children.data.data.map((c: any) => {
//             return {name: c.name, path: c.url, component: () => import('../pages' + c.url + '/index.vue'), meta: c.name}
//         }))
//     })
// }

routes.push(
    {
        path: '/login',
        component: () => import('layouts/login/index.vue'),
    },
    {
        path: '/:catchAll(.*)*',
        component: () => import('pages/ErrorNotFound.vue'),
    },
    {
        path: '/template', component: () => import('pages/front/template/index.vue')
    },
)
export default routes;
