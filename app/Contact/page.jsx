"use client";
import { SendRounded, X } from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';
import { SendEmail } from "../lib/sendmail";
import toast from "react-hot-toast";


const Contact = () => {

  const submitContact = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const resp = await SendEmail(name, email, subject);

    if (resp.success) {
      toast.success("Message sended.");
    }
    else {
      toast.error("Message sending failed!");
    }

  }

  return (

    <div className="contact flex justify-center items-center h-screen pt-[100px]">
      <title>Contact</title>

      <div className="contactContainer flex flex-col justify-center items-center gap-6 w-[500px]">

        <h1 className="my-4 font-bold text-2xl">Contact</h1>

        <form onSubmit={submitContact} className="flex flex-col justify-center items-center gap-5 w-full mb-4" >

          <div className="formTop flex justify-center items-center gap-4 w-full">

            <input type="text" id="name" placeholder="Name:" className="border-2 rounded-md p-2 w-full" required />
            <input type="text" id="email" placeholder="Email:" className="border-2 rounded-md p-2 w-full" required />

          </div>

          <textarea type="text" id="subject" rows={5} placeholder="Message:" className="border-2 rounded-md p-2 resize-none w-full" required />

          <button type="submit" className="sendMessage border-2 py-2 px-4 rounded-md duration-300 ease-in-out hover:bg-[#32a895] hover:text-white border-2 border-black hover:cursor-pointer gap-2 flex justify-center items-center">Send <SendRounded /></button>
        </form>

        <hr className="border-1 w-full" />


        <div className="links flex justify-center items-center gap-4">
          <a href="https://x.com/VixyGamesX" target="_blank" className="contactIcon p-3 border-2 rounded-[50%] hover:cursor-pointer hover:bg-black hover:text-white transition">
            <X />
          </a>
          <a href="https://www.instagram.com/vixy.games/" target="_blank" className="contactIcon p-3 border-2 rounded-[50%] hover:cursor-pointer hover:bg-red-500 hover:text-white transition">
            <InstagramIcon />
          </a>
        </div>


      </div>


    </div>
  );
};

export default Contact;

