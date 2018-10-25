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
    const response = await app.$_resources.delay.get({ url: '/users' })
    return {
      users: 'data' in response ? response.data : [],
    }
  },

  data() {
    return {
      users: [],
    }
  },

  async mounted() {
    const responses = await this.$_resources.requestTemp()
    if (responses.length === 0) {
      return
    }
    const [response] = responses
    this.users = 'data' in response ? response.data : []
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
