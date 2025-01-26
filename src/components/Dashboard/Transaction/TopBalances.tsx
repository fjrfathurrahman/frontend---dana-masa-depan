import { formatedCurrency } from "@/utils/formated";
import { Avatar, Card, CardBody, CardHeader } from "@heroui/react";
import React from "react";

const TopBalances = (data: any) => {
  const balance = data.data.data.data;

  return (
    <Card className="col-span-12 rounded-[10px] bg-white px-7.5 py-7.5 dark:bg-gray-dark xl:col-span-5">
      <CardHeader>
        <h5 className="h5">Top Siswa Sultan 😎</h5>
      </CardHeader>

      <CardBody className="flex flex-col gap-2">
        {balance?.length > 0 ? (
          balance?.slice(0, 4).map((item: any) => (
            <Card key={item}>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={`http://localhost:8000/storage/${item?.photo}`}
                    isBordered
                  />
                  <div>
                    <h5 className="line-clamp-1 font-semibold">{item?.name}</h5>
                    <small>
                      {item?.class} - {item?.major}
                    </small>
                  </div>
                </div>
                <span>{formatedCurrency(item?.balance)}</span>
              </CardHeader>
              {/* <CardBody></CardBody> */}
            </Card>
          ))
        ) : (
          <p>Tidak data ditemukan...</p>
        )}
      </CardBody>
    </Card>
  );
};

export default TopBalances;
