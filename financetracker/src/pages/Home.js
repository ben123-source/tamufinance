import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
                    <div class="bg-gradient-to-r from-lime-100 to-lime-100 p-10 p-4 border-4">
                        <form>
                            <div class="text-center rounded-lg">
                                <h1 class="text-3xl font-bold underline mb-4">Sign Up</h1>

                                <label for="email "><b>Email: </b></label>
                                <input type="text" placeholder="Enter Email" name="email" required class="bg-gray-100 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></input>

                                <br></br>
                                <br></br>

                                <label for="psw"><b>Password: </b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required class="bg-gray-100 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"></input>
                            
                                <br></br>
                                <br></br>

                                <p class="text-xs hover:underline">Forgot your password?</p>

                                <br></br>

                                <div>
                                <img src="istockphoto-1053287264-612x612.jpg" alt="" class="bg-gray-200 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]md:rounded-none rounded-full mx-auto h-30 w-30" object-center></img>
                                </div>

                                <br></br>

                                <div class="bg-gray-200 rounded-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:w-14 md:h-15md:rounded-none rounded-full mx-auto">
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