<template>
  <n-h2 prefix="bar" align-text>{{ t('title') }}</n-h2>
  <n-p class="dev-talk">{{ t('description') }}</n-p>
</template>

<script setup lang="ts">
import { NH2, NP } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.dev-talk {
  font-size: 1.2em;
  text-indent: 2em;
}
</style>

<i18n lang="json">
{
  "en": {
    "title": "The Developer Says",
    "description": "I've always wanted simple, no-login tools that just work — whether it's editing a document, converting a file, or tweaking an image. But most web tools rely heavily on backend servers, which often means slower load times and privacy trade-offs. So I built InBrowser.App: a collection of web apps that run entirely in your browser, with minimal server dependencies. Your data stays on your device. Fast, private, and always ready to use — just the way tools should be."
  },
  "zh": {
    "title": "开发者说",
    "description": "我一直想要一些简单、免登录且打开即用的工具，比如编辑文档、转换文件或者处理图片。然而大多数在线工具依赖后端服务，加载缓慢，还存在隐私风险。因此，我构建了 InBrowser.App：一个几乎完全在浏览器运行的工具集，最小化对服务器的依赖。你的数据始终保留在你的设备上，快速、安全、随时可用——真正好的工具就该如此。"
  },
  "zh-CN": {
    "title": "开发者说",
    "description": "我一直想要一些简单、免登录且打开即用的工具，比如编辑文档、转换文件或者处理图片。然而大多数在线工具依赖后端服务，加载缓慢，还存在隐私风险。因此，我构建了 InBrowser.App：一个几乎完全在浏览器运行的工具集，最小化对服务器的依赖。你的数据始终保留在你的设备上，快速、安全、随时可用——真正好的工具就该如此。"
  },
  "zh-TW": {
    "title": "開發者說",
    "description": "我一直想要一些簡單、不需登入且立即可用的工具，例如編輯文件、轉換檔案或調整圖片。然而多數線上工具仰賴後端伺服器，導致載入緩慢且存在隱私風險。因此，我打造了 InBrowser.App：一套幾乎完全在瀏覽器運行的工具集，極少依賴伺服器。你的資料始終保留在你的裝置上，快速、安全、隨時可用——真正好的工具就是這樣。"
  },
  "zh-HK": {
    "title": "開發者說",
    "description": "我一直想要一些簡單、不需登入且立即可用的工具，例如編輯文件、轉換檔案或調整圖片。然而多數線上工具仰賴後端伺服器，導致載入緩慢且存在隱私風險。因此，我打造了 InBrowser.App：一套幾乎完全在瀏覽器運行的工具集，極少依賴伺服器。你的資料始終保留在你的裝置上，快速、安全、隨時可用——真正好的工具就是這樣。"
  },
  "es": {
    "title": "El Desarrollador Dice",
    "description": "Siempre he querido herramientas simples y sin inicio de sesión que simplemente funcionen, ya sea editar documentos, convertir archivos o retocar imágenes. Pero la mayoría dependen demasiado de servidores, lo que implica lentitud y riesgos de privacidad. Por eso creé InBrowser.App: aplicaciones web que funcionan directamente en tu navegador, minimizando la dependencia del servidor. Tus datos nunca salen de tu dispositivo. Rápido, privado y siempre listo para usar."
  },
  "fr": {
    "title": "Le Développeur Dit",
    "description": "J'ai toujours voulu des outils simples, sans connexion, et immédiatement fonctionnels, comme l'édition de documents, la conversion de fichiers ou la retouche d'images. Malheureusement, la plupart dépendent fortement de serveurs, causant lenteur et risques de confidentialité. C'est pourquoi j'ai créé InBrowser.App : une suite d'outils fonctionnant directement dans le navigateur, minimisant les dépendances aux serveurs. Vos données restent locales, rapides, privées et toujours accessibles."
  },
  "de": {
    "title": "Der Entwickler Sagt",
    "description": "Ich wollte schon immer einfache Tools, die ohne Anmeldung sofort funktionieren – ob Dokumentbearbeitung, Dateikonvertierung oder Bildbearbeitung. Leider setzen viele Tools stark auf Server, was langsame Ladezeiten und Datenschutzprobleme bedeutet. Deshalb habe ich InBrowser.App entwickelt: Web-Apps, die direkt im Browser laufen, mit minimaler Server-Abhängigkeit. Deine Daten bleiben lokal. Schnell, privat und stets einsatzbereit."
  },
  "ja": {
    "title": "開発者の言葉",
    "description": "ログイン不要で、すぐ使えるシンプルなツールが欲しかった。文書編集、ファイル変換、画像調整など、多くのツールはサーバーに依存して遅く、プライバシーにも不安があった。そこで InBrowser.App を作りました：ブラウザ内で動作し、サーバー依存を最小限に抑えたツール集です。データは自分の端末に留まり、速く、安全、いつでも使える。"
  },
  "ko": {
    "title": "개발자가 말하다",
    "description": "로그인 없이 바로 사용할 수 있는 간단한 도구를 원했습니다. 문서 편집, 파일 변환, 이미지 조정 등 대부분의 웹 도구는 서버에 의존하여 느리고 개인정보 보호에도 문제가 있었습니다. 그래서 InBrowser.App을 만들었습니다: 브라우저에서 직접 실행되며 서버 의존성을 최소화한 웹 앱 모음입니다. 데이터는 기기에 유지되며 빠르고, 안전하며, 언제든 사용할 수 있습니다."
  },
  "ru": {
    "title": "Разработчик Говорит",
    "description": "Я всегда хотел простые инструменты без входа в систему, которые просто работают — будь то редактирование документа, конвертация файла или обработка изображения. Но большинство веб-инструментов сильно зависят от серверов, что часто означает медленную загрузку и компромиссы в конфиденциальности. Поэтому я создал InBrowser.App: набор веб-приложений, которые работают полностью в вашем браузере, с минимальной зависимостью от сервера. Ваши данные остаются на вашем устройстве. Быстро, конфиденциально и всегда готово к использованию."
  },
  "pt": {
    "title": "O Desenvolvedor Diz",
    "description": "Sempre quis ferramentas simples, sem login, que simplesmente funcionem — seja editando documentos, convertendo arquivos ou ajustando imagens. Mas a maioria das ferramentas web depende muito de servidores, o que geralmente significa tempos de carregamento mais lentos e compromissos de privacidade. Por isso, criei o InBrowser.App: uma coleção de aplicativos web que rodam inteiramente no seu navegador, com dependências mínimas de servidor. Seus dados permanecem no seu dispositivo. Rápido, privado e sempre pronto para usar."
  },
  "ar": {
    "title": "يقول المطور",
    "description": "لطالما أردت أدوات بسيطة بدون تسجيل دخول تعمل ببساطة — سواء كان تحرير مستند أو تحويل ملف أو تعديل صورة. لكن معظم أدوات الويب تعتمد بشكل كبير على الخوادم، مما يعني أوقات تحميل أبطأ ومقايضات الخصوصية. لذلك بنيت InBrowser.App: مجموعة من تطبيقات الويب التي تعمل بالكامل في متصفحك، مع الحد الأدنى من الاعتماد على الخادم. تبقى بياناتك على جهازك. سريع، خاص، وجاهز دائماً للاستخدام."
  },
  "hi": {
    "title": "डेवलपर कहता है",
    "description": "मैं हमेशा से सरल, बिना लॉगिन के टूल चाहता था जो बस काम करें — चाहे वह दस्तावेज़ संपादित करना हो, फ़ाइल कन्वर्ट करना हो, या छवि को ट्वीक करना हो। लेकिन अधिकांश वेब टूल बैकएंड सर्वर पर बहुत अधिक निर्भर करते हैं, जिसका अक्सर मतलब होता है धीमा लोड टाइम और प्राइवेसी ट्रेड-ऑफ़। इसलिए मैंने InBrowser.App बनाया: वेब ऐप्स का एक संग्रह जो पूरी तरह से आपके ब्राउज़र में चलता है, न्यूनतम सर्वर निर्भरता के साथ। आपका डेटा आपके डिवाइस पर रहता है। तेज़, निजी, और हमेशा उपयोग के लिए तैयार।"
  },
  "tr": {
    "title": "Geliştirici Diyor ki",
    "description": "Her zaman basit, giriş yapmadan çalışan araçlar istedim — belge düzenleme, dosya dönüştürme veya görüntü düzenleme olsun. Ancak çoğu web aracı sunuculara ağır şekilde bağımlıdır, bu da genellikle yavaş yükleme süreleri ve gizlilik ödünleri anlamına gelir. Bu yüzden InBrowser.App'i oluşturdum: tamamen tarayıcınızda çalışan, minimum sunucu bağımlılığı olan web uygulamaları koleksiyonu. Verileriniz cihazınızda kalır. Hızlı, gizli ve her zaman kullanıma hazır."
  },
  "nl": {
    "title": "De Ontwikkelaar Zegt",
    "description": "Ik heb altijd eenvoudige, login-vrije tools gewild die gewoon werken — of het nu gaat om het bewerken van documenten, het converteren van bestanden of het aanpassen van afbeeldingen. Maar de meeste webtools zijn sterk afhankelijk van servers, wat vaak betekent langzamere laadtijden en privacy-compromisser. Daarom heb ik InBrowser.App gebouwd: een verzameling webapps die volledig in je browser draaien, met minimale serverafhankelijkheid. Je gegevens blijven op je apparaat. Snel, privé en altijd klaar voor gebruik."
  },
  "sv": {
    "title": "Utvecklaren Säger",
    "description": "Jag har alltid velat ha enkla verktyg utan inloggning som bara fungerar — oavsett om det är att redigera dokument, konvertera filer eller justera bilder. Men de flesta webbverktyg är starkt beroende av servrar, vilket ofta innebär långsammare laddningstider och kompromisser med integriteten. Därför byggde jag InBrowser.App: en samling webbappar som körs helt i din webbläsare, med minimala serverberoenden. Dina data stannar på din enhet. Snabbt, privat och alltid redo att användas."
  },
  "pl": {
    "title": "Mówi Programista",
    "description": "Zawsze chciałem prostych narzędzi bez logowania, które po prostu działają — czy to edycja dokumentów, konwersja plików czy obróbka obrazów. Ale większość narzędzi internetowych jest silnie uzależniona od serwerów, co często oznacza wolniejsze czasy ładowania i kompromisy w zakresie prywatności. Dlatego stworzyłem InBrowser.App: kolekcję aplikacji internetowych, które działają całkowicie w przeglądarce, z minimalną zależnością od serwera. Twoje dane pozostają na Twoim urządzeniu. Szybkie, prywatne i zawsze gotowe do użycia."
  },
  "vi": {
    "title": "Nhà Phát Triển Nói",
    "description": "Tôi luôn muốn có những công cụ đơn giản, không cần đăng nhập và hoạt động ngay lập tức — cho dù là chỉnh sửa tài liệu, chuyển đổi tệp hay điều chỉnh hình ảnh. Nhưng hầu hết các công cụ web đều phụ thuộc nhiều vào máy chủ, thường dẫn đến thời gian tải chậm và rủi ro về quyền riêng tư. Vì vậy, tôi đã xây dựng InBrowser.App: một bộ sưu tập ứng dụng web chạy hoàn toàn trong trình duyệt của bạn, với sự phụ thuộc tối thiểu vào máy chủ. Dữ liệu của bạn luôn được lưu trữ trên thiết bị của bạn. Nhanh chóng, riêng tư và luôn sẵn sàng sử dụng."
  },
  "th": {
    "title": "นักพัฒนากล่าวว่า",
    "description": "ผมต้องการเครื่องมือที่เรียบง่าย ไม่ต้องล็อกอิน และใช้งานได้ทันที — ไม่ว่าจะเป็นการแก้ไขเอกสาร แปลงไฟล์ หรือปรับแต่งรูปภาพ แต่เครื่องมือเว็บส่วนใหญ่มักพึ่งพาเซิร์ฟเวอร์มากเกินไป ทำให้โหลดช้าและมีความเสี่ยงด้านความเป็นส่วนตัว ดังนั้นผมจึงสร้าง InBrowser.App: ชุดแอปพลิเคชันเว็บที่ทำงานทั้งหมดในเบราว์เซอร์ของคุณ โดยพึ่งพาเซิร์ฟเวอร์น้อยที่สุด ข้อมูลของคุณยังคงอยู่ในอุปกรณ์ของคุณ เร็ว ปลอดภัย และพร้อมใช้งานเสมอ"
  },
  "id": {
    "title": "Kata Pengembang",
    "description": "Saya selalu menginginkan alat yang sederhana, tanpa login, yang langsung berfungsi — baik itu mengedit dokumen, mengkonversi file, atau mengedit gambar. Tapi kebanyakan alat web sangat bergantung pada server, yang sering berarti waktu pemuatan lebih lambat dan kompromi privasi. Karena itu saya membuat InBrowser.App: kumpulan aplikasi web yang berjalan sepenuhnya di browser Anda, dengan ketergantungan server minimal. Data Anda tetap di perangkat Anda. Cepat, pribadi, dan selalu siap digunakan."
  },
  "he": {
    "title": "המפתח אומר",
    "description": "תמיד רציתי כלים פשוטים, ללא התחברות, שפשוט עובדים — בין אם זה עריכת מסמכים, המרת קבצים או עריכת תמונות. אבל רוב כלי האינטרנט מסתמכים מאוד על שרתים, מה שבדרך כלל אומר זמני טעינה איטיים יותר ופשרות פרטיות. לכן בניתי את InBrowser.App: אוסף של אפליקציות אינטרנט שרצות לחלוטין בדפדפן שלך, עם תלות מינימלית בשרת. הנתונים שלך נשארים במכשיר שלך. מהיר, פרטי ותמיד מוכן לשימוש."
  },
  "ms": {
    "title": "Kata Pembangun",
    "description": "Saya sentiasa mahukan alat yang mudah, tanpa log masuk, yang terus berfungsi — sama ada mengedit dokumen, menukar fail, atau mengedit imej. Tetapi kebanyakan alat web sangat bergantung pada pelayan, yang sering bermaksud masa muat turun yang lebih perlahan dan kompromi privasi. Oleh itu saya membina InBrowser.App: koleksi aplikasi web yang berjalan sepenuhnya dalam pelayar anda, dengan pergantungan pelayan yang minimum. Data anda kekal di peranti anda. Pantas, peribadi, dan sentiasa bersedia untuk digunakan."
  },
  "no": {
    "title": "Utvikleren Sier",
    "description": "Jeg har alltid ønsket enkle, innloggingsfrie verktøy som bare fungerer — enten det er å redigere dokumenter, konvertere filer eller justere bilder. Men de fleste nettverktøy er sterkt avhengige av servere, som ofte betyr tregere lastingider og kompromisser med personvern. Derfor bygde jeg InBrowser.App: en samling nettapper som kjører helt i nettleseren din, med minimal serveravhengighet. Dataene dine forblir på enheten din. Raskt, privat og alltid klart til bruk."
  }
}
</i18n>
