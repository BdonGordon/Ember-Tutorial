import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    //what we're doing here is replacing the current URL in the browser's history. transitionTo() just adds to the history
    this.replaceWith('rentals');
  }
});
