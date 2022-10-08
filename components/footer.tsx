import type { NextPage } from "next";
import { AppContextValueSchema, useAppContext } from "../context/state";

const Footer: NextPage = () => {
  const { counter } = useAppContext() as AppContextValueSchema;

  return <div>Footer {counter}</div>;
};

export default Footer;
