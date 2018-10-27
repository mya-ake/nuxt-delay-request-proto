export default resources => {
  const install = Vue => {
    Vue.mixin({
      beforeRouteEnter(to, from, next) {
        next(async vm => {
          const responses = await resources.requestTemp()
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
