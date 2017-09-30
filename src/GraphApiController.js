const request = require('request-promise');

exports.Search = (queryTerm, distance='', center='', type='place', fields='') => {
    console.log(`center = ${center}`)
    const options = {
      method: 'GET',
      uri: 'https://graph.facebook.com/search',
      qs: {
        access_token: process.env.PAGE_ACCESS_TOKEN,
        q: queryTerm,
        distance,
        center,
        type,
        fields
      }
    };

    request(options)
      .then(fbRes => {
        const parsedRes = JSON.parse(fbRes).data; 
        console.log(parsedRes)
      }).catch((error)=> {
        console.log(error);
      })
  ;
}

exports.SearchPlaceByLocation = (query, distance, lat, lng, fields) => {
  this.Search(query, distance, `${lat},${lng}`, 'place', fields);
}