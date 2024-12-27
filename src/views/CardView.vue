<template>
    <!DOCTYPE html>
    <html lang="en">
      <head>
        efdfd
      </head>
      <body>
        <header>
          <router-link
          :to="{name: 'CatalogView'}">
            Назад
          </router-link>
        </header>
        <main>
          <div class="good_page">
            <img :src="`${$route.params.image}`">
            <div class="good_page__des">
              <p class="good_page__title">{{ $route.params.title }}</p>
              <p class="good_page__price"><b>Цена:</b> {{ $route.params.price }}$</p>
              <p class="good_page__description"><b>Описание:</b><br>{{ $route.params.description }}</p>
              <p class="good_page__rate"><b>Рейтинг: </b>{{ $route.params.rate }}</p>
            </div>
          </div>
        </main>
        <footer>
  
        </footer>
      </body>
    </html>
  </template>
  
  <script>
  export default {
    props: {
      product_view: String
    },
    name: 'CardView',
    data() {
      return {
        
      }
    },
    mounted() {
      
    },
    methods: {
      
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .good_page {
    display: flex;
  }
  .good_page img {
    width: 30%;
    height: 40%;
  }
  .good_page__des {
    width: 70%;
    padding-left: 10%;
    text-align: left;
  }
  .good_page__title {
    font: lighter 20pt Verdana, sans-serif;
  }
  .good_page__price {
    font: lighter 11pt Verdana, sans-serif;
  }
  .good_page__description {
    font: lighter 11pt Verdana, sans-serif;
  }
  .good_page__rate {
    font: lighter 11pt Verdana, sans-serif;
  }
  </style>
  