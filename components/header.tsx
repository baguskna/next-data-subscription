import type { NextPage } from "next";
import { memo } from "react";

import { AppContextValueSchema, useAppContext } from "../context/state";

const Header: NextPage = () => {
  const { counter, cart } = useAppContext() as AppContextValueSchema;

  return (
    <div>
      Header {counter}
      <div>cart total = {cart.length}</div>
    </div>
  );
};

export default memo(Header);
