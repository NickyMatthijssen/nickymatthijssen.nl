import { SbLink, StoryblokLink } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SbBlokData, storyblokEditable } from "@storyblok/react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

export type SocialType =
  | "facebook"
  | "instagram"
  | "github"
  | "linkedin"
  | "x"
  | "youtube";

type SbSocial = SbBlokData & {
  platform: SocialType;
  url: SbLink;
};

type SocialProps = {
  blok: SbSocial;
};

function getSocialIcon(type: SocialType) {
  switch (type) {
    case "facebook":
      return faFacebook;
    case "github":
      return faGithub;
    case "instagram":
      return faInstagram;
    case "linkedin":
      return faLinkedin;
    case "x":
      return faXTwitter;
    case "youtube":
      return faYoutube;
    default:
      return faWarning;
  }
}

export function Social({ blok }: SocialProps) {
  return (
    <StoryblokLink
      target="_blank"
      url={blok.url}
      className="w-[32px] h-[32px] bg-theme-800 hover:bg-gradient-linear rounded-full flex justify-center items-center transition-all"
      {...storyblokEditable(blok)}
    >
      <FontAwesomeIcon
        icon={getSocialIcon(blok.platform)}
        className="w-[18px] h-[18px] text-[18px] text-white"
      />
    </StoryblokLink>
  );
}
