import React from "react";
import Contact from "@/components/contact";
import PageBanner from "@/components/ui/pagebanner";

export const metadata = {
  title: "Contact | HIJR, conect with us",
  description: "contact solves the user problem ",
};

const Contactus = () => {
  return (
    <>
    <PageBanner title="contact us"/>
      <Contact />
    </>
  );
};

export default Contactus;
