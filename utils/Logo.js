import React from "react";
import PropTypes from "prop-types";
import { Link } from "@mui/material";
import Image from 'next/image';


export default function Logo({ sx }) {
  return (
    <Link href="#" sx={{ textDecoration: "none" }}>
      {" "}
      <Image src="/assets/primary-one.svg" alt="logo" style={{ ...sx }} width= {...sx.width} height={...sx.height}/>
    </Link>
  );
}
Logo.propTypes = {
  sx: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
};
