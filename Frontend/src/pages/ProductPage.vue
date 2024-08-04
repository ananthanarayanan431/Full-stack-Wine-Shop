
<template>
    <h1>Products</h1>
    <ProductList :productData="products"></ProductList>
</template>

<script setup>

import products from '@/temp-data';
import ProductList from '@/components/ProductList.vue';
</script>

<style scoped>
</style>