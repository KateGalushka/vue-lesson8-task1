<template>
	<category-selector/>
	<div >
		<products-list/>
	</div>
	

	
</template>

<script>
import CategorySelector from './CategorySelector.vue'
import ProductsList from './ProductsList.vue';

	export default {
    name: 'MarketPlaceComponent',

    components: {
    CategorySelector, ProductsList
}
}
</script>

<style lang="scss">
*{
	font-family: 'Poppins', sans-serif;
}
.products__container{
	display: flex;
	flex-wrap: wrap;
	margin: 30px 50px;
}
.product__item{
	display: flex;
	padding: 15px;
	max-width: 300px;
	gap: 15px;
	border: 0.3px solid rgba(242, 247, 247, 0.962);
	border-radius: 5px;
	&:hover{
		box-shadow: 10px 10px 5px rgba(132, 126, 126, 0.459);
		background-color: rgba(242, 247, 247, 0.962);
	}
	img{
		width: 150px;
	}
}
.product__item-price{
	font-weight: 600;
	font-size: 18px;
}

</style>