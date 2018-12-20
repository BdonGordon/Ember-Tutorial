/** Client HTTP Stubbing library. For this purpose, it will be used as a source of data in place of a backend server **/
export default function () {
  //the namespace lets mirage know to provide data for URL requests that start with 'api'
  this.namespace = '/api';

  //WE have configured Mirage so that whenever Ember Data makes a GET request to /api/rentals, it will return this JS object as JSON
  //(without network requests actually made obviously)
  this.get('/rentals', function () {
    return {
      data: [{
        {
          id: 1,
          title: 'Genesis Coupe',
          model: 2018,
          company: 'Hyundai',
          horsePower: 220,
          price: 23000,
          image: '../../public/genesis.jpg'
        },
        {
          id: 2,
          title: 'Lamborghini Merci',
          model: 2018,
          company: 'Lamborghini',
          horsePower: 320,
          price: 400000,
          image: '../../public/lambo.jpg'
        },
        {
          id: 3,
          title: 'Porsche 911',
          model: 2017,
          company: 'Porsche',
          horsePower: 340,
          price: 530000,
          image: '../../public/porsche.jpg'
        }
      }]
    };
  });
}
