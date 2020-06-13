<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Location',
  data() {
    return {
      location: null
    }
  },
  beforeMount() {
    let self = this;
    axios.get('http://localhost:3000/').then(res => {
      self.location = res.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>
