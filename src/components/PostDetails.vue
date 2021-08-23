<template>
 <div>
   <b-container
     :style="{ backgroundColor: background(this.postId) }"
     v-if="postDetails"
   >
     <b-row>
       <b-col cols="12">
         <h1>{{ postDetails.title }}</h1>
       </b-col>
     </b-row>
     <div class="postBody">
       <b-row align-h="center">
         <b-col cols="10">
           <p>{{ postDetails.body }}</p>
         </b-col>
       </b-row>
     </div>
     <b-row>
       <b-col cols="12" class="commentTitle">
         <h2 style="font-weight: 500">Comments</h2>
       </b-col>
       <comment-tile :comments="allComments"></comment-tile>
     </b-row>
   </b-container>
   <h3 v-else>Loading....</h3>
 </div>
</template>
 
<script>
import { Service } from "../service.js";
import commentTile from "./CommentTile.vue";
 
export default {
 name: "PostDetails",
 components: {
   commentTile,
 },
 mounted() {
   this.getPostDetails();
   this.getComments();
 },
 data() {
   return {
     postId: this.$route.params.id,
     postDetails: null,
     allComments: [],
   };
 },
 methods: {
   getPostDetails() {
     Service.get(`posts/${this.postId}`)
       .then((res) => {
         this.postDetails = {
           ...res.data,
         };
         this.getUserDetails(this.postDetails.userId);
       })
       .catch((error) => console.log(error));
   },
   getComments() {
     Service.get(`comments?postId=${this.postId}`).then((res) => {
       this.allComments = res.data;
     });
   },
   background: function(postId) {
     return postId % 2 == 0 ? "#B5E0D9" : "#FFE6E6";
   },
 },
};
</script>