<template>
    <div class="image-container">
      <img :src="getProfileImage" class="profile-thumbnail"/>
    </div>
</template>

<script>
  import constants from '../../constants';
  export default {
    name: 'st-profile-image',
    props: {
      profile: {
        type: String,
      },
    },
    computed: {
      getProfileImage() {
        const profile = constants.basePosterURL + this.profile;
        return profile;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .profile-thumbnail {
    width: 189px;
  }
</style>
