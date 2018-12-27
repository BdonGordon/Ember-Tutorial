/** Client HTTP Stubbing library. For this purpose, it will be used as a source of data in place of a backend server **/
export default function () {
  //the namespace lets mirage know to provide data for URL requests that start with 'api'
  this.namespace = '/api';

  //WE have configured Mirage so that whenever Ember Data makes a GET request to /api/rentals, it will return this JS object as JSON
  //(without network requests actually made obviously)
  this.get('/cars', function () {
    return {
      //pay attention to how the format of each object of the data is. particularly, the {attributes: {}}
      data: [{
        type: 'cars',
        id: 1,
        attributes: {
          title: 'Genesis Coupe',
          model: 2018,
          company: 'Hyundai',
          horsepower: 220,
          price: 23000,
          image: '/assets/images/genesis.jpg',
          cartype: "Luxury"
        }
      }, {
          type: 'cars',
          id: 2,
          attributes: {
            title: 'Lamborghini Merci',
            model: 2018,
            company: 'Lamborghini',
            horsepower: 320,
            price: 400000,
            image: '/assets/images/lambo.jpg',
            cartype: "Sports"
          }
        }, {
          type: 'cars',
          id: 3,
          attributes: {
            title: 'Porsche 911',
            model: 2017,
            company: 'Porsche',
            horsepower: 340,
            price: 530000,
            image: '/assets/images/porsche.jpg',
            cartype: "Sports"
          }
        }
      ]
    };
  });
}
