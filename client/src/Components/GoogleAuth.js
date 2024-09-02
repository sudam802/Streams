import React from "react";
import { jwtDecode } from "jwt-decode"; // Corrected import
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  clientId =
    "647940932240-7p02ckdfbd90p06m8qgv175poquutnlc.apps.googleusercontent.com";

  handleCredentialResponse = (response) => {
    const decode = jwtDecode(response.credential);
    console.log(decode);
    const verified = decode.email_verified;

    if (verified) {
      this.props.signIn(decode.sub); // Dispatch signIn action
      console.log(this.props.userId);
    }
  };

  onSignout = () => {
    this.props.signOut(this.props.userId); // Dispatch signOut action
  };

  componentDidMount() {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      window.google.accounts.id.initialize({
        client_id: this.clientId,
        callback: this.handleCredentialResponse,
      });
      window.google.accounts.id.prompt();

      // Render the sign-in button
      window.google.accounts.id.renderButton(
        document.getElementById("signinDiv"),
        {
          theme: "outline",
          size: "small",
        }
      );
    } else {
      console.error("Google Identity Services library not loaded.");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isSignedIn !== this.props.isSignedIn) {
      console.log("isSignedIn:", this.props.isSignedIn);
      // Hide or show the sign-in button based on the state
      const signinDiv = document.getElementById("signinDiv");
      if (signinDiv) {
        signinDiv.hidden = this.props.isSignedIn;
      }
    }
  }

  render() {
    return (
      <div>
        <div id="signinDiv"></div>
        {this.props.isSignedIn && (
          <div id="signOut">
            <button onClick={this.onSignout} className="ui google button">
              <i className="google icon"></i>
              Sign out
            </button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId, // Map userId to props
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
