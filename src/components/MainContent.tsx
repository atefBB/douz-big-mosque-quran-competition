import { useState } from "react";
import {
  Button,
  FloatingLabel,
  Label,
  Select,
  Datepicker,
} from "flowbite-react";
import swal from "sweetalert";

import { supabase } from "../supabase";

type CompetitorType = {
  firstName: string;
  lastName: string;
  fatherName: string;
  level: string;
  birthDate: Date | null;
};

export function MainContent() {
  // @todo get levels from db
  const levels = ["المستوى الأول", "المستوى الثاني", "المستوى الثالث"];

  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [level, setLevel] = useState("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  async function saveData({
    firstName,
    lastName,
    fatherName,
    level,
    birthDate,
  }: CompetitorType) {
    setIsProcessing(true);
    // @todo validate inputs
    const insertedData = [
      {
        firstname: firstName,
        father_name: fatherName,
        lastname: lastName,
        // @todo add  `address`
        level,
        birth_date: birthDate,
      },
    ];

    const { data, error } = await supabase
      .from("competitors")
      .insert(insertedData)
      .select();

    setIsProcessing(false);

    if (error !== null) {
      return swal({
        text: "حدث خطأ عند التسجيل، الرجاء المحاولة لاحقا.",
        icon: "error",
        buttons: [false],
        timer: 2000,
      });
    }

    if (data !== null) {
      return swal({
        text: "تم التسجيل بنجاح، سنتصل بك قريبا إن شا الله",
        icon: "success",
        buttons: [false],
        timer: 2000,
      });
    }
  }

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
              <div className="mb-2 block">
                <Label htmlFor="birthDate" value="تاريخ الولادة" />
              </div>
              <Datepicker
                id="birthDate"
                language="ar-TN"
                labelTodayButton="اليوم"
                labelClearButton="إغلاق"
                maxDate={new Date()}
                onSelectedDateChanged={(date) => setBirthDate(date)}
              />
            </div>

            <div className="col-span-full">
              <div className="mb-2 block">
                <Label htmlFor="level" value="المستوى" />
              </div>
              <Select
                id="level"
                required={true}
                onChange={(event) => setLevel(event.target.value)}
              >
                {levels.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-x-6">
            <Button
              type="submit"
              onClick={() => {
                saveData({
                  firstName,
                  lastName,
                  fatherName,
                  level,
                  birthDate,
                });
              }}
              isProcessing={isProcessing}
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
