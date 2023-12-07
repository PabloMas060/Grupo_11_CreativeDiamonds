import React from "react";
import {Root} from '../components/Root';
import { Route, 
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider } from "react-router-dom";

import {Home} from '../pages/Home';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>
    }
])

export const AppRouter = () => {
    return (
      <RouterProvider router={router}/>
    )
  }