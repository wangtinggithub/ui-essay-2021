<template>
  <div>
    <header>
      <h1>{{info.title}}</h1>
    </header>
    <article>
      <p>{{info.content}}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "essay",
  props:['info']
}
</script>

<style scoped>

</style>
