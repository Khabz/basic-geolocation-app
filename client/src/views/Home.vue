<template>
  <div class="home">
    <div class="container">
      <div class="welcome">
        <div class="content text-center">
          <h1 class>Welcome</h1>
          <p class="lead">
            This is a basic client app to get device location using IP Address.
            We're getting data from a node rest api I created
            <a href="http://localhost:3000" target="_blank"
              >http://localhost:3000</a
            >
          </p>
          <p class="lead">
            Often, a website uses a Geolocation API to look up a user’s location
            by their IP address. This is useful for many things — particularly
            for apps that display localized search results (think Yelp for
            looking up restaurants near you, or Tinder for finding people to
            take to those restaurants.). Once you click the button below, you
            can get back information about your timezone, latitude and
            longitude, region, city, currency and more
          </p>
          <a href="/location" class="btn btn-primary">
            Get My Location
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style scoped>
.welcome {
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  width: 100%;
}
</style>
