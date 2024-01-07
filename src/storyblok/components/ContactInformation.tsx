import {
  IconDefinition,
  faEnvelope,
  faMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import Link from "next/link";

type ContactType = "email" | "phone" | "address";

export type SbContactInformation = SbBlokData & {
  type: ContactType;
  value: string;
};

type ContactInformationProps = {
  blok: SbContactInformation;
};

function getContactTypeData(type: ContactType): {
  icon: IconDefinition;
  prefix?: string;
} {
  switch (type) {
    case "email":
      return {
        icon: faEnvelope,
        prefix: "mailto",
      };
    case "phone":
      return {
        icon: faPhone,
        prefix: "tel",
      };
    case "address":
      return {
        icon: faMarker,
        prefix: undefined,
      };
  }
}

export function ContactInformation({ blok }: ContactInformationProps) {
  const { icon, prefix } = getContactTypeData(blok.type);

  const wrap = (children: React.ReactElement) => {
    const classes = "mb-6 flex items-center space-x-4 group";

    if (prefix) {
      return (
        <Link
          href={`${prefix}:${blok.value}`}
          className={classes}
          {...storyblokEditable(blok)}
        >
          {children}
        </Link>
      );
    }

    return (
      <div className={classes} {...storyblokEditable(blok)}>
        {children}
      </div>
    );
  };

  return wrap(
    <>
      <div className="w-[32px] h-[32px] flex-shrink-0 flex items-center justify-center bg-theme-800 group-hover:bg-gradient-linear rounded-full">
        <FontAwesomeIcon
          icon={icon}
          className="text-lg w-[18px] h-[18px] text-white"
        />
      </div>
      <div className="text-base">
        <span>{blok.value}</span>
      </div>
    </>
  );
}
