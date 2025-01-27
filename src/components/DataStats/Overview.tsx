"use client";

import { Card, CardBody, CardHeader } from "@heroui/react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { formatedCurrency } from "@/utils/formated";

const Overview = ({ data }: { data: any }) => {

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-4">
        <Card className="p-3 dark:bg-gray-dark" isPressable>
          <CardHeader>
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-warning-400 text-white">
              <HiOutlineUserGroup size={28} />
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <h4 className="h3">{data?.students_count ?? 0}</h4>
              <span className="text-body-sm font-medium line-clamp-3 mt-1.5">
                Jumlah Seluruh Siswa Menabung
              </span>
            </div>
          </CardBody>
        </Card>

        <Card className="p-3 dark:bg-gray-dark" isPressable>
          <CardHeader>
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-primary-400 text-white">
              <HiOutlineUserGroup size={28} />
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <h4 className="h4 line-clamp-1">
                {data?.total_balance ? formatedCurrency(data.total_balance) : "0,00"}
              </h4>
              <span className="text-body-sm font-medium line-clamp-3 mt-1.5">
                Jumlah Seluruh Siswa Menabung
              </span>
            </div>
          </CardBody>
        </Card>
        
        <Card className="p-3 dark:bg-gray-dark" isPressable>
          <CardHeader>
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-success-400 text-white">
              <HiOutlineUserGroup size={28} />
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <h4 className="h4 line-clamp-1">
                {data?.total_deposit ? formatedCurrency(data.total_deposit) : "0,00"}
              </h4>
              <span className="text-body-sm font-medium line-clamp-3 mt-1.5">
                Jumlah Seluruh Deposit
              </span>
            </div>
          </CardBody>
        </Card>
        
        <Card className="p-3 dark:bg-gray-dark" isPressable>
          <CardHeader>
            <div className="flex h-14.5 w-14.5 items-center justify-center rounded-full bg-danger-400 text-white">
              <HiOutlineUserGroup size={28} />
            </div>
          </CardHeader>
          <CardBody>
            <div>
              <h4 className="h4 line-clamp-1">
                {data?.total_withdrawal ? formatedCurrency(data.total_withdrawal) : "0,00"}
              </h4>
              <span className="text-body-sm font-medium line-clamp-3 mt-1.5">
                Jumlah Seluruh Withdraw
              </span>
            </div>
          </CardBody>
        </Card>

      </div>
    </>
  );
};

export default Overview;
