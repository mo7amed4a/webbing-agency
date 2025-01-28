"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { api } from "@/lib/axios";
import ServicesContact from "./ServicesContact";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  subject: Yup.string().required("Please select a subject"),
});

export default function Contactus() {
  const router = useRouter()
  const sendForm = async (
    values: {
      firstname: string;
      lastname: string;
      email: string;
      phone: string;
      message: string;
      subject: string;
    },
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      const req = await api.post("/contacts", { data: values });
      router.push('/thanks')
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[#f3f7fc]">
      <div className="w-full max-w-[90rem] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
        <div className="bg-gradient-to-r m-2 rounded-xl from-[#1F7099] to-[#A1C5D8] text-white p-8 md:w-2/5
          flex-col flex justify-center
        ">
          <h2 className="text-3xl font-semibold mb-6">Talk with us</h2>
          <p className="mb-6">
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.45 21.8613C18.3667 21.8613 16.3083 21.4073 14.275 20.4993C12.2417 19.5913 10.3917 18.3037 8.725 16.6363C7.05833 14.969 5.771 13.119 4.863 11.0863C3.955 9.05366 3.50067 6.99533 3.5 4.91133C3.5 4.61133 3.6 4.36133 3.8 4.16133C4 3.96133 4.25 3.86133 4.55 3.86133H8.6C8.83333 3.86133 9.04167 3.94066 9.225 4.09933C9.40833 4.25799 9.51667 4.44533 9.55 4.66133L10.2 8.16133C10.2333 8.428 10.225 8.65299 10.175 8.83633C10.125 9.01966 10.0333 9.17799 9.9 9.31133L7.475 11.7613C7.80833 12.378 8.204 12.9737 8.662 13.5483C9.12 14.123 9.62433 14.6773 10.175 15.2113C10.6917 15.728 11.2333 16.2073 11.8 16.6493C12.3667 17.0913 12.9667 17.4953 13.6 17.8613L15.95 15.5113C16.1 15.3613 16.296 15.249 16.538 15.1743C16.78 15.0997 17.0173 15.0787 17.25 15.1113L20.7 15.8113C20.9333 15.878 21.125 15.999 21.275 16.1743C21.425 16.3497 21.5 16.5453 21.5 16.7613V20.8113C21.5 21.1113 21.4 21.3613 21.2 21.5613C21 21.7613 20.75 21.8613 20.45 21.8613Z" fill="white" />
              </svg>
              <a href="tel:+201500382858">+201500382858</a>
            </li>
            <li className="flex items-center gap-2">
              <svg width={25} height={25} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 4.36133H7.5C4.5 4.36133 2.5 5.86133 2.5 9.36133V16.3613C2.5 19.8613 4.5 21.3613 7.5 21.3613H17.5C20.5 21.3613 22.5 19.8613 22.5 16.3613V9.36133C22.5 5.86133 20.5 4.36133 17.5 4.36133ZM17.97 10.4513L14.84 12.9513C14.18 13.4813 13.34 13.7413 12.5 13.7413C11.66 13.7413 10.81 13.4813 10.16 12.9513L7.03 10.4513C6.71 10.1913 6.66 9.71133 6.91 9.39133C7.17 9.07133 7.64 9.01133 7.96 9.27133L11.09 11.7713C11.85 12.3813 13.14 12.3813 13.9 11.7713L17.03 9.27133C17.35 9.01133 17.83 9.06133 18.08 9.39133C18.34 9.71133 18.29 10.1913 17.97 10.4513Z" fill="white" />
              </svg>
              <a href="mailto:info@webbing-agency.com">info@webbing-agency.com</a>
            </li>
            <li className="flex items-center flex-wrap gap-2">
              <svg width={19} height={22} viewBox="0 0 19 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1191 7.31133C17.0691 2.69133 13.0391 0.611328 9.49912 0.611328C9.49912 0.611328 9.49912 0.611328 9.48912 0.611328C5.95912 0.611328 1.91912 2.68133 0.869119 7.30133C-0.300881 12.4613 2.85912 16.8313 5.71912 19.5813C6.77912 20.6013 8.13912 21.1113 9.49912 21.1113C10.8591 21.1113 12.2191 20.6013 13.2691 19.5813C16.1291 16.8313 19.2891 12.4713 18.1191 7.31133ZM9.49912 12.3213C7.75912 12.3213 6.34912 10.9113 6.34912 9.17133C6.34912 7.43133 7.75912 6.02133 9.49912 6.02133C11.2391 6.02133 12.6491 7.43133 12.6491 9.17133C12.6491 10.9113 11.2391 12.3213 9.49912 12.3213Z" fill="white" />
              </svg>
              <a href="https://maps.app.goo.gl/fjJiGYv2QLVt6RsE6" className="flex gap-4 item-center text-xs md:ext-base">
               12 Ezzeldeen Taha , Tayaran Street, Nasr City 
              </a>
            </li>
          </ul>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4213.144620722963!2d31.330217299999997!3d30.058373200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f974624994f%3A0x1be867d86a078262!2sGolden%20house!5e1!3m2!1sar!2seg!4v1738043880187!5m2!1sar!2seg"
            className="w-full h-[200px] md:h-[150px] md:w-2/3 rounded-xl mt-10" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            message: "",
            subject: "",
          }}
          validationSchema={validationSchema}
          onSubmit={sendForm}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form className="p-8 md:w-1/2 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#1f7099] mb-2">
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstname"
                    className="w-full border-b-2 pb-1 p-2 focus:outline-none focus:ring-0 focus:border-primary"
                    placeholder="First name"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#1f7099] mb-2">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastname"
                    className="w-full border-b-2 pb-1 p-2 focus:outline-none focus:ring-0 focus:border-primary"
                    placeholder="Last name"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#1f7099] mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full border-b-2 pb-1 p-2 focus:outline-none focus:ring-0 focus:border-primary"
                    placeholder="example@gmail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-[#1f7099] mb-2">
                    Phone Number
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    className="w-full border-b-2 pb-1 p-2 focus:outline-none focus:ring-0 focus:border-primary"
                    placeholder="0123456789"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-[#1f7099] mb-2">
                  Select Subject?
                </label>
                <ServicesContact setFieldValue={setFieldValue} />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-6">
                <label className="block text-[#1f7099] mb-2">
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  className="w-full border-b-2 pb-1 p-2 focus:outline-none focus:ring-0 h-12 min-h-16 focus:border-primary"
                  rows="2"
                  placeholder="Describe your project, job, or any details you want to share..."
                  />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="submit"
                  className="bg-[#1f7099] hover:bg-[#14597b] text-white px-6 py-2 rounded"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
