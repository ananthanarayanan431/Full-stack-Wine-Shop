
<template>
    <div class="product-container" v-for="product in ShoppingDetails" :key="product.id">
        <img class="product-image" :src="product.imageName" />
        <div class="details-wrap">
          <h3>{{ product.name }}</h3>
          <p>{{ product.price }}</p>
        </div>
        <button class="remove-button">Remove from Cart</button>
    </div>

</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
  ShoppingDetails: {
    type: Array,
    required: true,
  },
});

</script>

<style scoped>
</style>