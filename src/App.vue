<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <div class="rightalign">
      <button>Skriv dig up?</button><button>Hvad er Woof?</button><button>Kontakt</button>
    </div>
  </div>
  <router-view :clearAnswer="clearAnswer" :Emails="Emails" :addEmail="addEmail"/>

</template>

<script>
export default {
  data: function () {
    return {
      Emails: [],
      showButton: true
    }
  },
  methods: {
    clearAnswer () {
      while (this.buttonAnswer.length > 0) {
        this.buttonAnswer.shift()
      }
    },

    addEmail (Email) {
      if (Email) {
        this.Emails.push(Email)
        console.log(this.Emails)
      } else {
        console.log('No Email Found')
      }
    }
  }
}
</script>

<style>
</style>
