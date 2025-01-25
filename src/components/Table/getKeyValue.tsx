import { icons } from "@/resource/icons";
import { formatedCurrency } from "@/utils/formated";
import { Button, Chip, Image } from "@heroui/react";

type TProps = {
  item: any
  columnKey: string;
  index: number;
  actions?: {
    handleDelete: (id: number) => void
    handleView: () => void
    // handleEdit: () => void
  }
}

export default function GetKeyValue({columnKey, index, item, actions}: TProps) {

  const getNestedValue = (obj: any, key: string) => {
    return key.split('.').reduce((acc, part) => acc?.[part], obj) ?? "-";
  };

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

    case "amount":
      return formatedCurrency(getNestedValue(item, columnKey));
    
    case "role": 
     return <Chip color={item[columnKey] === "super admin" ? "danger" : "success"} aria-label={item[columnKey]} variant="flat">{item.role}</Chip>
    
    case "type": 
     return <Chip color={item[columnKey] === "withdrawal" ? "danger" : "success"} aria-label={item[columnKey]} variant="flat">{item.type}</Chip>

    case "actions":
      return (
        <div className="flex items-center justify-center gap-2">
          <Button isIconOnly variant="flat" color="primary" type="button" onPress={() => actions?.handleView()}>
            {icons.eye}
          </Button>
          <Button isIconOnly variant="flat" color="warning" type="button">
            {icons.edit}
          </Button>
          <Button isIconOnly variant="flat" color="danger" type="button" onPress={() => actions?.handleDelete(item.id)} >
            {icons.delete}
          </Button>
        </div>
      );
    default:
      return (
        <div className="max-w-44 sm:min-w-full overflow-hidden text-ellipsis whitespace-nowrap text-medium font-medium" title={item[columnKey]}>
          {getNestedValue(item, columnKey)}
        </div>
      );
  }
}
