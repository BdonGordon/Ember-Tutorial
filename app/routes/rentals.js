import Route from '@ember/routing/route';

export default Route.extend({
  /*This function acts as a hook. Ember will call it for us during different times in the app.
  * Ember will use this model object and save it as an attribute called model
  */
  model() {
    return this.store.findAll('car');
  }
});
