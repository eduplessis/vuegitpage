var Vue = require("vue")

Vue.component('navigation', {
  template: '<div><a href="/about" v-on:click="go">about</a></div>'
})
