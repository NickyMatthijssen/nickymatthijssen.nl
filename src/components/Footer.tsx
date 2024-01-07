"use client";

import { useGlobals } from "@/hooks";
import { SbLink, StoryblokImage, StoryblokLink } from ".";
import React from "react";
import { cx } from "class-variance-authority";
import { Card } from "./Card";
import { StoryblokComponent } from "@storyblok/react/rsc";
import { motion } from "framer-motion";

export function Footer() {
  const { footer, socials } = useGlobals();

  return (
    <div className="container mt-[50px] mb-[24px]">
      <Card className="pt-[89px] px-[30px] xl:px-[128px] pb-[50px] rounded-[48px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-x-12"
        >
          <div className="mb-[30px]">
            <StoryblokImage
              image={footer.logo}
              width={116}
              height={35}
              className="mb-5"
            />

            <p className="text-[14px] my-5">{footer.description}</p>

            <div>
              <Title className="mb-[5px]">Address</Title>

              <p className="text-[14px] mb-[20px]">{footer.address}</p>
            </div>
          </div>

          <div className="mb-[30px]">
            <Title>Other links</Title>

            <ul className="columns-2">
              {footer.navigation.map((item) => (
                <NavItem url={item.url} key={item._uid}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </div>

          <div className="mb-[30px]">
            <Title>Contact me</Title>

            {footer.contact_information.map((blok) => (
              <StoryblokComponent blok={blok} key={blok._uid} />
            ))}
          </div>
        </motion.div>

        <div className="flex justify-between border-t pt-[50px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {footer.copyright}
          </motion.div>

          <div className="flex space-x-5">
            {socials.map((blok, index) => (
              <motion.div
                key={blok._uid}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (socials.length - 1 - index) * 0.3 }}
              >
                <StoryblokComponent blok={blok} />
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

const Title = ({
  children,
  className,
}: React.PropsWithChildren & { className?: string }) => (
  <h6 className={cx(className, "mb-[30px] text-lg dark:text-theme-white")}>
    {children}
  </h6>
);

type NavItemProps = React.PropsWithChildren & {
  url: SbLink;
};

const NavItem = ({ url, children }: NavItemProps) => (
  <li className="mb-3">
    <StoryblokLink url={url}>{children}</StoryblokLink>
  </li>
);
