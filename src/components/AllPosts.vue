<template>
   <div>
     <post-card :posts="allPosts"></post-card>
  </div>
</template>
 
<script>
import { Service } from "../service.js";
import PostCard from './PostCard.vue';
 
export default {
 components: { PostCard },
 name: 'Posts',
 created() {
   this.getAllPosts();
 },
 data() {
   return {
     allPosts: [],
   }
 },
 methods: {
   getAllPosts() {
     Service.get(`posts`)
       .then(res => {
         this.allPosts = res.data;
       })
       .catch(error => console.log(error));
   },
 }
}
</script>