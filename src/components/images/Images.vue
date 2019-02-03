<template>
  <div class="container mt-3">
      <div v-for="(person) in getPeople"
            :key="person.id"
        >
        <st-profile-image :profile="person.profile_path" />
        {{ person.name }}
        </div>
  </div>
</template>

<script>
  import actions from '../../store/action-types';
  import mutations from '../../store/mutation-types';
  import StProfileImage from './profileImage';
  export default {
    name: 'st-featured',
     created() {
      this.getPopularPeople();
    },
    components: {
        StProfileImage
    },
    computed: {
        getPeople(){
            return this.$store.state.people;
        }
    },
    methods: {
      getPopularPeople() {
        this.$store.dispatch(actions.GET_POPULAR_PEOPLE, {});
      },
    },
  };
</script>
