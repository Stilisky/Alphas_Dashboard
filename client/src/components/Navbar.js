"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Button } from 'flowbite-react';

export default function UserNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Alphas Dashboard
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Kolo Malo</span>
            <span className="block truncate text-sm font-medium">
              mail@mail.com
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          Sign out
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#">Dashboard</Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
      </Navbar.Collapse>
      <Button color="gray">
      Gray
      </Button>
    </Navbar>
      
  );
}

// export default Navbar;
