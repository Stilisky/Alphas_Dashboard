"use client";

import Widget from "./widget";

export default function SidebarUser() {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bg-black">
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
      </div>
    </div>
  );
}
