import { Formik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import "yup-phone";
import OutlineButton from "../components/buttons/outlineButton";
import SolidButton from "../components/buttons/solidButton";
import InputWithValidationError from "../components/input/input_with_validation_error";
import SelectMenu from "../components/input/select_menu";
import TextAreaWithValidationError from "../components/input/text_area_with_validation";
import UploadFilesField from "../components/input/upload_files";
import NavBar from "../components/layout/navBar";

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

export default function Page({ session }) {
  const router = useRouter();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    docs: [],
    biography: "",
    industry: "",
    workHours: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().email("Invalid email").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .phone(undefined, undefined, "Invalid phone number")
      .required("Required"),
    docs: Yup.array().min(1, "Upload at least one document"),
    biography: Yup.string().required("Required"),
    industry: Yup.string().required("Required"),
    workHours: Yup.string().required("Required"),
  });
  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            <UploadFilesField
                              id="upload-files"
                              label="Upload your CV"
                              name="docs"
                            />
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
                            <div className="w-fit flex justify-items-end gap-2 ml-auto">
                              <OutlineButton
                                label="Cancel"
                                type="button"
                                onClick={() => router.push("/")}
                              />
                              <SolidButton
                                isSubmitting={props.isSubmitting}
                                label="Save"
                                type="submit"
                              />
                              {/* <button
                              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-soko-blue hover:bg-soko-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soko-blue"
                              onClick={(e) => {
                                e.preventDefault();
                                props.submitForm();
                              }}
                            >
                              Save
                            </button> */}
                            </div>
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

Page.layout = NavBar;
