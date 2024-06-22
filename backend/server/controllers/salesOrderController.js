const SalesOrder = require('../models/SalesOrder');

exports.createSalesOrder = async (req, res) => {
  try {
    const salesOrder = new SalesOrder(req.body);
    await salesOrder.save();
    res.status(201).json(salesOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getSalesOrders = async (req, res) => {
  try {
    const salesOrders = await SalesOrder.find();
    res.json(salesOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implement other CRUD operations