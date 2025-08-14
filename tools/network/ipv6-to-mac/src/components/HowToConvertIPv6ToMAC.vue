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
    "title": "How to Convert IPv6 to MAC Address",
    "description": "Converting an IPv6 address to a MAC address is possible when the IPv6 address was generated using the EUI-64 format from a MAC address. This typically applies to IPv6 link-local addresses (starting with fe80::) and some stateless autoconfigured addresses. The process involves: 1) Extracting the interface identifier (last 64 bits) from the IPv6 address, 2) Inverting the 7th bit (Universal/Local bit) of the first byte, 3) Removing the inserted 'fffe' bytes to reconstruct the original 48-bit MAC address. Note that this only works for IPv6 addresses that were originally derived from MAC addresses using EUI-64."
  },
  "zh": {
    "title": "如何将 IPv6 转换为 MAC 地址",
    "description": "当 IPv6 地址是使用 EUI-64 格式从 MAC 地址生成时，可以将 IPv6 地址转换为 MAC 地址。这通常适用于 IPv6 链路本地地址（以 fe80:: 开头）和一些无状态自动配置地址。转换过程包括：1）从 IPv6 地址中提取接口标识符（最后 64 位），2）反转第一个字节的第 7 位（通用/本地位），3）移除插入的 'fffe' 字节以重构原始的 48 位 MAC 地址。请注意，这只适用于最初使用 EUI-64 从 MAC 地址派生的 IPv6 地址。"
  },
  "zh-CN": {
    "title": "如何将 IPv6 转换为 MAC 地址",
    "description": "当 IPv6 地址是使用 EUI-64 格式从 MAC 地址生成时，可以将 IPv6 地址转换为 MAC 地址。这通常适用于 IPv6 链路本地地址（以 fe80:: 开头）和一些无状态自动配置地址。转换过程包括：1）从 IPv6 地址中提取接口标识符（最后 64 位），2）反转第一个字节的第 7 位（通用/本地位），3）移除插入的 'fffe' 字节以重构原始的 48 位 MAC 地址。请注意，这只适用于最初使用 EUI-64 从 MAC 地址派生的 IPv6 地址。"
  },
  "zh-TW": {
    "title": "如何將 IPv6 轉換為 MAC 位址",
    "description": "當 IPv6 位址是使用 EUI-64 格式從 MAC 位址生成時，可以將 IPv6 位址轉換為 MAC 位址。這通常適用於 IPv6 鏈路本地位址（以 fe80:: 開頭）和一些無狀態自動配置位址。轉換過程包括：1）從 IPv6 位址中提取介面識別符（最後 64 位），2）反轉第一個位元組的第 7 位（通用/本地位），3）移除插入的 'fffe' 位元組以重構原始的 48 位 MAC 位址。請注意，這只適用於最初使用 EUI-64 從 MAC 位址派生的 IPv6 位址。"
  },
  "zh-HK": {
    "title": "如何將 IPv6 轉換為 MAC 位址",
    "description": "當 IPv6 位址是使用 EUI-64 格式從 MAC 位址生成時，可以將 IPv6 位址轉換為 MAC 位址。這通常適用於 IPv6 鏈路本地位址（以 fe80:: 開頭）和一些無狀態自動配置位址。轉換過程包括：1）從 IPv6 位址中提取介面識別符（最後 64 位），2）反轉第一個位元組的第 7 位（通用/本地位），3）移除插入的 'fffe' 位元組以重構原始的 48 位 MAC 位址。請注意，這只適用於最初使用 EUI-64 從 MAC 位址派生的 IPv6 位址。"
  },
  "es": {
    "title": "Cómo convertir IPv6 a dirección MAC",
    "description": "Convertir una dirección IPv6 a una dirección MAC es posible cuando la dirección IPv6 se generó usando el formato EUI-64 a partir de una dirección MAC. Esto generalmente se aplica a las direcciones IPv6 de enlace local (que comienzan con fe80::) y algunas direcciones autoconfiguradas sin estado. El proceso involucra: 1) Extraer el identificador de interfaz (últimos 64 bits) de la dirección IPv6, 2) Invertir el 7º bit (bit Universal/Local) del primer byte, 3) Eliminar los bytes 'fffe' insertados para reconstruir la dirección MAC original de 48 bits. Tenga en cuenta que esto solo funciona para direcciones IPv6 que originalmente se derivaron de direcciones MAC usando EUI-64."
  },
  "fr": {
    "title": "Comment convertir IPv6 en adresse MAC",
    "description": "Convertir une adresse IPv6 en adresse MAC est possible lorsque l'adresse IPv6 a été générée en utilisant le format EUI-64 à partir d'une adresse MAC. Cela s'applique généralement aux adresses IPv6 de lien local (commençant par fe80::) et à certaines adresses autoconfigurées sans état. Le processus implique : 1) Extraire l'identifiant d'interface (derniers 64 bits) de l'adresse IPv6, 2) Inverser le 7ème bit (bit Universel/Local) du premier octet, 3) Supprimer les octets 'fffe' insérés pour reconstruire l'adresse MAC originale de 48 bits. Notez que cela ne fonctionne que pour les adresses IPv6 qui ont été originellement dérivées d'adresses MAC en utilisant EUI-64."
  },
  "de": {
    "title": "IPv6 in MAC-Adresse konvertieren",
    "description": "Die Konvertierung einer IPv6-Adresse in eine MAC-Adresse ist möglich, wenn die IPv6-Adresse mit dem EUI-64-Format aus einer MAC-Adresse generiert wurde. Dies gilt normalerweise für IPv6 Link-Local-Adressen (beginnend mit fe80::) und einige zustandslose autokonfigurierte Adressen. Der Prozess umfasst: 1) Extrahieren der Schnittstellenkennung (letzte 64 Bits) aus der IPv6-Adresse, 2) Invertieren des 7. Bits (Universal/Local-Bit) des ersten Bytes, 3) Entfernen der eingefügten 'fffe'-Bytes zur Rekonstruktion der ursprünglichen 48-Bit-MAC-Adresse. Beachten Sie, dass dies nur für IPv6-Adressen funktioniert, die ursprünglich mit EUI-64 aus MAC-Adressen abgeleitet wurden."
  },
  "it": {
    "title": "Come convertire IPv6 in indirizzo MAC",
    "description": "Convertire un indirizzo IPv6 in un indirizzo MAC è possibile quando l'indirizzo IPv6 è stato generato utilizzando il formato EUI-64 da un indirizzo MAC. Questo si applica tipicamente agli indirizzi IPv6 link-local (che iniziano con fe80::) e ad alcuni indirizzi autoconfigurati senza stato. Il processo comporta: 1) Estrarre l'identificatore di interfaccia (ultimi 64 bit) dall'indirizzo IPv6, 2) Invertire il 7° bit (bit Universale/Locale) del primo byte, 3) Rimuovere i byte 'fffe' inseriti per ricostruire l'indirizzo MAC originale a 48 bit. Nota che questo funziona solo per indirizzi IPv6 che sono stati originariamente derivati da indirizzi MAC usando EUI-64."
  },
  "ja": {
    "title": "IPv6 を MAC アドレスに変換する方法",
    "description": "IPv6 アドレスが MAC アドレスから EUI-64 形式を使用して生成された場合、IPv6 アドレスを MAC アドレスに変換することが可能です。これは通常、IPv6 リンクローカルアドレス（fe80:: で始まる）および一部のステートレス自動設定アドレスに適用されます。変換プロセスには以下が含まれます：1）IPv6 アドレスからインターフェース識別子（最後の 64 ビット）を抽出、2）最初のバイトの第 7 ビット（ユニバーサル/ローカルビット）を反転、3）挿入された 'fffe' バイトを削除して元の 48 ビット MAC アドレスを再構築。これは元々 EUI-64 を使用して MAC アドレスから派生した IPv6 アドレスでのみ機能することに注意してください。"
  },
  "ko": {
    "title": "IPv6를 MAC 주소로 변환하는 방법",
    "description": "IPv6 주소가 MAC 주소에서 EUI-64 형식을 사용하여 생성된 경우 IPv6 주소를 MAC 주소로 변환할 수 있습니다. 이는 일반적으로 IPv6 링크 로컬 주소(fe80::로 시작)와 일부 상태 비저장 자동 구성 주소에 적용됩니다. 변환 과정은 다음과 같습니다: 1) IPv6 주소에서 인터페이스 식별자(마지막 64비트) 추출, 2) 첫 번째 바이트의 7번째 비트(범용/로컬 비트) 반전, 3) 삽입된 'fffe' 바이트를 제거하여 원래 48비트 MAC 주소 재구성. 이는 원래 EUI-64를 사용하여 MAC 주소에서 파생된 IPv6 주소에서만 작동한다는 점에 유의하세요."
  },
  "ru": {
    "title": "Как преобразовать IPv6 в MAC-адрес",
    "description": "Преобразование IPv6-адреса в MAC-адрес возможно, когда IPv6-адрес был сгенерирован с использованием формата EUI-64 из MAC-адреса. Это обычно применимо к IPv6 локальным адресам канала (начинающимся с fe80::) и некоторым автоконфигурируемым адресам без сохранения состояния. Процесс включает: 1) Извлечение идентификатора интерфейса (последние 64 бита) из IPv6-адреса, 2) Инвертирование 7-го бита (бит Универсальный/Локальный) первого байта, 3) Удаление вставленных байтов 'fffe' для восстановления исходного 48-битного MAC-адреса. Обратите внимание, что это работает только для IPv6-адресов, которые изначально были получены из MAC-адресов с использованием EUI-64."
  },
  "pt": {
    "title": "Como converter IPv6 para endereço MAC",
    "description": "Converter um endereço IPv6 para um endereço MAC é possível quando o endereço IPv6 foi gerado usando o formato EUI-64 a partir de um endereço MAC. Isso geralmente se aplica a endereços IPv6 link-local (começando com fe80::) e alguns endereços autoconfigurados sem estado. O processo envolve: 1) Extrair o identificador de interface (últimos 64 bits) do endereço IPv6, 2) Inverter o 7º bit (bit Universal/Local) do primeiro byte, 3) Remover os bytes 'fffe' inseridos para reconstruir o endereço MAC original de 48 bits. Note que isso só funciona para endereços IPv6 que foram originalmente derivados de endereços MAC usando EUI-64."
  },
  "ar": {
    "title": "كيفية تحويل IPv6 إلى عنوان MAC",
    "description": "تحويل عنوان IPv6 إلى عنوان MAC ممكن عندما يكون عنوان IPv6 قد تم إنشاؤه باستخدام تنسيق EUI-64 من عنوان MAC. هذا ينطبق عادة على عناوين IPv6 المحلية للرابط (التي تبدأ بـ fe80::) وبعض العناوين المكونة تلقائيًا بدون حالة. تتضمن العملية: 1) استخراج معرف الواجهة (آخر 64 بت) من عنوان IPv6، 2) عكس البت السابع (بت عام/محلي) من البايت الأول، 3) إزالة بايتات 'fffe' المدرجة لإعادة بناء عنوان MAC الأصلي 48 بت. لاحظ أن هذا يعمل فقط مع عناوين IPv6 التي تم اشتقاقها أصلاً من عناوين MAC باستخدام EUI-64."
  },
  "hi": {
    "title": "IPv6 को MAC एड्रेस में कैसे कन्वर्ट करें",
    "description": "IPv6 एड्रेस को MAC एड्रेस में कन्वर्ट करना तब संभव है जब IPv6 एड्रेस MAC एड्रेस से EUI-64 फॉर्मेट का उपयोग करके जेनरेट किया गया हो। यह आमतौर पर IPv6 लिंक-लोकल एड्रेस (fe80:: से शुरू होने वाले) और कुछ स्टेटलेस ऑटोकॉन्फ़िगर्ड एड्रेस पर लागू होता है। प्रक्रिया में शामिल है: 1) IPv6 एड्रेस से इंटरफेस आइडेंटिफायर (अंतिम 64 बिट्स) निकालना, 2) पहले बाइट के 7वें बिट (यूनिवर्सल/लोकल बिट) को इन्वर्ट करना, 3) मूल 48-बिट MAC एड्रेस को पुनर्निर्माण करने के लिए डाले गए 'fffe' बाइट्स को हटाना। ध्यान दें कि यह केवल उन IPv6 एड्रेस के लिए काम करता है जो मूल रूप से EUI-64 का उपयोग करके MAC एड्रेस से व्युत्पन्न थे।"
  },
  "tr": {
    "title": "IPv6'yı MAC Adresine Nasıl Dönüştürülür",
    "description": "IPv6 adresi MAC adresinden EUI-64 formatı kullanılarak oluşturulduğunda, bir IPv6 adresini MAC adresine dönüştürmek mümkündür. Bu genellikle IPv6 link-local adresler (fe80:: ile başlayan) ve bazı durumsuz otomatik yapılandırılmış adresler için geçerlidir. Süreç şunları içerir: 1) IPv6 adresinden arayüz tanımlayıcısını (son 64 bit) çıkarma, 2) İlk baytın 7. bitini (Evrensel/Yerel bit) ters çevirme, 3) Orijinal 48-bit MAC adresini yeniden oluşturmak için eklenen 'fffe' baytlarını kaldırma. Bunun yalnızca orijinal olarak EUI-64 kullanılarak MAC adreslerinden türetilen IPv6 adresleri için çalıştığını unutmayın."
  },
  "nl": {
    "title": "Hoe IPv6 naar MAC-adres te converteren",
    "description": "Het converteren van een IPv6-adres naar een MAC-adres is mogelijk wanneer het IPv6-adres is gegenereerd met behulp van het EUI-64-formaat van een MAC-adres. Dit geldt meestal voor IPv6 link-local adressen (beginnend met fe80::) en sommige stateless autoconfigured adressen. Het proces omvat: 1) Extractie van de interface-identifier (laatste 64 bits) uit het IPv6-adres, 2) Omkering van de 7e bit (Universeel/Lokaal bit) van de eerste byte, 3) Verwijdering van de ingevoegde 'fffe' bytes om het oorspronkelijke 48-bits MAC-adres te reconstrueren. Merk op dat dit alleen werkt voor IPv6-adressen die oorspronkelijk zijn afgeleid van MAC-adressen met behulp van EUI-64."
  },
  "sv": {
    "title": "Hur man konverterar IPv6 till MAC-adress",
    "description": "Att konvertera en IPv6-adress till en MAC-adress är möjligt när IPv6-adressen genererades med hjälp av EUI-64-formatet från en MAC-adress. Detta gäller vanligtvis IPv6 link-local adresser (som börjar med fe80::) och vissa stateless autoconfigured adresser. Processen innebär: 1) Extrahera gränssnittsidentifieraren (sista 64 bitarna) från IPv6-adressen, 2) Invertera den 7:e biten (Universal/Local bit) i den första byten, 3) Ta bort de infogade 'fffe'-byten för att rekonstruera den ursprungliga 48-bitars MAC-adressen. Observera att detta endast fungerar för IPv6-adresser som ursprungligen härletts från MAC-adresser med EUI-64."
  },
  "pl": {
    "title": "Jak przekonwertować IPv6 na adres MAC",
    "description": "Konwersja adresu IPv6 na adres MAC jest możliwa, gdy adres IPv6 został wygenerowany przy użyciu formatu EUI-64 z adresu MAC. Dotyczy to zazwyczaj adresów IPv6 link-local (zaczynających się od fe80::) i niektórych adresów autoconfigured bez stanu. Proces obejmuje: 1) Wyodrębnienie identyfikatora interfejsu (ostatnie 64 bity) z adresu IPv6, 2) Odwrócenie 7. bitu (bit Uniwersalny/Lokalny) pierwszego bajtu, 3) Usunięcie wstawionych bajtów 'fffe' w celu rekonstrukcji oryginalnego 48-bitowego adresu MAC. Zauważ, że działa to tylko dla adresów IPv6, które zostały pierwotnie wyprowadzone z adresów MAC przy użyciu EUI-64."
  },
  "vi": {
    "title": "Cách chuyển đổi IPv6 thành địa chỉ MAC",
    "description": "Chuyển đổi địa chỉ IPv6 thành địa chỉ MAC là có thể khi địa chỉ IPv6 được tạo bằng định dạng EUI-64 từ địa chỉ MAC. Điều này thường áp dụng cho địa chỉ IPv6 link-local (bắt đầu bằng fe80::) và một số địa chỉ tự động cấu hình không trạng thái. Quá trình bao gồm: 1) Trích xuất bộ nhận dạng giao diện (64 bit cuối) từ địa chỉ IPv6, 2) Đảo ngược bit thứ 7 (bit Universal/Local) của byte đầu tiên, 3) Loại bỏ các byte 'fffe' được chèn vào để tái tạo địa chỉ MAC 48-bit gốc. Lưu ý rằng điều này chỉ hoạt động với các địa chỉ IPv6 ban đầu được tạo từ địa chỉ MAC bằng EUI-64."
  },
  "th": {
    "title": "วิธีแปลง IPv6 เป็นที่อยู่ MAC",
    "description": "การแปลงที่อยู่ IPv6 เป็นที่อยู่ MAC เป็นไปได้เมื่อที่อยู่ IPv6 ถูกสร้างโดยใช้รูปแบบ EUI-64 จากที่อยู่ MAC นี่มักจะใช้กับที่อยู่ IPv6 link-local (ขึ้นต้นด้วย fe80::) และที่อยู่ autoconfigured แบบ stateless บางตัว กระบวนการประกอบด้วย: 1) แยกตัวระบุอินเทอร์เฟซ (64 บิตสุดท้าย) จากที่อยู่ IPv6, 2) กลับบิตที่ 7 (บิต Universal/Local) ของไบต์แรก, 3) ลบไบต์ 'fffe' ที่แทรกเข้าไปเพื่อสร้างที่อยู่ MAC 48-บิตต้นฉบับใหม่ โปรดทราบว่านี่ใช้ได้เฉพาะกับที่อยู่ IPv6 ที่เดิมมาจากที่อยู่ MAC โดยใช้ EUI-64"
  },
  "id": {
    "title": "Cara Mengkonversi IPv6 ke Alamat MAC",
    "description": "Mengkonversi alamat IPv6 ke alamat MAC dimungkinkan ketika alamat IPv6 dibuat menggunakan format EUI-64 dari alamat MAC. Ini biasanya berlaku untuk alamat IPv6 link-local (dimulai dengan fe80::) dan beberapa alamat autoconfigured stateless. Prosesnya melibatkan: 1) Mengekstrak identifier interface (64 bit terakhir) dari alamat IPv6, 2) Membalik bit ke-7 (bit Universal/Local) dari byte pertama, 3) Menghapus byte 'fffe' yang disisipkan untuk merekonstruksi alamat MAC 48-bit asli. Perhatikan bahwa ini hanya bekerja untuk alamat IPv6 yang awalnya diturunkan dari alamat MAC menggunakan EUI-64."
  },
  "he": {
    "title": "איך להמיר IPv6 לכתובת MAC",
    "description": "המרת כתובת IPv6 לכתובת MAC אפשרית כאשר כתובת ה-IPv6 נוצרה באמצעות פורמט EUI-64 מכתובת MAC. זה בדרך כלל חל על כתובות IPv6 link-local (המתחילות ב-fe80::) וכמה כתובות autoconfigured ללא מצב. התהליך כולל: 1) חילוץ מזהה הממשק (64 הביטים האחרונים) מכתובת ה-IPv6, 2) הפיכת הביט ה-7 (ביט Universal/Local) של הבייט הראשון, 3) הסרת בייטי ה-'fffe' שהוכנסו כדי לשחזר את כתובת ה-MAC המקורית של 48 ביט. שימו לב שזה עובד רק עבור כתובות IPv6 שנגזרו במקור מכתובות MAC באמצעות EUI-64."
  },
  "ms": {
    "title": "Cara Menukar IPv6 kepada Alamat MAC",
    "description": "Menukar alamat IPv6 kepada alamat MAC adalah mungkin apabila alamat IPv6 dijana menggunakan format EUI-64 daripada alamat MAC. Ini biasanya terpakai kepada alamat IPv6 link-local (bermula dengan fe80::) dan beberapa alamat autoconfigured tanpa keadaan. Proses ini melibatkan: 1) Mengekstrak pengecam antara muka (64 bit terakhir) daripada alamat IPv6, 2) Membalikkan bit ke-7 (bit Universal/Local) bagi bait pertama, 3) Membuang bait 'fffe' yang diselitkan untuk membina semula alamat MAC 48-bit asal. Perhatikan bahawa ini hanya berfungsi untuk alamat IPv6 yang asalnya diperoleh daripada alamat MAC menggunakan EUI-64."
  },
  "no": {
    "title": "Hvordan konvertere IPv6 til MAC-adresse",
    "description": "Å konvertere en IPv6-adresse til en MAC-adresse er mulig når IPv6-adressen ble generert ved hjelp av EUI-64-formatet fra en MAC-adresse. Dette gjelder vanligvis IPv6 link-local adresser (som starter med fe80::) og noen stateless autoconfigured adresser. Prosessen innebærer: 1) Trekke ut grensesnittidentifikatoren (siste 64 bits) fra IPv6-adressen, 2) Invertere den 7. biten (Universal/Local bit) av den første byten, 3) Fjerne de innsatte 'fffe' bytene for å rekonstruere den opprinnelige 48-bits MAC-adressen. Merk at dette bare fungerer for IPv6-adresser som opprinnelig ble avledet fra MAC-adresser ved hjelp av EUI-64."
  }
}
</i18n>
