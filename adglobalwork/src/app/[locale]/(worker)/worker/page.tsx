import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function WorkerDashboard({ params }: Props) {
  const { locale } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect(`/${locale}/auth/login`);

  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single() as { data: { full_name: string | null; role: string } | null; error: unknown };

  if (profile?.role !== "worker") redirect(`/${locale}`);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Hoş Geldiniz, {profile.full_name || "İşçi"} 👋
      </h1>
      <p className="text-gray-500 mb-8">İşçi paneline hoş geldiniz.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { label: "Başvurularım", value: "0", color: "blue" },
          { label: "Kaydedilen İlanlar", value: "0", color: "emerald" },
          { label: "Mesajlar", value: "0", color: "purple" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className={`text-3xl font-extrabold text-${s.color}-600`}>{s.value}</div>
            <div className="text-gray-500 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
