<template>
  <n-h1 prefix="bar" align-text>{{ t('base.all_tools') }}</n-h1>
  <n-p>{{ t('description') }}</n-p>
  <n-p>
    <TheAllTools />
  </n-p>
</template>

<script setup lang="ts">
import { NH1, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import TheAllTools from '@/components/tools/all-tools/TheAllTools.vue'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "description": "Explore and use our collection of powerful tools that run entirely in your browser - no server required. All tools are free, secure, and work offline once loaded."
  },
  "zh": {
    "description": "探索和使用我们强大的工具集合，所有工具完全在浏览器中运行 - 无需服务器。所有工具都是免费的、安全的，加载后即可离线使用。"
  },
  "zh-CN": {
    "description": "探索和使用我们强大的工具集合，所有工具完全在浏览器中运行 - 无需服务器。所有工具都是免费的、安全的，加载后即可离线使用。"
  },
  "zh-TW": {
    "description": "探索和使用我們強大的工具集合，所有工具完全在瀏覽器中運行 - 無需伺服器。所有工具都是免費的、安全的，載入後即可離線使用。"
  },
  "zh-HK": {
    "description": "探索和使用我們強大的工具集合，所有工具完全在瀏覽器中運行 - 無需伺服器。所有工具都是免費的、安全的，載入後即可離線使用。"
  },
  "es": {
    "description": "Explora y usa nuestra colección de potentes herramientas que se ejecutan completamente en tu navegador - sin necesidad de servidor. Todas las herramientas son gratuitas, seguras y funcionan sin conexión una vez cargadas."
  },
  "fr": {
    "description": "Explorez et utilisez notre collection d'outils puissants qui fonctionnent entièrement dans votre navigateur - sans serveur requis. Tous les outils sont gratuits, sécurisés et fonctionnent hors ligne une fois chargés."
  },
  "de": {
    "description": "Entdecken und nutzen Sie unsere Sammlung leistungsstarker Tools, die vollständig in Ihrem Browser laufen - ohne Server erforderlich. Alle Tools sind kostenlos, sicher und funktionieren offline, sobald sie geladen sind."
  },
  "it": {
    "description": "Esplora e utilizza la nostra collezione di potenti strumenti che funzionano interamente nel tuo browser - nessun server richiesto. Tutti gli strumenti sono gratuiti, sicuri e funzionano offline una volta caricati."
  },
  "ja": {
    "description": "サーバー不要で、ブラウザ内で完全に動作する強力なツールのコレクションを探索して使用できます。すべてのツールは無料で安全、ロード後はオフラインでも使用可能です。"
  },
  "ko": {
    "description": "서버 없이 브라우저에서 완전히 실행되는 강력한 도구 모음을 탐색하고 사용하세요. 모든 도구는 무료이며 안전하고, 로드 후에는 오프라인에서도 작동합니다."
  },
  "ru": {
    "description": "Исследуйте и используйте нашу коллекцию мощных инструментов, которые работают полностью в вашем браузере - без необходимости сервера. Все инструменты бесплатны, безопасны и работают офлайн после загрузки."
  },
  "pt": {
    "description": "Explore e use nossa coleção de ferramentas poderosas que funcionam inteiramente no seu navegador - sem necessidade de servidor. Todas as ferramentas são gratuitas, seguras e funcionam offline após o carregamento."
  },
  "ar": {
    "description": "استكشف واستخدم مجموعتنا من الأدوات القوية التي تعمل بالكامل في متصفحك - بدون الحاجة إلى خادم. جميع الأدوات مجانية وآمنة وتعمل دون اتصال بالإنترنت بمجرد تحميلها."
  },
  "hi": {
    "description": "हमारे शक्तिशाली उपकरणों के संग्रह का अन्वेषण करें जो पूरी तरह से आपके ब्राउज़र में चलते हैं - सर्वर की आवश्यकता नहीं। सभी उपकरण मुफ्त, सुरक्षित हैं और लोड होने के बाद ऑफ़लाइन काम करते हैं।"
  },
  "tr": {
    "description": "Tamamen tarayıcınızda çalışan güçlü araçlar koleksiyonumuzu keşfedin ve kullanın - sunucu gerekmez. Tüm araçlar ücretsiz, güvenli ve yüklendikten sonra çevrimdışı çalışır."
  },
  "nl": {
    "description": "Verken en gebruik onze collectie krachtige tools die volledig in uw browser werken - geen server nodig. Alle tools zijn gratis, veilig en werken offline zodra ze zijn geladen."
  },
  "sv": {
    "description": "Utforska och använd vår samling kraftfulla verktyg som körs helt i din webbläsare - ingen server krävs. Alla verktyg är gratis, säkra och fungerar offline när de har laddats."
  },
  "pl": {
    "description": "Odkryj i korzystaj z naszej kolekcji potężnych narzędzi, które działają w całości w Twojej przeglądarce - bez potrzeby serwera. Wszystkie narzędzia są darmowe, bezpieczne i działają offline po załadowaniu."
  },
  "vi": {
    "description": "Khám phá và sử dụng bộ sưu tập công cụ mạnh mẽ của chúng tôi hoạt động hoàn toàn trong trình duyệt của bạn - không cần máy chủ. Tất cả các công cụ đều miễn phí, an toàn và hoạt động ngoại tuyến sau khi tải."
  },
  "th": {
    "description": "สำรวจและใช้คอลเลกชันเครื่องมืออันทรงพลังของเราที่ทำงานทั้งหมดในเบราว์เซอร์ของคุณ - ไม่ต้องใช้เซิร์ฟเวอร์ เครื่องมือทั้งหมดฟรี ปลอดภัย และทำงานแบบออฟไลน์ได้เมื่อโหลดแล้ว"
  },
  "id": {
    "description": "Jelajahi dan gunakan koleksi alat kami yang kuat yang berjalan sepenuhnya di browser Anda - tanpa memerlukan server. Semua alat gratis, aman, dan berfungsi offline setelah dimuat."
  },
  "he": {
    "description": "גלה והשתמש באוסף הכלים החזקים שלנו הפועלים לחלוטין בדפדפן שלך - ללא צורך בשרת. כל הכלים חינמיים, מאובטחים ופועלים במצב לא מקוון לאחר טעינה."
  },
  "ms": {
    "description": "Terokai dan gunakan koleksi alat berkuasa kami yang berjalan sepenuhnya dalam pelayar anda - tanpa memerlukan pelayan. Semua alat adalah percuma, selamat dan berfungsi secara luar talian selepas dimuatkan."
  },
  "no": {
    "description": "Utforsk og bruk vår samling kraftige verktøy som kjører helt i nettleseren din - ingen server kreves. Alle verktøy er gratis, sikre og fungerer offline når de er lastet."
  }
}
</i18n>
