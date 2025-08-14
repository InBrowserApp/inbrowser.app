<template>
  <ToolSectionHeader>{{ t('title') }}</ToolSectionHeader>
  <ToolSection>
    <p>{{ t('description') }}</p>
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
    "title": "How We Get IP Information",
    "description": "This tool fetches IP information by making requests to third-party services including geojs.io, ip.sb, Cloudflare, Google DoH, and other geolocation providers. Please note that this is not an offline service and requires network connectivity to external servers to retrieve detailed IP address information including location, ISP, and other metadata."
  },
  "zh": {
    "title": "我们如何获取 IP 信息",
    "description": "此工具通过向第三方服务发送请求来获取 IP 信息，包括 geojs.io、ip.sb、Cloudflare、Google DoH 和其他地理位置提供商。请注意，这不是离线服务，需要网络连接到外部服务器来检索详细的 IP 地址信息，包括位置、ISP 和其他元数据。"
  },
  "zh-CN": {
    "title": "我们如何获取 IP 信息",
    "description": "此工具通过向第三方服务发送请求来获取 IP 信息，包括 geojs.io、ip.sb、Cloudflare、Google DoH 和其他地理位置提供商。请注意，这不是离线服务，需要网络连接到外部服务器来检索详细的 IP 地址信息，包括位置、ISP 和其他元数据。"
  },
  "zh-TW": {
    "title": "我們如何取得 IP 資訊",
    "description": "此工具透過向第三方服務發送請求來取得 IP 資訊，包括 geojs.io、ip.sb、Cloudflare、Google DoH 和其他地理位置提供商。請注意，這不是離線服務，需要網路連線到外部伺服器來檢索詳細的 IP 位址資訊，包括位置、ISP 和其他元資料。"
  },
  "zh-HK": {
    "title": "我們如何取得 IP 資訊",
    "description": "此工具透過向第三方服務發送請求來取得 IP 資訊，包括 geojs.io、ip.sb、Cloudflare、Google DoH 和其他地理位置提供商。請注意，這不是離線服務，需要網路連線到外部伺服器來檢索詳細的 IP 位址資訊，包括位置、ISP 和其他元資料。"
  },
  "es": {
    "title": "Cómo Obtenemos Información de IP",
    "description": "Esta herramienta obtiene información de IP realizando solicitudes a servicios de terceros que incluyen geojs.io, ip.sb, Cloudflare, Google DoH y otros proveedores de geolocalización. Tenga en cuenta que este no es un servicio sin conexión y requiere conectividad de red a servidores externos para recuperar información detallada de direcciones IP, incluida la ubicación, ISP y otros metadatos."
  },
  "fr": {
    "title": "Comment Nous Obtenons Les Informations IP",
    "description": "Cet outil récupère les informations IP en effectuant des requêtes vers des services tiers incluant geojs.io, ip.sb, Cloudflare, Google DoH et d'autres fournisseurs de géolocalisation. Veuillez noter que ce n'est pas un service hors ligne et nécessite une connectivité réseau vers des serveurs externes pour récupérer des informations détaillées d'adresse IP, y compris l'emplacement, le FAI et d'autres métadonnées."
  },
  "de": {
    "title": "Wie Wir IP-Informationen Erhalten",
    "description": "Dieses Tool ruft IP-Informationen ab, indem es Anfragen an Drittanbieterdienste stellt, einschließlich geojs.io, ip.sb, Cloudflare, Google DoH und anderen Geolokalisierungsanbietern. Bitte beachten Sie, dass dies kein Offline-Dienst ist und eine Netzwerkverbindung zu externen Servern erfordert, um detaillierte IP-Adressinformationen einschließlich Standort, ISP und andere Metadaten abzurufen."
  },
  "it": {
    "title": "Come Otteniamo Le Informazioni IP",
    "description": "Questo strumento recupera le informazioni IP effettuando richieste a servizi di terze parti tra cui geojs.io, ip.sb, Cloudflare, Google DoH e altri fornitori di geolocalizzazione. Si prega di notare che questo non è un servizio offline e richiede connettività di rete a server esterni per recuperare informazioni dettagliate sull'indirizzo IP, inclusa la posizione, ISP e altri metadati."
  },
  "ja": {
    "title": "IP 情報の取得方法",
    "description": "このツールは、geojs.io、ip.sb、Cloudflare、Google DoH、その他の地理位置情報プロバイダーなどのサードパーティサービスにリクエストを送信することで、IP 情報を取得します。これはオフラインサービスではなく、位置、ISP、その他のメタデータを含む詳細な IP アドレス情報を取得するために外部サーバーへのネットワーク接続が必要であることにご注意ください。"
  },
  "ko": {
    "title": "IP 정보 획득 방법",
    "description": "이 도구는 geojs.io, ip.sb, Cloudflare, Google DoH 및 기타 지오로케이션 제공업체를 포함한 타사 서비스에 요청을 보내 IP 정보를 가져옵니다. 이것은 오프라인 서비스가 아니며 위치, ISP 및 기타 메타데이터를 포함한 상세한 IP 주소 정보를 검색하기 위해 외부 서버에 대한 네트워크 연결이 필요함을 유의하시기 바랍니다."
  },
  "ru": {
    "title": "Как Мы Получаем Информацию об IP",
    "description": "Этот инструмент получает информацию об IP, отправляя запросы к сторонним сервисам, включая geojs.io, ip.sb, Cloudflare, Google DoH и других поставщиков геолокации. Обратите внимание, что это не офлайн-сервис и требует сетевого подключения к внешним серверам для получения подробной информации об IP-адресе, включая местоположение, провайдера и другие метаданные."
  },
  "pt": {
    "title": "Como Obtemos Informações de IP",
    "description": "Esta ferramenta busca informações de IP fazendo solicitações para serviços de terceiros, incluindo geojs.io, ip.sb, Cloudflare, Google DoH e outros provedores de geolocalização. Por favor, note que este não é um serviço offline e requer conectividade de rede para servidores externos para recuperar informações detalhadas de endereço IP, incluindo localização, ISP e outros metadados."
  },
  "ar": {
    "title": "كيف نحصل على معلومات IP",
    "description": "تحصل هذه الأداة على معلومات IP عن طريق إرسال طلبات إلى خدمات الطرف الثالث بما في ذلك geojs.io و ip.sb و Cloudflare و Google DoH ومقدمي خدمات الموقع الجغرافي الآخرين. يرجى ملاحظة أن هذه ليست خدمة غير متصلة بالإنترنت وتتطلب اتصال شبكة بخوادم خارجية لاسترداد معلومات تفصيلية عن عنوان IP بما في ذلك الموقع ومزود الخدمة وبيانات أخرى."
  },
  "hi": {
    "title": "हम IP जानकारी कैसे प्राप्त करते हैं",
    "description": "यह टूल geojs.io, ip.sb, Cloudflare, Google DoH और अन्य भौगोलिक स्थान प्रदाताओं सहित तीसरे पक्ष की सेवाओं से अनुरोध करके IP जानकारी प्राप्त करता है। कृपया ध्यान दें कि यह एक ऑफ़लाइन सेवा नहीं है और स्थान, ISP और अन्य मेटाडेटा सहित विस्तृत IP पता जानकारी प्राप्त करने के लिए बाहरी सर्वर से नेटवर्क कनेक्टिविटी की आवश्यकता होती है।"
  },
  "tr": {
    "title": "IP Bilgilerini Nasıl Alıyoruz",
    "description": "Bu araç, geojs.io, ip.sb, Cloudflare, Google DoH ve diğer coğrafi konum sağlayıcıları dahil olmak üzere üçüncü taraf hizmetlere istekler göndererek IP bilgilerini alır. Bunun çevrimdışı bir hizmet olmadığını ve konum, ISS ve diğer meta veriler dahil olmak üzere ayrıntılı IP adresi bilgilerini almak için harici sunuculara ağ bağlantısı gerektirdiğini unutmayın."
  },
  "nl": {
    "title": "Hoe We IP-Informatie Verkrijgen",
    "description": "Deze tool haalt IP-informatie op door verzoeken te sturen naar services van derden, waaronder geojs.io, ip.sb, Cloudflare, Google DoH en andere geolocatieproviders. Houd er rekening mee dat dit geen offline service is en netwerkconnectiviteit naar externe servers vereist om gedetailleerde IP-adresinformatie op te halen, inclusief locatie, ISP en andere metadata."
  },
  "sv": {
    "title": "Hur Vi Får IP-Information",
    "description": "Detta verktyg hämtar IP-information genom att göra förfrågningar till tredjepartstjänster inklusive geojs.io, ip.sb, Cloudflare, Google DoH och andra geolokationstjänster. Observera att detta inte är en offline-tjänst och kräver nätverksanslutning till externa servrar för att hämta detaljerad IP-adressinformation inklusive plats, ISP och andra metadata."
  },
  "pl": {
    "title": "Jak Otrzymujemy Informacje o IP",
    "description": "To narzędzie pobiera informacje o IP, wysyłając żądania do usług stron trzecich, w tym geojs.io, ip.sb, Cloudflare, Google DoH i innych dostawców geolokalizacji. Pamiętaj, że nie jest to usługa offline i wymaga połączenia sieciowego z zewnętrznymi serwerami w celu pobrania szczegółowych informacji o adresie IP, w tym lokalizacji, dostawcy usług internetowych i innych metadanych."
  },
  "vi": {
    "title": "Cách Chúng Tôi Lấy Thông Tin IP",
    "description": "Công cụ này lấy thông tin IP bằng cách gửi yêu cầu đến các dịch vụ bên thứ ba bao gồm geojs.io, ip.sb, Cloudflare, Google DoH và các nhà cung cấp định vị địa lý khác. Xin lưu ý rằng đây không phải là dịch vụ ngoại tuyến và yêu cầu kết nối mạng đến các máy chủ bên ngoài để truy xuất thông tin địa chỉ IP chi tiết bao gồm vị trí, ISP và siêu dữ liệu khác."
  },
  "th": {
    "title": "วิธีที่เราได้รับข้อมูล IP",
    "description": "เครื่องมือนี้ดึงข้อมูล IP โดยการส่งคำขอไปยังบริการของบุคคลที่สามรวมถึง geojs.io, ip.sb, Cloudflare, Google DoH และผู้ให้บริการตำแหน่งทางภูมิศาสตร์อื่นๆ โปรดทราบว่านี่ไม่ใช่บริการออฟไลน์และต้องการการเชื่อมต่อเครือข่ายไปยังเซิร์ฟเวอร์ภายนอกเพื่อดึงข้อมูลที่อยู่ IP โดยละเอียดรวมถึงตำแหน่ง ISP และข้อมูลเมตาอื่นๆ"
  },
  "id": {
    "title": "Bagaimana Kami Mendapatkan Informasi IP",
    "description": "Alat ini mengambil informasi IP dengan membuat permintaan ke layanan pihak ketiga termasuk geojs.io, ip.sb, Cloudflare, Google DoH, dan penyedia geolokasi lainnya. Harap dicatat bahwa ini bukan layanan offline dan memerlukan konektivitas jaringan ke server eksternal untuk mengambil informasi alamat IP terperinci termasuk lokasi, ISP, dan metadata lainnya."
  },
  "he": {
    "title": "איך אנחנו מקבלים מידע IP",
    "description": "כלי זה מקבל מידע IP על ידי שליחת בקשות לשירותי צד שלישי כולל geojs.io, ip.sb, Cloudflare, Google DoH וספקי גיאולוקציה אחרים. שימו לב שזה לא שירות לא מקוון ודורש קישוריות רשת לשרתים חיצוניים כדי לאחזר מידע מפורט על כתובת IP כולל מיקום, ספק אינטרנט ומטא-נתונים אחרים."
  },
  "ms": {
    "title": "Bagaimana Kami Mendapatkan Maklumat IP",
    "description": "Alat ini mengambil maklumat IP dengan membuat permintaan kepada perkhidmatan pihak ketiga termasuk geojs.io, ip.sb, Cloudflare, Google DoH, dan penyedia geolokasi lain. Sila ambil perhatian bahawa ini bukan perkhidmatan luar talian dan memerlukan sambungan rangkaian kepada pelayan luaran untuk mendapatkan maklumat alamat IP terperinci termasuk lokasi, ISP, dan metadata lain."
  },
  "no": {
    "title": "Hvordan Vi Får IP-Informasjon",
    "description": "Dette verktøyet henter IP-informasjon ved å sende forespørsler til tredjepartstjenester inkludert geojs.io, ip.sb, Cloudflare, Google DoH og andre geolokaliseringstjenester. Vær oppmerksom på at dette ikke er en offline-tjeneste og krever nettverkstilkobling til eksterne servere for å hente detaljert IP-adresseinformasjon inkludert plassering, ISP og andre metadata."
  }
}
</i18n>
