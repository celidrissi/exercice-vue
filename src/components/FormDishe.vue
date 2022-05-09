<template>
  <q-card class="form-card">
    <q-card-section>
      <div class="text-h6 heading">{{ action === 'edit' ? "Modifier" : "Ajouter" }} Plat</div>
    </q-card-section>

    <q-card-section>
      <div class="row q-mb-md">
        <q-input 
          filled
          v-model="dishe.name"
          label="Nom" 
          class="col" 
          hint="Max 20 caractères"
          error-message = "Veuillez entrer un nom de plat valide (Max 20 caractères)"
          :error="errors.name"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="dishe.description"
          label="Description"
          type="textarea"
          class="col"
          :hint="dishe.description.length + ' / ' + policy.description.max + ' caractères'"
          :error-message = "'Veuillez entrer une description valide (Max ' + policy.description.max + ' caractères)'"
          :error="errors.description"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          filled
          v-model="dishe.image"
          label="URL de l'image"
          class="col"
        />
        <q-img
          :src="dishe.image ? dishe.image : 'statics/image-placeholder.png'"
          class="q-ml-sm"
          contain
        />
      </div>

      <div class="q-mb-md">
        <div class="row">
          <p class="q-mb-none">Note:</p>
        </div>
        <div class="row">
          <q-rating v-model="dishe.note" size="2em" color="orange" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn label="Annuler" type="abort" color="grey" v-close-popup/>
      <q-btn @click="validate"  label="Sauvegarder" type="submit" color="primary"/>
    </q-card-actions>
  </q-card>
</template>

<script>
import { ref } from "@vue/composition-api";
import { disheValidator } from "../composition/disheValidator";
import { save } from "../composition/save";

export default {
  props: {
    action : String, 
    current_dishe : Object
  },
  setup(props) {
    const dishe = ref({
      id: null,
      image: "",
      name: "",
      description: "",
      note: 0
    });

    const [errors, policy, validate] = disheValidator(dishe);

    return {
      dishe, errors, policy, validate, save
    }
  },
  mounted() {
    if (this.action === "edit") {
      this.dishe.id = this.current_dishe.id;
      this.dishe.name = this.current_dishe.name;
      this.dishe.description = this.current_dishe.description;
      this.dishe.image = this.current_dishe.image;
      this.dishe.note = this.current_dishe.note;
    }
  },
};
</script>

<style>
.form-card {
  min-width: 400px;
}
.form-card .heading {
  text-transform: capitalize;
}
.form-card .q-card-section {
  width: 100%;
}
.thumbnail {
  max-width: 50px;
  max-height: 50px;
}
.form-card .q-img {
  height: 56px;
  width: 56px;
  border-radius: 10px;
}
.form-card .q-img__image {
  background-size: cover !important;
}
.form-card .q-rating__icon {
  opacity: 0.2;
}
.form-card .q-rating__icon--active {
  opacity: 1;
}
</style>
