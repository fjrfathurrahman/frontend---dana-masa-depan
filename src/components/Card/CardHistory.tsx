import {
  Card,
  CardBody,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@heroui/react";
import { icons } from "@/resource/icons";
import Image from "next/image";

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
  amount: string;
  created_at: string;
  updated_at: string;
};

const CardHistory: React.FC<Props> = (props) => {
  return (
    <>
      <Popover placement="bottom" backdrop={"opaque"} offset={10}>
        <PopoverTrigger>
          <button>
            <Card
              className={`border-2 ${props.type === "deposit" ? "border-success bg-success/20" : "border-danger bg-danger/20"}`}
            >
              <CardBody className="flex flex-row items-center justify-between">
                <div
                  className={`${props.type === "deposit" ? "bg-success" : "bg-danger"} me-2 flex h-8 w-8 items-center justify-center rounded-full text-white`}
                >
                  {props.type === "deposit" ? icons.trendUp : icons.trendDown}
                </div>
                <div className="flex w-1/2 flex-col">
                  <h5 className="h6 line-clamp-1">{props.student.name}</h5>
                  <p className="text-gray-6 dark:text-gray-4">
                    {props?.student.class} - {props?.student.major}
                  </p>
                </div>
                <h4 className="h4 w-max">Rp. {props?.amount}</h4>
              </CardBody>
            </Card>
          </button>
        </PopoverTrigger>

        <PopoverContent className="bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="w-full space-y-2 px-4 py-2">
            <div className="flex items-center gap-2">
              {props.student.photo && (
                <Image
                  src={`http://localhost:8000/storage/${props.student?.photo}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt="profile"
                />
              )}
              <span>
                <h6 className="line-clamp-1 text-lg text-white">
                  {props.student.name}
                </h6>
                <p>
                  {props?.student.class} - {props?.student.major}
                </p>
              </span>
            </div>
            <Divider />
            <div className="flex items-center gap-2">
              {props.admin.photo && (
                <Image
                  src={`http://localhost:8000/storage/${props.admin?.photo}`}
                  width={60}
                  height={60}
                  className="rounded-full"
                  alt="profile"
                />
              )}
              <span>
                <h6 className="line-clamp-1 text-lg text-white">
                  {props.admin.name}
                </h6>
                <p>
                  {props?.admin.role} - {props?.admin.email}
                </p>
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CardHistory;
