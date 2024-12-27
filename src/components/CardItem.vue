<template>
    <div class="card">
        <img :src="`${product.image}`">
        <div class="card-des">
            <router-link
            :to="{
                name: 'CardView', 
                params: {
                    id: product.id, 
                    title: product.title, 
                    price: product.price, 
                    image: product.image, 
                    description: product.description, 
                    rate: product.rating.rate}}">
                {{ product.title }}
            </router-link>
            <p class="card-price">{{ product.price }}$</p>
        </div>
    </div>
</template>
  
<script>
//import { RouterView } from 'vue-router';

  
export default {
    name: 'CardItem',
    props: {
        product: {
            type: Object
        },
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
    margin-top: 60px;
}
.card {

    width: 20%;
    height: 30%;
    margin: 2%;
    border-bottom: 1px solid black;
}
.card-des .card-title {
    font: lighter 10pt Verdana, sans-serif;
    text-align: left;
    margin-top: 0%;
    margin-bottom: 5%;
    min-height: 100pt;
}
.card-des .card-price {
    text-align: right;
    margin-top: 0%;
    margin-bottom: 5%;
}
img {
    width: 100px;
    height: 125px;
}
</style>
  