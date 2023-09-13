/* eslint-disable import/no-extraneous-dependencies */

import { Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";
import AppIcons from "../../../public/assets/icons";

import Profile from "../../../public/assets/images/PorfileDashboard.png";
import NotificationDropdown from "../NotificationDropdown.jsx";

export default function SideBar(props) {
  const { open, toggleDrawer, children } = props;
  const path = usePathname();
  const [lightMode, setLightMode] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLightModeToggle = () => {
    // Toggle the light mode state
    setLightMode(!lightMode);
  };
  const isSelected = (text) => {
    if (
      (path?.includes(text.toLowerCase()) && text !== "Dashboard") ||
      (path === "/dashboard" && text === "Dashboard")
    ) {
      return {
        backgroundColor: "bg-blueSelected",
        color: "text-white",
        selected: true,
      };
    }
    return {
      backgroundColor: "transparent",
      color: "text-unselected",
      selected: false,
    };
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <Drawer
        sx={{
          width: open ? 266 : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={open}
        ModalProps={{ keepMounted: true }}
        variant="persistent"
      >
        <Box
          sx={{
            width: 266,
            height: "100%",
            justifyItems: "space-between",
          }}
          className="px-0"
          onClick={() => {
            // toggleDrawer(false);
          }}
          onKeyDown={() => toggleDrawer(false)}
        >
          <div
            className="flex flex-1 flex-col justify-between "
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div className="">
              <List className="px-5">
                <ListItem key="odaque" disablePadding className="rounded-md">
                  <ListItemButton>
                    <ListItemIcon>
                      <AppIcons.Logo />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <span className="font-montserrat text-2xl font-bold text-blueSelected">
                          ODAQUE
                        </span>
                      }
                      secondary={
                        <span className="font-montserrat text-sm text-blueSelected">
                          DASHBOARD
                        </span>
                      }
                    />
                  </ListItemButton>
                </ListItem>
                {["Dashboard", "Sessions", "Courses", "Team", "Settings"].map(
                  (text) => {
                    const iconKey = text.toLowerCase();
                    const Icon = AppIcons[iconKey];
                    return (
                      <Link
                        key={uuidv4()}
                        href={
                          text === "Dashboard"
                            ? "/dashboard"
                            : `/dashboard/${text.toLowerCase()}`
                        }
                      >
                        <ListItem
                          disablePadding
                          className={`${
                            isSelected(text).backgroundColor
                          } rounded-md font-montserrat`}
                        >
                          <ListItemButton>
                            <ListItemIcon>
                              <Icon
                                color={
                                  isSelected(text).selected
                                    ? "white"
                                    : "#a9b2cf"
                                }
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              className={`font-montserrat ${
                                isSelected(text).color
                              } rounded-md `}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    );
                  }
                )}
              </List>
            </div>

            <div
              className="  flex flex-col  font-montserrat px-5"
              style={{ marginTop: "auto" }}
            >
              <div className=" font-montserrat">
                {["Logout"].map((text) => {
                  const iconKey = text.toLowerCase();
                  const Icon = AppIcons[iconKey];
                  return (
                    <Link
                      key={uuidv4()}
                      href={
                        text === "Logout"
                          ? "/dashboard"
                          : `/dashboard/${text.toLowerCase()}`
                      }
                    >
                      <ListItem
                        disablePadding
                        className={`${
                          isSelected(text).backgroundColor
                        } rounded-md font-montserrat`}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            <Icon
                              color={
                                isSelected(text).selected ? "white" : "#a9b2cf"
                              }
                            />
                          </ListItemIcon>

                          <ListItemText
                            primary={text}
                            className={`font-montserrat ${
                              isSelected(text).color
                            } rounded-md `}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  );
                })}
              </div>

              <button
                className="flex cursor-pointer flex-row justify-between py-2 pl-4 font-montserrat"
                onClick={handleLightModeToggle}
                type="button"
              >
                <div className="pt-1">
                  <AppIcons.Light />
                </div>
                <p className="ml-6 pt-1 text-lightmode">Light mode</p>
                <div
                  className={`h-8 w-14 items-center rounded-full bg-globalBackground p-1 ${
                    lightMode ? "bg-green-500" : ""
                  }`}
                >
                  <div
                    className={`w-6  items-center justify-center rounded-full bg-lightmode ${
                      lightMode ? "translate-x-6" : ""
                    }`}
                  >
                    <AppIcons.DarkLight />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </Box>
      </Drawer>
      <div className="flex-1 bg-bgcolor">
        <div className="grid h-20 grid-cols-[70%_5%_25%] items-center bg-white pl-6 pr-4">
          <div className="flex h-11 flex-row items-center rounded border border-border p-2">
            <AppIcons.Search />

            <input
              type="text"
              placeholder="Search..."
              className=" w-full pl-2 text-gray-700 "
              style={{ border: "none", outline: "none" }}
            />
          </div>

          <button
            type="button"
            className=" flex items-center justify-center"
            onClick={toggleDropdown}
          >
            <div className="relative">
              <AppIcons.Notification />
              {isDropdownVisible && <NotificationDropdown />}
            </div>
          </button>

          <div className="flex h-14 flex-row items-center rounded-lg border border-border bg-lightgray px-3 py-1">
            <div>
              <Image src={Profile} alt="picture" />
            </div>

            <div className="flex flex-col py-2 pl-1 font-inter">
              <p className="text-sm font-bold">Sapphire</p>
              <p className="text-xs">odaqueofficial@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </Box>
  );
}
