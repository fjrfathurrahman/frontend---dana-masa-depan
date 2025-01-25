import { Button, Divider, Image } from "@heroui/react";
import ListValue from "./ListValue";
import { icons } from "@/resource/icons";
import Link from "next/link";

interface Props {
  bio: {
    name: string;
    class: string;
    photo: string;
    phone: string;
    listData?: {
      label: string;
      value: string;
    }[];
  };
}

const Profile = ({ bio }: Props) => {
  return (
    <div className="relative z-30 col-span-4 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
      <Image
        src="/images/cover/bg15.png"
        alt="image"
        width={970}
        radius="none"
        className="h-60 min-w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
        style={{ width: "auto" }}
      />

      <div className="relative z-30 mx-auto -mt-20 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
        <div className="relative drop-shadow-2">
          <Image
            src={`http://localhost:8000/storage/${bio?.photo}`}
            width={160}
            height={160}
            className="rounded-full"
            alt="profile"
          />
        </div>
      </div>

      <div className="mx-auto mt-4 w-1/2 pb-16">
        <h4 className="h4 mx-auto line-clamp-2 w-2/4 text-center font-bold">
          {bio.name}
        </h4>
        <Divider className="my-4" />

        <div>
          <ul className="list-disc space-y-2">
            {bio.listData?.map((item) => (
              <ListValue
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </ul>
        </div>

        <Divider className="my-4" />

        <div className="flex justify-end gap-2">
          <Button isIconOnly as={Link} href={`https://wa.me/${bio?.phone}`} variant="flat">
            {icons.whatsapp}
          </Button>
          <Button isIconOnly as={Link} href={`https://instagram.com/${bio?.name}`} variant="flat">
            {icons.instagram}
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Profile;
