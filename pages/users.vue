<template>
  <section class="container">
    <h1>Qiita Users</h1>
    <ul>
      <li
        v-for="user in users"
        :key="`user-${user.id}`">
        <span>{{ user.name }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const response = await app.$_resources.get({ url: '/users' })
    return {
      users: response.data,
    }
  },

  data() {
    return {
      users: [],
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
