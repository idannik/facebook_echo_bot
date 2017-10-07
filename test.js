const graph_controller = require("./src/GraphApiController")
graph_controller.SearchPlaceByLocation({queryTerm:'burger ', distance:3000, lat:2, lng:3})