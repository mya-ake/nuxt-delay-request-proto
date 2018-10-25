<template>
  <div>
    <header>
      <nav class="app-nav">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/items">Items</nuxt-link>
        <nuxt-link to="/users">Users</nuxt-link>
      </nav>
    </header>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.app-nav {
  display: flex;
  justify-content: space-around;
  padding: 24px;
}
</style>
