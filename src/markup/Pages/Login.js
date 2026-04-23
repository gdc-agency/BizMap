import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';
import bnr from './../../images/background/bg2.jpg';

function Login (props) {
	const [email, setEmail] = useState('demo@example.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');

    const dispatch = useDispatch();

    function onLogin(e) {
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
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(email, password, props.history));
    }
	
	return(
		<div className="page-wraper">
			
			<div className="page-content dlab-login" style={{backgroundImage: "url("+ bnr +")", backgroundPosition: "top right", backgroundBlendMode:"screen"}}>
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-4 login-form-box">
							<div className="login-form">
								<div className="logo">
									<Link to={"./"}><img src={require("./../../images/logo-black.png")} alt=""/></Link>
								</div>
								<div className="tab-content nav">
									<div id="login" className="tab-pane active">
										<form className="dlab-form" onSubmit={onLogin}>
											<h3 className="form-title m-t0">Welcome back, please login to your account</h3>
											{props.errorMessage && (
												<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
													{props.errorMessage}
												</div>
											)}
											{props.successMessage && (
												<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
													{props.successMessage}
												</div>
											)}
											<div className="text-center m-b20">
												<Link to= {"#"} className="site-button facebook btn-block"><i className="fa fa-facebook-official m-r10"></i> Log in with Facebook</Link>
											</div>
											<div className="form-group">
												<input type="email" className="form-control" 
													placeholder="Email Address"  
													value={email}
													onChange={(e) => setEmail(e.target.value)}
												/>
												{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
												
												{/* <input name="dzName" required="" className="form-control" placeholder="Username or Email Address" type="text"/> */}
											</div>
											<div className="form-group">
												{/* <input name="dzName" required="" className="form-control " placeholder="Type Password" type="password"/> */}
												<input type="password" className="form-control" value={password} placeholder="Type Your Password"
													onChange={(e) =>
														setPassword(e.target.value)
													}
												/>
												{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
											</div>
											<div className="form-group field-btn text-left">
												<div className="input-block">
													<input id="check1" type="checkbox" />
													<label htmlFor="check1">Remember me</label>
												</div>
												<Link data-toggle="tab" to="#forgot-password" className="btn-link forgot-password"> Forgot Password</Link>
											</div>
											<div className="form-group">
												<button type="submit" className="site-button btn-block button-md">login</button>
											</div>
											<div className="form-group">
												<p className="info-bottom">Don’t have an account? <Link to="register" className="btn-link">Register</Link> </p>
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
export default connect(mapStateToProps)(Login);