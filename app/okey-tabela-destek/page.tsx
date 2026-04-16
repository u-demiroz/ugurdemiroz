export const metadata = {
  title: "Destek — Okey Tabela",
  robots: "noindex, nofollow",
};

export default function OkeyTabelaDestek() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Okey Tabela — Destek</h1>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Yardım & İletişim</h2>
        <p>
          Uygulama ile ilgili sorun, öneri veya sorularınız için e-posta ile
          ulaşabilirsiniz:
        </p>
        <p className="mt-3">
          <a href="mailto:info@ugurdemiroz.com" className="underline text-blue-600">
            info@ugurdemiroz.com
          </a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Sık Sorulan Sorular</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Hesabımı nasıl silerim? — E-posta ile talep gönderin.</li>
          <li>Skorlarım neden görünmüyor? — İnternet bağlantınızı kontrol edin.</li>
          <li>Uygulamayı birden fazla cihazda kullanabilir miyim? — Evet, aynı hesapla giriş yapabilirsiniz.</li>
        </ul>
      </section>
    </main>
  );
}
