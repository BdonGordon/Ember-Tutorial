import Route from '@ember/routing/route';

/** This file, as well as persons.hbs, was auto-generated via cmd line script: ember generate route persons*/

export default Route.extend({

  /** This method is where we return whatever data that we want to be available to the template (persons.hbs) ... much like render() ? */
  model() {
    return [
      'Brandon', 'Jimmy', 'Corol'
    ];
  }
});
