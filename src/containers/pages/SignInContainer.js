import { connect } from 'react-redux';
import { signIn } from '../../store/actions/auth';
import SignIn from '../../components/pages/SignIn';

const mapStateToProps = state => ({
  // isVisible: state.auth.isVisibleAgreement,
  // signUpFormValues: state.form.signUp.values,
});

const mapDispatchToProps = dispatch => ({
  signIn: (values) => {
    dispatch(signIn(values));
  },
});

const SignInContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default SignInContainer;
