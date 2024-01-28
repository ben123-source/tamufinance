import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate();

    return(
        <div>
            <div className='bg-[#B2A59B] w-screen h-20  flex justify-between items-center'>
                <div className='flex items-center justify-center gap-4 ml-6'>
                    
                </div>
                <div className='flex items-center justify-center gap-4 mr-6'>
                <ul className='flex gap-6 mr-4'>
                    <button onClick={() => navigate("/")} className='hover:underline text-black hover:cursor=pointer'>Home</button>
                    <button onClick={() => navigate("/finances")} className='hover:underline text-black hover:cursor=pointer'>Finances</button>
                    <button onClick={() => navigate("/Calendar")} className='hover:underline text-black hover:cursor=pointer'>Calendar</button>
                    <button onClick={() => navigate("/Investment")} className='hover:underline text-black hover:cursor=pointer'>Investment</button>
                </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar