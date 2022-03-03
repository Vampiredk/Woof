<template>
  <head>
     <title> Vue 3 Basics</title>
  </head>
  <body>
    <div id="app">
        <br>
        <div class="a" style="color:#FFFFFF">
            <h1>
                Kalla
            </h1>
            <p>
                Klassens hund er Kalle. Kalle elsker at gå i skole,fordi man både kan lære nye ting og hænge ud med sine venner. <br>
                Men Kalle vil også gerne begge dele hele tiden og nogle gange har Kalle lidt for neget energi.
            </p>
            <p>
                Aktiv *** <br>
                Socal *** <br>
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
