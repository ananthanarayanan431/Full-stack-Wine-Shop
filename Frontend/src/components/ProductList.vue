
<template>
    <div class="grid-wrap">
        <div class="product-item" v-for="product in productData" :key="product.id">
            <img :src="product.imageName">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <router-link :to="'/products/' + product.id">
                <button>View Details</button>
            </router-link>
        </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  productData: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
</style>