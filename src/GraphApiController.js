const GraphApiController = ({
  CallSearchAPI
}) => ({
  SearchPlaceByLocation: ({queryTerm, distance=5000, lat='', lng = '', fields=''}) => {
    if (lat==='' || lng==='') {
      throw new Error(`Search place by location requires to set lng and lat`)    
    }
    if (isNaN(lat) || isNaN(lng)) {
      throw new Error ('Search place by location requires to set lng and lat as numbers')
    }
    return CallSearchAPI(queryTerm, distance, `${lat},${lng}`, 'place', fields);
  }
})

module.exports = GraphApiController