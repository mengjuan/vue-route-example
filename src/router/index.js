import Vue from 'vue'
import VueRouter from 'vue-router'

import Posts  from "../components/AllPosts.vue";
import PageNotFound from "../components/PageNotFound.vue";
import PostDetails from "../components/PostDetails.vue"; 

Vue.use(VueRouter)
 
const routes = [
 {
   path: '/', redirect: '/posts'
 },
 {
   path: '/posts',
   component: Posts
 },
 {
    path: '/posts/:id',
    component: PostDetails
},
 {
     path:'*',
     component: PageNotFound
 }
]
 
const router = new VueRouter({
 mode: 'history',
 base: process.env.BASE_URL,
 routes
})
 
export default router