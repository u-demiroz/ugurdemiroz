export const metadata = {
  title: "Gizlilik Politikası — Okey Tabela",
  robots: "noindex, nofollow",
};

export default function OkeyTabelaGizlilik() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Okey Tabela — Gizlilik Politikası</h1>
      <p className="text-sm text-gray-500 mb-8">Son güncelleme: Nisan 2025</p>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Toplanan Veriler</h2>
        <p>
          Okey Tabela uygulaması, kullanıcıların oyun skorlarını ve lig bilgilerini
          kayıt etmek amacıyla e-posta adresi ve kullanıcı adı gibi temel kimlik
          bilgilerini toplar. Bu veriler Firebase altyapısında güvenli biçimde saklanır.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Verilerin Kullanımı</h2>
        <p>
          Toplanan veriler yalnızca uygulama içi işlevler (hesap oluşturma, skor
          takibi, lig yönetimi) için kullanılır. Üçüncü taraflarla paylaşılmaz,
          satılmaz veya kiralanmaz.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Reklamlar</h2>
        <p>
          Uygulama, Google AdMob aracılığıyla reklam gösterebilir. AdMob, reklam
          kişiselleştirmesi amacıyla cihaz tanımlayıcıları gibi veriler toplayabilir.
          Daha fazla bilgi için{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            Google Gizlilik Politikası
          </a>
          &apos;nı inceleyebilirsiniz.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Veri Güvenliği</h2>
        <p>
          Verileriniz Firebase&apos;in güvenlik altyapısıyla korunmaktadır. Hesabınızı
          silmek veya verilerinizin kaldırılmasını talep etmek için bizimle iletişime
          geçebilirsiniz.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">İletişim</h2>
        <p>
          Gizlilik ile ilgili sorularınız için:{" "}
          <a href="mailto:info@ugurdemiroz.com" className="underline text-blue-600">
            info@ugurdemiroz.com
          </a>
        </p>
      </section>
    </main>
  );
}
