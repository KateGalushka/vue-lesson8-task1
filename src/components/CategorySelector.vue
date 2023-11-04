<template>
	<div class="radio-container">
		<div v-for="category in categoriesList" :key="category.id" class="input-container">
			<input v-model="radioInputVal" :value="category.value" type="radio" name="myRadio">
			<div class="radio-label">
				<img :src="category.img">
				<label>{{ category.title }}</label>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'CategorySelector',
	props: {
		radioInput: {
			type: String,
		},
	},

	computed: {
		...mapGetters(['categoriesList']),

		radioInputVal:{
			get(){
				return this.radioInput
			},
			set(newVal){
				this.updateCategory(newVal)
			}
		}
	},
	methods: {
		...mapActions(['updateCategory'])
	},
}
</script>

<style lang="scss" scoped>
.radio-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	padding: 30px 0;
	background-color: rgb(236, 238, 238);
	margin-bottom: 50px;
}
.input-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 200px;
	margin: 0.5rem;
	input	{
		position: absolute;
		height: 100%;
		width: 100%;
		margin: 0;
		cursor: pointer;
		z-index: 2;
		opacity: 0;
	}
}
input:checked + .radio-label img{
	border: 3px solid red;
	transform: scale(1.1);
}
.radio-label {
	img {
		display: block;
		margin: 10px auto;
		border: 2px solid transparent;
		border-radius: 50%;
		transition: all .2s ease;
	}
	label	{
		display: block;
		font-size: 20px;
		font-weight: 500;
		color: #636567;
		letter-spacing: 1px;
	}
}
</style>