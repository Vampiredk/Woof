<template>

  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
      <img alt="Woof Logo" src="../assets/Images/Woof_logo.png">
      <br>
      {{ buttonAnswer }}
      <div class="a">
        <h1 style="color:#FFFFFF">
          Vil i lære hinanden bedre at kende i klassen?
        </h1>
<<<<<<< HEAD
      <router-link to="/KlassensHund">
=======
      <router-link to="/Klasse">
>>>>>>> parent of e0dc890 (Cleaning Code)
        <button class="button" @click="clearAnswer" >Find Klassens Hund</button>
      </router-link>
      </div>
    </div>
  </body>
</template>

<script>
// cd CLI --- CD woof ---- npm run serve
export default {
  name: 'Home',
  props: ['buttonAnswer', 'addAnswer', 'clearAnswer']

}
</script>
