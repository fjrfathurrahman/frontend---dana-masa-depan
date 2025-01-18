import { Chip } from "@heroui/react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Image from "next/image";

export default function GetKeyValue( item: any, columnKey: string, index: number ) {
  switch (columnKey) {
    case "id":
      return index + 1;

    case "photo":
      return (
        <div className="min-w-full flex justify-center items-center">
          <Image
            src={ `http://localhost:8000/storage/${item?.photo}` || "/images/user/user-03.png"}
            alt="image"
            className="rounded-full"
            width={100}
            height={100}
          />
        </div>
      );
    
    case "role": 
    return <Chip color={item[columnKey] === "Super Admin" ? "danger" : "success"} aria-label={item[columnKey]}>{item.role}</Chip>

    case "actions":
      return (
        <div className="flex items-center justify-center gap-2">
          <button>
            <MdModeEdit size={22} />
          </button>
          <button>
            <MdDelete size={22} />
          </button>
        </div>
      );
    default:
      return (
        <div className="max-w-44 sm:min-w-full overflow-hidden text-ellipsis whitespace-nowrap" title={item[columnKey]}>
          {(item[columnKey] as React.ReactNode) ?? "-"}
        </div>
      );
  }
}
