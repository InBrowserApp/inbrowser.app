<template>
  <ToolSectionHeader>
    {{ t('title') }}
  </ToolSectionHeader>
  <ToolSection>
    <i18n-t keypath="description">
      <template #ulid>
        <n-text code>01ARZ3NDEKTSV4RRFFQ69G5FAV</n-text>
      </template>
    </i18n-t>
  </ToolSection>
</template>

<script setup lang="ts">
import { NText } from 'naive-ui'
import { useI18n } from 'vue-i18n'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "title": "What is ULID?",
    "description": "ULID (Universally Unique Lexicographically Sortable Identifier) is a 128-bit identifier that combines timestamp-based ordering with randomness. It's represented as a 26-character string using Crockford's Base32 encoding, like {ulid}. The first 48 bits contain a Unix timestamp in milliseconds, providing natural time ordering, while the remaining 80 bits are random, ensuring uniqueness. Unlike UUIDs, ULIDs are lexicographically sortable, meaning they can be sorted as strings in chronological order. This makes them ideal for database primary keys, distributed systems, and any scenario requiring both uniqueness and time-based ordering. ULIDs are case-insensitive, URL-safe, and designed to avoid ambiguous characters. They offer better performance than UUIDs in databases due to their sequential nature, reducing index fragmentation and improving query performance."
  },
  "zh": {
    "title": "什么是 ULID？",
    "description": "ULID（通用唯一词典序可排序标识符）是一个结合时间戳排序和随机性的 128 位标识符。它使用 Crockford 的 Base32 编码表示为 26 个字符的字符串，如 {ulid}。前 48 位包含毫秒级的 Unix 时间戳，提供自然的时间排序，而其余 80 位是随机的，确保唯一性。与 UUID 不同，ULID 是词典序可排序的，这意味着它们可以作为字符串按时间顺序排序。这使得它们非常适合用作数据库主键、分布式系统和任何需要唯一性和基于时间排序的场景。ULID 不区分大小写、URL 安全，并设计为避免模糊字符。由于其顺序性质，它们在数据库中提供比 UUID 更好的性能，减少索引碎片并提高查询性能。"
  },
  "zh-CN": {
    "title": "什么是 ULID？",
    "description": "ULID（通用唯一词典序可排序标识符）是一个结合时间戳排序和随机性的 128 位标识符。它使用 Crockford 的 Base32 编码表示为 26 个字符的字符串，如 {ulid}。前 48 位包含毫秒级的 Unix 时间戳，提供自然的时间排序，而其余 80 位是随机的，确保唯一性。与 UUID 不同，ULID 是词典序可排序的，这意味着它们可以作为字符串按时间顺序排序。这使得它们非常适合用作数据库主键、分布式系统和任何需要唯一性和基于时间排序的场景。ULID 不区分大小写、URL 安全，并设计为避免模糊字符。由于其顺序性质，它们在数据库中提供比 UUID 更好的性能，减少索引碎片并提高查询性能。"
  },
  "zh-TW": {
    "title": "什麼是 ULID？",
    "description": "ULID（通用唯一詞典序可排序標識符）是一個結合時間戳排序和隨機性的 128 位標識符。它使用 Crockford 的 Base32 編碼表示為 26 個字元的字串，如 {ulid}。前 48 位包含毫秒級的 Unix 時間戳，提供自然的時間排序，而其餘 80 位是隨機的，確保唯一性。與 UUID 不同，ULID 是詞典序可排序的，這意味著它們可以作為字串按時間順序排序。這使得它們非常適合用作資料庫主鍵、分散式系統和任何需要唯一性和基於時間排序的場景。ULID 不區分大小寫、URL 安全，並設計為避免模糊字元。由於其順序性質，它們在資料庫中提供比 UUID 更好的性能，減少索引碎片並提高查詢性能。"
  },
  "zh-HK": {
    "title": "什麼是 ULID？",
    "description": "ULID（通用唯一詞典序可排序標識符）是一個結合時間戳排序和隨機性的 128 位標識符。它使用 Crockford 的 Base32 編碼表示為 26 個字元的字串，如 {ulid}。前 48 位包含毫秒級的 Unix 時間戳，提供自然的時間排序，而其餘 80 位是隨機的，確保唯一性。與 UUID 不同，ULID 是詞典序可排序的，這意味著它們可以作為字串按時間順序排序。這使得它們非常適合用作資料庫主鍵、分散式系統和任何需要唯一性和基於時間排序的場景。ULID 不區分大小寫、URL 安全，並設計為避免模糊字元。由於其順序性質，它們在資料庫中提供比 UUID 更好的性能，減少索引碎片並提高查詢性能。"
  },
  "es": {
    "title": "¿Qué es ULID?",
    "description": "ULID (Identificador Único Lexicográficamente Ordenable Universal) es un identificador de 128 bits que combina ordenamiento basado en marca de tiempo con aleatoriedad. Se representa como una cadena de 26 caracteres usando la codificación Base32 de Crockford, como {ulid}. Los primeros 48 bits contienen una marca de tiempo Unix en milisegundos, proporcionando ordenamiento temporal natural, mientras que los 80 bits restantes son aleatorios, asegurando unicidad. A diferencia de los UUID, los ULID son lexicográficamente ordenables, lo que significa que pueden ordenarse como cadenas en orden cronológico. Esto los hace ideales para claves primarias de bases de datos, sistemas distribuidos y cualquier escenario que requiera tanto unicidad como ordenamiento basado en tiempo. Los ULID no distinguen entre mayúsculas y minúsculas, son seguros para URL y están diseñados para evitar caracteres ambiguos. Ofrecen mejor rendimiento que los UUID en bases de datos debido a su naturaleza secuencial, reduciendo la fragmentación de índices y mejorando el rendimiento de consultas."
  },
  "fr": {
    "title": "Qu'est-ce que ULID ?",
    "description": "ULID (Identifiant Unique Lexicographiquement Triable Universel) est un identifiant de 128 bits qui combine le tri basé sur l'horodatage avec l'aléatoire. Il est représenté comme une chaîne de 26 caractères utilisant l'encodage Base32 de Crockford, comme {ulid}. Les 48 premiers bits contiennent un horodatage Unix en millisecondes, fournissant un tri temporel naturel, tandis que les 80 bits restants sont aléatoires, assurant l'unicité. Contrairement aux UUID, les ULID sont lexicographiquement triables, ce qui signifie qu'ils peuvent être triés comme des chaînes dans l'ordre chronologique. Cela les rend idéaux pour les clés primaires de bases de données, les systèmes distribués et tout scénario nécessitant à la fois l'unicité et le tri temporel. Les ULID ne sont pas sensibles à la casse, sûrs pour les URL et conçus pour éviter les caractères ambigus. Ils offrent de meilleures performances que les UUID dans les bases de données grâce à leur nature séquentielle, réduisant la fragmentation des index et améliorant les performances des requêtes."
  },
  "de": {
    "title": "Was ist ULID?",
    "description": "ULID (Universell Eindeutige Lexikographisch Sortierbare Kennung) ist eine 128-Bit-Kennung, die zeitstempelbasierte Sortierung mit Zufälligkeit kombiniert. Sie wird als 26-Zeichen-String mit Crockfords Base32-Kodierung dargestellt, wie {ulid}. Die ersten 48 Bits enthalten einen Unix-Zeitstempel in Millisekunden, der natürliche Zeitsortierung bietet, während die verbleibenden 80 Bits zufällig sind und Eindeutigkeit gewährleisten. Im Gegensatz zu UUIDs sind ULIDs lexikographisch sortierbar, was bedeutet, dass sie als Strings in chronologischer Reihenfolge sortiert werden können. Dies macht sie ideal für Datenbankprimärschlüssel, verteilte Systeme und jedes Szenario, das sowohl Eindeutigkeit als auch zeitbasierte Sortierung erfordert. ULIDs sind groß-/kleinschreibungsunempfindlich, URL-sicher und darauf ausgelegt, mehrdeutige Zeichen zu vermeiden. Sie bieten bessere Leistung als UUIDs in Datenbanken aufgrund ihrer sequentiellen Natur, reduzieren Indexfragmentierung und verbessern die Abfrageleistung."
  },
  "it": {
    "title": "Cos'è ULID?",
    "description": "ULID (Identificatore Universale Unico Lessicograficamente Ordinabile) è un identificatore a 128 bit che combina ordinamento basato su timestamp con casualità. È rappresentato come una stringa di 26 caratteri usando la codifica Base32 di Crockford, come {ulid}. I primi 48 bit contengono un timestamp Unix in millisecondi, fornendo ordinamento temporale naturale, mentre i rimanenti 80 bit sono casuali, garantendo unicità. A differenza degli UUID, gli ULID sono lessicograficamente ordinabili, il che significa che possono essere ordinati come stringhe in ordine cronologico. Questo li rende ideali per chiavi primarie di database, sistemi distribuiti e qualsiasi scenario che richieda sia unicità che ordinamento basato sul tempo. Gli ULID non sono sensibili alle maiuscole, sicuri per URL e progettati per evitare caratteri ambigui. Offrono prestazioni migliori degli UUID nei database grazie alla loro natura sequenziale, riducendo la frammentazione degli indici e migliorando le prestazioni delle query."
  },
  "ja": {
    "title": "ULIDとは？",
    "description": "ULID（汎用一意辞書順ソート可能識別子）は、タイムスタンプベースの順序付けとランダム性を組み合わせた128ビット識別子です。{ulid}のように、Crockfordの Base32 エンコーディングを使用した26文字の文字列として表現されます。最初の48ビットにはミリ秒単位のUnixタイムスタンプが含まれ、自然な時間順序付けを提供し、残りの80ビットはランダムで、一意性を保証します。UUIDとは異なり、ULIDは辞書順でソート可能です。つまり、文字列として時系列順にソートできます。これにより、データベースの主キー、分散システム、および一意性と時間ベースの順序付けの両方が必要なシナリオに理想的です。ULIDは大文字小文字を区別せず、URL安全で、曖昧な文字を避けるように設計されています。シーケンシャルな性質により、データベースでUUIDよりも優れたパフォーマンスを提供し、インデックスの断片化を減らし、クエリパフォーマンスを向上させます。"
  },
  "ko": {
    "title": "ULID란?",
    "description": "ULID(범용 고유 사전순 정렬 가능 식별자)는 타임스탬프 기반 순서와 무작위성을 결합한 128비트 식별자입니다. {ulid}와 같이 Crockford의 Base32 인코딩을 사용한 26자 문자열로 표현됩니다. 첫 48비트에는 밀리초 단위의 Unix 타임스탬프가 포함되어 자연스러운 시간 순서를 제공하고, 나머지 80비트는 무작위로 고유성을 보장합니다. UUID와 달리 ULID는 사전순으로 정렬 가능하므로 문자열로서 시간순으로 정렬할 수 있습니다. 이는 데이터베이스 기본 키, 분산 시스템 및 고유성과 시간 기반 순서가 모두 필요한 시나리오에 이상적입니다. ULID는 대소문자를 구분하지 않고 URL 안전하며 모호한 문자를 피하도록 설계되었습니다. 순차적 특성으로 인해 데이터베이스에서 UUID보다 더 나은 성능을 제공하여 인덱스 단편화를 줄이고 쿼리 성능을 향상시킵니다."
  },
  "ru": {
    "title": "Что такое ULID?",
    "description": "ULID (Универсальный Уникальный Лексикографически Сортируемый Идентификатор) - это 128-битный идентификатор, который сочетает сортировку на основе временных меток со случайностью. Он представлен как 26-символьная строка, использующая кодировку Base32 Крокфорда, например {ulid}. Первые 48 бит содержат временную метку Unix в миллисекундах, обеспечивая естественную временную сортировку, в то время как остальные 80 бит случайны, гарантируя уникальность. В отличие от UUID, ULID лексикографически сортируемы, что означает, что они могут сортироваться как строки в хронологическом порядке. Это делает их идеальными для первичных ключей баз данных, распределенных систем и любого сценария, требующего как уникальности, так и временной сортировки. ULID нечувствительны к регистру, безопасны для URL и разработаны для избежания двусмысленных символов. Они обеспечивают лучшую производительность, чем UUID в базах данных благодаря своей последовательной природе, уменьшая фрагментацию индексов и улучшая производительность запросов."
  },
  "pt": {
    "title": "O que é ULID?",
    "description": "ULID (Identificador Único Universal Lexicograficamente Ordenável) é um identificador de 128 bits que combina ordenação baseada em timestamp com aleatoriedade. É representado como uma string de 26 caracteres usando a codificação Base32 de Crockford, como {ulid}. Os primeiros 48 bits contêm um timestamp Unix em milissegundos, fornecendo ordenação temporal natural, enquanto os 80 bits restantes são aleatórios, garantindo unicidade. Ao contrário dos UUIDs, os ULIDs são lexicograficamente ordenáveis, o que significa que podem ser ordenados como strings em ordem cronológica. Isso os torna ideais para chaves primárias de banco de dados, sistemas distribuídos e qualquer cenário que requeira tanto unicidade quanto ordenação baseada em tempo. Os ULIDs não diferenciam maiúsculas de minúsculas, são seguros para URL e projetados para evitar caracteres ambíguos. Eles oferecem melhor desempenho que UUIDs em bancos de dados devido à sua natureza sequencial, reduzindo fragmentação de índices e melhorando o desempenho de consultas."
  },
  "ar": {
    "title": "ما هو ULID؟",
    "description": "ULID (معرف فريد عالمي قابل للترتيب معجميًا) هو معرف 128 بت يجمع بين الترتيب القائم على الطابع الزمني والعشوائية. يتم تمثيله كسلسلة من 26 حرفًا باستخدام ترميز Base32 لكروكفورد، مثل {ulid}. تحتوي البتات الـ 48 الأولى على طابع زمني يونكس بالمللي ثانية، مما يوفر ترتيبًا زمنيًا طبيعيًا، بينما البتات الـ 80 المتبقية عشوائية، مما يضمن التفرد. على عكس UUID، فإن ULID قابل للترتيب معجميًا، مما يعني أنه يمكن ترتيبها كسلاسل في ترتيب زمني. هذا يجعلها مثالية لمفاتيح قواعد البيانات الأساسية والأنظمة الموزعة وأي سيناريو يتطلب التفرد والترتيب القائم على الوقت. ULID غير حساس لحالة الأحرف وآمن لـ URL ومصمم لتجنب الأحرف الغامضة. يوفر أداءً أفضل من UUID في قواعد البيانات بسبب طبيعته التسلسلية، مما يقلل تجزئة الفهرس ويحسن أداء الاستعلام."
  },
  "hi": {
    "title": "ULID क्या है?",
    "description": "ULID (सार्वभौमिक विशिष्ट शब्दकोश क्रम में क्रमबद्ध पहचानकर्ता) एक 128-बिट पहचानकर्ता है जो टाइमस्टैम्प-आधारित क्रमबद्धता को यादृच्छिकता के साथ जोड़ता है। यह {ulid} की तरह Crockford के Base32 एन्कोडिंग का उपयोग करके 26-वर्ण स्ट्रिंग के रूप में प्रदर्शित होता है। पहले 48 बिट्स में मिलीसेकंड में Unix टाइमस्टैम्प होता है, जो प्राकृतिक समय क्रमबद्धता प्रदान करता है, जबकि शेष 80 बिट्स यादृच्छिक होते हैं, विशिष्टता सुनिश्चित करते हैं। UUID के विपरीत, ULID शब्दकोश क्रम में क्रमबद्ध हैं, जिसका अर्थ है कि उन्हें स्ट्रिंग के रूप में कालानुक्रमिक क्रम में क्रमबद्ध किया जा सकता है। यह उन्हें डेटाबेस प्राथमिक कुंजी, वितरित प्रणालियों और किसी भी ऐसे परिदृश्य के लिए आदर्श बनाता है जिसमें विशिष्टता और समय-आधारित क्रमबद्धता दोनों की आवश्यकता होती है। ULID केस-असंवेदनशील, URL-सुरक्षित हैं और अस्पष्ट वर्णों से बचने के लिए डिज़ाइन किए गए हैं। वे अपनी अनुक्रमिक प्रकृति के कारण डेटाबेस में UUID से बेहतर प्रदर्शन प्रदान करते हैं, इंडेक्स विखंडन को कम करते हैं और क्वेरी प्रदर्शन में सुधार करते हैं।"
  },
  "tr": {
    "title": "ULID nedir?",
    "description": "ULID (Evrensel Benzersiz Leksikografik Sıralanabilir Tanımlayıcı), zaman damgası tabanlı sıralamayı rastgelelikle birleştiren 128-bit bir tanımlayıcıdır. {ulid} gibi Crockford'un Base32 kodlamasını kullanarak 26 karakterlik bir dize olarak temsil edilir. İlk 48 bit milisaniye cinsinden bir Unix zaman damgası içerir ve doğal zaman sıralaması sağlar, kalan 80 bit ise rastgeledir ve benzersizliği garanti eder. UUID'lerin aksine, ULID'ler leksikografik olarak sıralanabilir, yani dizeler olarak kronolojik sırada sıralanabilirler. Bu onları veritabanı birincil anahtarları, dağıtık sistemler ve hem benzersizlik hem de zaman tabanlı sıralama gerektiren herhangi bir senaryo için ideal kılar. ULID'ler büyük/küçük harf duyarlı değildir, URL güvenlidir ve belirsiz karakterlerden kaçınmak için tasarlanmıştır. Sıralı doğaları nedeniyle veritabanlarında UUID'lerden daha iyi performans sunarlar, indeks parçalanmasını azaltır ve sorgu performansını artırır."
  },
  "nl": {
    "title": "Wat is ULID?",
    "description": "ULID (Universeel Unieke Lexicografisch Sorteerbare Identifier) is een 128-bits identifier die tijdstempel-gebaseerde sortering combineert met willekeurigheid. Het wordt weergegeven als een 26-karakters string met Crockford's Base32-codering, zoals {ulid}. De eerste 48 bits bevatten een Unix-tijdstempel in milliseconden, wat natuurlijke tijdsortering biedt, terwijl de overige 80 bits willekeurig zijn en uniciteit garanderen. In tegenstelling tot UUID's zijn ULID's lexicografisch sorteerbaar, wat betekent dat ze als strings in chronologische volgorde gesorteerd kunnen worden. Dit maakt ze ideaal voor database primaire sleutels, gedistribueerde systemen en elk scenario dat zowel uniciteit als tijdgebaseerde sortering vereist. ULID's zijn hoofdletterongevoelig, URL-veilig en ontworpen om dubbelzinnige karakters te vermijden. Ze bieden betere prestaties dan UUID's in databases vanwege hun sequentiële aard, waardoor indexfragmentatie wordt verminderd en queryprestaties worden verbeterd."
  },
  "sv": {
    "title": "Vad är ULID?",
    "description": "ULID (Universellt Unik Lexikografiskt Sorterbar Identifierare) är en 128-bitars identifierare som kombinerar tidsstämpelbaserad sortering med slumpmässighet. Den representeras som en 26-tecken sträng med Crockfords Base32-kodning, som {ulid}. De första 48 bitarna innehåller en Unix-tidsstämpel i millisekunder, vilket ger naturlig tidssortering, medan de återstående 80 bitarna är slumpmässiga och garanterar unikhet. Till skillnad från UUID:er är ULID:er lexikografiskt sorterbara, vilket betyder att de kan sorteras som strängar i kronologisk ordning. Detta gör dem idealiska för databasprimärnycklar, distribuerade system och alla scenarier som kräver både unikhet och tidsbaserad sortering. ULID:er är skiftlägesokänsliga, URL-säkra och designade för att undvika tvetydiga tecken. De erbjuder bättre prestanda än UUID:er i databaser på grund av sin sekventiella natur, vilket minskar indexfragmentering och förbättrar frågeprestanda."
  },
  "pl": {
    "title": "Co to jest ULID?",
    "description": "ULID (Uniwersalny Unikalny Leksykograficznie Sortowalny Identyfikator) to 128-bitowy identyfikator łączący sortowanie oparte na znaczniku czasu z losowością. Jest reprezentowany jako 26-znakowy ciąg używający kodowania Base32 Crockforda, jak {ulid}. Pierwsze 48 bitów zawiera znacznik czasu Unix w milisekundach, zapewniając naturalne sortowanie czasowe, podczas gdy pozostałe 80 bitów jest losowych, gwarantując unikalność. W przeciwieństwie do UUID, ULID są leksykograficznie sortowalne, co oznacza, że mogą być sortowane jako ciągi w porządku chronologicznym. To czyni je idealnymi dla kluczy głównych baz danych, systemów rozproszonych i każdego scenariusza wymagającego zarówno unikalności jak i sortowania czasowego. ULID są niewrażliwe na wielkość liter, bezpieczne dla URL i zaprojektowane tak, aby unikać niejednoznacznych znaków. Oferują lepszą wydajność niż UUID w bazach danych dzięki swojej sekwencyjnej naturze, redukując fragmentację indeksów i poprawiając wydajność zapytań."
  },
  "vi": {
    "title": "ULID là gì?",
    "description": "ULID (Định danh Duy nhất Toàn cầu Có thể Sắp xếp Từ điển) là một định danh 128-bit kết hợp sắp xếp dựa trên dấu thời gian với tính ngẫu nhiên. Nó được biểu diễn dưới dạng chuỗi 26 ký tự sử dụng mã hóa Base32 của Crockford, như {ulid}. 48 bit đầu tiên chứa dấu thời gian Unix tính bằng mili giây, cung cấp sắp xếp thời gian tự nhiên, trong khi 80 bit còn lại là ngẫu nhiên, đảm bảo tính duy nhất. Không giống như UUID, ULID có thể sắp xếp theo từ điển, có nghĩa là chúng có thể được sắp xếp như chuỗi theo thứ tự thời gian. Điều này khiến chúng lý tưởng cho khóa chính cơ sở dữ liệu, hệ thống phân tán và bất kỳ tình huống nào yêu cầu cả tính duy nhất và sắp xếp dựa trên thời gian. ULID không phân biệt chữ hoa chữ thường, an toàn cho URL và được thiết kế để tránh các ký tự mơ hồ. Chúng cung cấp hiệu suất tốt hơn UUID trong cơ sở dữ liệu do tính chất tuần tự, giảm phân mảnh chỉ mục và cải thiện hiệu suất truy vấn."
  },
  "th": {
    "title": "ULID คืออะไร?",
    "description": "ULID (ตัวระบุเฉพาะสากลที่เรียงลำดับตามพจนานุกรมได้) เป็นตัวระบุ 128 บิตที่รวมการเรียงลำดับตามการประทับเวลากับความสุ่ม มันแสดงเป็นสตริง 26 ตัวอักษรโดยใช้การเข้ารหัส Base32 ของ Crockford เช่น {ulid} บิตแรก 48 บิตมีไทม์สแตมป์ Unix ในหน่วยมิลลิวินาทีซึ่งให้การเรียงลำดับเวลาตามธรรมชาติ ในขณะที่อีก 80 บิตที่เหลือเป็นแบบสุ่มเพื่อรับประกันความเป็นเอกลักษณ์ แตกต่างจาก UUID ULID สามารถเรียงลำดับตามพจนานุกรมได้ หมายความว่าสามารถเรียงลำดับเป็นสตริงตามลำดับเวลา ทำให้เหมาะสำหรับคีย์หลักของฐานข้อมูล ระบบกระจาย และสถานการณ์ใดๆ ที่ต้องการทั้งความเป็นเอกลักษณ์และการเรียงลำดับตามเวลา ULID ไม่แยกตัวพิมพ์เล็กใหญ่ ปลอดภัยสำหรับ URL และออกแบบมาเพื่อหลีกเลี่ยงตัวอักษรที่คลุมเครือ พวกมันให้ประสิทธิภาพที่ดีกว่า UUID ในฐานข้อมูลเนื่องจากลักษณะตามลำดับ ลดการแยกส่วนของดัชนีและปรับปรุงประสิทธิภาพการสืบค้น"
  },
  "id": {
    "title": "Apa itu ULID?",
    "description": "ULID (Pengidentifikasi Unik Universal yang Dapat Diurutkan Secara Leksikografis) adalah pengidentifikasi 128-bit yang menggabungkan pengurutan berbasis timestamp dengan keacakan. Ini direpresentasikan sebagai string 26 karakter menggunakan encoding Base32 Crockford, seperti {ulid}. 48 bit pertama berisi timestamp Unix dalam milidetik, memberikan pengurutan waktu alami, sedangkan 80 bit sisanya acak, memastikan keunikan. Tidak seperti UUID, ULID dapat diurutkan secara leksikografis, artinya dapat diurutkan sebagai string dalam urutan kronologis. Ini membuatnya ideal untuk kunci utama database, sistem terdistribusi, dan skenario apa pun yang memerlukan keunikan dan pengurutan berbasis waktu. ULID tidak peka huruf besar-kecil, aman untuk URL, dan dirancang untuk menghindari karakter ambigu. Mereka menawarkan kinerja yang lebih baik daripada UUID dalam database karena sifat sekuensialnya, mengurangi fragmentasi indeks dan meningkatkan kinerja kueri."
  },
  "he": {
    "title": "?ULID מהו",
    "description": "ULID (מזהה ייחודי אוניברסלי הניתן למיון לקסיקוגרפי) הוא מזהה 128-ביט המשלב מיון מבוסס חותמת זמן עם אקראיות. הוא מיוצג כמחרוזת של 26 תווים המשתמשת בקידוד Base32 של קרוקפורד, כמו {ulid}. 48 הביטים הראשונים מכילים חותמת זמן Unix במילישניות, המספקת מיון זמני טבעי, בעוד 80 הביטים הנותרים אקראיים, מבטיחים ייחודיות. בניגוד ל-UUID, ULID ניתנים למיון לקסיקוגרפי, כלומר ניתן למיין אותם כמחרוזות בסדר כרונולוגי. זה הופך אותם לאידיאליים עבור מפתחות ראשיים של מסדי נתונים, מערכות מבוזרות וכל תרחיש הדורש הן ייחודיות והן מיון מבוסס זמן. ULID אינם רגישים לרישיות, בטוחים עבור URL ומעוצבים להימנע מתווים דו-משמעיים. הם מציעים ביצועים טובים יותר מ-UUID במסדי נתונים בשל אופיים הרציף, מפחיתים פיצול אינדקס ומשפרים ביצועי שאילתות."
  },
  "ms": {
    "title": "Apakah ULID?",
    "description": "ULID (Pengenalan Unik Universal yang Boleh Diisih secara Leksikografi) ialah pengenalan 128-bit yang menggabungkan pengisihan berasaskan cap masa dengan rawak. Ia dipaparkan sebagai rentetan 26 aksara menggunakan pengekodan Base32 Crockford, seperti {ulid}. 48 bit pertama mengandungi cap masa Unix dalam milisaat, menyediakan pengisihan masa semula jadi, manakala 80 bit selebihnya adalah rawak, memastikan keunikan. Tidak seperti UUID, ULID boleh diisih secara leksikografi, bermakna ia boleh diisih sebagai rentetan dalam susunan kronologi. Ini menjadikannya ideal untuk kunci utama pangkalan data, sistem teragih, dan mana-mana senario yang memerlukan keunikan dan pengisihan berasaskan masa. ULID tidak sensitif huruf besar kecil, selamat untuk URL dan direka untuk mengelakkan aksara yang samar-samar. Ia menawarkan prestasi yang lebih baik daripada UUID dalam pangkalan data kerana sifat berturutannya, mengurangkan pemecahan indeks dan meningkatkan prestasi pertanyaan."
  },
  "no": {
    "title": "Hva er ULID?",
    "description": "ULID (Universelt Unik Leksikografisk Sorterbar Identifikator) er en 128-bit identifikator som kombinerer tidsstempel-basert sortering med tilfeldighet. Den representeres som en 26-tegns streng ved hjelp av Crockfords Base32-koding, som {ulid}. De første 48 bitene inneholder et Unix-tidsstempel i millisekunder, som gir naturlig tidssortering, mens de resterende 80 bitene er tilfeldige og sikrer unikhet. I motsetning til UUID-er er ULID-er leksikografisk sorterbare, noe som betyr at de kan sorteres som strenger i kronologisk rekkefølge. Dette gjør dem ideelle for database primærnøkler, distribuerte systemer og ethvert scenario som krever både unikhet og tidsbasert sortering. ULID-er er ikke følsomme for store og små bokstaver, URL-sikre og designet for å unngå tvetydige tegn. De tilbyr bedre ytelse enn UUID-er i databaser på grunn av deres sekvensielle natur, reduserer indeksfragmentering og forbedrer spørreytelsen."
  }
}
</i18n>
