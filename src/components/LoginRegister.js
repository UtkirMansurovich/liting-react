import React from "react";

const LoginRegister = () => {
    return(
        <div className="modal fade" id="login-register">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="login-register">
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#register">Register</a>
                                </li>
                            </ul>
                            <div className="tab-content padding-20">
                                <div className="tab-pane active" id="login">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="User Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="password" name="#" className="form-control form-control-custom" placeholder="Password" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label className="custom-checkbox">
                                                        <input type="checkbox" name="#"/>  <span className="checkmark"></span> Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <a href="#" className="text-light-white fs-14">Lost Your Password</a>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <button type="submit" className="btn-first btn-submit full-width btn-height">Login</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="social-links text-center mb-xl-20">
                                        <p className="fs-12 mb-xl-20">Connect with Social Networks</p>
                                        <ul className="custom">
                                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="decleration">
                                        By creating an account you are accepting our <a href="#" className="text-custom-blue">Terms & Conditions</a>
                                    </div>
                                </div>
                                <div className="tab-pane" id="register">
                                    <form>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" name="#" className="form-control form-control-custom" placeholder="User Name" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="email" name="#" className="form-control form-control-custom" placeholder="Email" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="password" name="#" className="form-control form-control-custom" placeholder="Password" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="password" name="#" className="form-control form-control-custom" placeholder="Retype Password" required/>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <select className="form-control form-control-custom custom-select">
                                                        <option>Owner/Buyer</option>
                                                        <option>Agent</option>
                                                        <option>Agency</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn-first btn-submit full-width btn-height">Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginRegister