import React from 'react';

function Registration() {
    return(
        <div className="form-wrapper">
            <h1 className="reg-title"> Infinity Plus Games Registration</h1>
            <div className="main-info">
                <div className="main-spacing-top">
                <form>
                <div className="form-group">
                    <label htmlFor="Email">Email address</label>
                    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" id="Name" placeholder="Name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" className="form-control" id="Password" placeholder="Password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="Password Verified">Password</label>
                    <input type="password" className="form-control" id="Password Verified" placeholder="Re-Enter Password"/>
                </div>

                <button type="button" className="btn btn-primary reg-btn">Register</button>

                </form>
                </div>
            </div>

        </div>
    )
}

export default Registration