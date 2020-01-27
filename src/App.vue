<template>
  <div id="app">
	<button @click="printCars">print cars</button>
	<button @click="printPeople">print people</button>
  </div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import store from '@/store/';
	import { ALLOWED_ACTIONS } from '@/enums';

	@Component
	export default class App extends Vue {
		/** declare people */
		bob: Person;
		jane: Person;
		tyler: Person;

		/** declare cars */
		car1: Car;
		car2: Car;
		car3: Car;

		constructor() {
			super();

			/** initialise people */
			this.bob = { name: 'Bob', age: 12 };
			this.jane = { name: 'Jane', age: 13 };
			this.tyler = { name: 'Tyler', age: 14 };

			/** initialise cars */
			this.car1 = { make: 'Make 1', year_made: 1990 };
			this.car2 = { make: 'Make 2', year_made: 1991 };
			this.car3 = { make: 'Make 3', year_made: 1992 };
		}
		mounted() {
			this.storeEntities();
		}
		storeEntities() {
			const cars: Entities<Car> = [this.car1, this.car2, this.car3];
			const people: Entities<Person> = [this.bob, this.jane, this.tyler];

			store.dispatch(ALLOWED_ACTIONS.STORE_CARS, cars);
			store.dispatch(ALLOWED_ACTIONS.STORE_PEOPLE, people);

			/** the 2 lines below will fail to compile */
			// const cars: Entities<Car> = [this.bob, 'notAllowed', this.car3];
			// store.dispatch(ALLOWED_ACTIONS.STORE_PEOPLE, cars);
		}
		printCars() {
			console.log('Cars\n', store.state.entities.cars.map((car: Car) => car.make + ': ' + car.year_made));
		}
		printPeople() {
			console.log('People\n', store.state.entities.people.map((person: Person) => person.name + ': ' + person.age));
		}

	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
