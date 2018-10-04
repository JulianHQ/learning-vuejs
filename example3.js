// Vue instance: Responsible for controling a piece of HTML code
new Vue({
  el: '#app',
    
  // String Interpolation (Fancy word of putting data into HTML)
  data: {
    firstName: 'Julián',
    lastName: 'Hernández'
  },

  // Methods (functions) that can operate upon the data contained
  // within the object (in this case the Vue instance)
  methods: {
    getFullName: function() {
      return this.firstName + ' ' + this.lastName
    },

    showFullName: function(first, last) {
      return first + ' ' + last
    },

    getFullNameObj: function(first, last) {
      return {
        name: first + ' ' + last
      }
    }
  }
});