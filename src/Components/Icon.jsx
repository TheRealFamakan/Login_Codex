import React from "react";
import {
  HomeIcon,
  TrophyIcon,
  BellIcon,
  UsersIcon,
  CheckCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/outline";
import {
  MegaphoneIcon,
  AcademicCapIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

export default function Icon({ name, className = "h-5 w-5 text-brand-700" }) {
  const map = {
    home: <HomeIcon className={className} />,
    cup: <TrophyIcon className={className} />,
    bell: <BellIcon className={className} />,
    users: <UsersIcon className={className} />,
    check: <CheckCircleIcon className={className} />,
    bag: <InboxIcon className={className} />,
    award: <AcademicCapIcon className={className} />,
    announcement: <MegaphoneIcon className={className} />,
    "user-add": <UserPlusIcon className={className} />,
  };
  return map[name];
}