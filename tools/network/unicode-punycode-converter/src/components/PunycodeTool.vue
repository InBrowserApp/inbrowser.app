<template>
  <div>
    <ToolSectionHeader>{{ t('ascii-domain') }}</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="asciiString"
        type="text"
        placeholder="xn--v86c4184b.com"
        :status="asciiStatus"
        @input="tryToConvertAscii"
      />
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="asciiString" />
    </ToolSection>

    <ToolSectionHeader>{{ t('unicode-domain') }}</ToolSectionHeader>
    <ToolSection>
      <n-input
        v-model:value="unicodeString"
        type="text"
        placeholder="🕸️.com"
        @input="tryToConvertUnicode"
      />
    </ToolSection>
    <ToolSection>
      <CopyToClipboardButton :content="unicodeString" />
    </ToolSection>

    <ToolSectionHeader>{{ t('what-is-punycode') }}</ToolSectionHeader>
    <ToolSection>
      {{ t('what-is-punycode-description') }}
    </ToolSection>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NInput } from 'naive-ui'
import punycode from 'punycode'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'
import { useI18n } from 'vue-i18n'
import { CopyToClipboardButton } from '@shared/ui/base'

const { t } = useI18n()

const asciiString = ref<string>('xn--v86c4184b.com')
const asciiStatus = ref<'success' | 'error'>('success')
const unicodeString = ref<string>('🕸️.com')

function tryToConvertAscii() {
  try {
    unicodeString.value = punycode.toUnicode(asciiString.value)
    asciiStatus.value = 'success'
  } catch (e) {
    asciiStatus.value = 'error'
    console.error(e)
  }
}

function tryToConvertUnicode() {
  try {
    asciiString.value = punycode.toASCII(unicodeString.value)
  } catch (e) {
    console.error(e)
  }
}
</script>

<i18n lang="json">
{
  "en": {
    "ascii-domain": "ASCII Domain",
    "unicode-domain": "Unicode Domain",
    "what-is-punycode": "What is Punycode?",
    "what-is-punycode-description": "Punycode is a representation of Unicode using only the letter–digit–hyphen (LDH) subset of ASCII required by DNS hostnames. It is the encoding profile used by IDNA and an instance of the Bootstring algorithm (RFC 3492). In practice, ASCII characters in a label are kept as‑is and a hyphen separates them from the encoded non‑ASCII part; for use on the public Internet the ACE prefix xn-- is prepended to the label. For example, München becomes Mnchen-3ya at the code‑point level and the DNS label xn--mnchen-3ya. Conversions are exact and reversible under IDNA processing and normalization; this tool performs both directions entirely in your browser."
  },
  "zh": {
    "ascii-domain": "ASCII 域名",
    "unicode-domain": "Unicode 域名",
    "what-is-punycode": "什么是 Punycode？",
    "what-is-punycode-description": "Punycode 是一种仅使用 ASCII 的字母‑数字‑连字符（LDH）子集来表示 Unicode 的方式，是 IDNA 采用的编码规范，并实现于 Bootstring 算法（RFC 3492）。在实际编码中，标签内的 ASCII 字符保持不变，与编码后的非 ASCII 部分之间以连字符分隔；在互联网域名中还会加上 ACE 前缀 xn--。例如 “München” 在码位层面可表示为 “Mnchen-3ya”，其 DNS 标签为 “xn--mnchen-3ya”。在经过 IDNA 处理与规范化后，转换是精确且可逆的；本工具在浏览器内完成双向转换。"
  },
  "zh-CN": {
    "ascii-domain": "ASCII 域名",
    "unicode-domain": "Unicode 域名",
    "what-is-punycode": "什么是 Punycode？",
    "what-is-punycode-description": "Punycode 是一种仅使用 ASCII 的字母‑数字‑连字符（LDH）子集来表示 Unicode 的方式，是 IDNA 采用的编码规范，并实现于 Bootstring 算法（RFC 3492）。在实际编码中，标签内的 ASCII 字符保持不变，与编码后的非 ASCII 部分之间以连字符分隔；在互联网域名中还会加上 ACE 前缀 xn--。例如 “München” 在码位层面可表示为 “Mnchen-3ya”，其 DNS 标签为 “xn--mnchen-3ya”。在经过 IDNA 处理与规范化后，转换是精确且可逆的；本工具在浏览器内完成双向转换。"
  },
  "zh-TW": {
    "ascii-domain": "ASCII 網域",
    "unicode-domain": "Unicode 網域",
    "what-is-punycode": "什麼是 Punycode？",
    "what-is-punycode-description": "Punycode 是一種僅使用 ASCII 的字母‑數字‑連字號（LDH）子集來表示 Unicode 的方式，是 IDNA 採用的編碼規範，並實作於 Bootstring 演算法（RFC 3492）。實務上，標籤內的 ASCII 字元保持不變，並以連字號分隔與編碼後的非 ASCII 部分；在網際網路網域名稱中還會加上 ACE 前綴 xn--。例如「München」在碼位層次可表示為「Mnchen-3ya」，其 DNS 標籤為「xn--mnchen-3ya」。在經過 IDNA 處理與正規化後，轉換是精確且可逆的；本工具可在瀏覽器內雙向轉換。"
  },
  "zh-HK": {
    "ascii-domain": "ASCII 網域",
    "unicode-domain": "Unicode 網域",
    "what-is-punycode": "什麼是 Punycode？",
    "what-is-punycode-description": "Punycode 是一種僅使用 ASCII 的字母‑數字‑連字號（LDH）子集來表示 Unicode 的方式，是 IDNA 採用的編碼規範，並實作於 Bootstring 演算法（RFC 3492）。實務上，標籤內的 ASCII 字元保持不變，並以連字號分隔與編碼後的非 ASCII 部分；在網際網路網域名稱中還會加上 ACE 前綴 xn--。例如「München」在碼位層次可表示為「Mnchen-3ya」，其 DNS 標籤為「xn--mnchen-3ya」。在經過 IDNA 處理與正規化後，轉換是精確且可逆的；本工具可在瀏覽器內雙向轉換。"
  },
  "es": {
    "ascii-domain": "Dominio ASCII",
    "unicode-domain": "Dominio Unicode",
    "what-is-punycode": "¿Qué es Punycode?",
    "what-is-punycode-description": "Punycode es una representación de Unicode que usa únicamente el subconjunto ASCII de letras, dígitos y guiones (LDH) exigido por los nombres de host del DNS. Es el perfil de codificación utilizado por IDNA y una instancia del algoritmo Bootstring (RFC 3492). En la práctica, los caracteres ASCII del rótulo se mantienen tal cual y un guion separa la parte codificada no ASCII; para uso público en Internet se antepone el prefijo ACE xn--. Por ejemplo, München se convierte en Mnchen-3ya a nivel de puntos de código y en la etiqueta DNS xn--mnchen-3ya. Las conversiones son exactas y reversibles bajo el procesamiento y la normalización de IDNA; esta herramienta convierte en ambos sentidos íntegramente en tu navegador."
  },
  "fr": {
    "ascii-domain": "Domaine ASCII",
    "unicode-domain": "Domaine Unicode",
    "what-is-punycode": "Qu’est‑ce que Punycode ?",
    "what-is-punycode-description": "Punycode est une représentation d’Unicode n’utilisant que le sous‑ensemble ASCII lettres–chiffres–tiret (LDH) requis par les noms d’hôte DNS. C’est le profil d’encodage employé par IDNA et une instance de l’algorithme Bootstring (RFC 3492). En pratique, les caractères ASCII d’un label sont conservés tels quels et un tiret sépare la partie encodée non ASCII ; pour l’Internet public, on préfixe le label par l’ACE xn--. Par exemple, München devient Mnchen‑3ya au niveau des points de code et l’étiquette DNS xn--mnchen-3ya. Les conversions sont exactes et réversibles après traitement et normalisation IDNA ; cet outil effectue les deux sens entièrement dans votre navigateur."
  },
  "de": {
    "ascii-domain": "ASCII‑Domain",
    "unicode-domain": "Unicode‑Domain",
    "what-is-punycode": "Was ist Punycode?",
    "what-is-punycode-description": "Punycode ist eine Darstellung von Unicode unter Verwendung ausschließlich der ASCII‑Teilmenge aus Buchstaben, Ziffern und Bindestrich (LDH), wie sie für DNS‑Hostnamen gefordert ist. Es ist das von IDNA verwendete Kodierungsprofil und eine Instanz des Bootstring‑Algorithmus (RFC 3492). In der Praxis bleiben ASCII‑Zeichen im Label unverändert; ein Bindestrich trennt sie vom codierten Nicht‑ASCII‑Teil. Für den Einsatz im öffentlichen Internet wird das ACE‑Präfix xn-- vorangestellt. Beispielsweise wird München auf Codepoint‑Ebene zu Mnchen‑3ya und als DNS‑Label zu xn--mnchen-3ya. Umwandlungen sind nach IDNA‑Verarbeitung und ‑Normalisierung exakt und reversibel; dieses Tool konvertiert beide Richtungen vollständig im Browser."
  },
  "it": {
    "ascii-domain": "Dominio ASCII",
    "unicode-domain": "Dominio Unicode",
    "what-is-punycode": "Che cos'è Punycode?",
    "what-is-punycode-description": "Punycode è una rappresentazione di Unicode che utilizza solo il sottoinsieme ASCII lettere‑cifre‑trattino (LDH) richiesto dai nomi host DNS. È il profilo di codifica usato da IDNA e un’istanza dell’algoritmo Bootstring (RFC 3492). In pratica, i caratteri ASCII in un’etichetta restano invariati e un trattino separa la parte codificata non ASCII; per l’uso su Internet pubblico si premette il prefisso ACE xn--. Ad esempio, München diventa Mnchen‑3ya a livello di code point e l’etichetta DNS xn--mnchen-3ya. Le conversioni sono esatte e reversibili con l’elaborazione e la normalizzazione IDNA; questo strumento converte in entrambe le direzioni direttamente nel browser."
  },
  "ja": {
    "ascii-domain": "ASCII ドメイン",
    "unicode-domain": "Unicode ドメイン",
    "what-is-punycode": "Punycode とは？",
    "what-is-punycode-description": "Punycode は、DNS ホスト名に求められる ASCII の英字・数字・ハイフン（LDH）サブセットだけを用いて Unicode を表現する方式です。IDNA で採用されるエンコーディング・プロファイルであり、Bootstring アルゴリズム（RFC 3492）の一実装でもあります。実際には、ラベル内の ASCII 文字はそのまま残り、エンコードされた非 ASCII 部分とはハイフンで区切られます。公開インターネットで使用する際は ACE 接頭辞 xn-- が付与されます。例えば「München」はコードポイントの観点では「Mnchen-3ya」、DNS ラベルでは「xn--mnchen-3ya」となります。IDNA の処理と正規化のもとで変換は厳密かつ可逆であり、本ツールはブラウザだけで双方向の変換を行います。"
  },
  "ko": {
    "ascii-domain": "ASCII 도메인",
    "unicode-domain": "유니코드 도메인",
    "what-is-punycode": "Punycode란?",
    "what-is-punycode-description": "Punycode는 DNS 호스트 이름에 요구되는 ASCII의 문자‑숫자‑하이픈(LDH) 부분집합만을 사용해 Unicode를 표현하는 방식입니다. IDNA에서 사용하는 인코딩 프로파일이며 Bootstring 알고리즘(RFC 3492)의 한 구현입니다. 실제로는 라벨의 ASCII 문자는 그대로 유지되고, 인코딩된 비‑ASCII 부분과는 하이픈으로 구분됩니다. 공용 인터넷에서는 ACE 접두사 xn-- 가 라벨 앞에 붙습니다. 예를 들어 ‘München’은 코드 포인트 수준에서 ‘Mnchen‑3ya’, DNS 라벨로는 ‘xn--mnchen-3ya’가 됩니다. IDNA 처리와 정규화 하에서 변환은 정확하고 역변환 가능합니다. 이 도구는 브라우저에서 양방향 변환을 수행합니다."
  },
  "ru": {
    "ascii-domain": "Домен ASCII",
    "unicode-domain": "Домен Unicode",
    "what-is-punycode": "Что такое Punycode?",
    "what-is-punycode-description": "Punycode — это представление Unicode с использованием только подмножества ASCII «буквы‑цифры‑дефис» (LDH), требуемого для имён хостов DNS. Это профиль кодирования, применяемый в IDNA, и реализация алгоритма Bootstring (RFC 3492). На практике ASCII‑символы в метке сохраняются как есть, а дефис отделяет их от закодированной не‑ASCII части; для использования в публичном Интернете к метке добавляется ACE‑префикс xn--. Например, München на уровне кодовых точек становится Mnchen‑3ya, а DNS‑меткой — xn--mnchen-3ya. Преобразования точны и обратимы при обработке и нормализации IDNA; этот инструмент выполняет обе стороны прямо в вашем браузере."
  },
  "pt": {
    "ascii-domain": "Domínio ASCII",
    "unicode-domain": "Domínio Unicode",
    "what-is-punycode": "O que é Punycode?",
    "what-is-punycode-description": "Punycode é uma representação do Unicode usando apenas o subconjunto ASCII de letras, dígitos e hífen (LDH) exigido pelos nomes de host do DNS. É o perfil de codificação usado pelo IDNA e uma instância do algoritmo Bootstring (RFC 3492). Na prática, os caracteres ASCII em um rótulo são mantidos como estão e um hífen os separa da parte codificada não ASCII; para uso na Internet pública, o prefixo ACE xn-- é adicionado ao rótulo. Por exemplo, München torna‑se Mnchen‑3ya no nível de pontos de código e a etiqueta DNS xn--mnchen-3ya. As conversões são exatas e reversíveis sob o processamento e a normalização do IDNA; esta ferramenta realiza ambos os sentidos inteiramente no navegador."
  },
  "ar": {
    "ascii-domain": "نطاق ASCII",
    "unicode-domain": "نطاق Unicode",
    "what-is-punycode": "ما هو Punycode؟",
    "what-is-punycode-description": "Punycode هو تمثيل لليونكود باستخدام المجموعة الفرعية من ASCII المكوّنة من الأحرف والأرقام والواصلة (LDH) المطلوبة لأسماء مضيفي DNS. وهو ملف ترميز تستخدمه IDNA ومثال لخوارزمية Bootstring (RFC 3492). عمليًا تُترك أحرف ASCII في التسمية كما هي ويُستخدم الواصلة للفصل بينها وبين الجزء غير ASCII المشفَّر؛ وللاستخدام على الإنترنت العام تُضاف بادئة ACE xn-- إلى التسمية. على سبيل المثال، تتحول «München» إلى «Mnchen‑3ya» على مستوى نقاط الترميز وإلى تسمية DNS «xn--mnchen-3ya». التحويلات دقيقة وقابلة للعكس في ظل معالجة IDNA والتطبيع؛ هذه الأداة تُجري التحويل في كلا الاتجاهين داخل المتصفح."
  },
  "hi": {
    "ascii-domain": "ASCII डोमेन",
    "unicode-domain": "Unicode डोमेन",
    "what-is-punycode": "Punycode क्या है?",
    "what-is-punycode-description": "Punycode Unicode का ऐसा निरूपण है जो DNS होस्टनेम के लिए आवश्यक ASCII के अक्षर‑अंक‑हाइफ़न (LDH) उपसमुच्चय का ही उपयोग करता है। यह IDNA द्वारा प्रयुक्त एन्कोडिंग प्रोफ़ाइल है और Bootstring ऐल्गोरिद्म (RFC 3492) का एक रूप है। व्यावहारिक रूप से, लेबल के ASCII वर्ण ज्यों‑के‑त्यों रखे जाते हैं और एन्कोडेड गैर‑ASCII भाग से उन्हें हाइफ़न अलग करता है; सार्वजनिक इंटरनेट उपयोग हेतु लेबल के आगे ACE उपसर्ग xn-- जोड़ा जाता है। उदाहरण के लिए, München को कोड‑पॉइंट स्तर पर Mnchen‑3ya और DNS लेबल में xn--mnchen-3ya लिखा जाता है। IDNA प्रोसेसिंग व सामान्यीकरण के अंतर्गत परिवर्तन सटीक और प्रतिवर्ती हैं; यह टूल ब्राउज़र में दोनों दिशाओं में रूपांतरण करता है।"
  },
  "tr": {
    "ascii-domain": "ASCII Alan Adı",
    "unicode-domain": "Unicode Alan Adı",
    "what-is-punycode": "Punycode nedir?",
    "what-is-punycode-description": "Punycode, DNS ana makine adları için gerekli olan ASCII’nin harf‑rakam‑tire (LDH) alt kümesini kullanarak Unicode’u temsil eden bir yöntemdir. IDNA’nın kullandığı kodlama profili olup Bootstring algoritmasının (RFC 3492) bir örneğidir. Uygulamada, etiketteki ASCII karakterleri olduğu gibi kalır ve tire, kodlanmış ASCII dışı bölümden ayırır; genel İnternet kullanımı için etikete ACE öneki xn-- eklenir. Örneğin, München kod noktası düzeyinde Mnchen‑3ya’ya ve DNS etiketi olarak xn--mnchen-3ya’ya dönüşür. Dönüşümler IDNA işleme ve normalizasyonu altında tam ve tersine çevrilebilir niteliktedir; bu araç her iki yönü de tamamen tarayıcınızda gerçekleştirir."
  },
  "nl": {
    "ascii-domain": "ASCII‑domein",
    "unicode-domain": "Unicode‑domein",
    "what-is-punycode": "Wat is Punycode?",
    "what-is-punycode-description": "Punycode is een representatie van Unicode met uitsluitend de ASCII‑subgroep letter‑cijfer‑koppelteken (LDH) die door DNS‑hostnamen vereist is. Het is het coderingsprofiel dat door IDNA wordt gebruikt en een instantiatie van het Bootstring‑algoritme (RFC 3492). In de praktijk blijven ASCII‑tekens in een label staan en scheidt een koppelteken ze van het gecodeerde niet‑ASCII‑deel; voor gebruik op het publieke internet wordt het ACE‑voorvoegsel xn-- vóór het label geplaatst. München wordt bijvoorbeeld op codepoint‑niveau Mnchen‑3ya en als DNS‑label xn--mnchen-3ya. Conversies zijn exact en omkeerbaar onder IDNA‑verwerking en normalisatie; met deze tool converteer je beide kanten op, rechtstreeks in je browser."
  },
  "sv": {
    "ascii-domain": "ASCII‑domän",
    "unicode-domain": "Unicode‑domän",
    "what-is-punycode": "Vad är Punycode?",
    "what-is-punycode-description": "Punycode är en representation av Unicode som endast använder ASCII:s undergrupp bokstav‑siffra‑bindestreck (LDH) som krävs för DNS‑värdnamn. Det är den kodningsprofil som används av IDNA och en instans av Bootstring‑algoritmen (RFC 3492). I praktiken lämnas ASCII‑tecken i en etikett oförändrade och ett bindestreck skiljer dem från den kodade icke‑ASCII‑delen; för användning på det öppna internet läggs ACE‑prefixet xn-- till före etiketten. Till exempel blir München på kodpunktsnivå Mnchen‑3ya och som DNS‑etikett xn--mnchen-3ya. Konverteringar är exakta och reversibla under IDNA‑behandling och normalisering; det här verktyget utför båda riktningarna direkt i din webbläsare."
  },
  "pl": {
    "ascii-domain": "Domena ASCII",
    "unicode-domain": "Domena Unicode",
    "what-is-punycode": "Czym jest Punycode?",
    "what-is-punycode-description": "Punycode to sposób reprezentacji Unicode z użyciem wyłącznie podzbioru ASCII: litery‑cyfry‑myślnik (LDH), wymaganego dla nazw hostów DNS. Jest to profil kodowania używany przez IDNA i implementacja algorytmu Bootstring (RFC 3492). W praktyce znaki ASCII w etykiecie pozostają niezmienione, a myślnik oddziela je od zakodowanej części nie‑ASCII; na potrzeby publicznego Internetu do etykiety dodaje się prefiks ACE xn--. Na przykład München staje się na poziomie punktów kodowych Mnchen‑3ya, a jako etykieta DNS — xn--mnchen-3ya. Konwersje są dokładne i odwracalne w ramach przetwarzania i normalizacji IDNA; to narzędzie wykonuje oba kierunki bezpośrednio w przeglądarce."
  },
  "vi": {
    "ascii-domain": "Tên miền ASCII",
    "unicode-domain": "Tên miền Unicode",
    "what-is-punycode": "Punycode là gì?",
    "what-is-punycode-description": "Punycode là cách biểu diễn Unicode chỉ dùng tập con ASCII gồm chữ cái‑chữ số‑dấu gạch nối (LDH) theo yêu cầu của tên máy chủ DNS. Đây là hồ sơ mã hóa do IDNA sử dụng và là một hiện thân của thuật toán Bootstring (RFC 3492). Trong thực tế, các ký tự ASCII trong nhãn được giữ nguyên và một dấu gạch nối sẽ tách chúng khỏi phần đã mã hóa không phải ASCII; khi dùng trên Internet công cộng, tiền tố ACE xn-- sẽ được thêm trước nhãn. Ví dụ, München trở thành Mnchen‑3ya ở mức điểm mã và thành nhãn DNS xn--mnchen-3ya. Các phép chuyển đổi là chính xác và có thể đảo ngược theo xử lý và chuẩn hóa IDNA; công cụ này thực hiện chuyển đổi hai chiều ngay trong trình duyệt."
  },
  "th": {
    "ascii-domain": "โดเมน ASCII",
    "unicode-domain": "โดเมน Unicode",
    "what-is-punycode": "Punycode คืออะไร",
    "what-is-punycode-description": "Punycode เป็นการแทนค่า Unicode โดยใช้เพียงชุดย่อยของ ASCII ที่เป็นตัวอักษร‑ตัวเลข‑ขีด (LDH) ซึ่งจำเป็นสำหรับชื่อโฮสต์ DNS เป็นโปรไฟล์การเข้ารหัสที่ใช้โดย IDNA และเป็นอวตารของอัลกอริทึม Bootstring (RFC 3492) ในทางปฏิบัติ อักขระ ASCII ภายในเลเบลจะคงไว้ตามเดิม และมีขีดคั่นแยกส่วนที่ถูกเข้ารหัสซึ่งไม่ใช่ ASCII; สำหรับการใช้งานบนอินเทอร์เน็ตสาธารณะ จะมีคำนำหน้า ACE xn-- เพิ่มก่อนเลเบล ตัวอย่างเช่น München จะกลายเป็น Mnchen‑3ya ในระดับจุดรหัส และเป็นเลเบล DNS xn--mnchen-3ya การแปลงทำได้อย่างถูกต้องและย้อนกลับได้ภายใต้การประมวลผลและการทำให้เป็นมาตรฐานของ IDNA; เครื่องมือนี้ทำการแปลงได้ทั้งสองทิศทางภายในเบราว์เซอร์ของคุณ"
  },
  "id": {
    "ascii-domain": "Domain ASCII",
    "unicode-domain": "Domain Unicode",
    "what-is-punycode": "Apa itu Punycode?",
    "what-is-punycode-description": "Punycode adalah representasi Unicode yang hanya menggunakan subkumpulan ASCII huruf‑angka‑tanda hubung (LDH) yang disyaratkan untuk nama host DNS. Ini adalah profil pengodean yang dipakai oleh IDNA dan merupakan instans dari algoritme Bootstring (RFC 3492). Dalam praktiknya, karakter ASCII pada label dibiarkan apa adanya dan tanda hubung memisahkannya dari bagian non‑ASCII yang dikodekan; untuk penggunaan di Internet publik, awalan ACE xn-- ditambahkan di depan label. Contohnya, München menjadi Mnchen‑3ya pada tingkat kode titik dan menjadi label DNS xn--mnchen-3ya. Konversi bersifat tepat dan dapat dibalik di bawah pemrosesan dan normalisasi IDNA; alat ini melakukan konversi dua arah langsung di peramban Anda."
  },
  "he": {
    "ascii-domain": "דומיין ASCII",
    "unicode-domain": "דומיין Unicode",
    "what-is-punycode": "מהו Punycode?",
    "what-is-punycode-description": "Punycode הוא צורת ייצוג של Unicode המשתמשת רק בתת‑קבוצה של ASCII — אות‑ספרה‑מקף (LDH) — הנדרשת לשמות מארח ב‑DNS. זהו פרופיל הקידוד שבו משתמשת IDNA ומימוש של אלגוריתם Bootstring (RFC 3492). בפועל, תווי ASCII בתווית נשמרים כפי שהם ומקף מפריד ביניהם לבין החלק המקודד שאינו ASCII; לשימוש באינטרנט הציבורי מתווספת לתווית קידומת ACE xn--. לדוגמה, München הופך ברמת נקודות הקוד ל‑Mnchen‑3ya ובתווית DNS ל‑xn--mnchen-3ya. ההמרות מדויקות והפיכות תחת עיבוד ונרמול של IDNA; כלי זה מבצע את שני הכיוונים ישירות בדפדפן."
  },
  "ms": {
    "ascii-domain": "Domain ASCII",
    "unicode-domain": "Domain Unicode",
    "what-is-punycode": "Apakah Punycode?",
    "what-is-punycode-description": "Punycode ialah perwakilan Unicode yang hanya menggunakan subset huruf‑digit‑sengkang (LDH) ASCII yang diperlukan untuk nama hos DNS. Ia merupakan profil pengekodan yang digunakan oleh IDNA dan satu instans algoritma Bootstring (RFC 3492). Dalam amalan, aksara ASCII dalam label dikekalkan seperti sedia ada dan sengkang memisahkannya daripada bahagian bukan ASCII yang telah dikodkan; untuk penggunaan di Internet awam, awalan ACE xn-- ditambahkan pada label. Contohnya, München menjadi Mnchen‑3ya pada aras titik kod dan label DNS xn--mnchen-3ya. Penukaran adalah tepat dan boleh balik di bawah pemprosesan dan penormaan IDNA; alat ini melakukan penukaran dua hala sepenuhnya dalam pelayar anda."
  },
  "no": {
    "ascii-domain": "ASCII‑domene",
    "unicode-domain": "Unicode‑domene",
    "what-is-punycode": "Hva er Punycode?",
    "what-is-punycode-description": "Punycode er en representasjon av Unicode som kun bruker ASCII‑delmengden bokstav‑siffer‑bindestrek (LDH) som kreves for DNS‑vertsnavn. Det er kodingsprofilen brukt av IDNA og et eksempel på Bootstring‑algoritmen (RFC 3492). I praksis beholdes ASCII‑tegn i en etikett uendret, og en bindestrek skiller dem fra den kodede ikke‑ASCII‑delen; for bruk på det åpne Internett legges ACE‑prefikset xn-- til foran etiketten. For eksempel blir München på kodepunktsnivå til Mnchen‑3ya, og som DNS‑etikett til xn--mnchen-3ya. Konverteringer er presise og reversible under IDNA‑behandling og normalisering; dette verktøyet utfører begge retninger direkte i nettleseren."
  }
}
</i18n>
