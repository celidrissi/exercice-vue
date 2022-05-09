import { ref } from "@vue/composition-api";
export function disheValidator (dishe) {
  var errors = ref({
    name: false,
    description: false
  });

  const policy = {
    name: {
      required: true,
      max: 20
    },
    description: {
      required: false,
      max: 250
    },
    image: {
      required: true,
    }
  };  

  const validate = () => {
    errors.value.name = false;
    errors.value.description = false;

    if (policy.name.required && !dishe.value.name || dishe.value.name.length > policy.name.max) {
      errors.value.name = true;
    }
    if (policy.description.required && !dishe.value.description || dishe.value.description.length > policy.description.max) {
      errors.value.description = true;
    }

    if (policy.image.required && !dishe.value.image) {
      dishe.image = "statics/image-placeholder.png";
    }

    if ( errors.value.name || errors.value.description) return errors;
    
    // save();
  }

  return [ errors, policy, validate ];
};