import Ember from 'ember';

export default Ember.Controller.extend({
  saveForm(attrs) {
    // Create a new branch model
    const branch = this.store.createRecord(`branch`, attrs);

    // Save branch model
    branch.save().then(() => {
      // Go to the branches index
      this.transitionToRoute(`branches.index`);
    });
  },
});
