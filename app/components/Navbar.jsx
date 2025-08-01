
const Navbar = () => {

  return (
    <div className="navbar flex justify-center items-center h-[100px] absolute top-0 z-99  w-full">
      
      <div className='left flex justify-center items-center flex-1 text-2xl'>
        <a href="/" className="text-3xl text-white">Barber Shop Simulator</a>
      </div>
      
      <div className='right flex justify-center items-center flex-1 gap-6'>
        <a href="/" className="text-white">Home</a>
        <a href="/Gallery" className="text-white">Gallery</a>
        <a href="/Media" className="text-white">Media</a>
      </div>

    </div>
  );
};

export default Navbar;

