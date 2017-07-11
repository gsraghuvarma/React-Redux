// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from 'utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store); // eslint-disable-line no-unused-vars

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([component]) => {
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'loginForm',
      getComponent(location, cb) {
        import('containers/LoginForm')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'adminsection',
      name: 'adminsection',
      getComponent(location, cb) {
        import('containers/Adminsection')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'Addaccount',
      name: 'addaccount',
      getComponent(location, cb) {
        import('containers/Addaccount')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'viewaccount',
      name: 'viewaccount',
      getComponent(location, cb) {
        import('containers/Viewaccount')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'viewstudent',
      name: 'viewstudent',
      getComponent(location, cb) {
        import('containers/Viewstudent')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: 'addstudent',
      name: 'addstudent',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          import('containers/Addstudent/reducer'),
          import('containers/Addstudent/sagas'),
          import('containers/Addstudent'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('addstudent', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
