import { icons } from "@/resource/icons";
import { Button, Chip, Image } from "@heroui/react";

export default function GetKeyValue(item: any, columnKey: string, index: number, handleDelete?: () => void) {
  switch (columnKey) {
    case "id":
      return index + 1;

    case "photo":
      return (
        <div className="min-w-full flex justify-center items-center">
          <Image
            src={`http://localhost:8000/storage/${item?.photo}` || "/images/user/user-03.png"}
            alt="image"
            className="rounded-full h-16 w-16 object-cover"
          />
        </div>
      );
    
    case "role": 
    return <Chip color={item[columnKey] === "Super Admin" ? "danger" : "success"} aria-label={item[columnKey]} variant="flat">{item.role}</Chip>

    case "actions":
      return (
        <div className="flex items-center justify-center gap-2">
          <Button isIconOnly color="warning" className="text-white">
            {icons.edit}
          </Button>
          <Button isIconOnly color="danger" onPress={handleDelete}>
            {icons.delete}
          </Button>
        </div>
      );
    default:
      return (
        <div className="max-w-44 sm:min-w-full overflow-hidden text-ellipsis whitespace-nowrap text-medium font-medium" title={item[columnKey]}>
          {(item[columnKey] as React.ReactNode) ?? "-"}
        </div>
      );
  }
}
