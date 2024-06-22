const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const salesOrderRoutes = require('./routes/salesOrderRoutes');

const app = express();

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/zoho_books_clone', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/sales-orders', salesOrderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));