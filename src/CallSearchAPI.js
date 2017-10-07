// const error_unless_ok = require('./error_unless_ok') // should be used when moving to fetch

const CallSearchAPI = ({
    request
  }) => ({queryTerm, distance='', center='', type='place', fields=''}) => {
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
        
            return request(options)
            .then(fbRes =>  JSON.parse(fbRes).data) 
            }
module.exports = CallSearchAPI
