import Loadable from 'react-loadable'

import LoadingPage from './pages/LoadingPage'

export const AsyncLogin = Loadable({
  loader: () =>
    import('Containers/LoginPage' /* webpackChunkName: "LoginPage" */),
  loading: LoadingPage,
})

// Not Found Page
export const AsyncNotFound = Loadable({
  loader: () => import('./pages/NotFound' /* webpackChunkName: "NotFound" */),
  loading: LoadingPage,
})

// Prodcut example page
export const AsyncProduct = Loadable({
  loader: () => import('Containers/Product'),
  loading: LoadingPage,
})

// Create Edit product page
export const AsyncCreateEditProduct = Loadable({
  loader: () => import('Containers/CreateEditProduct'),
  loading: LoadingPage,
})

// Modal page example
export const AsyncModalExample = Loadable({
  loader: () => import('Containers/ModalExample'),
  loading: LoadingPage,
})

// Test loading page
// export const AsyncLoading = Loadable({
//   loader: () => import('./pages/LoadingPage'),
//   loading: LoadingPage,
// })
