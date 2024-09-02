import { useState } from "react";
import { Button, FloatingLabel } from "flowbite-react";

export function MainContent() {
  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // @todo get levels from db
  const levels = ["المستوى الأول", "المستوى الثاني", "المستوى الثالث"];

  return (
    <main className="h-full my-10 mx-auto max-w-7xl px-6 lg:px-8">
      <div className="bg-white border rounded px-5 shadow-xl hover:shadow-md mx-auto max-w-2xl">
        <div className="my-6">
          <h2 className="text-base text-center font-semibold leading-7 text-gray-900">
            معلومات التسجيل
          </h2>
          <p className="mt-1 text-center text-sm leading-6 text-gray-600">
            سيتم تسجيل هذه المعلومات بقاعدة بيانات لسهولة الوصول إليها لاحقا
          </p>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="flex col-span-full">
              <FloatingLabel
                variant="standard"
                label="الاسم"
                onChange={(event) => setFirstName(event.target.value)}
              />
              <FloatingLabel
                variant="standard"
                label="اسم الأب"
                onChange={(event) => setFatherName(event.target.value)}
              />
            </div>
            <div className="col-span-full">
              <FloatingLabel
                variant="standard"
                label="اللقب"
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="level"
                className="block text-right text-sm font-medium leading-6 text-gray-900"
              >
                المستوى
              </label>
              <div className="mt-2">
                <select
                  id="level"
                  name="level"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  {levels.map((level, index) => (
                    <option key={index} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Button
              type="submit"
              onClick={() => {
                setFullName(`${firstName} بن ${fatherName} ${lastName}`);
                alert(fullName);
              }}
              color="blue"
              className="w-full"
            >
              تسجيل
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
