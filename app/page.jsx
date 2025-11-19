"use client"
import { FaSteam } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



const Home = () => {

  return (
    <div className="home flex justify-center items-center overflow-x-hidden bg-[url(/mainbg.png)] bg-cover lg:bg:contain">
      <title>Pogo Together | Official Site</title>
      <div className='left flex flex-col gap-4 justify-center items-center flex-1 text-white h-[calc(100vh-100px)] mt-[100px]'>

          <div className="container w-[50%] flex flex-col justify-center items-start gap-6 mt-15 text-black">
            <h1 className="text-4xl font-bold sm:text-5xl">Pogo Together</h1>


            <ul className="texts flex flex-col justify-center items-center gap-2 text-md">
              <h2 className="bg-red-500 p-3 border-2 rounded-lg"> Pogo Together is a multiplayer hardcore parkour game where you and your friends try to reach the top using pogo sticks. Your character never stops jumping, You just control the movement and timing. Kick your friends, laugh together and race to the finish line!</h2>

            </ul>


            <a href="https://store.steampowered.com/app/4086160/Pogo_Together/" target="blank" className="wislistbtn shadow-xl px-6 py-3 bg-white text-black rounded-xl flex justify-center items-center gap-2 text-lg font-bold w-[max-content] hover:bg-[#B40000] hover:text-white transition">Wislist On Steam <FaSteam size={30} /></a>

          
          <div className="links flex justify-center items-center gap-6 mt-5">
            <a href="https://store.steampowered.com/app/4086160/Dog_Jump/" target="blank" className="hover:text-blue-500 transition text-white"><FaSteam size={35}/></a>
            <a href="https://www.youtube.com/@vixygamesofficial" target="blank" className="hover:text-blue-500 transition text-white"><FaYoutube size={44}/></a>
            <a href="https://x.com/VixyGamesX" target="blank" className="hover:text-blue-500 transition text-white"><FaXTwitter size={32}/></a>
            <a href="https://www.instagram.com/vixy.games/" target="blank" className="hover:text-blue-500 transition text-white"><FaInstagram size={32}/></a>
            
          </div>
          
        </div>



      </div>


      <div className='right flex justify-center items-center flex-1'>
     
      </div>
    </div>
  );

};

export default Home;
