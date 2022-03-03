<template>

  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
      <img alt="Woof Logo" src="../assets/Images/Woof_logo.png">
      <br>
      {{ buttonAnswer }}
        <video v-if="video1" autoplay muted loop id="myVideo">
          <source src="../assets/video/video3.mp4" type="video/mp4">
        </video>
        <video autoplay muted loop preload="auto" v-if="video2" id="myVideo">
          <source src="../assets/video/video1.mp4" type="video/mp4">
        </video>
    </div>
    <div class="content">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <div v-if="showButton" class="buttonContent">
        <h2 id="demo"></h2>
        <h1 style="color:#FFFFFF">
          Inde eller Ude
        </h1>
        <button id="button1" class="button" @click="addAnswer(1)" >Inde</button>
        <button id="button2" class="button" @click="addAnswer(2)">Ude</button>
      </div>
    </div>
  </body>x
</template>

<script>
// @ is an alias to /src
export default {
  name: 'page2',
  props: [],
  data: function () {
    return {
      buttonAnswer: [],
      video1: true,
      video2: false,
      video3: false,
      video4: false,
      showButton: false
    }
  },
  methods: {
    showButtonAfter5Seconds () {
      setTimeout(() => {
        this.showButton = true
        var video = document.getElementById('myVideo')
        video.pause()
      }, 5000)
    },
    addAnswer (value) {
      this.buttonAnswer.push(value)
      console.log(this.buttonAnswer)
      this.showButton = false
      this.video1 = false
      this.video2 = true
    }
  },
  created: function () {
    this.showButtonAfter5Seconds()
  }
}

</script>
