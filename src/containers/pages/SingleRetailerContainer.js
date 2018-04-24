import { connect } from 'react-redux';
import SingleRetailer from '../../components/pages/SingleRetailer';
import { getRetailer } from '../../store/actions/retailers';

const mapStateToProps = state => ({
  // isVisible: state.auth.isVisibleAgreement,
  // signUpFormValues: state.form.signUp.values,
});

const mapDispatchToProps = (dispatch, ownProps) => (
  {
    getRetailers: () => {
    dispatch(getRetailer(ownProps.match.params.id));
  },
});

const SingleRetailerContainer = connect(mapStateToProps, mapDispatchToProps)(SingleRetailer);

export default SingleRetailerContainer;
