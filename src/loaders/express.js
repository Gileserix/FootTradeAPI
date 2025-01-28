import express from 'express';
import routes from '../routes/index.js';

export default (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Load API routes
    app.use('/api', routes);
    // Serve static files from the "public" directory
    app.use(express.static('public'));


    // Error handling middleware
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Something broke!');
    });
};
