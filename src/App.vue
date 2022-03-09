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
  div.a {
    text-align: center;
  }

  div.rightalign {
    text-align: right;
  }

  .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  body {
    background-color:rgb(194, 113, 98);
  }
</style>
