const logger = (req,res,next) => {
    console.log(req.headers)
    switch (req.method) {
        case 'GET':
            console.log('GET request');
            break;
        case 'POST':
            console.log('POST request');
            break;
        case 'PATCH':
            console.log('PATCH request');
            break;
        case 'PUT':
            console.log('PUT request');
            break;
        case 'DELETE':
            console.log('DELETE request');
            break;
        default:
            console.log(`Request method: ${req.method}`);
    }

    next()
}


module.exports = {logger}