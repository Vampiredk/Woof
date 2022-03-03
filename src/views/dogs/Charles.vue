<template>
  <head>
    <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
      <br>
      <div class="a" style="color:#FFFFFF">
        <h1>
          Charles
        </h1>
        <p>
          Klassens hund er Charles. Det bedste charles ved det er at blive klappet og nusset. <br>
          Charles elsker at hygge sig med alle sine venner, så meget at han nogle gange glemmer at han også skal lave noget - for eksempel gå tur og lære nye tricks.
        </p>
        <p>
          Aktiv * <br>
          Socal *** <br>
          selvstændighed *
        </p>
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
