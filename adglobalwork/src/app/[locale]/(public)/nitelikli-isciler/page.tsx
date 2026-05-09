"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { CATEGORIES_SKILLED } from "@/components/jobs/CategoryData";

type Locale = "tr" | "en" | "ar";

export default function NitelikliIscilerPage() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const category = selectedCategory
    ? CATEGORIES_SKILLED.find((c) => c.id === selectedCategory)
    : null;

  return (
    <>
      {/* Hero */}
      <section
        className="py-16 md:py-20"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1344b0 100%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-xs font-medium text-white/60 mb-4">
            <Link href={`/${locale}`} className="hover:text-white/80">
              {t("nav.home")}
            </Link>
            <span className="mx-2">/</span>
            <span>{t("nav.skilled")}</span>
          </div>
          <div className="inline-block bg-blue-400/20 text-blue-200 text-xs font-semibold rounded-full px-3 py-1 mb-4">
            {t("skilled.badge")}
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t("skilled.title")}</h1>
          <p className="text-white/70 text-lg max-w-xl">{t("skilled.sub")}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          {!selectedCategory ? (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{t("skilled.pick")}</h2>
                <p className="text-gray-500">{t("skilled.pickSub")}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {CATEGORIES_SKILLED.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="bg-white border-2 border-gray-100 hover:border-blue-300 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  >
                    <div className="text-5xl mb-4">{cat.icon}</div>
                    <div className="font-bold text-gray-900 text-lg group-hover:text-blue-700 transition-colors">
                      {cat.name[locale] || cat.name.tr}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      {cat.subcategories.length} {t("skilled.pos")}
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 mb-8 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
              >
                {t("skilled.back")}
              </button>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category?.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category?.name[locale] || category?.name.tr}
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {category?.subcategories.map((sub) => (
                  <Link
                    key={sub.tr}
                    href={`/${locale}/iletisim`}
                    className="flex items-center justify-between bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-4 py-3 transition-all group"
                  >
                    <span className="font-medium text-gray-800 text-sm group-hover:text-blue-700">
                      {sub[locale] || sub.tr}
                    </span>
                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                  </Link>
                ))}
              </div>

              {/* No jobs placeholder */}
              <div className="mt-10 bg-gray-50 rounded-2xl p-8 text-center">
                <p className="text-gray-500 mb-4">{t("skilled.noJobs")}</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href={`/${locale}/ilan-ver`}
                    className="bg-blue-600 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors"
                  >
                    {t("skilled.cta_btn")}
                  </Link>
                  <Link
                    href={`/${locale}/iletisim`}
                    className="border border-gray-300 text-gray-700 font-medium px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    {t("skilled.contact")}
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{t("skilled.cta_title")}</h2>
            <p className="text-gray-400">{t("skilled.cta_sub")}</p>
          </div>
          <Link
            href={`/${locale}/ilan-ver`}
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors shrink-0"
          >
            {t("skilled.cta_btn")}
          </Link>
        </div>
      </section>
    </>
  );
}
