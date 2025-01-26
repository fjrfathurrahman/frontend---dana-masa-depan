import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { icons } from "@/resource/icons";
import Image from "next/image";
import {
  formatedCurrency,
  formattedDate,
  formattedDateOnly,
} from "@/utils/formated";

type Props = {
  id: number;
  student: {
    name: string;
    class: string;
    major: string;
    photo: string;
  };
  admin: {
    id: number;
    name: string;
    email: string;
    photo: string;
    role: string;
  };
  type: string;
  amount: number;
  created_at: string;
  updated_at: string;
};

const CardHistory: React.FC<Props> = (props) => {
  return (
    <>
      <Popover placement="bottom" backdrop={"opaque"} offset={10}>
        <PopoverTrigger>
          <button className="w-full">
            <Card className="px-2">
              <CardHeader className="flex gap-3">
                <Button
                  className="flex text-white"
                  isIconOnly
                  color={`${props.type === "deposit" ? "success" : "danger"}`}
                >
                  {props.type === "deposit" ? icons.trendUp : icons.trendDown}
                </Button>
                <h5 className="h5">{formatedCurrency(props?.amount)}</h5>
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="flex items-center gap-4">
                  {props.admin.photo && (
                    <Avatar
                      src={`http://localhost:8000/storage/${props?.admin?.photo}`}
                      size="lg"
                      isBordered
                    />
                  )}

                  <div>
                    <h6>{props?.admin?.name}</h6>
                    <p className="text-small text-gray-6 dark:text-gray-4">
                      {formattedDateOnly(props?.created_at)}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </button>
        </PopoverTrigger>

        <PopoverContent className="bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full space-y-3 px-4 py-2">
            <h6 className="h6">Informasi Transaksi</h6>

            <div className="flex items-center gap-3">
              {props.student.photo && (
                <Image
                  src={`http://localhost:8000/storage/${props.student?.photo}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="profile"
                />
              )}
              <span>
                <h6 className="line-clamp-1 text-lg dark:text-white">
                  {props.student.name}
                </h6>
                <p>
                  {props?.student.class} - {props?.student.major}
                </p>
              </span>
            </div>
            <Divider />
            <div className="flex items-center gap-3">
              {props.admin.photo && (
                <Image
                  src={`http://localhost:8000/storage/${props.admin?.photo}`}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt="profile"
                />
              )}
              <span>
                <h6 className="line-clamp-1 text-lg dark:text-white ">
                  {props.admin.name}
                </h6>
                <p>
                  {props?.admin.role} - {props?.admin.email}
                </p>
              </span>
            </div>
            <Divider />
            <ul className="list-disc">
              <li>Type: {props.type}</li>
              <li>Jumlah: {formatedCurrency(props.amount)}</li>
              <li>Dibuat: {formattedDate(props.created_at)}</li>
            </ul>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CardHistory;
