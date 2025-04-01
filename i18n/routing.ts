import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "fr", // This is the important part
});

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing);