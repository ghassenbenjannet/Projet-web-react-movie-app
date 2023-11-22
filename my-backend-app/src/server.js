const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const authRoutes = require('./Routes/authRoutes');
const frontManagementRoutes = require('./Routes/frontManagementRoutes');
const sharedDataPath = path.resolve(__dirname, '../../shared-data.json');
const cors = require('cors'); 
const app = express();
app.use(express.json());

app.use(cors());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(authRoutes);
app.use(frontManagementRoutes);

app.post('/api/toggle-maintenance', (req, res) => {
  try {
    const sharedData = require(sharedDataPath);
    sharedData.maintenance = !sharedData.maintenance;
    fs.writeFileSync(sharedDataPath, JSON.stringify(sharedData, null, 2));
    res.json({ maintenance: sharedData.maintenance });
  } catch (error) {
    console.error('Erreur lors du basculement du mode maintenance :', error);
    res.status(500).json({ error: 'Erreur lors du basculement du mode maintenance.' });
  }
});

app.get('/api/shared-data', (req, res) => {
  try {
    const sharedData = require(sharedDataPath);
    res.json(sharedData);
  } catch (error) {
    console.error('Erreur lors de la récupération des données partagées :', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des données partagées.' });
  }
});

app.post('/api/shared-data', (req, res) => {
  try {
    console.log(req.body);
    const newData = req.body;
console.log("ok")
console.log(newData)

    const filePath = path.join(__dirname, '../../shared-data.json');
    fs.readFile(filePath, 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Erreur lors de la lecture des données partagées :', readErr);
        res.status(500).json({ error: 'Erreur lors de la lecture des données partagées.' });
        return;
      }

      const sharedData = JSON.parse(data);

      Object.assign(sharedData, newData);

      fs.writeFile(filePath, JSON.stringify(sharedData, null, 2), 'utf8', (writeErr) => {
        if (writeErr) {
          console.error('Erreur lors de l\'écriture des données partagées :', writeErr);
          res.status(500).json({ error: 'Erreur lors de l\'écriture des données partagées.' });
        } else {
          res.json({ success: true, message: 'Données partagées mises à jour avec succès.' });
        }
      });
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour des données partagées :', error);
    res.status(500).json({ error: 'Erreur lors de la mise à jour des données partagées.' });
  }
});



app.get('/', (req, res) => {
  res.redirect('/login');
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Connected : http://localhost:${PORT}`));


