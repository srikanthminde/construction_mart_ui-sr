import { useFormik } from 'formik';
import React from 'react';
import { useLoginMutation } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './loginSlice';
import * as Yup from "yup";

function Login() {
    const [loginFn] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        username: Yup.string().required("Please enter the username"),
        password: Yup.string().required("Please enter the password"),
    });

    const loginForm = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema,
        onSubmit: (values) => {
            loginFn(values).then((res) => {
                window.localStorage.setItem("token", res.data.token);
                window.localStorage.setItem("role", res.data.role);
                window.localStorage.setItem("username", res.data.username);
                window.localStorage.setItem("id", res.data.id);
                dispatch(setUser(res.data));
                navigate("/dashboard");
            });
        }
    });
    return (  
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='w-25'>
                <form onSubmit={loginForm.handleSubmit} className='p-4 shadow rounded bg-light'>
                    <h3 className='text-center mb-4'>Login</h3>
                    
                    {/* Username Field */}
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-label fw-bold'>Username</label>
                        <div className='input-group'>
                            <span className='input-group-text'><i className='bi bi-person-fill'></i></span>
                            <input type='text' className='form-control' id='username' placeholder='Enter username' {...loginForm.getFieldProps('username')} />
                        </div>
                        {loginForm.touched.username && loginForm.errors.username && (
                            <div className='text-danger'>{loginForm.errors.username}</div>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label fw-bold'>Password</label>
                        <div className='input-group'>
                            <span className='input-group-text'><i className='bi bi-lock-fill'></i></span>
                            <input type='password' className='form-control' id='password' placeholder='Enter password' {...loginForm.getFieldProps('password')} />
                        </div>
                        {loginForm.touched.password && loginForm.errors.password && (
                            <div className='text-danger'>{loginForm.errors.password}</div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className='d-grid'>
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
