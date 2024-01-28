import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <form>
                <h1 class="text-3xl font-bold underline mb-4">Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <hr></hr>

                <label for="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" required></input>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required></input>

                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw" required></input>

                <label for="checkbox" checked="checked" name="remember"></label>

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Home;