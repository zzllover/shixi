import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layout').default,
    routes: [
      {
        path: '/',
        component: require('../hello').default,
        exact: true,
      },
      {
        path: '/hello',
        component: require('../hello').default,
        exact: true,
      },
      {
        path: '/dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            component: require('../Dashboard/Analysis').default,
            exact: true,
          },
          {
            path: '/dashboard/monitor',
            component: require('../Dashboard/Monitor').default,
            exact: true,
          },
          {
            path: '/dashboard/workplace',
            component: require('../Dashboard/Workplace').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/mi/Desktop/JustStartFromHere/yuque-demo/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/react',
        routes: [
          {
            path: '/react/react-props',
            component: require('../React/ReactProps').default,
            exact: true,
          },
          {
            path: '/react/react-state',
            component: require('../React/ReactState').default,
            exact: true,
          },
          {
            path: '/react/react-controller-component',
            component: require('../React/ReactControllerComponent').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/mi/Desktop/JustStartFromHere/yuque-demo/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        path: '/dva',
        routes: [
          {
            path: '/dva/card-1',
            component: require('../DVA/Card-1').default,
            exact: true,
          },
          {
            path: '/dva/card-2',
            component: require('../DVA/Card-2').default,
            exact: true,
          },
          {
            path: '/dva/card-3',
            component: require('../DVA/Card-3').default,
            exact: true,
          },
          {
            path: '/dva/card-4',
            component: require('../DVA/Card-4').default,
            exact: true,
          },
          {
            path: '/dva/card-5',
            component: require('../DVA/Card-5/Card-5').default,
            exact: true,
          },
          {
            component: () =>
              React.createElement(
                require('/Users/mi/Desktop/JustStartFromHere/yuque-demo/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
                  .default,
                { pagesPath: 'src/pages', hasRoutesInConfig: true },
              ),
          },
        ],
      },
      {
        component: () =>
          React.createElement(
            require('/Users/mi/Desktop/JustStartFromHere/yuque-demo/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
      },
    ],
  },
  {
    component: () =>
      React.createElement(
        require('/Users/mi/Desktop/JustStartFromHere/yuque-demo/node_modules/_umi-build-dev@1.10.14@umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return <Router history={history}>{renderRoutes(routes, props)}</Router>;
}
