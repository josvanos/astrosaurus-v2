declare module astrosaurus {
  var astrosaurus: Config;
}

declare module globalThis {
  var astrosaurus: Config;
}

export type Config = {
  site: {
    title: string;
    logo?: string;
    description: string;
    editUrl?: string;
    inviteUrl?: string;
  };
  menu: {
    [key: string]: string | MenuItem;
  };

  theme?: {
    colors?: {
      primary?: string;
      secondary?: string;
    };
    extend: {
      nav?: AstroComponent;
      head?: AstroComponent;
      layout?: AstroComponent;
    };
  };

  socials?: {};
};

export type MenuItem = {
  title: string;
  to: string;
};

export type Author = {
  key: string;
  name: string;
  picture: string;
};
export as namespace Astrosaurus;
