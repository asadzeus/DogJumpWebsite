import { FaSteam } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {

  return (
    <div className="home flex justify-center items-center h-screen bg-[url(/websitelandingbg.png)] bg-contain">
      <div className='left flex flex-col gap-4 justify-center items-center flex-1 text-white h-[calc(100vh-100px)] mt-[100px]'>

          <div className="container w-[max-content] flex flex-col justify-center items-start gap-6 mt-15">
            <h1 className="text-4xl font-bold">Best Barber In The Town</h1>


            <ul className="texts flex flex-col justify-center items-start gap-2 list-disc ml-6">
              <li className="text-lg">Shave new customers with different razors</li>
              <li className="text-lg">Paint with various sprays</li>
              <li className="text-lg">Upgrade your shop</li>
              <li className="text-lg">Become the best barber in you town</li>
            </ul>


            <a href="https://store.steampowered.com/app/3585060/Barber_Shop_Simulator" target="blank" className="wislistbtn shadow-xl px-6 py-3 bg-white text-black rounded-xl flex justify-center items-center gap-2 text-lg font-bold w-[max-content] hover:bg-[#B40000] hover:text-white transition">Wislist On Steam <FaSteam size={30} /></a>


          <div className="links flex justify-center items-center gap-6 mt-5">
            <a href="https://store.steampowered.com/app/3585060/Barber_Shop_Simulator" target="blank" className="hover:text-gray-300 transition"><FaSteam size={35}/></a>
            <a href="https://www.youtube.com/@vixygamesofficial" target="blank" className="hover:text-gray-300 transition"><FaYoutube size={44}/></a>
            <a href="https://x.com/VixyGamesX" target="blank" className="hover:text-gray-300 transition"><FaXTwitter size={32}/></a>
            
          </div>
        </div>



      </div>


      <div className='right flex justify-center items-center flex-1'>

      </div>
    </div>
  );

};

export default Home;
