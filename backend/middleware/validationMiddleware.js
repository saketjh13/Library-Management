const validateBookFields = (req, res, next) => {
    const { title, author, genre, availability } = req.body;
  
    if (!title || !author || !genre || !availability) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
  
    next();
  };
  
  const validateTransactionFields = (req, res, next) => {
    const { bookName, authorName, issueDate, returnDate } = req.body;
  
    if (!bookName || !authorName || !issueDate || !returnDate) {
      return res.status(400).json({ success: false, error: 'All fields are required' });
    }
  
    // Validate issueDate (cannot be in the past)
    const today = new Date();
    if (new Date(issueDate) < today) {
      return res.status(400).json({ success: false, error: 'Issue date cannot be in the past' });
    }
  
    // Validate returnDate (cannot be more than 15 days from issue date)
    const maxReturnDate = new Date(issueDate);
    maxReturnDate.setDate(maxReturnDate.getDate() + 15);
    if (new Date(returnDate) > maxReturnDate) {
      return res.status(400).json({ success: false, error: 'Return date cannot be more than 15 days from issue date' });
    }
  
    next();
  };
  
  module.exports = { validateBookFields, validateTransactionFields };
  