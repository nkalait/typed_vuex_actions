import Vue from 'vue';
import Vuex from 'vuex';
import { NewVuexStore } from '@/store/newVuexStore';

Vue.use(Vuex);

// export default new Vuex.Store({
/** Replacing the original Vuex.Store with our new class */
export default new NewVuexStore({
	state: {
		entities: {
			cars: new Array<Car>(),
			people: new Array<Person>()
		}
	},
	mutations: {
		mutateStoreCars (state, data) {
			state.entities.cars = data;
		},
		mutateStorePeople (state, data) {
			state.entities.people = data;
		}
	},
	actions: {
		actionStoreCars(context, data) {
			context.commit('mutateStoreCars', data);
		},
		actionStorePeople(context, data) {
			context.commit('mutateStorePeople', data);
		}
	}
})
