
exports.FilterGraphPlaceList = (vec) => {
    vec.array.forEach(function(element) {
        let str = element.name || ""
        if (element.location) {
            str += "'s location is "
            console.log(str, element.location)
        } else {
            console.log("no location for") 
        }
    }, this);
}