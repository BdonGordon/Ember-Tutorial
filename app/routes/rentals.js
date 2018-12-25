import Route from '@ember/routing/route';

export default Route.extend({
  /*This function acts as a hook. Ember will call it for us during different times in the app.
  * Ember will use this model object and save it as an attribute called model
  */
  model() {
    return [
      {
        id: 1,
        title: 'Genesis Coupe',
        model: 2018,
        company: 'Hyundai',
        horsePower: 220,
        price: 23000,
        image: '/assets/images/genesis.jpg'
      },
      {
        id: 2,
        title: 'Lamborghini Merci',
        model: 2018,
        company: 'Lamborghini',
        horsePower: 320,
        price: 400000,
        image: '/assets/images/lambo.jpg'
      },
      {
        id: 3,
        title: 'Porsche 911',
        model: 2017,
        company: 'Porsche',
        horsePower: 340,
        price: 530000,
        image: '/assets/images/porsche.jpg'
      }
    ];
  }
});
