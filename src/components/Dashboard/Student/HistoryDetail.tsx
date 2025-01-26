import CardHistory from "@/components/Card/CardHistory";
import { icons } from "@/resource/icons";
import { formatedCurrency, formattedDateOnly } from "@/utils/formated";
import { Button, Card, CardBody, CardHeader, Divider } from "@heroui/react";
import Image from "next/image";
import React from "react";

const HistoryDetail = ({ data }: { data: [] }) => {
  return (
    <div className="relative z-30 xl:col-span-2 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card h-max">
      <div className="p-6">
        <div className="flex items-center gap-2">
          <h6 className="h6">Riwayat Transaksi</h6>
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
            {data?.length ?? 0}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {data?.length > 0 ? (
            data?.slice(0, 5)?.map((item: any) => (
              <CardHistory key={item.id} {...item} />
            ))
          ) : (
            <h6 className="h6">Tidak ada riwayat transaksi</h6>
          )}
        </div>
      </div>
      {/* Data Parent Student */}
    </div>
  );
};

export default HistoryDetail;
