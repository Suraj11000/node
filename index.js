const express = require('express');
const CertificateType = require('./models/CertificateType');
const Question = require('./models/Question');
const sequelize = require('./db');

const app = express();
app.use(express.json());

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

app.post('/certificate-types', async (req, res) => {
  const { category } = req.body;
  try {
    const certificateType = await CertificateType.create({ category });
    res.status(201).json(certificateType);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/questions', async (req, res) => {
  const { question_text, certificateTypeId } = req.body;
  try {
    const question = await Question.create({ question_text, certificateTypeId });
    res.status(201).json(question);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
