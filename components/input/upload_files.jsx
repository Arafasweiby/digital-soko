import { useField } from "formik";
import Image from "next/image";
import { BiUpload } from "react-icons/bi";

export default function UploadFilesField({ label, name, id }) {
  const [field, meta] = useField({ name });

  return (
    <div>
      <p className="block text-sm font-medium text-gray-700">{label}</p>
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
              htmlFor={id}
              className="pl-1 relative cursor-pointer bg-white rounded-md font-medium text-soko-blue hover:text-soko-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-soko-blue underline"
            >
              <span>Browse</span>
              <input
                id={id}
                type="file"
                accept="doc/*"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files[0];
                  field.onChange({
                    target: { value: [file], name },
                  });
                }}
              />
            </label>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500">Supported formats: Word, PDF</p>
      {meta.touched && meta.error && (
        <p className="text-red-500 text-sm">{meta.error}</p>
      )}
    </div>
  );

  return (
    <div className="space-y-1">
      <p className="font-medium text-lipad-blue">{label}</p>
      <label
        htmlFor={id}
        className="inline-block w-full cursor-pointer border-2 border-dashed border-lipad-green bg-lipad-green bg-opacity-5"
      >
        <div className="flex flex-col items-center p-4 text-center font-medium text-lipad-green">
          {field.value.length > 0 ? (
            <div className="relative h-24 w-24 overflow-hidden rounded-full border">
              <Image
                src={URL.createObjectURL(field.value[0])}
                alt=""
                objectFit="cover"
                layout="fill"
              />
            </div>
          ) : (
            <BiUpload className="h-8 w-8 " />
          )}
          {field.value.length > 0 ? (
            <p>Change client logo</p>
          ) : (
            <p>Upload client logo</p>
          )}
        </div>
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => {
          const file = event.target.files[0];
          field.onChange({
            target: { value: [file], name },
          });
        }}
      />
      {meta.touched && meta.error && (
        <p className="text-red-500">{meta.error}</p>
      )}
    </div>
  );
}
