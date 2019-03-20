import React from 'react'
import { object, func, bool } from 'prop-types'

import GoogleLogin from 'react-google-login'
import NonAuthTemplate from '../../templates/NonAuthTemplate'
import LogoBox from '../../molecules/LogoBox'

import kv from './assets/kv.png'
import bg from './assets/bg.jpg'
import styles from './styles.module.scss'

const Login = ({ responseFromGoogle, authenticationIsLoading }) => {
  return (
    <div id={styles.wapperLogin}>
      <div className={styles.background}>
        <img src={bg} alt="Back ground" />
      </div>
      <div className={styles.iconContentLogin}>
        <img src={kv} alt="Icon" />
      </div>
      <div className={styles.bgRightLogin}>
        <div className={styles.wapperContentLogin}>
          <h1>Template React v4</h1>
          <p className={styles.description}>
            a product of square communication
          </p>
          <GoogleLogin
            className={styles.overPrimary}
            disabled={authenticationIsLoading}
            clientId={
              '1071869311754-qpnjkeobg7h75i09nj4q7m9ohdkia29l.apps.googleusercontent.com'
            }
            onSuccess={responseFromGoogle}
            onFailure={responseFromGoogle}>
            <span> Login with Google</span>
          </GoogleLogin>
        </div>
        <div className={styles.support}>
          Need support ? Contact us:{' '}
          <a
            href="mailto:technical@dsquare.com.vn"
            title="technical@dsquare.com.vn">
            technical@dsquare.com.vn
          </a>
        </div>
      </div>
    </div>
  )
}

// const Login = ({ classes, responseFromGoogle, authenticationIsLoading }) => {
//   return (
//     <NonAuthTemplate>
//       <div className={classes.wrapper}>
//         <div className={classes.kv}>
//           <img className={classes.kvImg} alt="Template Pro" src={kv} />
//         </div>
//         <div className={classes.formLogin}>
//           <div className={classes.form}>
//             <LogoBox />
//             <div className={classes.loginWrapper}>
//               <GoogleLogin
//                 disabled={authenticationIsLoading}
//                 clientId="1071869311754-qpnjkeobg7h75i09nj4q7m9ohdkia29l.apps.googleusercontent.com"
//                 onSuccess={responseFromGoogle}
//                 onFailure={responseFromGoogle}>
//                 <span> Login with Google</span>
//               </GoogleLogin>
//             </div>

//             <p style={{ color: '#fff' }} align="center">
//               Need support ? Contact us:{' '}
//               <a
//                 style={{ color: '#fff' }}
//                 href="mailto:technical@dsquare.com.vn">
//                 technical@dsquare.com.vn
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </NonAuthTemplate>
//   )
// }

Login.propTypes = {
  responseFromGoogle: func.isRequired,
  authenticationIsLoading: bool.isRequired,
}

export default Login
