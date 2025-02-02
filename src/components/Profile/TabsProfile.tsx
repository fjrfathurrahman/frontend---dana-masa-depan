"use client";

import { Tab, Tabs } from "@heroui/react";
import ChangePassword from "./ChangePassword";
import HistoryTransactions from "./HistoryTransactions";

const TabsProfile = () => {
  return (
    <div className="col-span-1 lg:col-span-5 xl:col-span-4 shadow-1 dark:shadow-card dark:bg-gray-dark bg-white rounded-xl p-4 h-max">
      <Tabs color="primary" classNames={{base: 'flex items-center'}}>
        {/* <Tab key="features" title="Lorem Ipsum">
          <div>
          - Button Logout - Button Transaksi Menggunakan Kartu Kredit - Button Transaksi Menggunakan E-Wallet - Menghubungi Admin
          </div>
        </Tab> */}
        <Tab key="history" title="Riwayat">
          <HistoryTransactions />
        </Tab>
        <Tab key="change-password" title="Ubah Password">
          <ChangePassword />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsProfile;
