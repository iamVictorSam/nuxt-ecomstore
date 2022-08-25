<template>
  <div class="card">
    <img src="" alt="blog photographs"/>
    <div class="pad__card">
      <div class="author">
        <p class="author__name">blog.author</p> <span>|</span>
        <p>blog.date</p>
      </div>
      <h2 class="title">{{ character.name }}</h2>
      <p>blog.description</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["character"]
}
</script>
