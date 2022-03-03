<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
        <br>
        <div class="a" style="color:#FFFFFF">
            <h1>
                Frida
            </h1>
            <p>
                Klassens hund er Frida! Frida kan rigtig godt lide sine venner, men hun er også en selvstændig hund, som rigtig godt kan lide at lære nye ting. <br>
                Hendes ben er ikke så lange og hun er ikke den store løber, men indenfor er herlig og god til at lege og lære nye ting.
            </p>
            <p>
                Aktiv * <br>
                Socal * <br>
                selvstændighed ***
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
