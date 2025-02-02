import { Avatar, Button, Divider, Image } from "@heroui/react";
import ListValue from "./ListValue";
import { icons } from "@/resource/icons";
import Link from "next/link";

interface Props {
  actions: {
    download: {
      handleDownload: () => void;
      load: boolean;
    };
  };
  parent?: boolean;
  bio: {
    name?: string;
    class?: string;
    photo?: string;
    phone?: string;
    listData?: {
      label: string;
      value: string;
    }[];
  };
  className?: string;
}

const Profile = ({ className = 'xl:col-span-4', bio, actions: { download: { handleDownload, load }, }, parent }: Props) => {
  return (
    <div className={`${className} relative z-30 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card`}>
      <Image
        src="/images/cover/bg15.png"
        alt="image"
        width={970}
        radius="none"
        className="h-32 sm:h-60 min-w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
        style={{ width: "auto" }}
      />

      <div className="relative z-30 mx-auto -mt-12 flex h-24 items-center justify-center">
        {bio.photo && (
          <Avatar
            src={`http://localhost:8000/storage/${bio?.photo}`}
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full border-4 border-white object-cover"
          />
        )}
      </div>

      <div className="mx-auto mt-4 w-full px-6.5 pb-14 md:w-4/5 xl:w-3/4">
        <h4 className="h4 mx-auto line-clamp-2 w-3/4 text-center font-bold md:w-2/4">
          {bio.name}
        </h4>
        <Divider className="my-6" />

        <div>
          <ul className="list-disc space-y-2.5">
            {bio.listData?.map((item) => (
              <ListValue
                key={item.label}
                label={item.label}
                value={item.value  ?? '-'}
              />
            ))}
          </ul>
        </div>

        <Divider className="my-6" />

        <div className="flex justify-between gap-2">
          <Button
            type="button"
            startContent={icons.export}
            onPress={handleDownload}
            isDisabled={load}
            color="primary"
          >
            Export Semua Transaksi
          </Button>

          <div className="flex gap-2">
            <Button
              isIconOnly
              as={Link}
              href={`https://maps.google.com/?q=`}
              variant="flat"
              target="_blank"
            >
              {icons.location}
            </Button>
            <Button
              isIconOnly
              as={Link}
              href={`https://wa.me/${bio?.phone}`}
              variant="flat"
              target="_blank"
            >
              {icons.whatsapp}
            </Button>
            <Button
              isIconOnly
              as={Link}
              href={`https://instagram.com/${bio?.name}`}
              variant="flat"
              target="_blank"
            >
              {icons.instagram}
            </Button>
          </div>
        </div>

        <Divider className="my-6" />

        {parent && (
          <div>
            <h6>Informasi Orang Tua</h6>

            <div className="mt-4 flex h-24 items-center justify-center rounded-xl border-2 border-dashed">
              <p className="text-small text-gray-6 dark:text-gray-4">
                Fitur belum tersedia
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
