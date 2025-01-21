import { IoFlash } from 'react-icons/io5';
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbUserCog } from "react-icons/tb";
import { HiOutlineUserGroup, HiOutlineUser } from "react-icons/hi2";
import { GrTransaction } from "react-icons/gr";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

export const icons = {
  dashboard: <RxDashboard size={24} />,
  admins: <TbUserCog size={24} />,
  students: <HiOutlineUserGroup  size={24} />,
  profile: <HiOutlineUser size={24} />,
  transaction: <GrTransaction size={22} />,
  trendUp: <HiTrendingUp size={24} />,
  trendDown: <HiTrendingDown size={24} />,
  flash: <IoFlash size={24} />,
  eye: <FiEye size={22} />,
  eyeOff: <FiEyeOff size={22} />,
  delete: <RiDeleteBin5Line size={22} />,
  edit: <FiEdit size={22} />,
  plus: <FaPlus size={20} />
};