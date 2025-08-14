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
    "title": "What is IPv6 Link-Local Address?",
    "description": "IPv6 Link-Local addresses are special IPv6 addresses that are automatically configured on every IPv6-enabled interface. They always start with the prefix fe80::/10 and are used for communication between devices on the same network segment. These addresses are not routable beyond the local link and are commonly used for neighbor discovery, router discovery, and other local network protocols. Link-local addresses can be generated from a device's MAC address using the EUI-64 format."
  },
  "zh": {
    "title": "什么是 IPv6 链路本地地址？",
    "description": "IPv6 链路本地地址是在每个启用 IPv6 的接口上自动配置的特殊 IPv6 地址。它们总是以前缀 fe80::/10 开头，用于同一网络段上设备之间的通信。这些地址不能在本地链路之外路由，通常用于邻居发现、路由器发现和其他本地网络协议。链路本地地址可以使用 EUI-64 格式从设备的 MAC 地址生成。"
  },
  "zh-CN": {
    "title": "什么是 IPv6 链路本地地址？",
    "description": "IPv6 链路本地地址是在每个启用 IPv6 的接口上自动配置的特殊 IPv6 地址。它们总是以前缀 fe80::/10 开头，用于同一网络段上设备之间的通信。这些地址不能在本地链路之外路由，通常用于邻居发现、路由器发现和其他本地网络协议。链路本地地址可以使用 EUI-64 格式从设备的 MAC 地址生成。"
  },
  "zh-TW": {
    "title": "什麼是 IPv6 鏈路本地位址？",
    "description": "IPv6 鏈路本地位址是在每個啟用 IPv6 的介面上自動配置的特殊 IPv6 位址。它們總是以前綴 fe80::/10 開頭，用於同一網路段上裝置之間的通訊。這些位址不能在本地鏈路之外路由，通常用於鄰居發現、路由器發現和其他本地網路協定。鏈路本地位址可以使用 EUI-64 格式從裝置的 MAC 位址生成。"
  },
  "zh-HK": {
    "title": "什麼是 IPv6 鏈路本地位址？",
    "description": "IPv6 鏈路本地位址是在每個啟用 IPv6 的介面上自動配置的特殊 IPv6 位址。它們總是以前綴 fe80::/10 開頭，用於同一網路段上裝置之間的通訊。這些位址不能在本地鏈路之外路由，通常用於鄰居發現、路由器發現和其他本地網路協定。鏈路本地位址可以使用 EUI-64 格式從裝置的 MAC 位址生成。"
  },
  "es": {
    "title": "¿Qué es una dirección IPv6 de enlace local?",
    "description": "Las direcciones IPv6 de enlace local son direcciones IPv6 especiales que se configuran automáticamente en cada interfaz habilitada para IPv6. Siempre comienzan con el prefijo fe80::/10 y se utilizan para la comunicación entre dispositivos en el mismo segmento de red. Estas direcciones no son enrutables más allá del enlace local y se utilizan comúnmente para descubrimiento de vecinos, descubrimiento de enrutadores y otros protocolos de red local. Las direcciones de enlace local se pueden generar a partir de la dirección MAC de un dispositivo utilizando el formato EUI-64."
  },
  "fr": {
    "title": "Qu'est-ce qu'une adresse IPv6 de lien local ?",
    "description": "Les adresses IPv6 de lien local sont des adresses IPv6 spéciales qui sont automatiquement configurées sur chaque interface activée pour IPv6. Elles commencent toujours par le préfixe fe80::/10 et sont utilisées pour la communication entre les appareils sur le même segment de réseau. Ces adresses ne sont pas routables au-delà du lien local et sont couramment utilisées pour la découverte de voisins, la découverte de routeurs et d'autres protocoles de réseau local. Les adresses de lien local peuvent être générées à partir de l'adresse MAC d'un appareil en utilisant le format EUI-64."
  },
  "de": {
    "title": "Was ist eine IPv6 Link-Local-Adresse?",
    "description": "IPv6 Link-Local-Adressen sind spezielle IPv6-Adressen, die automatisch auf jeder IPv6-fähigen Schnittstelle konfiguriert werden. Sie beginnen immer mit dem Präfix fe80::/10 und werden für die Kommunikation zwischen Geräten im selben Netzwerksegment verwendet. Diese Adressen sind nicht über den lokalen Link hinaus routbar und werden häufig für Nachbarschaftserkennung, Router-Erkennung und andere lokale Netzwerkprotokolle verwendet. Link-Local-Adressen können aus der MAC-Adresse eines Geräts im EUI-64-Format generiert werden."
  },
  "it": {
    "title": "Cos'è un indirizzo IPv6 Link-Local?",
    "description": "Gli indirizzi IPv6 Link-Local sono indirizzi IPv6 speciali che vengono configurati automaticamente su ogni interfaccia abilitata per IPv6. Iniziano sempre con il prefisso fe80::/10 e sono utilizzati per la comunicazione tra dispositivi sullo stesso segmento di rete. Questi indirizzi non sono instradabili oltre il collegamento locale e sono comunemente utilizzati per la scoperta dei vicini, la scoperta del router e altri protocolli di rete locale. Gli indirizzi link-local possono essere generati dall'indirizzo MAC di un dispositivo utilizzando il formato EUI-64."
  },
  "ja": {
    "title": "IPv6 リンクローカルアドレスとは？",
    "description": "IPv6 リンクローカルアドレスは、IPv6 対応のすべてのインターフェースで自動的に設定される特別な IPv6 アドレスです。常に fe80::/10 のプレフィックスで始まり、同じネットワークセグメント上のデバイス間の通信に使用されます。これらのアドレスはローカルリンクを超えてルーティングできず、近隣探索、ルーター探索、その他のローカルネットワークプロトコルによく使用されます。リンクローカルアドレスは、EUI-64 形式を使用してデバイスの MAC アドレスから生成できます。"
  },
  "ko": {
    "title": "IPv6 링크 로컬 주소란 무엇인가요?",
    "description": "IPv6 링크 로컬 주소는 IPv6가 활성화된 모든 인터페이스에서 자동으로 구성되는 특별한 IPv6 주소입니다. 항상 fe80::/10 접두사로 시작하며 동일한 네트워크 세그먼트의 장치 간 통신에 사용됩니다. 이러한 주소는 로컬 링크를 넘어서 라우팅할 수 없으며 일반적으로 인접 장치 발견, 라우터 발견 및 기타 로컬 네트워크 프로토콜에 사용됩니다. 링크 로컬 주소는 EUI-64 형식을 사용하여 장치의 MAC 주소에서 생성할 수 있습니다."
  },
  "ru": {
    "title": "Что такое IPv6 локальный адрес канала?",
    "description": "IPv6 локальные адреса канала — это специальные IPv6-адреса, которые автоматически настраиваются на каждом интерфейсе с поддержкой IPv6. Они всегда начинаются с префикса fe80::/10 и используются для связи между устройствами в одном сегменте сети. Эти адреса не маршрутизируются за пределы локального канала и обычно используются для обнаружения соседей, обнаружения маршрутизаторов и других протоколов локальной сети. Локальные адреса канала могут генерироваться из MAC-адреса устройства с использованием формата EUI-64."
  },
  "pt": {
    "title": "O que é um endereço IPv6 Link-Local?",
    "description": "Endereços IPv6 Link-Local são endereços IPv6 especiais que são automaticamente configurados em cada interface habilitada para IPv6. Eles sempre começam com o prefixo fe80::/10 e são usados para comunicação entre dispositivos no mesmo segmento de rede. Esses endereços não são roteáveis além do link local e são comumente usados para descoberta de vizinhos, descoberta de roteadores e outros protocolos de rede local. Endereços link-local podem ser gerados a partir do endereço MAC de um dispositivo usando o formato EUI-64."
  },
  "ar": {
    "title": "ما هو عنوان IPv6 المحلي للرابط؟",
    "description": "عناوين IPv6 المحلية للرابط هي عناوين IPv6 خاصة يتم تكوينها تلقائيًا على كل واجهة ممكّنة لـ IPv6. تبدأ دائمًا بالبادئة fe80::/10 وتستخدم للاتصال بين الأجهزة في نفس شريحة الشبكة. هذه العناوين غير قابلة للتوجيه خارج الرابط المحلي وتستخدم عادة لاكتشاف الجيران واكتشاف الموجهات وبروتوكولات الشبكة المحلية الأخرى. يمكن إنشاء العناوين المحلية للرابط من عنوان MAC للجهاز باستخدام تنسيق EUI-64."
  },
  "hi": {
    "title": "IPv6 लिंक-लोकल एड्रेस क्या है?",
    "description": "IPv6 लिंक-लोकल एड्रेस विशेष IPv6 एड्रेस हैं जो हर IPv6-सक्षम इंटरफेस पर स्वचालित रूप से कॉन्फ़िगर होते हैं। ये हमेशा fe80::/10 प्रीफिक्स से शुरू होते हैं और समान नेटवर्क सेगमेंट पर डिवाइसेज के बीच संचार के लिए उपयोग किए जाते हैं। ये एड्रेस स्थानीय लिंक से आगे रूट नहीं होते और आमतौर पर पड़ोसी खोज, राउटर खोज और अन्य स्थानीय नेटवर्क प्रोटोकॉल के लिए उपयोग किए जाते हैं। लिंक-लोकल एड्रेस EUI-64 फॉर्मेट का उपयोग करके डिवाइस के MAC एड्रेस से जेनरेट किए जा सकते हैं।"
  },
  "tr": {
    "title": "IPv6 Link-Local Adresi Nedir?",
    "description": "IPv6 Link-Local adresleri, IPv6 etkin her arayüzde otomatik olarak yapılandırılan özel IPv6 adresleridir. Her zaman fe80::/10 öneki ile başlarlar ve aynı ağ segmentindeki cihazlar arasındaki iletişim için kullanılırlar. Bu adresler yerel bağlantının ötesinde yönlendirilemez ve genellikle komşu keşfi, yönlendirici keşfi ve diğer yerel ağ protokolleri için kullanılır. Link-local adresler, EUI-64 formatını kullanarak bir cihazın MAC adresinden oluşturulabilir."
  },
  "nl": {
    "title": "Wat is een IPv6 Link-Local adres?",
    "description": "IPv6 Link-Local adressen zijn speciale IPv6-adressen die automatisch worden geconfigureerd op elke IPv6-ingeschakelde interface. Ze beginnen altijd met het prefix fe80::/10 en worden gebruikt voor communicatie tussen apparaten op hetzelfde netwerksegment. Deze adressen zijn niet routeerbaar buiten de lokale link en worden vaak gebruikt voor buurontdekking, routerontdekking en andere lokale netwerkprotocollen. Link-local adressen kunnen worden gegenereerd uit het MAC-adres van een apparaat met behulp van het EUI-64-formaat."
  },
  "sv": {
    "title": "Vad är en IPv6 Link-Local adress?",
    "description": "IPv6 Link-Local adresser är speciella IPv6-adresser som automatiskt konfigureras på varje IPv6-aktiverat gränssnitt. De börjar alltid med prefixet fe80::/10 och används för kommunikation mellan enheter på samma nätverkssegment. Dessa adresser är inte routningsbara utanför den lokala länken och används vanligtvis för grannupptäckt, routerupptäckt och andra lokala nätverksprotokoll. Link-local adresser kan genereras från en enhets MAC-adress med EUI-64-formatet."
  },
  "pl": {
    "title": "Co to jest adres IPv6 Link-Local?",
    "description": "Adresy IPv6 Link-Local to specjalne adresy IPv6, które są automatycznie konfigurowane na każdym interfejsie z obsługą IPv6. Zawsze zaczynają się od prefiksu fe80::/10 i są używane do komunikacji między urządzeniami w tym samym segmencie sieci. Te adresy nie są rutowalny poza lokalnym łączem i są powszechnie używane do odkrywania sąsiadów, odkrywania routerów i innych protokołów sieci lokalnej. Adresy link-local mogą być generowane z adresu MAC urządzenia przy użyciu formatu EUI-64."
  },
  "vi": {
    "title": "Địa chỉ IPv6 Link-Local là gì?",
    "description": "Địa chỉ IPv6 Link-Local là những địa chỉ IPv6 đặc biệt được tự động cấu hình trên mọi giao diện hỗ trợ IPv6. Chúng luôn bắt đầu bằng tiền tố fe80::/10 và được sử dụng để liên lạc giữa các thiết bị trên cùng một phân đoạn mạng. Những địa chỉ này không thể định tuyến vượt ra ngoài liên kết cục bộ và thường được sử dụng cho khám phá láng giềng, khám phá bộ định tuyến và các giao thức mạng cục bộ khác. Địa chỉ link-local có thể được tạo từ địa chỉ MAC của thiết bị sử dụng định dạng EUI-64."
  },
  "th": {
    "title": "ที่อยู่ IPv6 Link-Local คืออะไร?",
    "description": "ที่อยู่ IPv6 Link-Local เป็นที่อยู่ IPv6 พิเศษที่ถูกกำหนดค่าโดยอัตโนมัติบนทุกอินเทอร์เฟซที่เปิดใช้งาน IPv6 พวกมันเริ่มต้นด้วย prefix fe80::/10 เสมอและใช้สำหรับการสื่อสารระหว่างอุปกรณ์ในส่วนเครือข่ายเดียวกัน ที่อยู่เหล่านี้ไม่สามารถ route ได้นอกเหนือจาก local link และมักใช้สำหรับการค้นหาเพื่อนบ้าน การค้นหาเราเตอร์ และโปรโตคอลเครือข่ายท้องถิ่นอื่นๆ ที่อยู่ link-local สามารถสร้างจากที่อยู่ MAC ของอุปกรณ์โดยใช้รูปแบบ EUI-64"
  },
  "id": {
    "title": "Apa itu Alamat IPv6 Link-Local?",
    "description": "Alamat IPv6 Link-Local adalah alamat IPv6 khusus yang secara otomatis dikonfigurasi pada setiap antarmuka yang mendukung IPv6. Mereka selalu dimulai dengan awalan fe80::/10 dan digunakan untuk komunikasi antar perangkat pada segmen jaringan yang sama. Alamat-alamat ini tidak dapat dirutekan di luar tautan lokal dan umumnya digunakan untuk penemuan tetangga, penemuan router, dan protokol jaringan lokal lainnya. Alamat link-local dapat dihasilkan dari alamat MAC perangkat menggunakan format EUI-64."
  },
  "he": {
    "title": "מה זה כתובת IPv6 Link-Local?",
    "description": "כתובות IPv6 Link-Local הן כתובות IPv6 מיוחדות המוגדרות אוטומטית על כל ממשק המותאם ל-IPv6. הן תמיד מתחילות עם הקידומת fe80::/10 ומשמשות לתקשורת בין מכשירים באותו קטע רשת. כתובות אלה אינן ניתנות לניתוב מעבר לקישור המקומי ונמצאות בשימוש נפוץ לגילוי שכנים, גילוי נתבים ופרוטוקולי רשת מקומיים אחרים. כתובות link-local יכולות להיווצר מכתובת MAC של מכשיר באמצעות פורמט EUI-64."
  },
  "ms": {
    "title": "Apakah Alamat IPv6 Link-Local?",
    "description": "Alamat IPv6 Link-Local adalah alamat IPv6 khas yang dikonfigurasi secara automatik pada setiap antara muka yang didayakan IPv6. Mereka sentiasa bermula dengan awalan fe80::/10 dan digunakan untuk komunikasi antara peranti dalam segmen rangkaian yang sama. Alamat-alamat ini tidak boleh dihalakan di luar pautan tempatan dan biasanya digunakan untuk penemuan jiran, penemuan penghala, dan protokol rangkaian tempatan yang lain. Alamat link-local boleh dijana daripada alamat MAC peranti menggunakan format EUI-64."
  },
  "no": {
    "title": "Hva er en IPv6 Link-Local adresse?",
    "description": "IPv6 Link-Local adresser er spesielle IPv6-adresser som automatisk konfigureres på hvert IPv6-aktiverte grensesnitt. De starter alltid med prefikset fe80::/10 og brukes til kommunikasjon mellom enheter på samme nettverkssegment. Disse adressene er ikke rutbare utenfor den lokale lenken og brukes vanligvis til nabooppdagelse, ruteroppdagelse og andre lokale nettverksprotokoller. Link-local adresser kan genereres fra en enhets MAC-adresse ved hjelp av EUI-64-formatet."
  }
}
</i18n>
