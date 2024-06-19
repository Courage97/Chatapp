import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';



const Register = () => {
    const [err, setErr] = useState(false)   
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target [3].files[0]; 

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);

            const storage = getStorage();
            const storageRef = ref(storage, username);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('error', () => {
                setErr(true);
            });

            uploadTask.on('state_changed', (snapshot) => {
                // Handle state changes, if needed
            }, (error) => {
                setErr(true);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {
                        username,
                        photoURL: downloadURL
                    });

                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        username, 
                        email,
                        photoURL: downloadURL
                    });
                    await setDoc(doc(db, "userChats", res.user.uid), {
            
                    });
                    navigate("/");
                });
            });
        } catch(err) {
            setErr(false);
        }      
    };

    return (
        <>
            <div className='container'>
                <div className='form-wrapper'>
                    <form action='' onSubmit={handleSubmit}>
                        <h1>
                            Dev<span>Chat.</span>
                         </h1>
                        <h4>Register</h4>
                        <input type='text' placeholder='Username' />
                        <input type='email' placeholder='Email' />
                        <input type='password' placeholder='Password' />
                        <input type='file' placeholder='Display image' />
                        <button type='submit'>Sign Up</button>
                        <div className='register-opt'>
                            <p>Already have an account?</p>
                            <Link
                                to='/login'
                                style={{ color: 'white', fontWeight: '700' }}>
                                Login
                            </Link>
                            {err && <span>Something went wrong</span>}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
