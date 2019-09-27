import React, { Component } from "react";
import { GoogleLogin } from 'react-google-login';
import { push } from 'connected-react-router';
import { getStore } from '../../services/store';
import {ROUTE_CREATOR_HOME} from '../../consts/routes';
import { connect } from "react-redux";
import { actions as userActions } from '../../store/user/user.ducks';

import Background from '../../asset/Background.png';
import Title from "../../asset/GAME_NAME.png";
import ProgressButton from '../../molecules/ProgressButton/ProgressButton';

const hash = require('object-hash');

const styles = {
  main: {
    padding: '20vh 0 0 0',
    textAlign: 'center',
    backgroundImage: `url(${Background})`,
    /* Full height */
    height: '100vh',
    fontFamily: "Montserrat",

    /* Center and scale the image nicely */
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
};

// Store the id (to send to backend) in Auth user
const responseGoogle = (response) => {
  console.log(response);
};

const onSignIn = (googleUser) => {
  responseGoogle(googleUser);
  console.log("Successful!" + googleUser.tokenId);
  // Store User Id
  this.props.signIn(googleUser);
  // Redirect to Creator's Home Page to select/create game
  getStore().dispatch(push(ROUTE_CREATOR_HOME));
};

class HomePage extends Component {
  render() {
    return (
      <div style={styles.main}>
        <img src={Title} alt="HomePage" style={{ maxWidth: '45vh', marginBottom: '7.5vh' }} />
        <GoogleLogin
          clientId="772369058063-665vio82g46oqmvijs344qtf1u5aiec5.apps.googleusercontent.com"
          render={renderProps => (
            <ProgressButton variant="contained"
                            loading={false}
                            onClick={async () => {
                              renderProps.onClick();
                              // TODO: Remove in prod. For dev
                              getStore().dispatch(push(ROUTE_CREATOR_HOME));
                              await this.props.signIn({
                                tokenId: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjBiMGJmMTg2NzQzNDcxYTFlZGNhYzMwNjBkMTI1NmY5ZTQwNTBiYTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNzcyMzY5MDU4MDYzLTY2NXZpbzgyZzQ2b3FtdmlqczM0NHF0ZjF1NWFpZWM1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNzcyMzY5MDU4MDYzLTY2NXZpbzgyZzQ2b3FtdmlqczM0NHF0ZjF1NWFpZWM1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA1MTE2ODQ2MDEzMTI2ODQ0NTUwIiwiZW1haWwiOiJjb3dmYXRzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiY3lxNHQtc1hkQzBoeVhBNTNTd2VBZyIsIm5hbWUiOiJNZWxvZGllcyBTaW0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FBdUU3bUJPRTYxV1NVc0Mtd2ZrMHR2Q0NuT2dJX0pjYVFYRWJqZ2FMRUtSRUE9czk2LWMiLCJnaXZlbl9uYW1lIjoiTWVsb2RpZXMiLCJmYW1pbHlfbmFtZSI6IlNpbSIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTY5NTc4NTcwLCJleHAiOjE1Njk1ODIxNzAsImp0aSI6IjYyNDY3NGY5YzhmMTY1MTMxMTljYzNlMzBkODZjZjQ0ZjNkNzMzYzEifQ.glrZ9uFvmY6OerFvNlfHbo1m5aQ63fSg7CINJicaSzDXuvtgfKUm-I8Vn4tKVlb-d7Up0ZUUUaeLBwZux6_gFS9JWo_TXfLdqA85dalkHkdbH2KM7KHJtm8bQ_s5dXPimHOubh1GNvESGfI8dlOPwB5GHYqKiOM8ezy5UU9eab5RuAkva6PuqdrXvaVS5FX3FrZyHDaL1c1sx610p52N9kA6l542p97njLhgLt70QSrvYVFqIBL4e0Xa0sBsvZUMLjaSnWPri3p2js5UYbIADEFHXPASXWnpqEZOquFqe24Pek1Q6KiEHUdGXoHAZd_12rBxDr2tWA6G9MAhl_JB-Q",
                                profileObj: {
                                  givenName: 'Melodies'
                                }
                              });
                            }}
                            disabled={renderProps.disabled}>
              Play
            </ProgressButton>
          )}
          buttonText="Login"
          onSuccess={(res) => {
            // responseGoogle(res);
            // console.log("Successful!" + res.tokenId);
            // Store User Id
            this.props.signIn(res);
            // Redirect to Creator's Home Page to select/create game
            getStore().dispatch(push(ROUTE_CREATOR_HOME));
          }}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: async (googleResponse) => {
      try {
        //console.log("first", hash(googleResponse));
        //console.log("sec", hash(googleResponse));
        dispatch(userActions.success({
          googleTokenId: hash(googleResponse),
          nickname: googleResponse.profileObj.givenName,
          isAuth: true
        }));
      } catch {
        dispatch(userActions.error());
      }
    },
    guestMode: () => {
      dispatch(userActions.signout());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

