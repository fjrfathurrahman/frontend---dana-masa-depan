"use client";

import Layout from "@/components/Layouts/Layout";
import TableData from "@/components/Table";
import { useGetStudent } from "@/hooks/students/useStudent";
import { icons } from "@/resource/icons";

export default function Page() {
  const { data } = useGetStudent();
  const students = data?.data?.data;

  return (
    <Layout>
      <main className="pt-14">

          <button className="mb-8 rounded-full bg-primary text-white h-12 w-12 flex justify-center items-center" onClick={() => window.history.back()}>
            {icons.back}
          </button>

        <div>
          <h3 className="h2 mb-4">Cari Akun Anda di sini</h3>
          <p className="p leading-8">
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
            className="w-full rounded-xl py-4 px-6 shadow-1"
          />
          <button className="h-full rounded-full bg-primary text-white py-4 px-16">Cari</button>
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
    </Layout>
  );
}
