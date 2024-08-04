<template>
    <h1>Shopping Cart</h1>
    <div v-if="cartItems.length > 0">
      <ShoppingCartList :ShoppingDetails="cartItems"></ShoppingCartList>
      <button class="checkout-button">Proceed to Checkout</button>
    </div>
    <div v-if="cartItems.length === 0">
      <h1>You current have no items in your cart!</h1>
    </div>
  </template>
  

<script setup>
import { cartItems } from '@/temp-data';
import ShoppingCartList from '@/components/ShoppingCartList.vue';

</script>

<style scoped>
</style>