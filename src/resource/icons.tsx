import { IoFlash, IoLocationOutline, IoSettingsOutline  } from 'react-icons/io5';
import { FiEdit, FiEye, FiEyeOff } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { TbUserCog, TbCoin  } from "react-icons/tb";
import { HiOutlineUserGroup, HiOutlineUser } from "react-icons/hi2";
import { GrTransaction } from "react-icons/gr";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { LuFileSpreadsheet, LuMessageCircle } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";

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
  plus: <FaPlus size={20} />,
  export: <PiExportBold size={22} />,
  coin: <TbCoin size={22} />,
  whatsapp: <FaWhatsapp size={22} />,
  instagram: <FaInstagram size={22} />,
  location: <IoLocationOutline size={22} />,
  settings: <IoSettingsOutline size={22} />,
  exportExcel: <LuFileSpreadsheet size={22} />,
  message: <LuMessageCircle size={22} />,
  back: <IoIosArrowBack size={22} />
}
;