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
                Mange eller Få
            </h1>
            <router-link to="/FindHund">
                <button class="button" @click="addAnswer(1)">Mange</button>
                <button class="button" @click="addAnswer(2)">Få</button>
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
