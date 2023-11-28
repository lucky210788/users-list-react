import React from "react";
import {Routes, Route} from 'react-router-dom';

import routes from './routes';

import {Home, Posts, Albums} from '../pages';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={routes.root} element={<Home/>}/>
      <Route path={routes.posts.root} element={<Posts/>}/>
      <Route path={routes.albums.root} element={<Albums/>}/>
    </Routes>
  )
};
