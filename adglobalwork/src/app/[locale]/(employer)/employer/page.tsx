import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function EmployerDashboard({ params }: Props) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect(`/${locale}/auth/login`);

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single() as { data: { full_name: string | null; role: string } | null; error: unknown };

  if (profile?.role !== "employer") redirect(`/${locale}`);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Hoş Geldiniz, {profile.full_name || "İşveren"} 👋
      </h1>
      <p className="text-gray-500 mb-8">İşveren paneline hoş geldiniz.</p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Aktif İlanlar", value: "0", color: "blue" },
          { label: "Bekleyen Başvurular", value: "0", color: "amber" },
          { label: "Toplam Başvuru", value: "0", color: "emerald" },
          { label: "Mesajlar", value: "0", color: "purple" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className={`text-3xl font-extrabold text-${s.color}-600`}>{s.value}</div>
            <div className="text-gray-500 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      <Link
        href={`/${locale}/ilan-ver`}
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
      >
        + Yeni İlan Ver
      </Link>
    </div>
  );
}
