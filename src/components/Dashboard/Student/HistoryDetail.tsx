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
            data?.slice(0, 4)?.map((item: any) => (
              <Card key={item} className="px-2">
                <CardHeader className="flex gap-3">
                  <Button
                    className="flex text-white"
                    isIconOnly
                    color={`${item.type === "deposit" ? "success" : "danger"}`}
                  >
                    {item.type === "deposit" ? icons.trendUp : icons.trendDown}
                  </Button>
                  <h5 className="h5">{formatedCurrency(item?.amount)}</h5>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="flex items-center gap-4">
                    {item.admin.photo && (
                      <Image
                        src={`http://localhost:8000/storage/${item?.admin?.photo}`}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt="profile"
                      />
                    )}

                    <div>
                      <h6 className="h6">{item?.admin?.name}</h6>
                      <p className="text-gray-6 dark:text-gray-4">
                        {formattedDateOnly(item?.created_at)}
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
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
