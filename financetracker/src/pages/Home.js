import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
                    <div class="bg-lime-100 rounded-lg p-10">
                        <form>
                            <div class="text-center rounded-lg">
                                <h1 class="text-3xl font-bold underline mb-4">Sign Up/Login</h1>

                                <label for="email "><b>Email</b></label>
                                <input type="text" placeholder="Enter Email" name="email" required class="bg-gray-100 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></input>

                                <br></br>
                                <br></br>

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required class="bg-gray-100 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></input>
                            
                                <br></br>
                                <br></br>

                                <p class="text-xs hover:underline">Forgot your password?</p>

                                <img src="logo512.png" alt="" class="object-fill h-48 w-96" object-center></img>

                                <br></br>

                                <div class="bg-gray-200 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center">
                                    <button type="submit" class="signupbtn">Sign Up</button>
                                </div>
                            </div>

                            <br></br>
                            <p class="text-xs hover:underline text-center">Don't have an account? Create</p>
                        </form>
                    </div>
        </div>
    );
}

export default Home;