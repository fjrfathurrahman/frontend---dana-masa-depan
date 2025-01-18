import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import React, { useState } from "react";
import { toast } from "sonner";
import GetKeyValue from "./getKeyValue";

// interface TableDataProps {
//   data: RowProps[];
//   status: string;
//   columns: { key: string; label: string }[];
//   page: Page;
//   openDeleteModal?: (id: number) => void;
// }

interface ITable {
  data: any;
  status: string;
  columns: { key: string; label: string }[];
}

const TableData: React.FC<ITable> = ({ data, status, columns, }) => {
  // const [currentPage, setCurrentPage] = useState<number>(1);
  // const itemsPerPage = 5;

  // const totalItems = data?.length || 0;
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const paginatedData = data?.slice(startIndex, startIndex + itemsPerPage) || [];

  // const handlePageChange = (newPage: number) => setCurrentPage(newPage);

  return (
    <div className="space-y-6">
      <Table aria-label="Table" align="center"  classNames={{
      base: "rounded-xl bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card",
    }}>
        <TableHeader columns={columns}>
          {column => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>

        <TableBody items={data} emptyContent={status === "error" ? "Terjadi kesalahan pada server" : status === "pending" ? "Loading..." : "Data tidak ditemukan"}>
          {data?.map((item: any, index: number) => (
            <TableRow key={item.id} className="overflow-x-auto">
              {(columnKey) => 
                <TableCell key={columnKey} className={"text-wrap text-ellipsis w-auto py-2"}>
                  {GetKeyValue(item, columnKey as string, index)}
                </TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* {data && data.length <= 5 ? null : (
        <div className="flex items-center justify-between">
          <Button variant="bordered" color="primary" onPress={() => handlePageChange(currentPage - 1)} isDisabled={currentPage === 1 }>
            Sebelumnya
          </Button>
          <p>Halaman {currentPage} dari {totalPages}</p>
          <Button variant="bordered" color="primary" onPress={() => handlePageChange(currentPage + 1)} isDisabled={currentPage === totalPages}>
            Selanjutnya
          </Button>
        </div>
      )} */}
      
    </div>
  );
};

export default TableData;
