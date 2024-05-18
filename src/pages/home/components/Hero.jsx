export default function Hero() {
  return (
    <div className="flex items-center justify-center hero bg-img-hero">
      <div className=" min-h-[65vh] lg:min-h-[80vh] "></div>
      <div className="content text-center text-neutral-content m-7  ">
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="mb-2 text-5xl font-semibold text-slate-800">
            Start Your Events At Harisenin Hotel
          </h1>
          <p className="mb-5 text-slate-100 font-sans">
            Discover Unfrogetable Moments at Harisenin Enjoy your gatway to
            Exquisite Experience with us
          </p>
          <div>
            <button className="btn text-white btn-neutral bg-orange-500 hover:bg-orange-700">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
