<template>
  <ToolSectionHeader>{{ t('title') }}</ToolSectionHeader>
  <ToolSection>
    {{ t('description') }}
  </ToolSection>
</template>

<script setup lang="ts">
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "title": "How We Optimize PNG Images",
    "description": "This tool uses Oxipng, a multithreaded lossless PNG/APNG compression optimizer written in Rust. It provides excellent compression performance while maintaining image quality. Key optimization features include: Optimization levels (0 to 6), where higher levels provide better compression but take longer. Alpha optimization improves compression for transparent images by altering fully transparent pixel colors. Interlacing option for progressive image loading. The optimization process is entirely client-side, ensuring your images never leave your device for maximum privacy."
  },
  "zh": {
    "title": "我们是怎么优化 PNG 图像的",
    "description": "此工具使用 Oxipng，一个用 Rust 编写的多线程无损 PNG/APNG 压缩优化器。它在保持图像质量的同时提供出色的压缩性能。主要优化功能包括：优化级别（0 到 6），级别越高压缩效果越好但耗时更长。透明度优化通过改变完全透明像素的颜色值来改善透明图像的压缩效果。交错选项用于渐进式图像加载。整个优化过程完全在客户端进行，确保您的图像永远不会离开您的设备，最大程度保护隐私。"
  },
  "zh-CN": {
    "title": "我们是怎么优化 PNG 图像的",
    "description": "此工具使用 Oxipng，一个用 Rust 编写的多线程无损 PNG/APNG 压缩优化器。它在保持图像质量的同时提供出色的压缩性能。主要优化功能包括：优化级别（0 到 6），级别越高压缩效果越好但耗时更长。透明度优化通过改变完全透明像素的颜色值来改善透明图像的压缩效果。交错选项用于渐进式图像加载。整个优化过程完全在客户端进行，确保您的图像永远不会离开您的设备，最大程度保护隐私。"
  },
  "zh-TW": {
    "title": "我們是怎麼最佳化 PNG 影像的",
    "description": "此工具使用 Oxipng，一個用 Rust 編寫的多執行緒無損 PNG/APNG 壓縮最佳化器。它在保持影像品質的同時提供出色的壓縮效能。主要最佳化功能包括：最佳化層級（0 到 6），層級越高壓縮效果越好但耗時更長。透明度最佳化透過改變完全透明像素的顏色值來改善透明影像的壓縮效果。交錯選項用於漸進式影像載入。整個最佳化過程完全在客戶端進行，確保您的影像永遠不會離開您的裝置，最大程度保護隱私。"
  },
  "zh-HK": {
    "title": "我們是怎麼最佳化 PNG 影像的",
    "description": "此工具使用 Oxipng，一個用 Rust 編寫的多執行緒無損 PNG/APNG 壓縮最佳化器。它在保持影像品質的同時提供出色的壓縮效能。主要最佳化功能包括：最佳化層級（0 到 6），層級越高壓縮效果越好但耗時更長。透明度最佳化透過改變完全透明像素的顏色值來改善透明影像的壓縮效果。交錯選項用於漸進式影像載入。整個最佳化過程完全在客戶端進行，確保您的影像永遠不會離開您的裝置，最大程度保護隱私。"
  },
  "es": {
    "title": "Cómo optimizamos imágenes PNG",
    "description": "Esta herramienta utiliza Oxipng, un optimizador de compresión PNG/APNG sin pérdidas y multihilo escrito en Rust. Proporciona un rendimiento de compresión excelente manteniendo la calidad de la imagen. Las características de optimización clave incluyen: Niveles de optimización (0 a 6), donde niveles más altos proporcionan mejor compresión pero toman más tiempo. Optimización alfa mejora la compresión para imágenes transparentes alterando los colores de píxeles completamente transparentes. Opción de entrelazado para carga progresiva de imágenes. El proceso de optimización es completamente del lado del cliente, asegurando que sus imágenes nunca salgan de su dispositivo para máxima privacidad."
  },
  "fr": {
    "title": "Comment nous optimisons les images PNG",
    "description": "Cet outil utilise Oxipng, un optimiseur de compression PNG/APNG sans perte et multithread écrit en Rust. Il offre d'excellentes performances de compression tout en maintenant la qualité de l'image. Les fonctionnalités d'optimisation clés incluent : Niveaux d'optimisation (0 à 6), où des niveaux plus élevés offrent une meilleure compression mais prennent plus de temps. Optimisation alpha améliore la compression pour les images transparentes en modifiant les couleurs des pixels complètement transparents. Option d'entrelacement pour le chargement progressif des images. Le processus d'optimisation est entièrement côté client, garantissant que vos images ne quittent jamais votre appareil pour une confidentialité maximale."
  },
  "de": {
    "title": "Wie wir PNG-Bilder optimieren",
    "description": "Dieses Tool verwendet Oxipng, einen in Rust geschriebenen multithreaded verlustfreien PNG/APNG-Komprimierungsoptimierer. Er bietet exzellente Komprimierungsleistung bei gleichbleibender Bildqualität. Wichtige Optimierungsfeatures umfassen: Optimierungsstufen (0 bis 6), wobei höhere Stufen bessere Komprimierung aber längere Zeit benötigen. Alpha-Optimierung verbessert die Komprimierung für transparente Bilder durch Ändern der Farbwerte vollständig transparenter Pixel. Interlacing-Option für progressives Bildladen. Der Optimierungsprozess läuft vollständig clientseitig ab, wodurch sichergestellt wird, dass Ihre Bilder niemals Ihr Gerät verlassen und maximale Privatsphäre gewährleistet ist."
  },
  "it": {
    "title": "Come ottimizziamo le immagini PNG",
    "description": "Questo strumento utilizza Oxipng, un ottimizzatore di compressione PNG/APNG senza perdite e multithreaded scritto in Rust. Fornisce eccellenti prestazioni di compressione mantenendo la qualità dell'immagine. Le caratteristiche di ottimizzazione chiave includono: Livelli di ottimizzazione (0 a 6), dove livelli più alti forniscono migliore compressione ma richiedono più tempo. Ottimizzazione alfa migliora la compressione per immagini trasparenti alterando i colori dei pixel completamente trasparenti. Opzione di interlacciamento per caricamento progressivo delle immagini. Il processo di ottimizzazione è completamente lato client, garantendo che le vostre immagini non lascino mai il vostro dispositivo per la massima privacy."
  },
  "ja": {
    "title": "PNG 画像の最適化方法について",
    "description": "このツールは Rust で書かれたマルチスレッド対応のロスレス PNG/APNG 圧縮最適化ツール Oxipng を使用しています。画像品質を維持しながら優れた圧縮性能を提供します。主要な最適化機能には次があります：最適化レベル（0 から 6）、高いレベルほど圧縮効果が良いが時間がかかります。アルファ最適化は完全に透明なピクセルの色値を変更することで透明画像の圧縮を改善します。インターレースオプションでプログレッシブ画像読み込み。最適化プロセスは完全にクライアント側で行われ、画像がデバイスから離れることがないため最大限のプライバシーを確保します。"
  },
  "ko": {
    "title": "우리가 PNG 이미지를 최적화하는 방법",
    "description": "이 도구는 Rust로 작성된 멀티스레드 무손실 PNG/APNG 압축 최적화 도구인 Oxipng를 사용합니다. 이미지 품질을 유지하면서 뛰어난 압축 성능을 제공합니다. 주요 최적화 기능에는 다음이 있습니다: 최적화 레벨(0부터 6), 높은 레벨일수록 압축률이 좋지만 시간이 더 걸립니다. 알파 최적화는 완전히 투명한 픽셀의 색상 값을 변경하여 투명 이미지의 압축을 개선합니다. 프로그레시브 이미지 로딩을 위한 인터레이스 옵션. 최적화 과정이 완전히 클라이언트 측에서 진행되어 이미지가 기기를 벗어나지 않으므로 최대한의 개인정보 보호를 보장합니다."
  },
  "ru": {
    "title": "Как мы оптимизируем PNG-изображения",
    "description": "Этот инструмент использует Oxipng — многопоточный оптимизатор сжатия PNG/APNG без потерь, написанный на Rust. Он обеспечивает отличную производительность сжатия при сохранении качества изображения. Ключевые функции оптимизации включают: Уровни оптимизации (от 0 до 6), где более высокие уровни обеспечивают лучшее сжатие, но требуют больше времени. Альфа-оптимизация улучшает сжатие прозрачных изображений путем изменения цветовых значений полностью прозрачных пикселей. Опция чересстрочности для прогрессивной загрузки изображений. Процесс оптимизации происходит полностью на стороне клиента, гарантируя, что ваши изображения никогда не покинут ваше устройство для максимальной конфиденциальности."
  },
  "pt": {
    "title": "Como otimizamos imagens PNG",
    "description": "Esta ferramenta utiliza Oxipng, um otimizador de compressão PNG/APNG sem perdas e multithreaded escrito em Rust. Ele fornece excelente desempenho de compressão mantendo a qualidade da imagem. As características de otimização principais incluem: Níveis de otimização (0 a 6), onde níveis mais altos fornecem melhor compressão mas levam mais tempo. Otimização alfa melhora a compressão para imagens transparentes alterando os valores de cor de pixels completamente transparentes. Opção de entrelaçamento para carregamento progressivo de imagens. O processo de otimização é completamente do lado do cliente, garantindo que suas imagens nunca deixem seu dispositivo para máxima privacidade."
  },
  "ar": {
    "title": "كيف نحسن صور PNG",
    "description": "تستخدم هذه الأداة Oxipng، وهو محسن ضغط PNG/APNG بدون فقدان ومتعدد الخيوط مكتوب بلغة Rust. يوفر أداء ضغط ممتاز مع الحفاظ على جودة الصورة. تشمل ميزات التحسين الرئيسية: مستويات التحسين (0 إلى 6)، حيث المستويات الأعلى توفر ضغطاً أفضل لكن تستغرق وقتاً أطول. تحسين الألفا يحسن الضغط للصور الشفافة عبر تغيير قيم ألوان البكسلات الشفافة تماماً. خيار التشابك للتحميل التدريجي للصور. عملية التحسين تتم بالكامل على جانب العميل، مما يضمن أن صورك لن تغادر جهازك أبداً لضمان أقصى خصوصية."
  },
  "hi": {
    "title": "हम PNG छवियों को कैसे अनुकूलित करते हैं",
    "description": "यह उपकरण Oxipng का उपयोग करता है, जो Rust में लिखा गया एक मल्टीथ्रेडेड लॉसलेस PNG/APNG कंप्रेशन ऑप्टिमाइज़र है। यह छवि गुणवत्ता बनाए रखते हुए उत्कृष्ट कंप्रेशन प्रदर्शन प्रदान करता है। मुख्य अनुकूलन सुविधाओं में शामिल हैं: अनुकूलन स्तर (0 से 6), जहाँ उच्च स्तर बेहतर कंप्रेशन प्रदान करते हैं लेकिन अधिक समय लेते हैं। अल्फा अनुकूलन पूर्णतः पारदर्शी पिक्सेल के रंग मानों को बदलकर पारदर्शी छवियों के लिए कंप्रेशन सुधारता है। प्रगतिशील छवि लोडिंग के लिए इंटरलेसिंग विकल्प। अनुकूलन प्रक्रिया पूर्णतः क्लाइंट-साइड है, यह सुनिश्चित करती है कि आपकी छवियां कभी आपके डिवाइस को नहीं छोड़तीं, अधिकतम गोपनीयता के लिए।"
  },
  "tr": {
    "title": "PNG Görüntüleri Nasıl Optimize Ediyoruz",
    "description": "Bu araç, Rust ile yazılmış çok iş parçacıklı kayıpsız PNG/APNG sıkıştırma optimizörü olan Oxipng'i kullanır. Görüntü kalitesini korurken mükemmel sıkıştırma performansı sağlar. Temel optimizasyon özellikleri şunları içerir: Optimizasyon seviyeleri (0'dan 6'ya), yüksek seviyeler daha iyi sıkıştırma sağlar ancak daha fazla zaman alır. Alfa optimizasyonu tamamen şeffaf piksellerin renk değerlerini değiştirerek şeffaf görüntüler için sıkıştırmayı geliştirir. Aşamalı görüntü yükleme için geçişli seçenek. Optimizasyon süreci tamamen istemci tarafında gerçekleşir, görüntülerinizin asla cihazınızı terk etmeyeceğini garanti ederek maksimum gizlilik sağlar."
  },
  "nl": {
    "title": "Hoe we PNG-afbeeldingen optimaliseren",
    "description": "Deze tool gebruikt Oxipng, een multithreaded lossless PNG/APNG compressie-optimizer geschreven in Rust. Het biedt uitstekende compressieprestaties terwijl de beeldkwaliteit behouden blijft. Belangrijke optimalisatiekenmerken omvatten: Optimalisatieniveaus (0 tot 6), waarbij hogere niveaus betere compressie bieden maar meer tijd kosten. Alfa-optimalisatie verbetert compressie voor transparante afbeeldingen door kleurwaarden van volledig transparante pixels te wijzigen. Interlacing-optie voor progressief laden van afbeeldingen. Het optimalisatieproces is volledig client-side, wat garandeert dat uw afbeeldingen nooit uw apparaat verlaten voor maximale privacy."
  },
  "sv": {
    "title": "Hur vi optimerar PNG-bilder",
    "description": "Detta verktyg använder Oxipng, en flertrådad förlustfri PNG/APNG-komprimeringsoptimizer skriven i Rust. Den ger utmärkt komprimeringsprestanda samtidigt som bildkvaliteten bibehålls. Viktiga optimeringsfunktioner inkluderar: Optimeringsnivåer (0 till 6), där högre nivåer ger bättre komprimering men tar längre tid. Alfa-optimering förbättrar komprimering för transparenta bilder genom att ändra färgvärden för helt transparenta pixlar. Interlacing-alternativ för progressiv bildladdning. Optimeringsprocessen är helt klient-side, vilket garanterar att dina bilder aldrig lämnar din enhet för maximal integritet."
  },
  "pl": {
    "title": "Jak optymalizujemy obrazy PNG",
    "description": "To narzędzie wykorzystuje Oxipng, wielowątkowy bezstratny optymalizator kompresji PNG/APNG napisany w Rust. Zapewnia doskonałą wydajność kompresji przy zachowaniu jakości obrazu. Kluczowe funkcje optymalizacji obejmują: Poziomy optymalizacji (0 do 6), gdzie wyższe poziomy zapewniają lepszą kompresję, ale zajmują więcej czasu. Optymalizacja alfa poprawia kompresję dla przezroczystych obrazów przez zmianę wartości kolorów całkowicie przezroczystych pikseli. Opcja przeplotu dla progresywnego ładowania obrazów. Proces optymalizacji jest w pełni po stronie klienta, gwarantując, że Twoje obrazy nigdy nie opuszczą Twojego urządzenia dla maksymalnej prywatności."
  },
  "vi": {
    "title": "Cách chúng tôi tối ưu hóa hình ảnh PNG",
    "description": "Công cụ này sử dụng Oxipng, một trình tối ưu hóa nén PNG/APNG không mất dữ liệu đa luồng được viết bằng Rust. Nó cung cấp hiệu suất nén xuất sắc trong khi duy trì chất lượng hình ảnh. Các tính năng tối ưu hóa chính bao gồm: Mức tối ưu hóa (0 đến 6), nơi mức cao hơn cung cấp nén tốt hơn nhưng mất nhiều thời gian hơn. Tối ưu hóa alpha cải thiện nén cho hình ảnh trong suốt bằng cách thay đổi giá trị màu của các pixel hoàn toàn trong suốt. Tùy chọn xen kẽ cho tải hình ảnh dần dần. Quá trình tối ưu hóa hoàn toàn ở phía máy khách, đảm bảo hình ảnh của bạn không bao giờ rời khỏi thiết bị để có quyền riêng tư tối đa."
  },
  "th": {
    "title": "วิธีที่เราปรับปรุงภาพ PNG",
    "description": "เครื่องมือนี้ใช้ Oxipng ซึ่งเป็นเครื่องมือปรับปรุงการบีบอัด PNG/APNG แบบไม่สูญเสียข้อมูลและรองรับ multithreading ที่เขียนด้วย Rust มันให้ประสิทธิภาพการบีบอัดที่ยอดเยี่ยมในขณะที่รักษาคุณภาพของภาพ คุณสมบัติการปรับปรุงหลักรวมถึง: ระดับการปรับปรุง (0 ถึง 6) ซึ่งระดับที่สูงกว่าให้การบีบอัดที่ดีกว่าแต่ใช้เวลานานกว่า การปรับปรุง alpha ช่วยปรับปรุงการบีบอัดสำหรับภาพโปร่งใสโดยการเปลี่ยนค่าสีของพิกเซลที่โปร่งใสสมบูรณ์ ตัวเลือก interlacing สำหรับการโหลดภาพแบบ progressive กระบวนการปรับปรุงเป็นแบบ client-side ทั้งหมด รับประกันว่าภาพของคุณจะไม่ออกจากอุปกรณ์ของคุณเพื่อความเป็นส่วนตัวสูงสุด"
  },
  "id": {
    "title": "Bagaimana Kami Mengoptimalkan Gambar PNG",
    "description": "Alat ini menggunakan Oxipng, pengoptimal kompresi PNG/APNG lossless multithreaded yang ditulis dalam Rust. Ini memberikan performa kompresi yang sangat baik sambil mempertahankan kualitas gambar. Fitur optimalisasi utama meliputi: Level optimalisasi (0 hingga 6), di mana level yang lebih tinggi memberikan kompresi yang lebih baik tetapi memerlukan waktu lebih lama. Optimalisasi alpha meningkatkan kompresi untuk gambar transparan dengan mengubah nilai warna piksel yang sepenuhnya transparan. Opsi interlacing untuk pemuatan gambar progresif. Proses optimalisasi sepenuhnya sisi klien, memastikan gambar Anda tidak pernah meninggalkan perangkat Anda untuk privasi maksimum."
  },
  "he": {
    "title": "איך אנחנו מייעלים תמונות PNG",
    "description": "הכלי הזה משתמש ב-Oxipng, מייעל דחיסת PNG/APNG ללא אובדן ורב-חוט שנכתב ב-Rust. הוא מספק ביצועי דחיסה מעולים תוך שמירה על איכות התמונה. תכונות הייעול העיקריות כוללות: רמות ייעול (0 עד 6), כאשר רמות גבוהות יותר מספקות דחיסה טובה יותר אך לוקחות זמן רב יותר. ייעול אלפא משפר דחיסה עבור תמונות שקופות על ידי שינוי ערכי הצבע של פיקסלים שקופים לחלוטין. אפשרות interlacing לטעינת תמונות מתקדמת. תהליך הייעול הוא לחלוטין בצד הלקוח, מבטיח שהתמונות שלכם לעולם לא יעזבו את המכשיר שלכם לפרטיות מקסימלית."
  },
  "ms": {
    "title": "Bagaimana Kami Mengoptimumkan Imej PNG",
    "description": "Alat ini menggunakan Oxipng, pengoptimum mampatan PNG/APNG tanpa kehilangan dan berbilang benang yang ditulis dalam Rust. Ia memberikan prestasi mampatan yang cemerlang sambil mengekalkan kualiti imej. Ciri pengoptimuman utama termasuk: Tahap pengoptimuman (0 hingga 6), di mana tahap yang lebih tinggi memberikan mampatan yang lebih baik tetapi mengambil masa yang lebih lama. Pengoptimuman alfa meningkatkan mampatan untuk imej lutsinar dengan mengubah nilai warna piksel yang benar-benar lutsinar. Pilihan interlacing untuk pemuatan imej progresif. Proses pengoptimuman sepenuhnya di sisi klien, memastikan imej anda tidak akan meninggalkan peranti anda untuk privasi maksimum."
  },
  "no": {
    "title": "Hvordan vi optimaliserer PNG-bilder",
    "description": "Dette verktøyet bruker Oxipng, en flertrådet tapsfri PNG/APNG komprimeringsoptimizer skrevet i Rust. Den gir utmerket komprimeringsytelse mens bildekvaliteten opprettholdes. Nøkkel optimaliseringsfunksjoner inkluderer: Optimaliseringsnivåer (0 til 6), der høyere nivåer gir bedre komprimering men tar lengre tid. Alfa-optimalisering forbedrer komprimering for gjennomsiktige bilder ved å endre fargeverdier for helt gjennomsiktige piksler. Interlacing-alternativ for progressiv bildlasting. Optimaliseringsprosessen er helt klient-side, og sikrer at bildene dine aldri forlater enheten din for maksimal personvern."
  }
}
</i18n>
