<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <div class="rightalign">
      <button>Skriv dig up?</button><button>Hvad er Woof?</button><button>Kontakt</button>
    </div>
  </div>
  <router-view :buttonAnswer="buttonAnswer" :clearAnswer="clearAnswer" :findDog="findDog" :Emails="Emails" :addEmail="addEmail"/>

  <Sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
  />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
  data: function () {
    return {
      showSidebar: true,
      buttonAnswer: [],
      Emails: [],
      showButton: true
    }
  },
  methods: {
    addAnswer (value) {
      this.buttonAnswer.push(value)
      console.log(this.buttonAnswer)
    },
    toggleSidebar () {
      this.showSidebar = !this.showSidebar
    },

    clearAnswer () {
      while (this.buttonAnswer.length > 0) {
        this.buttonAnswer.shift()
      }
    },

    findDog () {
      if (this.buttonAnswer.at(0) === 1) {
        console.log('1')
        if (this.buttonAnswer.at(1) === 1) {
          console.log('1.1.')
          if (this.buttonAnswer.at(2) === 1) {
            console.log('1.1.1')
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.1.1.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.1.1.2')
                return 'frida'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.1.2.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.1.2.2')
                return 'charles'
              }
            }
          }
        } else if (this.buttonAnswer.at(1) === 2) {
          if (this.buttonAnswer.at(2) === 1) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.2.1.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.2.1.2')
                return 'frida'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('1.2.2.1')
                return 'charles'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('1.2.2.2')
                return 'charles'
              }
            }
          }
        }
      } else if (this.buttonAnswer.at(0) === 2) {
        if (this.buttonAnswer.at(1) === 1) {
          if (this.buttonAnswer.at(2) === 1) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.1.1.1')
                return 'bandit'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.1.1.2')
                return 'bandit'
              }
            } else if (this.buttonAnswer.at(2) === 2) {
              if (this.buttonAnswer.length > 3) {
                if (this.buttonAnswer.at(3) === 1) {
                  console.log('2.1.2.1')
                  return 'bandit'
                } else if (this.buttonAnswer.at(3) === 2) {
                  console.log('2.1.2.2')
                  return 'charles'
                }
              }
            }
          }
        } else if (this.buttonAnswer.at(1) === 2) {
          if (this.buttonAnswer.at(2) === 1) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.2.1.1')
                return 'tessa'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.2.1.2')
                return 'tessa'
              }
            }
          } else if (this.buttonAnswer.at(2) === 2) {
            if (this.buttonAnswer.length > 3) {
              if (this.buttonAnswer.at(3) === 1) {
                console.log('2.2.2.1')
                return 'kalle'
              } else if (this.buttonAnswer.at(3) === 2) {
                console.log('2.2.2.2')
                return 'tessa'
              }
            }
          }
        }
      }
    },

    addEmail (Email) {
      if (Email) {
        this.Emails.push(Email)
        console.log(this.Emails)
      } else {
        console.log('No Email Found')
      }
    },

    showButtonAfter5Seconds () {
      setTimeout(() => {
        this.showButton = true
      }, 5000)
    }
  },
  created: function () {
    this.showButtonAfter5Seconds()
  }
}
</script>

<style>
  div.a {
    text-align: center;
  }

  div.rightalign {
    text-align: right;
  }

  .button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }

  body {
    background-color:rgb(194, 113, 98);
  }
</style>
