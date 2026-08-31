let url = "https://www.google.com"

function logger(message) {
    // Send http request

    console.log(message);
}


exports.log = logger;


/*
messagemodule.exports.log = logger;


module.exports.endPoints = url;
*/

/*

module.exports = {
    url,
    logger
}
*/


/*

module.exports = {
    endPoint:url,
    log:logger
}
*/
