<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
      <br>
        <div class="a" style="color:#FFFFFF">
        <h1>
          Bandit
        </h1>
        <p>
        Klassens hund er Bandit. Bandit har krudt i R****, og elsker at lege, især med andre. <br>
        Bandit keder sig nemt og har brug for mange lufteture, hvis han skal kunne holde koncentrationen og lære nye tricks. <br>
        Men han gør altid sit bedste og er altid sød ved sine venner.
        </p>
        <p>
          Aktiv *** <br>
          Socal *** <br>
          selvstændighed *
        </p>
        <label for="Emails" id="EmailsInput ">Email:</label><br>
        <input type="text" v-model="Email" id="fname" name="fname"><br>
        <button @click="addEmail(Email)" >Gem Email</button><br>
        {{ Emails }}
        </div>
    </div>
  </body>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'page2',
  props: ['buttonAnswer', 'findDog', 'Emails', 'addEmail']
}
</script>
