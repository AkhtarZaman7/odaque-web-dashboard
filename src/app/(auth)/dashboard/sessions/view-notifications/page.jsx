"use client";

import React from "react";
import notificationProfile from "../../../../../../public/assets/images/notificationProfile.png";
import AppIcons from "../../../../../../public/assets/icons";
import { v4 as uuidv4 } from "uuid";

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
          <div className="space-y-5">
            {notifications.map((item) => (
              <div
                key={item.id}
                className="pl-3 pt-3 pb-0 h-[166px] flex flex-col justify-between"
              >
                <div className=" flex justify-between">
                  <div className="flex flex-col justify-between h-[71px] w-[181px] pb-1">
                    <div className=" flex flex-row items-center">
                      <img src={item.profile} alt={item.name} />
                      <p className="font-semibold text-[20px] pl-[16px] text-black">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex flex-row items-center ">
                      {Array.from({ length: 5 }).map((_) => (
                        <div key={uuidv4()}>
                          {item.starIcon && <item.starIcon />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="font-inter text-[14px] font-medium text-black">
                      {item.date}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="font-inter text-[16px] font-light text-descriptiontext">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
