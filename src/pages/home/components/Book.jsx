export default function Book() {
  return (
    <>
      <div
        className="relative -top-20 mx-4 lg:mx-32 xl:mx-44 shadow-lg"
        style={{ boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.5)" }}
      >
        <div
          className=" w-full flex lg:flex-col items-center mt-4 bg-slate-200 px-8 py-6 lg:py-8 max-md:py-16 
              "
        >
          <form
            className="flex justify-around items-center gap-6 lg:gap-8 mx-auto text-black max-md:flex-col "
            action=""
          >
            <div className=" w-full flex flex-col lg:mb-4">
              <label for="check-in">Check-In</label>
              <input
                className="p-2 xl:px-10 rounded-lg"
                type="date"
                placeholder="Select Date"
              />
            </div>

            <div className="w-full flex flex-col lg:mb-4">
              <label for="check-out">Check-Out</label>{" "}
              <input
                className="p-2 xl:px-10 rounded-lg"
                type="date"
                placeholder="Select Date"
              />
            </div>

            <div className="flex flex-col lg:mb-4">
              <label for="">Room</label>{" "}
              <input
                className="p-2 px-0 rounded-lg"
                type="text"
                placeholder=""
              />
            </div>
            <div className="w-full">
              <button className="bg-slate-700 px-3 py-3 rounded-lg text-white">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
