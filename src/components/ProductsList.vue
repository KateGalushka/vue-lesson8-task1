<template>
	<h1>{{ getTitleOfList }}</h1>
	<div class="products__container">
		<div v-for="item in getProducts" :key="item.id" class="product__item">
			<img :src="item.image" alt="product">
			<div class="product__item-descr">
				<p>{{ item.title }}</p>
				<p class="product__item-price">$ {{ item.price }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'ProductsList',
		
	computed: {
		...mapGetters(['getProducts', 'getTitleOfList']),
	}
	
}
</script>

<style lang="scss" scoped></style>