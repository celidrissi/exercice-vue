<template>
  <q-page class="q-pa-lg">
      <span class="row q-gutter-lg">
        <dishe v-for="dishe in dishes" :name="dishe.name" :key="dishe.id" :dishe="dishe" />
        <add-button @click="showFormDishe = true" />
        <q-dialog v-model="showFormDishe">
          <form-dishe action="add" @close="showFormDishe=false" />
        </q-dialog>
      </span>
  </q-page>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  beforeCreate() {
    this.$store.commit('tasks/setStateFromLocalStorage');
  },
  setup(props) {
    var showFormDishe = ref(false);
    return { showFormDishe };
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
  },
  methods: {
    refresh() {
      this.$store.dispatch('tasks/fetchDishes');
    }
  }
};
</script>