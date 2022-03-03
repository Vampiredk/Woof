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
                Er du klar til at finde din Hund
            </h1>
        <ul v-if="findDog() === 'charles'">
            <router-link to="/dogs/Charles">
                <button class="button" >Find Hund</button>
            </router-link>
        </ul>
        <ul v-if="findDog() === 'bandit'">
            <router-link to="/dogs/Bandit">
                <button class="button" >Find Hund</button>
            </router-link>
        </ul>
        <ul v-if="findDog() === 'frida'">
            <router-link to="/dogs/Frida">
                <button class="button" >Find Hund</button>
            </router-link>
        </ul>
        <ul v-if="findDog() === 'kalle'">
            <router-link to="/dogs/Kalle">
                <button class="button" >Find Hund</button>
            </router-link>
        </ul>
        <ul v-if="findDog() === 'tessa'">
            <router-link to="/dogs/Tessa">
                <button class="button" >Find Hund</button>
            </router-link>
        </ul>
        </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'page2',
  props: ['buttonAnswer', 'findDog']

}
</script>
