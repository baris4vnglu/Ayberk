"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CATEGORIES_REGULAR } from "@/components/jobs/CategoryData";

type Locale = "tr" | "en" | "ar";

export default function NormalIscilerPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-xs font-medium text-white/60 mb-4">
            <Link href={`/${locale}`} className="hover:text-white/80">{t("nav.home")}</Link>
            <span className="mx-2">/</span>
            <span>{t("nav.regular")}</span>
          </div>
          <div className="inline-block bg-emerald-400/20 text-emerald-200 text-xs font-semibold rounded-full px-3 py-1 mb-4">
            {t("regular.badge")}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t("regular.title")}</h1>
          <p className="text-white/70 text-lg max-w-xl">{t("regular.sub")}</p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">{t("regular.pick")}</h2>
            <p className="text-gray-500">{t("regular.pickSub")}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {CATEGORIES_REGULAR.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-semibold text-gray-800 text-sm">{cat.name[locale] || cat.name.tr}</div>
              </div>
            ))}
          </div>

          {/* No listings */}
          <div className="mt-10 bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-gray-500 mb-4">{t("regular.noJobs")}</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href={`/${locale}/ilan-ver`}
                className="bg-emerald-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-emerald-700 transition-colors"
              >
                {t("regular.cta_btn")}
              </Link>
              <Link
                href={`/${locale}/iletisim`}
                className="border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {t("nav.contact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-12"
        style={{ background: "linear-gradient(135deg, #059669 0%, #0ea5e9 100%)" }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{t("regular.cta_title")}</h2>
            <p className="text-white/80">{t("regular.cta_sub")}</p>
          </div>
          <Link
            href={`/${locale}/ilan-ver`}
            className="bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors shrink-0"
          >
            {t("regular.cta_btn")}
          </Link>
        </div>
      </section>
    </>
  );
}
