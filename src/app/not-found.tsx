'use client';

import { Button } from "@heroui/react";

export const metadata = {
  title: "404 Not Found",
};

export default function Page() {
  return (
    <div className="h-screen flex justify-center items-center text-center flex-col gap-4">
      <p>Ops, halaman tidak ditemukan atau<br /> masi dalam pengembangan...</p>
      <Button onPress={() => history.back()}>Kembali</Button>
    </div>
  );
}
