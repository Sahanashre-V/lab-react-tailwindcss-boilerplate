function Navbar(){
    return(
        <div>
      <div className="bg-red-400 h-20 flex justify-between">
        <div>
            <button className="text-white mx-7 font-bold text-2xl">Kalvium</button>
            <button className="text-gray-300 mx-4 my-6 font-bold">About Us</button>
            <button className="text-gray-300 mx-4 my-6 font-bold">Contacts</button>
            <button className="text-gray-300 mx-4 my-6 font-bold">Courses</button>
        </div>

<div>
<button className="m-3 text-white px-4 py-2 border-2 rounded">Login</button>

</div>

</div>
        </div>
    )
}

export default Navbar