import { Fragment } from 'react'
import Header from '~/pages/Header'

const Layout = ({children}) => {
    return(
        <Fragment>
            <Header />
            <div>
                {children}
            </div>
        </Fragment>
    )
}

export default Layout