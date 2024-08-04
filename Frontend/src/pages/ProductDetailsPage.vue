
<template>
    <!-- <h1>Product Details Page Now</h1> -->
    <div v-if="product">
        <div class="img-wrap">
            <img :src="product.imageName" />
        </div>
        <div class="product-details">
            <h3>{{ product.name }}</h3>
            <h3 class="price">{{ product.price }}</h3>
            <button class="add-to-cart">Add to cart</button>
        </div>
    </div>

    <div v-else>
        <NotFoundPage></NotFoundPage>
    </div>
</template>

<script setup>
import products from '@/temp-data';
import { useRoute } from 'vue-router';
import { onMounted, reactive, ref } from 'vue';
import NotFoundPage from './NotFoundPage.vue';

const route=useRoute();
// const product=reactive({});
const product=ref(null);

onMounted(()=>{
    const finalproduct = products.find(product=>product.id===route.params.ProductId);
    if (finalproduct) {
        // Object.assign(product,finalproduct);
        product.value=finalproduct;
    }
});
</script>

<style scoped>
</style>