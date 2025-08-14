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
    "title": "How We Get Your IP Address",
    "description": "This tool fetches your IP address by making requests to third-party services including Cloudflare, geojs.io, ip.sb, and ipify.org. Please note that this is not an offline service and requires network connectivity to external servers to retrieve your public IP information."
  },
  "zh": {
    "title": "我们如何获取您的 IP 地址",
    "description": "此工具通过向第三方服务发送请求来获取您的 IP 地址，包括 Cloudflare、geojs.io、ip.sb 和 ipify.org。请注意，这不是离线服务，需要网络连接到外部服务器来检索您的公共 IP 信息。"
  },
  "zh-CN": {
    "title": "我们如何获取您的 IP 地址",
    "description": "此工具通过向第三方服务发送请求来获取您的 IP 地址，包括 Cloudflare、geojs.io、ip.sb 和 ipify.org。请注意，这不是离线服务，需要网络连接到外部服务器来检索您的公共 IP 信息。"
  },
  "zh-TW": {
    "title": "我們如何取得您的 IP 位址",
    "description": "此工具透過向第三方服務發送請求來取得您的 IP 位址，包括 Cloudflare、geojs.io、ip.sb 和 ipify.org。請注意，這不是離線服務，需要網路連線到外部伺服器來檢索您的公共 IP 資訊。"
  },
  "zh-HK": {
    "title": "我們如何取得您的 IP 位址",
    "description": "此工具透過向第三方服務發送請求來取得您的 IP 位址，包括 Cloudflare、geojs.io、ip.sb 和 ipify.org。請注意，這不是離線服務，需要網路連線到外部伺服器來檢索您的公共 IP 資訊。"
  },
  "es": {
    "title": "Cómo Obtenemos Su Dirección IP",
    "description": "Esta herramienta obtiene su dirección IP realizando solicitudes a servicios de terceros que incluyen Cloudflare, geojs.io, ip.sb e ipify.org. Tenga en cuenta que este no es un servicio sin conexión y requiere conectividad de red a servidores externos para recuperar su información de IP pública."
  },
  "fr": {
    "title": "Comment Nous Obtenons Votre Adresse IP",
    "description": "Cet outil récupère votre adresse IP en effectuant des requêtes vers des services tiers incluant Cloudflare, geojs.io, ip.sb et ipify.org. Veuillez noter que ce n'est pas un service hors ligne et nécessite une connectivité réseau vers des serveurs externes pour récupérer vos informations d'IP publique."
  },
  "de": {
    "title": "Wie Wir Ihre IP-Adresse Erhalten",
    "description": "Dieses Tool ruft Ihre IP-Adresse ab, indem es Anfragen an Drittanbieterdienste stellt, einschließlich Cloudflare, geojs.io, ip.sb und ipify.org. Bitte beachten Sie, dass dies kein Offline-Dienst ist und eine Netzwerkverbindung zu externen Servern erfordert, um Ihre öffentlichen IP-Informationen abzurufen."
  },
  "it": {
    "title": "Come Otteniamo Il Vostro Indirizzo IP",
    "description": "Questo strumento recupera il vostro indirizzo IP effettuando richieste a servizi di terze parti tra cui Cloudflare, geojs.io, ip.sb e ipify.org. Si prega di notare che questo non è un servizio offline e richiede connettività di rete a server esterni per recuperare le vostre informazioni IP pubbliche."
  },
  "ja": {
    "title": "IP アドレスの取得方法",
    "description": "このツールは、Cloudflare、geojs.io、ip.sb、ipify.org などのサードパーティサービスにリクエストを送信することで、あなたの IP アドレスを取得します。これはオフラインサービスではなく、パブリック IP 情報を取得するために外部サーバーへのネットワーク接続が必要であることにご注意ください。"
  },
  "ko": {
    "title": "IP 주소 획득 방법",
    "description": "이 도구는 Cloudflare, geojs.io, ip.sb, ipify.org를 포함한 타사 서비스에 요청을 보내 IP 주소를 가져옵니다. 이것은 오프라인 서비스가 아니며 공개 IP 정보를 검색하기 위해 외부 서버에 대한 네트워크 연결이 필요함을 유의하시기 바랍니다."
  },
  "ru": {
    "title": "Как Мы Получаем Ваш IP-Адрес",
    "description": "Этот инструмент получает ваш IP-адрес, отправляя запросы к сторонним сервисам, включая Cloudflare, geojs.io, ip.sb и ipify.org. Обратите внимание, что это не офлайн-сервис и требует сетевого подключения к внешним серверам для получения информации о вашем публичном IP."
  },
  "pt": {
    "title": "Como Obtemos Seu Endereço IP",
    "description": "Esta ferramenta busca seu endereço IP fazendo solicitações para serviços de terceiros, incluindo Cloudflare, geojs.io, ip.sb e ipify.org. Por favor, note que este não é um serviço offline e requer conectividade de rede para servidores externos para recuperar suas informações de IP público."
  },
  "ar": {
    "title": "كيف نحصل على عنوان IP الخاص بك",
    "description": "تحصل هذه الأداة على عنوان IP الخاص بك عن طريق إرسال طلبات إلى خدمات الطرف الثالث بما في ذلك Cloudflare و geojs.io و ip.sb و ipify.org. يرجى ملاحظة أن هذه ليست خدمة غير متصلة بالإنترنت وتتطلب اتصال شبكة بخوادم خارجية لاسترداد معلومات IP العامة الخاصة بك."
  },
  "hi": {
    "title": "हम आपका IP पता कैसे प्राप्त करते हैं",
    "description": "यह टूल Cloudflare, geojs.io, ip.sb, और ipify.org सहित तीसरे पक्ष की सेवाओं से अनुरोध करके आपका IP पता प्राप्त करता है। कृपया ध्यान दें कि यह एक ऑफ़लाइन सेवा नहीं है और आपकी सार्वजनिक IP जानकारी प्राप्त करने के लिए बाहरी सर्वर से नेटवर्क कनेक्टिविटी की आवश्यकता होती है।"
  },
  "tr": {
    "title": "IP Adresinizi Nasıl Alıyoruz",
    "description": "Bu araç, Cloudflare, geojs.io, ip.sb ve ipify.org dahil olmak üzere üçüncü taraf hizmetlere istekler göndererek IP adresinizi alır. Bunun çevrimdışı bir hizmet olmadığını ve genel IP bilgilerinizi almak için harici sunuculara ağ bağlantısı gerektirdiğini unutmayın."
  },
  "nl": {
    "title": "Hoe We Uw IP-Adres Verkrijgen",
    "description": "Deze tool haalt uw IP-adres op door verzoeken te sturen naar services van derden, waaronder Cloudflare, geojs.io, ip.sb en ipify.org. Houd er rekening mee dat dit geen offline service is en netwerkconnectiviteit naar externe servers vereist om uw openbare IP-informatie op te halen."
  },
  "sv": {
    "title": "Hur Vi Får Din IP-Adress",
    "description": "Detta verktyg hämtar din IP-adress genom att göra förfrågningar till tredjepartstjänster inklusive Cloudflare, geojs.io, ip.sb och ipify.org. Observera att detta inte är en offline-tjänst och kräver nätverksanslutning till externa servrar för att hämta din offentliga IP-information."
  },
  "pl": {
    "title": "Jak Otrzymujemy Twój Adres IP",
    "description": "To narzędzie pobiera Twój adres IP, wysyłając żądania do usług stron trzecich, w tym Cloudflare, geojs.io, ip.sb i ipify.org. Pamiętaj, że nie jest to usługa offline i wymaga połączenia sieciowego z zewnętrznymi serwerami w celu pobrania informacji o Twoim publicznym adresie IP."
  },
  "vi": {
    "title": "Cách Chúng Tôi Lấy Địa Chỉ IP Của Bạn",
    "description": "Công cụ này lấy địa chỉ IP của bạn bằng cách gửi yêu cầu đến các dịch vụ bên thứ ba bao gồm Cloudflare, geojs.io, ip.sb và ipify.org. Xin lưu ý rằng đây không phải là dịch vụ ngoại tuyến và yêu cầu kết nối mạng đến các máy chủ bên ngoài để truy xuất thông tin IP công cộng của bạn."
  },
  "th": {
    "title": "วิธีที่เราได้รับที่อยู่ IP ของคุณ",
    "description": "เครื่องมือนี้ดึงที่อยู่ IP ของคุณโดยการส่งคำขอไปยังบริการของบุคคลที่สามรวมถึง Cloudflare, geojs.io, ip.sb และ ipify.org โปรดทราบว่านี่ไม่ใช่บริการออฟไลน์และต้องการการเชื่อมต่อเครือข่ายไปยังเซิร์ฟเวอร์ภายนอกเพื่อดึงข้อมูล IP สาธารณะของคุณ"
  },
  "id": {
    "title": "Bagaimana Kami Mendapatkan Alamat IP Anda",
    "description": "Alat ini mengambil alamat IP Anda dengan membuat permintaan ke layanan pihak ketiga termasuk Cloudflare, geojs.io, ip.sb, dan ipify.org. Harap dicatat bahwa ini bukan layanan offline dan memerlukan konektivitas jaringan ke server eksternal untuk mengambil informasi IP publik Anda."
  },
  "he": {
    "title": "איך אנחנו מקבלים את כתובת ה-IP שלך",
    "description": "כלי זה מקבל את כתובת ה-IP שלך על ידי שליחת בקשות לשירותי צד שלישי כולל Cloudflare, geojs.io, ip.sb ו-ipify.org. שימו לב שזה לא שירות לא מקוון ודורש קישוריות רשת לשרתים חיצוניים כדי לאחזר את מידע ה-IP הציבורי שלכם."
  },
  "ms": {
    "title": "Bagaimana Kami Mendapatkan Alamat IP Anda",
    "description": "Alat ini mengambil alamat IP anda dengan membuat permintaan kepada perkhidmatan pihak ketiga termasuk Cloudflare, geojs.io, ip.sb, dan ipify.org. Sila ambil perhatian bahawa ini bukan perkhidmatan luar talian dan memerlukan sambungan rangkaian kepada pelayan luaran untuk mendapatkan maklumat IP awam anda."
  },
  "no": {
    "title": "Hvordan Vi Får Din IP-Adresse",
    "description": "Dette verktøyet henter din IP-adresse ved å sende forespørsler til tredjepartstjenester inkludert Cloudflare, geojs.io, ip.sb og ipify.org. Vær oppmerksom på at dette ikke er en offline-tjeneste og krever nettverkstilkobling til eksterne servere for å hente din offentlige IP-informasjon."
  }
}
</i18n>
