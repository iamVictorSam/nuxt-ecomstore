<template>
  <div class="container section">
    <div class="container__grid">
      <div class="card">
        <img src="" alt="blog photographs"/>
        <div class="pad__card">
          <div class="author">
            <p class="author__name">blog.author</p> <span>|</span>
            <p>blog.date</p>
          </div>
          <h2 class="title">blog.title</h2>
          <p>blog.description</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  background: #111111;
  position: unset;
}
.container {
  width: 85%;
  max-width: 75rem;
  margin-inline: auto;
}
.section {
  padding: 3em 0;
}
.container__grid {
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
}
.card {
  background: #f0f7f4;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.card img {
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%
}
.pad__card {
  padding: 2em;
}
.author {
  display: flex;
  align-items: center;
}
.author, .title {
  margin-bottom: 1em;
}
.author span {
  margin: 0 0.3em;
}
.author__name {
  text-transform: capitalize;
}
button {
  border: unset;
  padding: 1em 2em;
  margin-top: 2em;
  background: #0D5159;
  font-weight: 700;
  cursor: pointer;
}
button a {
  color: #fff;
}
</style>
