"use client";

import React from "react";
import notificationProfile from "../../../../../../public/assets/images/notificationProfile.png";
import AppIcons from "../../../../../../public/assets/icons";
import NotificationDetails from "../../../../../components/NotificationDetails";

const iconComponents = [AppIcons.StarOrange];

const NotificationsDetails = () => {
  const notifications = [
    {
      id: 1,
      name: "John Din",
      description:
        "Lörem ipsum koras proräligt ore triktigt os. Möpp is emedan e-learning autos. Selig bimeter. On sagär. Teralig hexaska eurons samt ghosta. Husa gängen diheten, utom plador pneumaitet. Beson treräv filobel för funktionell dumhet lör. Paraning varähet i krost autonar nyngen. Tigt hyperfas och logostik. Nenenade gulören nyska, befos huruvida vär. .",
      date: "Dec 7, 2022",
      profile: notificationProfile.src,
      starIcon: iconComponents[0],
    },

    {
      id: 2,
      name: "John Din",
      description:
        "Lörem ipsum koras proräligt ore triktigt os. Möpp is emedan e-learning autos. Selig bimeter. On sagär. Teralig hexaska eurons samt ghosta. Husa gängen diheten, utom plador pneumaitet. Beson treräv filobel för funktionell dumhet lör. Paraning varähet i krost autonar nyngen. Tigt hyperfas och logostik. Nenenade gulören nyska, befos huruvida vär. .",
      date: "Dec 7, 2022",
      profile: notificationProfile.src,
      starIcon: iconComponents[0],
    },
    {
      id: 3,
      name: "John Din",
      description:
        "Lörem ipsum koras proräligt ore triktigt os. Möpp is emedan e-learning autos. Selig bimeter. On sagär. Teralig hexaska eurons samt ghosta. Husa gängen diheten, utom plador pneumaitet. Beson treräv filobel för funktionell dumhet lör. Paraning varähet i krost autonar nyngen. Tigt hyperfas och logostik. Nenenade gulören nyska, befos huruvida vär. .",
      date: "Dec 7, 2022",
      profile: notificationProfile.src,
      starIcon: iconComponents[0],
    },
  ];
  return (
    <div className="bg-white p-3 pb-14 rounded-lg">
      <div className="bg-white p-1">
        <div className="p-1">
          <div className="pb-5 border-b">
            <p className="text-black font-semibold text-[32px]">Notification</p>
          </div>
        </div>
        <div className="pt-3 w-full ">
          
            <NotificationDetails notifications={notifications}/>
          
        </div>

        <div className="flex flex-row justify-between pt-24">
          <div></div>

          <div className=" border-borderb border-b ">
            <p className="text-borderb font-inter text-[16px] font-medium -my-1 ">
              See less
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsDetails;
