import DS from 'ember-data';

export default DS.Model.extend({
  //Although we can have an attribute simply defined as DS.attr(), let's type-safe it
  id: DS.attr('number'),
  title: DS.attr('string'),
  model: DS.attr('number'),
  company: DS.attr('string'),
  horsePower: DS.attr('number'),
  price: DS.attr('number'),
  image: DS.attr('string'),
  //Here, we can utilize options to ensure there is a default value
  carType: DS.attr('string', { defaultValue: 'Regular' }), 

  //This is a computed attribute by combining 2 primitive ones
  fullTitle: computed('title', 'model', function () {
    return `${this.title} ${this.model}`;
  })
});
