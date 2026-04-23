import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
    loadingToggleAction,
    signupAction,
} from '../../store/actions/AuthActions';
import bnr from './../../images/background/bg7.jpg';

function Register(props) {
	const [email, setEmail] = useState('');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function onSignUp(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) return;
        dispatch(loadingToggleAction(true));
        dispatch(signupAction(email, password, props.history));
    }
	return(
		<div className="page-wraper">
			<div className="page-content dlab-login" style={{backgroundImage: "url("+ bnr +")",  backgroundBlendMode:"screen"}}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 login-form-box">
							<div className="login-form">
								<div className="logo">
									<Link to={"./"}><img src={require("./../../images/logo-black.png")} alt=""/></Link>
								</div>
								<div className="tab-content nav">
									<div className="">
										{props.errorMessage && (
											<div className=''>
												{props.errorMessage}
											</div>
										)}
										{props.successMessage && (
											<div className=''>
												{props.successMessage}
											</div>
										)}
										<form className="dlab-form" onSubmit={onSignUp}>
											<h3 className="form-title m-t0">Create an account! It's free and always will be.</h3>
											<div className="form-group text-center">
												<Link to="#" className="site-button facebook"><i className="fa fa-facebook-official m-r10"></i> Log in with Facebook</Link>
											</div>
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="Full Name" type="text"/>
											</div>
											<div className="form-group">
												<input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="hello@example.com" />
												<div className="text-danger">{errors.email && <div>{errors.email}</div>}</div>
													{/* <input name="dzName" required="" className="form-control" placeholder="Email Id" type="text"/> */}
											</div>
											<div className="form-group">
												<input value={password} className="form-control" defaultValue="Password"
													onChange={(e) =>
														setPassword(e.target.value)
													}												  
												/>
												<div className="text-danger">{errors.password && <div>{errors.password}</div>}</div>
											</div>
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="Address" type="text"/>
											</div>
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="City/Town" type="text"/>
											</div>
											<h6 className="text-inherit m-b10">Enter your account details below: </h6>
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="User Name" type="text"/>
											</div>
											
											<div className="form-group">
												<input name="dzName" required="" className="form-control" placeholder="Re-type Your Password" type="text"/>
											</div>
											<div className="form-group">
												<input type="checkbox" id="privacy-policy" />
												<label htmlFor="privacy-policy">I agree to the <Link to="#" className="btn-link">Terms of Service </Link>& <Link to="#" className="btn-link">Privacy Policy </Link></label>
											</div>
											<div className="form-group"> 
												<button className="site-button button-md btn-block">Submit</button>
											</div>
											<div className="form-group">
												<p className="info-bottom">
													<Link to="login" className="btn-link">Login with username and password?</Link> 
												</p>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="content-info">
								<ul className="list-info">
									<li>
										<div className="dlab-box">
											<i className="fa fa-bullhorn"></i>
											<p>Get personalized advice from the friends and travel experts you trust</p>
										</div>
									</li>
									<li>
										<div className="dlab-box">
											<i className="fa fa-car"></i>
											<p>Easily find hotels, things to do & restaurants that are right fr you</p>
										</div>
									</li>
									<li>
										<div className="dlab-box">
											<i className="fa fa-check"></i>
											<p>It's everything you need to know</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
	)
}

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Register);