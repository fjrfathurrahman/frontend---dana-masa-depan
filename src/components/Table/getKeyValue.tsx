import { useUpdateStatus } from "@/hooks/students/useStudent";
import { icons } from "@/resource/icons";
import { formatedCurrency } from "@/utils/formated";
import { Button, Chip, Image } from "@heroui/react";
import Link from "next/link";

type TProps = {
  item: any;
  columnKey: string;
  index: number;
  type: "student" | "transaction" | "admin";
  actions?: {
    handleDelete: (id: number) => void;
    handleView: () => void;
    // handleEdit: () => void
  };
};

export default function GetKeyValue({ columnKey, index, item, type, actions }: TProps) {
  const { mutate } = useUpdateStatus();
  const getNestedValue = (obj: any, key: string) => {
    return key.split(".").reduce((acc, part) => acc?.[part], obj) ?? "-";
  };

  const handleStatusChange = (id: number, status: string) => {
    mutate({id, status});
  };

  switch (columnKey) {
    case "id":
      return index + 1;

    case "photo":
      return (
        <div className="flex min-w-full items-center justify-center">
          <Image
            src={
              `http://localhost:8000/storage/${item?.photo}` ||
              "/images/user/user-03.png"
            }
            alt="image"
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
      );

    case "amount":
      return (
        <Chip startContent={icons.coin} color="warning" variant="flat">
          {formatedCurrency(getNestedValue(item, columnKey))}
        </Chip>
      );

    case "role":
      return (
        <Chip
          color={item[columnKey] === "super admin" ? "danger" : "success"}
          aria-label={item[columnKey]}
          variant="flat"
        >
          {item.role}
        </Chip>
      );

    case "type":
      return (
        <Chip
          color={item[columnKey] === "withdrawal" ? "danger" : "success"}
          aria-label={item[columnKey]}
          variant="flat"
        >
          {item.type}
        </Chip>
      );

    case "status":
      return (
        <Chip
          variant="flat"
          color={
            item.status === "pending"
              ? "warning"
              : item.status === "rejected"
                ? "danger"
                : "success"
          }
        >
          {item.status}
        </Chip>
      );

    case "view":
      return (
        <Button
          isIconOnly
          variant="flat"
          color="primary"
          as={Link}
          href={`/search/student/detail/${item.id}`}
          type="button"
        >
          {icons.eye}
        </Button>
      );

    case "actions":
      return (
        <div className="flex items-center justify-center gap-2">
          <Button
            isIconOnly
            variant="flat"
            color="primary"
            as={Link}
            href={`/dashboard/${type}/detail/${item.id}`}
            type="button"
          >
            {icons.eye}
          </Button>
          <Button
            isIconOnly
            variant="flat"
            color="warning"
            as={Link}
            href={`/dashboard/${type}/edit/${item.id}`}
            type="button"
          >
            {icons.edit}
          </Button>
          <Button
            isIconOnly
            variant="flat"
            color="danger"
            type="button"
            onPress={() => actions?.handleDelete(item.id)}
          >
            {icons.delete}
          </Button>
        </div>
      );

    case "changeStatus":
      return (
        <div className="flex flex-col gap-2">
          <Button
            onPress={() => handleStatusChange(item.id, "rejected")}
            color="danger"
            variant="flat"
            isDisabled={item.status === "rejected"}
          >
            Rejected
          </Button>
          <Button
            onPress={() => handleStatusChange(item.id, "approved")}
            color="success"
            variant="flat"
            isDisabled={item.status === "approved"}
          >
            Approved
          </Button>
        </div>
      );


    default:
      return (
        <div
          className="max-w-44 overflow-hidden text-ellipsis whitespace-nowrap text-medium font-medium sm:min-w-full"
          title={item[columnKey]}
        >
          {getNestedValue(item, columnKey)}
        </div>
      );
  }
}
