"use client";

import TableData from "@/components/Table";
import { useGetStudent } from "@/hooks/students/useStudent";
import { icons } from "@/resource/icons";
import { toast } from "sonner";

const Search = () => {
  const { data } = useGetStudent();
  const students = data?.data?.data;

  return (
    <main className="pt-14">
      <button
        className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white"
        onClick={() => window.history.back()}
      >
        {icons.back}
      </button>

      <div>
        <h3 className="h2 mb-4">Cari Akun Anda di sini</h3>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          distinctio optio modi reiciendis vitae non dolorum. At magni vitae
          quidem aliquid, neque quos est dolor suscipit consequatur unde animi
          in?
        </p>
      </div>

      <div className="mt-4 flex items-center gap-4">
        <input
          type="text"
          placeholder="Cari disini berdasarkan NISN, Nama, Kelas, Jurusan dan Email"
          className="w-full rounded-xl px-6 py-4 shadow-1"
        />
        <button
          className="h-full rounded-full bg-primary px-6 sm:px-16 py-4 text-white"
          onClick={() => toast.info("Fitur belum tersedia")}
        >
          Cari
        </button>
      </div>

      <div className="py-8">
        <TableData
          type="student"
          data={students}
          status={status}
          columns={[
            { key: "id", label: "No" },
            { key: "photo", label: "Photo" },
            { key: "student_number", label: "NISN" },
            { key: "name", label: "Name" },
            { key: "gender", label: "Jenis Kelamin" },
            { key: "email", label: "Email" },
            { key: "class", label: "Kelas" },
            { key: "major", label: "Jurusan" },
            { key: "view", label: "Action" },
          ]}
        />
      </div>
    </main>
  );
};

export default Search;
