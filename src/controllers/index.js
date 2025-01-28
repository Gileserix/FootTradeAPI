export function middlewareController(req, res) {
    console.log('controller');
    res.status(200).send('middleware');
}

export function errorController(err, req, res, next) {
    try {
        throw Error('BOOM!');
    } catch (err) {
        next(err);
    }
}