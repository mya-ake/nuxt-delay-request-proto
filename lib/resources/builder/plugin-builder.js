export default resources => {
  const install = Vue => {
    Vue.mixin({
      async beforeRouteEnter(to, from, next) {
        const responses = await resources.requestTemp()
        next(vm => {
          responses.forEach(response => {
            if (response.status !== 200) {
              return
            }
            const { data } = response
            Object.entries(data).forEach(([key, value]) => {
              vm[key] = value
            })
          })
        })
      },
    })
  }
  return { install }
}
