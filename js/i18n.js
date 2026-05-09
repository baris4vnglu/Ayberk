// ===== BİLİNGUAL (TR / EN) =====

const LANG_DATA = {
  tr: {
    // Nav
    "nav.home":      "Ana Sayfa",
    "nav.skilled":   "Nitelikli İşçiler",
    "nav.regular":   "Normal İşçiler",
    "nav.investors": "Yatırımcılar",
    "nav.listings":  "İş İlanları",
    "nav.search":    "İş Ara",
    "nav.post":      "İlan Ver",
    // Hero
    "hero.badge":    "Uluslararası İnsan Kaynakları",
    "hero.title":    "ULUSLARARASI A&D GLOBAL WORK",
    "hero.p1": "Günümüz iş dünyasında, sınırların giderek daha da belirsizleştiği, kültürlerarası etkileşimin hız kazandığı ve yetenek yönetiminin küresel bir boyut kazandığı dinamik bir yapıya sahiptir. Bu dönüşüm sürecinde şirketimiz A&D GLOBAL WORK, yalnızca bir destek fonksiyonu olmaktan çıkarak kurumların sürdürülebilir başarısında stratejik bir rol üstlenmiştir.",
    "hero.p2": "Uluslararası insan kaynakları alanında faaliyet gösteren bir kuruluş olarak; farklı coğrafyalardan gelen yetenekleri doğru fırsatlarla buluşturmayı, kurumların ihtiyaç duyduğu nitelikli iş gücünü etkin ve yenilikçi yöntemlerle sağlamayı amaçlıyoruz. Kültürel çeşitliliği bir zenginlik olarak görüyor, global iş gücünün gelişimine katkı sunmayı temel değerlerimiz arasında konumlandırıyoruz.",
    "hero.p3": "Müşteri odaklı yaklaşımımız, etik değerlere bağlılığımız ve sürekli gelişimi esas alan bakış açımız ile hem işverenler hem de çalışma adayları için güvenilir bir çözüm ortağı olmayı hedefliyoruz. Teknolojinin sunduğu imkânları yakından takip ederek, insan odaklı çözümler üretmeye ve iş dünyasının değişen ihtiyaçlarına hızlı ve etkili yanıtlar vermeye devam ediyoruz.",
    "hero.p4": "Bu yolculukta A&D GLOBAL WORK, birlikte değer yaratacağımıza ve geleceğin iş dünyasını birlikte şekillendireceğimize inanıyoruz.",
    "hero.sign":    "Saygılarımla, A&D GLOBAL WORK",
    "hero.cta":     "Platformu Keşfet",
    // Panels
    "panels.title":           "Platformumuzu Keşfedin",
    "panels.sub":             "Size özel alanda devam edin",
    "panel.skilled.title":    "Nitelikli İşçiler",
    "panel.skilled.desc":     "Turizm, inşaat ve bahçe işleri alanlarında uzmanlaşmış profesyoneller için fırsatlar.",
    "panel.regular.title":    "Normal İşçiler",
    "panel.regular.desc":     "Genel iş gücü ihtiyacı için geniş çaplı fırsatlar ve istihdam imkânları.",
    "panel.investor.title":   "Yatırımcılar",
    "panel.investor.desc":    "İş birliği fırsatları ve küresel yatırım projeleri için A&D Global Work güvencesiyle.",
    "panel.explore":          "Keşfet",
    // Mission
    "mission.badge":   "Misyonumuz",
    "mission.title":   "Güçlü Köprüler, Sürdürülebilir Başarı",
    "mission.p1":      "Uluslararası insan kaynakları alanında kurumlar ile yetenekler arasında güçlü ve sürdürülebilir köprüler kurarak doğru insanları doğru pozisyonlara buluşturmak temel misyonumuzdur.",
    "mission.p2":      "Küresel iş gücü dinamiklerini yakından takip ederek müşterilerimize yenilikçi, hızlı ve güvenilir çözümler sunmayı hedefliyoruz.",
    "mission.p3":      "Etik değerlere bağlı, şeffaf ve insan odaklı yaklaşımımızla uluslararası standartlarda hizmet sunarak sektörde fark yaratan bir insan kaynakları çözüm ortağı olmayı hedefliyoruz.",
    "mission.btn":     "Hakkımızda",
    "val1.title": "Güven & Şeffaflık", "val1.desc": "Her adımda açık, dürüst ve etik değerlere bağlı hizmet.",
    "val2.title": "Küresel Erişim",    "val2.desc": "40'tan fazla ülkede aktif ağ ve yerel uzmanlık.",
    "val3.title": "Hızlı Çözüm",      "val3.desc": "Yenilikçi teknoloji ve uzman ekibiyle hızlı eşleşme.",
    "val4.title": "Çeşitlilik",        "val4.desc": "Farklı kültürleri bir araya getiren kapsayıcı yapı.",
    // How
    "how.title":      "Nasıl Çalışır?",
    "how.sub":        "3 adımda işe başlayın",
    "step1.title":    "Profilinizi Oluşturun",
    "step1.desc":     "Becerilerinizi, deneyimlerinizi ve hedeflerinizi girin.",
    "step2.title":    "İlanları İnceleyin",
    "step2.desc":     "Size uygun fırsatları filtreleyin ve başvurun.",
    "step3.title":    "İşe Başlayın",
    "step3.desc":     "Eşleşme onaylandıktan sonra kariyer yolculuğunuz başlıyor.",
    // CTA
    "cta.title":  "İş İlanı Vermek İster Misiniz?",
    "cta.sub":    "Nitelikli iş gücüne hemen ulaşın. İlk ilanınızı ücretsiz yayınlayın.",
    "cta.post":   "İlan Ver",
    "cta.search": "İş Ara",
    // Footer
    "footer.brand.desc": "Uluslararası insan kaynakları alanında güvenilir çözüm ortağınız.",
    "footer.platform": "Platform", "footer.company": "Şirket",
    "footer.about": "Hakkımızda", "footer.contact": "İletişim",
    // Skilled page
    "skilled.badge":  "Nitelikli İş Gücü",
    "skilled.title":  "Nitelikli İşçiler Platformu",
    "skilled.sub":    "Turizm, inşaat ve bahçe alanında uzman pozisyonlar.",
    "skilled.pick":   "Sektör Seçin",
    "skilled.pickSub":"Sektöre tıklayın, alt pozisyonları görün",
    "skilled.pos":    "pozisyon",
    "skilled.apply":  "Başvur / Ara",
    "skilled.cta.title": "Nitelikli Personel mi Arıyorsunuz?",
    "skilled.cta.sub":   "Hemen ilan verin, uzman adaylara ulaşın.",
    "skilled.cta.btn":   "İlan Ver",
    "skilled.back":      "← Kategoriye Dön",
    "skilled.noJobs":    "Bu kategoride şu an ilan bulunmuyor.",
    "skilled.contact":   "Başvuru için İletişime Geç",
    // Common
    "common.all": "Tüm Kategoriler",
    "common.noResult": "Sonuç Bulunamadı",
    "common.seeAll": "Tümünü Gör",
  },
  en: {
    "nav.home":      "Home",
    "nav.skilled":   "Skilled Workers",
    "nav.regular":   "Regular Workers",
    "nav.investors": "Investors",
    "nav.listings":  "Job Listings",
    "nav.search":    "Find Jobs",
    "nav.post":      "Post Job",
    "hero.badge":    "International Human Resources",
    "hero.title":    "INTERNATIONAL A&D GLOBAL WORK",
    "hero.p1": "Today's business world has a dynamic structure where borders are increasingly blurring, cross-cultural interaction is gaining momentum, and talent management is gaining a global dimension. In this transformation process, A&D GLOBAL WORK has gone beyond being just a support function and has taken on a strategic role in the sustainable success of organizations.",
    "hero.p2": "As an organization operating in the field of international human resources, we aim to connect talents from different geographies with the right opportunities and to provide the qualified workforce that institutions need through effective and innovative methods. We see cultural diversity as a wealth and position contributing to the development of the global workforce among our core values.",
    "hero.p3": "With our customer-oriented approach, our commitment to ethical values, and our perspective based on continuous improvement, we aim to be a reliable solution partner for both employers and job candidates. We continue to closely follow the opportunities offered by technology, producing human-centered solutions and giving quick and effective responses to the changing needs of the business world.",
    "hero.p4": "In this journey, A&D GLOBAL WORK believes that we will create value together and shape the future of the business world together.",
    "hero.sign":  "Sincerely, A&D GLOBAL WORK",
    "hero.cta":   "Explore Platform",
    "panels.title":           "Explore Our Platform",
    "panels.sub":             "Continue in your dedicated section",
    "panel.skilled.title":    "Skilled Workers",
    "panel.skilled.desc":     "Opportunities for professionals specializing in tourism, construction, and garden industries.",
    "panel.regular.title":    "Regular Workers",
    "panel.regular.desc":     "Wide-ranging opportunities for general workforce needs and employment.",
    "panel.investor.title":   "Investors",
    "panel.investor.desc":    "Partnership opportunities and global investment projects backed by A&D Global Work.",
    "panel.explore":          "Explore",
    "mission.badge":   "Our Mission",
    "mission.title":   "Strong Bridges, Sustainable Success",
    "mission.p1":      "Our core mission is to build strong and sustainable bridges between organizations and talents in the field of international human resources, connecting the right people to the right positions.",
    "mission.p2":      "By closely monitoring global workforce dynamics, we aim to offer our clients innovative, fast, and reliable solutions.",
    "mission.p3":      "With our ethical, transparent, and human-centered approach, we aim to be a differentiating HR solution partner delivering international-standard services.",
    "mission.btn":     "About Us",
    "val1.title": "Trust & Transparency", "val1.desc": "Open, honest, and ethical service at every step.",
    "val2.title": "Global Reach",         "val2.desc": "Active network and local expertise in 40+ countries.",
    "val3.title": "Fast Solutions",       "val3.desc": "Fast matching with innovative technology and expert team.",
    "val4.title": "Diversity",            "val4.desc": "Inclusive structure bringing different cultures together.",
    "how.title":      "How It Works?",
    "how.sub":        "Get started in 3 steps",
    "step1.title":    "Create Your Profile",
    "step1.desc":     "Enter your skills, experience and goals.",
    "step2.title":    "Browse Listings",
    "step2.desc":     "Filter suitable opportunities and apply.",
    "step3.title":    "Start Working",
    "step3.desc":     "Your career journey begins once the match is confirmed.",
    "cta.title":  "Want to Post a Job?",
    "cta.sub":    "Reach qualified workforce instantly. Publish your first listing for free.",
    "cta.post":   "Post Job",
    "cta.search": "Find Jobs",
    "footer.brand.desc": "Your trusted HR solution partner in international human resources.",
    "footer.platform": "Platform", "footer.company": "Company",
    "footer.about": "About Us", "footer.contact": "Contact",
    "skilled.badge":  "Skilled Workforce",
    "skilled.title":  "Skilled Workers Platform",
    "skilled.sub":    "Expert positions in tourism, construction, and garden industries.",
    "skilled.pick":   "Select a Sector",
    "skilled.pickSub":"Click a sector to see sub-positions",
    "skilled.pos":    "positions",
    "skilled.apply":  "Apply / Search",
    "skilled.cta.title": "Looking for Skilled Staff?",
    "skilled.cta.sub":   "Post a listing now and reach expert candidates.",
    "skilled.cta.btn":   "Post Job",
    "skilled.back":      "← Back to Categories",
    "skilled.noJobs":    "No listings in this category right now.",
    "skilled.contact":   "Contact Us to Apply",
    "common.all": "All Categories",
    "common.noResult": "No Results Found",
    "common.seeAll": "See All",
  }
};

function getLang() {
  return localStorage.getItem('adgw_lang') || 'tr';
}

function setLang(lang) {
  localStorage.setItem('adgw_lang', lang);
  applyLang(lang);
  // update toggle button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
  });
}

function t(key) {
  const lang = getLang();
  return (LANG_DATA[lang] && LANG_DATA[lang][key]) || (LANG_DATA['tr'][key]) || key;
}

function applyLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = LANG_DATA[lang] && LANG_DATA[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const val = LANG_DATA[lang] && LANG_DATA[lang][key];
    if (val !== undefined) el.placeholder = val;
  });
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  const lang = getLang();
  applyLang(lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('lang-btn--active', btn.dataset.lang === lang);
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
