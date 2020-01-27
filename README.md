# typed_vuex_actions

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# About this code
This code is just to demonstrate how one can go about extending Vuex in order to have typed actions.
I have not had type to properly document it, I'll update it soon so that it is easly to understand. In the mean time an explanation exists on LinkedIn https://www.linkedin.com/pulse/typed-actions-vuex-typescript-small-look-vue-tsepo-nkalai

The problem for me started with having to remember all my actions when dispatching an action. To this, came in Enums, nice and simple to use but left me with the problem of still not being able to make sure the action entered is one of the allowed possible actions, there is where classes, interfaces, and extends came in and I should say I was pretty amazed by the end result.

## Versions used
    - TypeScript 3.5.3
    - Vue 2.6.10
    - Vuex 3.1.2
    - Vue CLI v4.1.1

## What is being done
    - Define a new conditional type to hold the array of entities we dispatch
    - Create an enum to hold only actions we want to allow so that we don't have to wait until runtime to get the error message '[vuex] unknown action type:...'
    - Extend Vuex store
    - Override the dispatch function
    - Replace Vuex store with the newly created class
    - Finally, we use the new conditional type we defined and use it for the dispatching