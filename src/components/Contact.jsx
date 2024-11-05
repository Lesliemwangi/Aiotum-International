// import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .regex(/^\d+$/, { message: "Phone number must contain only digits" })
    .min(10, { message: "Phone number should be at least 10 digits" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message is required" }),
});

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
    // Handle form submission (e.g., send to API)
  };

  return (
    <footer className="w-full text-white py-12">
      <div className="container mx-auto text-center">
        <h3 className="text-4xl text-teal-400 font-bold">
          Ready to Revolutionize Your Business?
        </h3>
        <p className="mt-4 text-xl">
          Contact us today to start your AI or software development journey.
        </p>

        <form
          className="mt-6 max-w-lg mx-auto text-white"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4 text-white">
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="w-full px-4 py-2 text-white rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email")}
              className="w-full px-4 py-2 text-white rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="tel"
              placeholder="Your Phone"
              {...register("phone")}
              className="w-full px-4 py-2 text-white rounded-lg"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              {...register("subject")}
              className="w-full px-4 py-2 text-white rounded-lg"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              {...register("message")}
              rows="4"
              className="w-full px-4 py-2 text-white rounded-lg"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button className="bg-teal-400 text-white px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 hover:bg-teal-300 focus:ring-4 focus:ring-teal-500">
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Contact;
