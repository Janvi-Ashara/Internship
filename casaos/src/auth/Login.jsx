import React from "react";
import { useNavigate } from "react-router-dom";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbCircleLetterZFilled } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // Navigate to a Home page
    navigate("/Home");
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundImage: "url(/images/bg.jpg)",
          backgroundSize: "cover",
          backdropFilter: "blur(10px)",
        }}
      >
        <header className="h-12 w-full bg-black flex items-center justify-between px-4">
          <img
            src={"/images/logo.svg"}
            alt="Logo"
            className="h-144 ml-12 bg-cover"
          />
          <div className="flex space-x-4 text-2xl">
            <div className="relative inline-flex cursor-pointer group">
              <FaDiscord className="text-white  hover:bg-blue-900 rounded-full " />
              <span className="hidden group-hover:block text-sm text-white bg-gray-800 rounded px-2 py-1">
                Discord
              </span>
            </div>
       
            <div className="relative inline-flex items-center cursor-pointer group">
              <FaGithub className="text-white hover:bg-blue-900 rounded-full" />
              <span className="hidden group-hover:block text-sm text-white bg-gray-800 rounded px-2 py-1">
                GitHub
              </span>
            </div>
            <div className="relative inline-flex items-center cursor-pointer group">
              <TbCircleLetterZFilled className="text-white hover:bg-blue-900 rounded-full" />
              <span className="hidden group-hover:block text-sm text-white bg-gray-800 rounded px-2 py-1">
                ZimaBoard
              </span>
            </div>
          </div>
        </header>

        <center className="mt-16">
          <div
            className="border border-white/20 rounded-md p-5 max-w-[500px] 
            w-4/5 h-[500px] bg-white/10 backdrop-blur-[50px] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] 
          flex flex-col justify-center"
          >
            <img src="/images/avatar.svg" alt="Logo" className="h-32 mb-4" />
            <div>
              <form>
                <table>
                      <div>
                      <div className="relative mt-5">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"><FaRegCircleUser /></span>
                    <input type="text" name="name" placeholder="Username" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" require />
                  </div>
                  </div>
                  <tr>
                    <div >
                      <div className="relative mt-5">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3"><RiLockPasswordFill /></span>
                    <input type="password" name="password" placeholder="Password" className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500" require />
                  </div>
                  </div>
                  </tr>
                  <br />
                  <tr>
                    <button
                      onClick={handleLogin}
                      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700  focus:ring-blue-500 w-full"
                    >
                      Login
                    </button>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </center>
      </div>
    </>
  );
}

export default Login;
