import { useRouter } from "next/router";
import InputWithValidationError from "../components/input/input_with_validation_error";
import * as Yup from "yup";
import { Formik } from "formik";
import TextAreaWithValidationError from "../components/input/text_area_with_validation";
import SelectMenu from "../components/input/select_menu";

const industries = [
  {
    name: "Technology",
    value: "Technology",
  },
  {
    name: "SEO",
    value: "SEO",
  },
];

const workHours = [
  {
    name: "Part Time ",
    value: "Part Time ",
  },
  {
    name: "Full Time  ",
    value: "Full Time  ",
  },
];

export default function Page() {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({});
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };
  return (
    <div className="min-h-screen bg-soko-light-blue">
      <div className="bg-soko-blue h-24"></div>
      <div className="p-16 ">
        <div className="max-w-7xl w-full mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <>
                <div>
                  <div className="md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Create your Profile
                        </h3>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                      <form action="#" method="POST">
                        <div className="shadow sm:rounded-md sm:overflow-hidden">
                          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <InputWithValidationError
                                  name="firstName"
                                  type="text"
                                  label="First Name"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <InputWithValidationError
                                  name="lastName"
                                  type="text"
                                  label="Last Name"
                                />
                              </div>
                            </div>
                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <InputWithValidationError
                                  name="phoneNumber"
                                  type="tel"
                                  label="Phone Number"
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <InputWithValidationError
                                  name="email"
                                  type="email"
                                  label="Email"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700">
                                Upload your CV
                              </label>
                              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                  <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                  <div className="flex text-sm text-gray-600">
                                    <p>Drag & drop files or</p>

                                    <label
                                      htmlFor="file-upload"
                                      className="pl-1 relative cursor-pointer bg-white rounded-md font-medium text-soko-blue hover:text-soko-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-soko-blue underline"
                                    >
                                      <span>Browse</span>
                                      <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        className="sr-only"
                                      />
                                    </label>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    Supported formats: Word, PDF
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div>
                              <TextAreaWithValidationError
                                name="biography"
                                label="Biography"
                                type="text"
                                rows={10}
                                defaultValue={""}
                              />
                            </div>

                            <div className="grid grid-cols-6 gap-6">
                              <div className="col-span-6 sm:col-span-3">
                                <SelectMenu
                                  name="industry"
                                  label="Industry"
                                  items={industries}
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <SelectMenu
                                  name="workHours"
                                  label="Work Hours"
                                  items={workHours}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="px-4 py-3 bg-white text-right sm:px-6">
                            <button
                              type="submit"
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-soko-blue hover:bg-soko-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soko-blue"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
