import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './Layout/Layout';
import ProfileLayout from './Layout/ProfileLayout';

const App = () => {
  let Layout;
  return(
    <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            switch(route.layout) {
              case null: {
                Layout = Fragment
                break
              }
              case 'default': {
                Layout = DefaultLayout
                break
              }
              case 'profile': {
                Layout = ProfileLayout
                break
              }
              default: {
                Layout = Fragment
              }
            }
            // const Layout = route.layout === null ? Fragment : DefaultLayout
            // const ProfileLayout = route.layout === 'profile'
            const Page = route.component
            return <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
              } 
            />
          })}
        </Routes>
    </Router>
  )
}

export default App