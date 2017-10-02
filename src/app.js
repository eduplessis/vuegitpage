var Vue = require("vue")
  // var Vuex = require("vuex")
  // var VueRouter = require("vue-router")
  // var axios = require("axios")
  // require('./components/navigation')

var  md = require('markdown-it')({  
  html: true,
  linkify:  true,
  typographer:  true
});

// Vue.use(VueRouter)

var NotFound = 'Page not found'
var Home = 'ello Home'
var About = 'ici about'

var routes = {
  '/': Home,
  '/about': About
}


var app = new Vue({
  el: '#app',
  template: '<div><div><a href="/about" v-on:click="go">about</a></div><div v-html="markit"></div></div>',
  data: {
    post: '__markdown-it__     rulezz!',
  },
  created: function() {
    this.viewComponent()
  },
  methods: {
    fetch: function() {},
    go(event) {
      event.preventDefault()
      window.history.pushState(
        null,
        "asdas",
        event.target.attributes.href.value
      )
      this.viewComponent()

    },
    viewComponent() {
      return this.post = routes[this.currentRoute()]
    },
    currentRoute: function() {
      return window.location.pathname
    }
  },
  computed: {
    markit() {
      return md.render(this.post)
    },
  }
})
