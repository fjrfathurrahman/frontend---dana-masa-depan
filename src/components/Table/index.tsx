import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import React, { useState } from "react";
import GetKeyValue from "./getKeyValue";

interface ITable {
  data: any;
  status: string;
  columns: { key: string; label: string }[];
}

const TableData: React.FC<ITable> = ({ data, status, columns }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const totalItems = data?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data?.slice(startIndex, startIndex + itemsPerPage) || [];

  const handlePageChange = (newPage: number) => setCurrentPage(newPage);

  return (
    <div className="space-y-6">
      <Table aria-label="Table" align="center" classNames={{
          base: "rounded-xl bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn className="text-medium font-semibold" key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={paginatedData} emptyContent={
            status === "error" ? "Terjadi kesalahan pada server" : status === "loading" ? "Loading..." : "Data tidak ditemukan"
          }
        >
          {paginatedData?.map((item: any, index: number) => (
            <TableRow key={item.id} className="overflow-x-auto">
              {(columnKey) => (
                <TableCell key={columnKey} className={"w-auto text-ellipsis text-wrap py-2"}>
                  {GetKeyValue(item, columnKey as string, index)}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {paginatedData && paginatedData.length < 1 ? null : (
        <div className="flex items-center justify-between">
          <Button variant="bordered" color="primary" onPress={() => handlePageChange(currentPage - 1)} isDisabled={currentPage === 1 }>
            Sebelumnya
          </Button>
          <p>Halaman {currentPage} dari {totalPages}</p>
          <Button variant="bordered" color="primary" onPress={() => handlePageChange(currentPage + 1)} isDisabled={currentPage === totalPages}>
            Selanjutnya
          </Button>
        </div>
      )}
    </div>
  );
};

export default TableData;
