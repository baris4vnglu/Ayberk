"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { locales, localeNames, type Locale } from "@/i18n/config";

const NAV_LINKS = [
  { href: "/", labelKey: "nav.home" },
  { href: "/nitelikli-isciler", labelKey: "nav.skilled" },
  { href: "/normal-isciler", labelKey: "nav.regular" },
  { href: "/yatirimcilar", labelKey: "nav.investors" },
];

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  function switchLocale(newLocale: Locale) {
    // Replace current locale prefix in path
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-white/95 backdrop-blur shadow-sm border-b border-gray-100"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-1 shrink-0">
          <span className="font-extrabold text-blue-700 text-xl tracking-tight">A&amp;D</span>
          <span className="font-semibold text-gray-800 text-xl tracking-tight">Global Work</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const href = `/${locale}${link.href === "/" ? "" : link.href}`;
            const isActive = pathname === href || (link.href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={link.href}
                href={href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                )}
              >
                {t(link.labelKey)}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => switchLocale(loc)}
                className={cn(
                  "px-2 py-1 rounded text-xs font-semibold transition-all",
                  locale === loc
                    ? "bg-white text-blue-700 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                )}
              >
                {loc.toUpperCase()}
              </button>
            ))}
          </div>

          <Link
            href={`/${locale}/auth/login`}
            className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2"
          >
            {t("nav.login")}
          </Link>
          <Link
            href={`/${locale}/ilan-ver`}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            {t("nav.post")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const href = `/${locale}${link.href === "/" ? "" : link.href}`;
            return (
              <Link
                key={link.href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {t(link.labelKey)}
              </Link>
            );
          })}
          <hr className="my-2" />
          <div className="flex items-center gap-1 mb-2">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => { switchLocale(loc); setMenuOpen(false); }}
                className={cn(
                  "px-3 py-1 rounded text-xs font-semibold border transition-all",
                  locale === loc
                    ? "bg-blue-600 text-white border-blue-600"
                    : "text-gray-600 border-gray-200 hover:border-gray-400"
                )}
              >
                {localeNames[loc]}
              </button>
            ))}
          </div>
          <Link
            href={`/${locale}/auth/login`}
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
          >
            {t("nav.login")}
          </Link>
          <Link
            href={`/${locale}/ilan-ver`}
            onClick={() => setMenuOpen(false)}
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
          >
            {t("nav.post")}
          </Link>
        </div>
      )}
    </header>
  );
}
