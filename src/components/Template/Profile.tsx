import { Button, Divider, Image } from "@heroui/react";
import ListValue from "./ListValue";
import { icons } from "@/resource/icons";
import Link from "next/link";

interface Props {
  actions: {
    download: {
      handleDownload: () => void;
      load: boolean;
    },
    // edit: {
    //   handleEdit: () => void;
    //   status: string;
    // }
  }
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

const Profile = ({ bio, actions: { download: { handleDownload, load } } }: Props) => {
  return (
    <div className="relative z-30 rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-4">
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
          {bio.photo && (
            <Image
              src={`http://localhost:8000/storage/${bio?.photo}`}
              className="h-auto w-auto rounded-full object-cover object-center"
              alt="profile"
            />
          )}
        </div>
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
                value={item.value}
              />
            ))}
          </ul>
        </div>

        <Divider className="my-6" />

        <div className="flex justify-between gap-2">
          <Button type="button" startContent={icons.export} onPress={handleDownload} isDisabled={load} color="primary">
            Download Transaksi
          </Button>
            
          <div className="flex gap-2">
            <Button
              isIconOnly
              as={Link}
              href={`https://wa.me/${bio?.phone}`}
              variant="flat"
            >
              {icons.whatsapp}
            </Button>
            <Button
              isIconOnly
              as={Link}
              href={`https://instagram.com/${bio?.name}`}
              variant="flat"
            >
              {icons.instagram}
            </Button>
          </div>
        </div>

        <Divider className="my-6" />

        <div>
          <h6>Informasi Orang Tua</h6>

          <div className="mt-4 h-24 border-2 border-dashed rounded-xl flex justify-center items-center">
            <p className="text-gray-6 dark:text-gray-4 text-small">
              Fitur belum tersedia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
