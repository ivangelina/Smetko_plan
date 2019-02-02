<template>
  <div class="container mt-3">
      <div v-for="(person) in getPeople"
            :key="person.id"
        >
        {{ person.name }}
        </div>
  </div>
</template>

<script>
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';

  export default {
    name: 'st-featured',
    beforeCreate() {
  
    },
    computed: {
        getPeople(){
            return this.$store.state.people;
        }
    },
    created() {
      this.getPopularPeople();
    },
    methods: {
      getPopularPeople() {
        this.$store.dispatch(actions.GET_POPULAR_PEOPLE, {});
      },
    },
  };
</script>
