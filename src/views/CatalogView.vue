<template>
      <head>
        efdfd
      </head>
      <body>
        <header>
          Магазин
        </header>
        <div class="filter-block">
            <button @click="update_products('electronics')">Electronics</button>
            <button @click="update_products('jewelery')">Jewelery</button>
            <button @click="update_products(`men's clothing`)">Men's clothing</button>
            <button @click="update_products(`women's clothing`)">Women's clothing</button>
          </div>
        <main>
          <div class="cards">
            <CardItem
              v-for="(f,i) in products_page"
              :key="i"
              :product="f">
            </CardItem>
          </div>
          <div class="pagins">
            <PagItem
              v-for="(f, i) in count_products/10"
              :key="i"
              :id="f"
              @click="next_page(i)"
            ></PagItem>
          </div>
        </main>
        <footer>

        </footer>
      </body>
  </template>
  
  <script>
  import CardItem from '../components/CardItem.vue'
  import PagItem from '../components/PagItem.vue'
  export default {
    name: 'App',
    data() {
      return {
        products: null,
        products_page: null,
        search: 'search',
        count_products: 0,
        split: 0,
      }
    },
    mounted() {
      this.mounted_products();
    },
    methods:{
      mounted_products() {
        fetch('https://fakestoreapi.com/products')
        //fetch('./data/products.json')
          .then(res=>res.json())
          .then(json=>{
            this.products=json;
            this.products = this.products.map(object => object);
            this.products_page = this.products.slice(0, 10);
            this.count_products = this.products.map(object => object.id).length;
          });
      },
      update_products(e){
        fetch(`https://fakestoreapi.com/products/category/${e}`)
          .then(res=>res.json())
          .then(json=>{
            this.products=json;
            this.products = this.products.map(object => object);
            this.products_page = this.products;
          });
      },
      next_page(e) {
        this.products_page = this.products.slice(10*e, (e*10)+10);
      }
    },
    components: {
      CardItem,
      PagItem
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
  body {
    margin: 0%;
  }
  header {
    padding-left: 13%;
    padding-right: 13%;
    border-bottom: 1px solid black;
    font: bold 30pt Verdana, sans-serif;
    display: flex;
    justify-content: start;
    padding-bottom: 5%;
  }
  .filter-block {
    display: flex;
    justify-content: space-around;
    margin-bottom: 5%;
    border-bottom: 1px solid black;
    position: relative;
    padding-left: 13%;
    padding-right: 13%;
  }
  button {
    font: lighter 14pt Verdana, sans-serif;
    padding: 2% 2% 2% 2%;
    margin: 0%;
    border: 0px solid #598d66;
    border-radius: 0px;
    background-color: transparent;
    color: black;
  }
  
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  main {
    padding-left: 13%;
    padding-right: 13%;
  }
  button:focus {
    font: bold 14pt Verdana, sans-serif;
  }
  </style>