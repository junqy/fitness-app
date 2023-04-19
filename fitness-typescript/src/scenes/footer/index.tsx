import React from "react";
import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-300 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Sed vulputate est ex, quis pulvinar eros tristique eget. Cras ut
            magna at nunc posuere dapibus sit amet vel est. Mauris sed mauris
            eget felis sagittis commodo a ut nulla. Proin ac tincidunt dolor,
            nec convallis quam.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">Lorem ipsum hipsum</p>
            <p className="my-5">Lorem ipsum hipsum</p>
            <p className="my-5">Lorem ipsum hipsum</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-5">Lorem ipsum hipsum</p>
            <p>(333)422-3314</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
