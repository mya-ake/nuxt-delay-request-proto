<template>
  <section class="container">
    <h1>Qiita Items</h1>
    <ul>
      <li
        v-for="item in items"
        :key="`item-${item.id}`">
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const response = await app.$_resources.get({ url: '/items' })
    return {
      items: response.data,
    }
  },

  data() {
    return {
      items: [],
    }
  },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
