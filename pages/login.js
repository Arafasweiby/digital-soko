import { HiLockClosed, HiUsers } from "react-icons/hi";
import { Formik } from "formik";
import * as Yup from "yup";
import InputWithLeadingIcon from "../components/input/input_with_leading_icon";
import { useRouter } from "next/router";

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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-soko-light-blue">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Log in to Digital Soko
          </h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <form className="mt-8 space-y-4" onSubmit={props.handleSubmit}>
              <InputWithLeadingIcon
                name="email"
                type="email"
                placeholder="Username or Email"
                icon={
                  <HiUsers
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                }
              />
              <InputWithLeadingIcon
                name="password"
                type="password"
                placeholder="Password"
                icon={
                  <HiLockClosed
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                }
              />

              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-soko-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </form>
          )}
        </Formik>
        <div className="space-y-4">
          <p className="w-full flex justify-center">
            Don’t have a Digital Soko account?
          </p>

          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-soko-blue font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-soko-blue"
            onClick={() => router.push("/signUp")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
