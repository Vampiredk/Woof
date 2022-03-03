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
        <video width="320" height="240" autoplay loop>
          <source src="../assets/video/video1.mp4" type="video/mp4">
        </video>
        <h1 style="color:#FFFFFF">
          Strand eller Bjerg
        </h1>
        <router-link to="/TimeFrikvarter">
          <button class="button" @click="addAnswer(1)">Strand</button>
          <button class="button" @click="addAnswer(2)">Bjerg</button>
        </router-link>
      </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'page2',
  props: ['buttonAnswer', 'addAnswer']

}
</script>
