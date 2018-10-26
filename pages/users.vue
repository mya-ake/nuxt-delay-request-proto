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
    <SsampleTest/>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    const response = await app.$_resources.delay.get({
      url: '/users',
      mapper(data = null) {
        return data === null ? { users: [] } : { users: data }
      },
    })

    const { users } = response.data
    return {
      users,
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
