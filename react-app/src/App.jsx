import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<PrivateRoute> </PrivateRoute>} />
        <Route path="/projets" element={<PrivateRoute><h2>Liste des projets</h2></PrivateRoute>} />
        <Route path="/utilisateurs" element={<PrivateRoute><h2>Liste des utilisateurs</h2></PrivateRoute>} />
        <Route path="/commentaires" element={<PrivateRoute><h2>Liste des commentaires</h2></PrivateRoute>} />
        <Route path="/taches" element={<PrivateRoute><h2>Liste des taches</h2></PrivateRoute>}/>
      </Routes>
    </Layout>
  );
}

export default App;
