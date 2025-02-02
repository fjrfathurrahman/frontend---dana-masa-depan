"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useGetAdmin } from "@/hooks/admins/useAdmin";
import { IAdmin } from "@/types/ress";

const ProfileBox = () => {
  const [user, setUser] = useState<number | null>(null);

  // Fetch admin data based on user ID
  const { data } = useGetAdmin(user?.toString());
  const profile = data?.data.data as IAdmin | undefined;

  // Load user ID from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("admin");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser.id);
    }
  }, []);

  return (
    <>
      <div className="overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src="/images/cover/cover-01.png"
            alt="profile cover"
            className="h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
            width={970}
            height={260}
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={
                  `http://localhost:8000/storage/${profile?.photo}` ||
                  "/images/user/user-03.png"
                }
                width={160}
                height={160}
                className="rounded-full"
                alt="profile"
              />
            </div>
          </div>

          <div className="mt-4 *:first-letter:capitalize">
            <h3 className="mb-1 text-heading-5 font-bold text-dark dark:text-white">
              {profile?.name ?? "User"}
            </h3>
            {/* <Chip color={profile?.role === "super admin" ? "danger" : "success"} className="font-semibold capitalize">{profile?.role ?? "Admin"}</Chip> */}
            {/* 
            <div className="mx-auto max-w-[720px]">
              <h4 className="font-medium text-dark dark:text-white">
                About Me
              </h4>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum dapibus
                ultricies. Sed vel aliquet libero. Nunc a augue fermentum,
                pharetra ligula sed, aliquam lacus.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileBox;

{/* <div className="col-span-2 overflow-hidden rounded-[10px] bg-white shadow-1 dark:bg-gray-dark dark:shadow-card">
          <div className="relative z-20 h-35 md:h-24">
            <Image
              src="/images/cover/bg15.png"
              alt="profile cover"
              className="h-full w-full rounded-tl-[10px] rounded-tr-[10px] object-cover object-center"
              width={970}
              height={20}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </div>
          <div className="px-4 pb-6 text-center">
            <div className="relative z-30 mx-auto -mt-20 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-[176px] sm:p-3">
              <div className="relative drop-shadow-2">
                <Image
                  src="/images/user/user-03.png"
                  width={160}
                  height={160}
                  className="rounded-full"
                  alt="profile"
                />
              </div>
            </div>

            <div className="mt-4 *:first-letter:capitalize">
              <h3 className="mb-1 text-heading-5 font-bold text-dark dark:text-white">
                profile
              </h3>
            </div>
          </div>
        </div> */}