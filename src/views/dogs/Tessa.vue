<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
        <br>
        <div class="a" style="color:#FFFFFF">
            <h1>
                Tessa
            </h1>
            <p>
                Klassens hund er TESSA! Tessa ELSKER at komme ud og løbe for hun er nemlig en jagthund.<br>
                Hun elsker at blive udfordret og hele tiden blive bedre - derfor kan hun også godt let komme til at kede sig, når der ikke lige sker så meget.
            </p>
            <p>
                Aktiv *** <br>
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
