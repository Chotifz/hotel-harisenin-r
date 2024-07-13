import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Booking() {
  const location = useLocation();
  const { checkIn, checkOut, room } = location.state || {};

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      startDate: checkIn || "",
      endDate: checkOut || "",
      room: room || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      startDate: Yup.date().required("Required"),
      endDate: Yup.date().required("Required"),
      room: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values);
      // Implement form submission logic here
    },
  });

  useEffect(() => {
    if (checkIn || checkOut || room) {
      formik.setValues({
        startDate: checkIn,
        endDate: checkOut,
        room: room,
      });
    }
  }, [checkIn, checkOut, room]);

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-2xl font-bold mb-5">Book a Room</h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          ) : null}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startDate}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
          {formik.touched.startDate && formik.errors.startDate ? (
            <div className="text-red-600 text-sm">
              {formik.errors.startDate}
            </div>
          ) : null}
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endDate}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
          {formik.touched.endDate && formik.errors.endDate ? (
            <div className="text-red-600 text-sm">{formik.errors.endDate}</div>
          ) : null}
        </div>
        <div>
          <label
            htmlFor="room"
            className="block text-sm font-medium text-gray-700"
          >
            Room
          </label>
          <input
            type="text"
            id="room"
            name="room"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.room}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
          />
          {formik.touched.room && formik.errors.room ? (
            <div className="text-red-600 text-sm">{formik.errors.room}</div>
          ) : null}
        </div>
        <button
          type="submit"
          className="bg-slate-800 hover:bg-slate-900 text-white p-3 rounded-lg text-sm font-bold"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}
