new Vue({
  el: '#app',

  data: {
    title: 'Titanic',
    released: 1988
  },

  methods: {
    movieDescription: function() {
      return {
        desc: this.released < 2000 ? 'old' : 'new'
      }
    }
  }
});