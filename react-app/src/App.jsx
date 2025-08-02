import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CommentCard from './pages/CommentCartd';
import ProjetCard from './pages/ProjetCard';
import UserCard from './pages/UserCard';
import TacheCard from './pages/TacheCard';
import PrivateRoute from './utils/PrivateRoute';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        <Route path="/login" element={<Dashboard />} />
        <Route path="/projets" element={<PrivateRoute><ProjetCard/></PrivateRoute>}/>
        <Route path="/utilisateurs" element={<PrivateRoute><UserCard/></PrivateRoute>}/>
        <Route path="/commentaires" element={<PrivateRoute><CommentCard/></PrivateRoute>}/>
        <Route path="/taches" element={<PrivateRoute><TacheCard/></PrivateRoute>}/>
      </Routes>
    </Layout>
  );
}

export default App;
