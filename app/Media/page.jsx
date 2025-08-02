import { FaCamera } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { FaCut } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Media = () => {

  return (
    <div className="media text-white overflow-hidden flex flex-col gap-4 justify-center items-center h-screen bg-cover bg-[#32a895]">
      <title>Media</title>
      <div className="container flex flex-col gap-3 justify-center items-center border-2 bg-[#298071] border-white shadow-xl w-[300px] h-[200px] p-5 rounded-xl sm:w-[550px] h-[350px]">


        <h1 className="text-xl font-bold">Links (Google Drive)</h1>
        <hr className="w-75 mb-2" />
        <a href="https://drive.google.com/drive/u/0/folders/1mw_s9qSQqV-KiYd111GU8pz-WKc7lhEH" target="_blank" className="font-bold flex justify-center items-center gap-2"><FaCamera/> ScreenShots </a>
        <a href="https://drive.google.com/drive/u/0/folders/1NtlXFJNK5kSsRPLLgjoh9K1YNwLRGWOq" target="_blank" className="font-bold flex justify-center items-center gap-2"><FaVideo/> Trailer</a>
        <a href="https://drive.google.com/drive/u/0/folders/1rEY1uNZTosm36eAxkKK20ZsGVNWCxkkT" target="_blank" className="font-bold flex justify-center items-center gap-2"><FaCut/> Logos</a>


        <div className="email flex flex-col justify-center items-center gap-2 mt-10 text-sm sm:text-lg">

          <h1 className=" font-bold flex justify-center items-center gap-2"><MdEmail/> Media Contact Email: </h1>

          <h2>alper.ertugrul.46.123@gmail.com</h2>
        </div>
      </div>
    </div>
  );
};

export default Media;
