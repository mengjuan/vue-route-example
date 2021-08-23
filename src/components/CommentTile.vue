<template>
 <div>
   <b-col cols="12" v-if="comments">
   <b-col cols="10" v-for="comment in comments" 
:key="comment.id" class="comment">
     {{ comment.body }}
   </b-col>
 </b-col>
 <h5 v-else>Loading....</h5>
 </div>
 </template>
 
<script>
export default {
 name: "commentTile",
 props: ["comments"],
};
</script>