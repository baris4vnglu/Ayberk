import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: usersCount }, { count: jobsCount }, { count: appsCount }] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("jobs").select("id", { count: "exact", head: true }),
    supabase.from("applications").select("id", { count: "exact", head: true }),
  ]);

  const stats = [
    { label: "Toplam Kullanıcı", value: usersCount ?? 0, color: "blue" },
    { label: "İlanlar", value: jobsCount ?? 0, color: "emerald" },
    { label: "Başvurular", value: appsCount ?? 0, color: "purple" },
    { label: "Bekleyen Onay", value: 0, color: "amber" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Paneli</h1>
      <p className="text-gray-500 mb-8">Platform genel durumu</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className={`text-3xl font-extrabold text-${s.color}-600`}>{s.value}</div>
            <div className="text-gray-500 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
