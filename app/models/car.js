import DS from 'ember-data';


//This is not being used at all yet. Neither is the mirage
export default DS.Model.extend({
  //Although we can have an attribute simply defined as DS.attr(), let's type-safe it
  //ID is not allowed here. that is defined in mirage
  title: DS.attr('string'),
  model: DS.attr('number'),
  company: DS.attr('string'),
  //Also, there is no camel cases allowed
  horsepower: DS.attr('number'),
  price: DS.attr('number'),
  image: DS.attr('string'),
  //Here, we can utilize options to ensure there is a default value
  //'string', { defaultValue: 'Regular' }
  cartype: DS.attr('string'), 

  //This is a computed attribute by combining 2 primitive ones
  //fullTitle: computed('title', 'model', function () {
  //  return `${this.title} ${this.model}`;
  //})
});
