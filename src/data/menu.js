export const menuItems = [
  {
    labelKey: "menu.home",
    href: "/",
  },
  // You might keep 'About' if you have an about page that is not replaced by the social proof section
  // {
  //   labelKey: "menu.about",
  //   href: "/about",
  // },
  {
    labelKey: "menu.services",
    href: "/services",
    // subMenu: [ // Keep your existing submenus if they are still relevant
    //   { labelKey: "menu.service1", href: "/services/service-one" },
    //   { labelKey: "menu.service2", href: "/services/service-two" },
    // ],
  },
  {
    labelKey: "menu.projects",
    href: "/project",
  },
  {
    labelKey: "menu.faq",
    href: "/faq",
  },
  {
    labelKey: "menu.contact",
    href: "/contact",
  },
  {
    labelKey: "menu.language",
    href: "#", // Top-level language item should also have href="#"
    subMenu: [
      { labelKey: "menu.english", locale: "en", href: "#" }, // Keep href="#"
      { labelKey: "menu.norwegian", locale: "no", href: "#" },
      { labelKey: "menu.lithuanian", locale: "lt", href: "#" },
    ],
  },
];
