const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const { specs, swaggerUi } = require('./swagger');
const app = express();
const PORT = process.env.PORT || 9002;


// Middleware
app.use(bodyParser.json());

// Routes
const booksRoutes = require('./routes/book');
const membersRoutes = require('./routes/member');
const borrowRoutes = require('./routes/borrow');
app.use(booksRoutes);
app.use(membersRoutes);
app.use(borrowRoutes);
// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Start the server
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
