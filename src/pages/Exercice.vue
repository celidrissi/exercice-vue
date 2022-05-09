<template>
  <q-page class="q-pa-lg">
    <div class="row q-gutter-lg">
      <dishe v-for="dishe in dishes" :key="dishe.id" :dishe="dishe" />

      <add-button @click="showFormDishe = true" />

      <q-dialog v-model="showFormDishe">
        <form-dishe action="add" @close="showFormDishe=false" />
      </q-dialog>
    </div>
  </q-page>
</template>

<script>

export default {
  beforeCreate() {
    this.$store.commit('tasks/setStateFromLocalStorage');
  },
  data() {
    return {
      showFormDishe: false,
    };
  },
  components: {
    dishe: require("components/Dishe.vue").default,
    "add-button": require("components/AddButton.vue").default,
    "form-dishe": require("components/FormDishe.vue").default
  },
  computed: {
    dishes() {
      return this.$store.getters['tasks/getDishes'];
    }
  }
};
</script>