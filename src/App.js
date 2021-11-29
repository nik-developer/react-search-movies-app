import React, {Suspense, lazy} from 'react';
import { Route,  Switch} from "react-router-dom"
import NotFound from './views/NotFound';
import routes from "./routes"
import AppBar from "./components/AppBar/AppBar"
import Loader from "./components/Loader/Loader"


const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "HomePage" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "MoviesPage" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */));


const App = () => (
  
   <>
    <AppBar />
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route  path={routes.movieDetails} component={MovieDetailsPage} />
        <Route  path={routes.movies} component={MoviesPage} />
        <Route component={NotFound}/>
      </Switch> 
    </Suspense>  
    </>
  );
  


export default App;
