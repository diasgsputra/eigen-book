const express = require('express');
const bodyParser = require('body-parser');
// const helmet = require('helmet');
const { sequelize } = require('./models');
// const { specs, swaggerUi } = require('./swagger');
const app = express();
const PORT = process.env.PORT || 9002;

// const cspDefaults = helmet.contentSecurityPolicy.getDefaultDirectives();
// delete cspDefaults['upgrade-insecure-requests'];

// app.use(helmet({
//     contentSecurityPolicy: { directives: cspDefaults }
// }));

// Middleware
app.use(bodyParser.json());

// Routes
const booksRoutes = require('./routes/book');
// const membershipRoutes = require('./routes/membership');
// const transactionRoutes = require('./routes/transaction');
// const tierManagementRoutes = require('./routes/tierManagement');
// app.use('/api/auth', authRoutes);
app.use(booksRoutes);
// app.use(transactionRoutes);
// app.use(tierManagementRoutes);

// Swagger Documentation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
