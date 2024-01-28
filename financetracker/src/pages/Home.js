import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div class="rounded-lg p-10 ">
                <form class ="grid grid-cols-2 gap-0">
                    <div class="bg-lime-100 rounded-lg">
                        <h1 class="text-3xl font-bold underline mb-4 flex justify-">Sign Up</h1>

                        <label for="email "><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required class="rounded-lg"></input>

                        <p></p>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required class="rounded-lg"></input>

                        <div class="clearfix">
                            <button type="submit" class="signupbtn">Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Home;
