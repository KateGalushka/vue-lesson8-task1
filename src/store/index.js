import { createStore } from 'vuex';

import { productsCategories } from '@/data/categories';

export default createStore({
    state: {
		productsCategories,
		productsList: [],
		radioInput: null,
		titleOfList: 'Оберіть категорію'
	 },
    getters: {
		categoriesList: ({ productsCategories }) => productsCategories,
		getProducts:({ productsList })=> productsList,
		getTitleOfList: ({ titleOfList }) => titleOfList
	 },
    mutations: {
		updateRadioValue(state, newVal){
			state.radioInput = newVal;
		 },
		setProductsList(state, data) {
			 state.productsList = [...data];
			//  console.log('Products: ', state.productsList);
		},
	 },

    actions: {
		async updateCategory({ commit, dispatch}, newVal){
		   commit('updateRadioValue', newVal);
			await dispatch('loadProductsData');
	  	},
		 async loadProductsData({ commit, state }){
			let category = state.radioInput;
			if (category){
				state.titleOfList = category;
				try {
					const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
					const data = await response.json();
					console.log(data);
					commit('setProductsList', data)
				} catch (error) {
					console.error('Error fetching products:', error);
					state.titleOfList = 'Немає товарів'
				}
			} 
		},
				
	 },

    modules: {},
}) 
