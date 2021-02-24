import React, { lazy, Suspense, useEffect } from 'react';
import { ToastContainer } from 'react-toastify'
import {observer} from "mobx-react-lite";
import { Route, Switch, Redirect } from 'react-router-dom';
import {
    LOGIN, ABOUT, HOME, CONTACT, CATEGORY, BLOG, TAG
} from 'settings/constants';

import system from 'stores/systemStore';

const AdminLayout = lazy(() => import('components/layout'));
const About = lazy(() => import('containers/about'));
const Contact = lazy(() => import('containers/contact'));
const NotFound = lazy(() => import('containers/not-found'));
const Home = lazy(() => import('containers/home'));
const Blog = lazy(() => import('templates/blog-post'))
const Categories = lazy(() => import('templates/category'))
const Tags = lazy(() => import('templates/tags'))


function PrivateRoute({ system, children, ...rest }) {
  console.log(system.isAuthenticated)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        system.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const Routes = observer(() => {
  // useEffect(() => {
  //   if(system.getAuthenticated)
  //     system.getUserData()
  // }, []);

      return (
      <Suspense fallback={""}>
        <Switch>
          <PrivateRoute system={system} exact={true} path={ABOUT}>
            <AdminLayout>
                <About />
            </AdminLayout>
          </PrivateRoute>
            <PrivateRoute system={system} exact={true} path={HOME}>
                <AdminLayout>
                    <Home />
                </AdminLayout>
            </PrivateRoute>
            <PrivateRoute system={system} exact={true} path={CONTACT}>
                <AdminLayout>
                    <Contact />
                </AdminLayout>
            </PrivateRoute>
            <PrivateRoute system={system} exact={true} path={HOME}>
                <AdminLayout>
                    <Home />
                </AdminLayout>
            </PrivateRoute>
            <PrivateRoute system={system} exact={true} path={BLOG}>
                <AdminLayout>
                    <Blog />
                </AdminLayout>
            </PrivateRoute>
            <PrivateRoute system={system} exact={true} path={CATEGORY}>
                <AdminLayout>
                    <Categories />
                </AdminLayout>
            </PrivateRoute>
            <PrivateRoute system={system} exact={true} path={TAG}>
                <AdminLayout>
                    <Tags />
                </AdminLayout>
            </PrivateRoute>

          {/*<Route path={LOGIN}>*/}
          {/*  <Login />*/}
          {/*</Route>*/}
          <Route component={NotFound} />
        </Switch>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
      </Suspense>
  );
}
);

export default Routes;
