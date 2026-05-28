"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const CATEGORY_OPTS: Record<string, string[]> = {
  skilled: ["Turizm & Otelcilik", "İnşaat & Yapı", "Bahçe & Peyzaj", "Sağlık", "Teknoloji", "Tarım", "Lojistik", "Hukuk", "Enerji"],
  regular: ["Temizlik & Hizmet", "Güvenlik", "Depo & Lojistik", "Tarım", "Gıda & Restoran", "Tekstil", "Kargo & Dağıtım", "Üretim"],
};

const BENEFITS = [
  { icon: "⚡", title: "Hızlı Yayın", desc: "24 saat içinde onay ve yayın" },
  { icon: "🎯", title: "Hedefli Erişim", desc: "10.000+ aktif aday havuzu" },
  { icon: "🌍", title: "Küresel Ağ", desc: "40+ ülkeden aday erişimi" },
  { icon: "💰", title: "İlk İlan Ücretsiz", desc: "Ödeme yapmadan deneyin" },
];

export default function IlanVerPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [panel, setPanel] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto px-4">
          <div className="text-xs font-medium text-white/60 mb-4">
            <Link href={`/${locale}`} className="hover:text-white/80">{t("nav.home")}</Link>
            <span className="mx-2">/</span>
            <span>{t("nav.post")}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t("post.title")}</h1>
          <p className="text-white/70 text-lg">{t("post.sub")}</p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          {success ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-2xl p-6 text-center text-lg font-medium">
              {t("post.success")}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company info */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 border-b pb-3 mb-5">{t("post.company_section")}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Şirket Adı *", type: "text", required: true, placeholder: "Şirket A.Ş." },
                      { label: "İletişim Kişisi *", type: "text", required: true, placeholder: "Ad Soyad" },
                      { label: "E-posta *", type: "email", required: true, placeholder: "ik@sirket.com" },
                      { label: "Telefon *", type: "tel", required: true, placeholder: "+90 5XX XXX XX XX" },
                      { label: "Web Sitesi", type: "url", required: false, placeholder: "https://sirket.com" },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                        <input type={f.type} required={f.required} placeholder={f.placeholder} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Sektör *</label>
                      <select required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">Seçin</option>
                        {["Turizm & Otelcilik","İnşaat & Yapı","Bahçe & Peyzaj","Sağlık","Teknoloji","Tarım","Lojistik & Taşıma","Temizlik & Hizmet","Güvenlik","Gıda & Restoran","Tekstil","Üretim","Diğer"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Job details */}
                <div>
                  <h3 className="text-base font-bold text-gray-900 border-b pb-3 mb-5">{t("post.job_section")}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pozisyon Adı *</label>
                      <input required type="text" placeholder="Örn: Otel Resepsiyonisti" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Panel *</label>
                      <select required value={panel} onChange={(e) => setPanel(e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">Seçin</option>
                        <option value="skilled">Nitelikli İşçiler</option>
                        <option value="regular">Normal İşçiler</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kategori *</label>
                      <select required disabled={!panel} className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-50 disabled:text-gray-400">
                        <option value="">{panel ? "Seçin" : "Önce panel seçin"}</option>
                        {(CATEGORY_OPTS[panel] || []).map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Çalışma Türü *</label>
                      <select required className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {["Tam Zamanlı","Yarı Zamanlı","Mevsimlik","Sözleşmeli","Uzaktan"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Konum *</label>
                      <input required type="text" placeholder="Şehir, Ülke" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Maaş Aralığı</label>
                      <input type="text" placeholder="₺15.000 – ₺20.000 / ay" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Deneyim Gereksinimi</label>
                      <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {["Deneyim gerekmez","1+ yıl","2+ yıl","3+ yıl","5+ yıl","7+ yıl"].map(o => <option key={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">İstihdam Sayısı</label>
                      <input type="number" min="1" placeholder="1" className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">İş Tanımı *</label>
                      <textarea required rows={4} placeholder="Görev tanımı, sorumluluklar..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Aranan Nitelikler</label>
                      <textarea rows={3} placeholder="Eğitim, sertifika, beceri..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Yan Haklar</label>
                      <textarea rows={2} placeholder="Sigorta, yemek, servis..." className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <button type="submit" className="flex-1 min-w-[200px] bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
                    {t("post.submit")}
                  </button>
                  <button type="reset" className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors">
                    {t("post.reset")}
                  </button>
                </div>
                <p className="text-xs text-gray-400">{t("post.required_note")}</p>
              </form>
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-sm">
                <div className="text-3xl mb-2">{b.icon}</div>
                <div className="font-semibold text-gray-900 text-sm">{b.title}</div>
                <p className="text-gray-400 text-xs mt-1">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
