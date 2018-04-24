import { connect } from 'react-redux';
import Home from '../../components/pages/Home';
import { users, signIn } from '../../store/actions/auth';

const mapStateToProps = state => ({
  // isVisible: state.auth.isVisibleAgreement,
  // signUpFormValues: state.form.signUp.values,
});

const mapDispatchToProps = dispatch => ({
  users: () => {
    // dispatch(signIn());
    dispatch(users());
  },
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
