<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dataBinding">dataBinding</router-link> |
    <router-link to="/listBinding">listBinding</router-link> |
    <router-link to="/ifBinding">ifBinding</router-link> |
    <router-link to="/onEvent">onEvent</router-link> |
    <router-link to="/options">options</router-link> |
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
