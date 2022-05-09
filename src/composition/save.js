export function save() {
    if (this.action === "edit") {
      this.$store.dispatch("tasks/updateDishe", this.dishe);
    } else {
      this.$store.dispatch("tasks/addDishe", this.dishe);
    }
    this.$emit('close');
  };