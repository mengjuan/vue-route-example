<template>
 <div>
   <b-card
     v-for="post in posts"
     :key="post.id"
     :style="{ backgroundColor: background(post.id) }"
     class="post"
   >
     <b-row class="row1">
       <p class="title">
              <router-link
                :to="'/posts/' + post.id"
                >
                     Title - {{ post.title }}
              </router-link>
       </p>
       <p class="body"
         :title="post.body"
       >
         Description - {{ post.body.slice(0, 70) + "..." }}
       </p>
     </b-row>
   </b-card>
 </div>
</template>
 
<script>
export default {
 name: "postCard",
 props: ["posts"],
 methods: {
   background: function(postId) {
     return postId % 2 == 0 ? "#B5E0D9" : "#FFE6E6";
   },
 },
};
</script>