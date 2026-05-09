// ===== KATEGORİLER (sadece 3) =====
const CATEGORIES_SKILLED = [
  { id: "turizm", icon: "🏨", name: { tr: "Turizm",  en: "Tourism"      }, count: null },
  { id: "insaat", icon: "🏗️", name: { tr: "İnşaat",  en: "Construction" }, count: null },
  { id: "bahce",  icon: "🌿", name: { tr: "Bahçe",   en: "Garden"       }, count: null },
];

// ===== ALT POZİSYONLAR =====
const SUBCATEGORIES = {
  turizm: [
    { tr: "Aşçı",              en: "Chef"                  },
    { tr: "Garson",            en: "Waiter"                },
    { tr: "Barmen",            en: "Bartender"             },
    { tr: "Hause Keeping",     en: "Housekeeping"          },
    { tr: "Vale",              en: "Valet"                 },
    { tr: "Ön Büro",           en: "Front Office"          },
    { tr: "Misafir İlişkileri",en: "Guest Relations"       },
    { tr: "Barmaid",           en: "Barmaid"               },
    { tr: "Spa & Masör",       en: "Spa & Masseur"         },
    { tr: "Teknik",            en: "Technician"            },
    { tr: "Teknik Soğutma",    en: "HVAC Technician"       },
    { tr: "Teknik Mekanikçi",  en: "Mechanical Technician" },
    { tr: "Teknik Su Tesisat", en: "Plumbing Technician"   },
  ],
  insaat: [
    { tr: "Duvar Ustası",                en: "Mason"               },
    { tr: "Demir Ustası",                en: "Iron Worker"         },
    { tr: "Sıvacı",                      en: "Plasterer"           },
    { tr: "Boya Ustası",                 en: "Painter"             },
    { tr: "Alçıpan Ustası",              en: "Drywall Worker"      },
    { tr: "Elektrik Ustası",             en: "Electrician"         },
    { tr: "Su Tesisatçısı",              en: "Plumber"             },
    { tr: "Kalıpçı",                     en: "Formwork Carpenter"  },
    { tr: "Mermer Ustası",               en: "Marble Worker"       },
    { tr: "Fanyas Ustası",               en: "Tile Layer"          },
    { tr: "Vinç Operatörü",              en: "Crane Operator"      },
    { tr: "Şiro Operatörü",              en: "Shiro Operator"      },
    { tr: "Ağır Vasıta Kamyon Şoförü",   en: "Heavy Vehicle Driver"},
    { tr: "Şoför",                       en: "Driver"              },
    { tr: "Kepçe Operatörü",             en: "Excavator Operator"  },
  ],
  bahce: [
    { tr: "Bahçıvan",                en: "Gardener"           },
    { tr: "Peyzaj Tasarımcısı",      en: "Landscape Designer" },
    { tr: "Sulama Uzmanı",           en: "Irrigation Expert"  },
    { tr: "Ağaç Bakım Uzmanı",       en: "Arborist"           },
    { tr: "Çim Bakım Elemanı",       en: "Lawn Care Worker"   },
    { tr: "Havuz Bakım Uzmanı",      en: "Pool Maintenance"   },
    { tr: "Sera Çalışanı",           en: "Greenhouse Worker"  },
  ],
};

// ===== YATIRIM PROJELERİ =====
const INVESTOR_PROJECTS = [
  {
    id: 1,
    category: { tr: "Turizm & Otelcilik",       en: "Tourism & Hospitality"    },
    title:    { tr: "5 Yıldızlı Resort Projesi", en: "5-Star Resort Project"    },
    location: "Antalya, Türkiye",
    budget: "€12M",
    roi: "%18 / yıl",
    duration: { tr: "36 ay", en: "36 months" },
    status:  { tr: "Açık", en: "Open" },
    desc: {
      tr: "Akdeniz kıyısında inşa edilecek 350 odalı lüks resort. Personel istihdamı ve operasyon yönetimi A&D Global Work güvencesiyle.",
      en: "350-room luxury resort to be built on the Mediterranean coast. Staff recruitment and operations management guaranteed by A&D Global Work."
    },
    colorClass: ""
  },
  {
    id: 2,
    category: { tr: "İnşaat & Gayrimenkul",      en: "Construction & Real Estate" },
    title:    { tr: "Rezidans Konut Kompleksi",   en: "Residential Complex"        },
    location: "İstanbul, Türkiye",
    budget: "€28M",
    roi: "%22 / yıl",
    duration: { tr: "48 ay", en: "48 months" },
    status:  { tr: "Açık", en: "Open" },
    desc: {
      tr: "İstanbul Avrupa yakasında 450 daireli modern konut projesi. Nitelikli işçi tedariki garantili.",
      en: "Modern 450-unit housing project on the European side of Istanbul. Qualified worker supply guaranteed."
    },
    colorClass: "--blue"
  },
  {
    id: 3,
    category: { tr: "Bahçe & Peyzaj",           en: "Garden & Landscape" },
    title:    { tr: "Kentsel Peyzaj Projesi",    en: "Urban Landscape Project" },
    location: "İzmir, Türkiye",
    budget: "€3M",
    roi: "%14 / yıl",
    duration: { tr: "18 ay", en: "18 months" },
    status:  { tr: "Açık", en: "Open" },
    desc: {
      tr: "Şehir parkları ve kamusal alanların peyzaj tasarımı ve bakım projesi. Uzman bahçe ekibi temini dahil.",
      en: "Landscape design and maintenance project for city parks and public areas. Expert garden team supply included."
    },
    colorClass: "--green"
  },
];
