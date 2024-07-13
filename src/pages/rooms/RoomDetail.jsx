import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { Skeleton } from "./components/Skeleton";
import { useFetchRoomById } from "../../api/useRooms";
import { useCreateBooking } from "../../api/useBooking";
import { useFetchRoomDetailById } from "../../api/useRoomDetails";

export default function RoomDetail() {
  const { id } = useParams();

  const {
    data: roomData,
    isLoading: isLoadingRoom,
    isError: isErrorRoom,
  } = useFetchRoomById(id);

  const {
    data: roomDetailsData,
    isLoading: isLoadingRoomDetails,
    isError: isErrorRoomDetails,
  } = useFetchRoomDetailById(id);

  const { mutate: createBooking } = useCreateBooking();

  const formik = useFormik({
    initialValues: {
      startDate: "",
      endDate: "",
      guests: 1,
      customerName: "",
    },
    onSubmit: (values) => {
      const bookingData = {
        roomId: parseInt(id),
        customerName: values.customerName,
        startDate: values.startDate,
        endDate: values.endDate,
      };
      createBooking(bookingData);
    },
  });

  if (isLoadingRoom || isLoadingRoomDetails) return <Skeleton />;
  if (isErrorRoom || isErrorRoomDetails) return <div>Server Error</div>;

  const room = roomData?.data;
  const roomDetails = roomDetailsData?.data;

  return (
    <div className="bg-slate-50">
      <section className="w-full min-h-[65vh]">
        <div className="max-w-[75%] h-full mx-auto p-8">
          <h1 className="text-center text-4xl text-black font-semibold mb-4">
            {room.name}
          </h1>
          <img
            src={room.image}
            alt={room.name}
            className={`mb-5 lg:max-h-96 ${
              !room.availability ? "grayscale" : ""
            }`}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-8">{room.name}</h2>
              <p className="mb-5 text-sm">{room.description}</p>
              <p className="mb-5 text-sm">Price: IDR {room.price}</p>
              <p className="mb-5 text-sm">
                Availability:{" "}
                {room.availability ? "available" : "not available"}
              </p>
            </div>
            <div>
              {roomDetails ? (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Facilities Offered
                  </h3>
                  <p className="mb-2 text-sm">
                    Max Guests: {roomDetails.maxGuest}
                  </p>
                  <p className="mb-2 text-sm">
                    Number of Beds: {roomDetails.n_beds}
                  </p>
                  <p className="mb-2 text-sm">
                    Features: {roomDetails.feature}
                  </p>
                  <p className="mb-2 text-sm">
                    Amenities: {roomDetails.amenities}
                  </p>
                </div>
              ) : (
                <div>No room details available</div>
              )}
              <form onSubmit={formik.handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="customerName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Customer Name
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={formik.values.customerName}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="startDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formik.values.startDate}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="endDate"
                    className="block text-sm font-medium text-gray-700"
                  >
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Guests
                  </label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    value={formik.values.guests}
                    onChange={formik.handleChange}
                    min="1"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg text-sm font-bold"
                  disabled={formik.isSubmitting}
                >
                  {formik.isSubmitting ? "Booking..." : "Book Now"}
                </button>
              </form>
              {formik.errors.submit && (
                <div className="text-red-500 mt-2">
                  Error: {formik.errors.submit}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
