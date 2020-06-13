<template>
  <div class="location">
    <div class="container">
      <div v-if="location != null" class="card results mb-3">
        <div class="card-header text-center">
          <p class="lead">My Public Ip Address</p>
          <h3 class="text-white">{{ location.ip }}</h3>
        </div>
        <div class="card-body">
          <div class="row text-center">
            <div class="col-md-4">
              <p class="lead">Country</p>
              <img class="flag" :src="location.country_flag" alt="">
            </div>
            <div class="col-md-4">
              <p class="lead">Region</p>
              <h6 class="text-white">{{ location.region }}</h6>
            </div>
            <div class="col-md-4">
              <p class="lead">City</p>
              <h6 class="text-white">{{ location.city }}</h6>
            </div>
          </div>
          <hr>
          <div class="row text-center">
            <div class="col-md-4">
              <p class="lead">ISP</p>
              <h6 class="text-white">{{ location.isp }}</h6>
            </div>
            <div class="col-md-4">
              <p class="lead">Country Code</p>
              <h6 class="text-white">{{ location.country_phone }}</h6>
            </div>
            <div class="col-md-4">
              <p class="lead">Currency Code</p>
              <h6 class="text-white">{{ location.currency_code}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Location",
  data() {
    return {
      location: null
    };
  },
  beforeMount() {
    axios.get("http://localhost:3000").then(res => {
      this.location = res.data;
    });
  }
};
</script>

<style scoped>
.results {
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
  border-radius: 10px;
  background-color:darkseagreen;
}
.line {
  color: white;
}
.flag {
  width: 60px;
  height: 35px;
}
</style>
