"use client";

import classNames from "classnames";
import React from "react";

type Item = {
  label: string;
  key?: string;
};

type TabProps = {
  items: Item[];
  className?: string;
};

const Tabs = ({ items, className }: TabProps) => {
  const [active, setActive] = React.useState(items[0].key);

  return (
    <div className={className}>
      <ul className="flex gap-4">
        {items.map((item) => (
          <li
            key={item.key}
            onClick={() => setActive(item.key)}
            className="cursor-pointer"
          >
            <p
              className={classNames([
                "block p-2 lowercase underline-offset-8 hover:underline",
                {
                  underline: item.key === active,
                },
              ])}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
