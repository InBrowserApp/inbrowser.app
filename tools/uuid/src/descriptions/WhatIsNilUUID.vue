<template>
  <ToolSectionHeader>
    {{ t('title') }}
  </ToolSectionHeader>
  <ToolSection>
    <i18n-t keypath="description">
      <template #uuid>
        <n-text code>00000000-0000-0000-0000-000000000000</n-text>
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
    "title": "What is Nil UUID?",
    "description": "A Nil UUID is a special UUID where all bits are set to zero. It is represented as {uuid}. This UUID is used to represent a null or uninitialized UUID value. It is commonly used in databases and systems to indicate the absence of a UUID or as a placeholder when a UUID is not yet assigned. The Nil UUID is unique in that it is the only UUID that is guaranteed to be all zeros, making it easily identifiable and useful for special cases in UUID handling."
  },
  "zh": {
    "title": "什么是 Nil UUID？",
    "description": "Nil UUID 是一个特殊的 UUID，其中所有位都设置为零。它表示为 {uuid}。此 UUID 用于表示空值或未初始化的 UUID 值。它通常用于数据库和系统中，以指示 UUID 不存在或作为 UUID 尚未分配时的占位符。Nil UUID 的独特之处在于它是唯一保证全为零的 UUID，使其易于识别，并在 UUID 处理的特殊情况下非常有用。"
  },
  "zh-CN": {
    "title": "什么是 Nil UUID？",
    "description": "Nil UUID 是一个特殊的 UUID，其中所有位都设置为零。它表示为 {uuid}。此 UUID 用于表示空值或未初始化的 UUID 值。它通常用于数据库和系统中，以指示 UUID 不存在或作为 UUID 尚未分配时的占位符。Nil UUID 的独特之处在于它是唯一保证全为零的 UUID，使其易于识别，并在 UUID 处理的特殊情况下非常有用。"
  },
  "zh-TW": {
    "title": "什麼是 Nil UUID？",
    "description": "Nil UUID 是一個特殊的 UUID，其中所有位都設置為零。它表示為 {uuid}。此 UUID 用於表示空值或未初始化的 UUID 值。它通常用於數據庫和系統中，以指示 UUID 不存在或作為 UUID 尚未分配時的佔位符。Nil UUID 的獨特之處在於它是唯一保證全為零的 UUID，使其易於識別，並在 UUID 處理的特殊情況下非常有用。"
  },
  "zh-HK": {
    "title": "什麼是 Nil UUID？",
    "description": "Nil UUID 是一個特殊的 UUID，其中所有位都設置為零。它表示為 {uuid}。此 UUID 用於表示空值或未初始化的 UUID 值。它通常用於數據庫和系統中，以指示 UUID 不存在或作為 UUID 尚未分配時的佔位符。Nil UUID 的獨特之處在於它是唯一保證全為零的 UUID，使其易於識別，並在 UUID 處理的特殊情況下非常有用。"
  },
  "es": {
    "title": "¿Qué es Nil UUID?",
    "description": "Un Nil UUID es un UUID especial donde todos los bits están establecidos en cero. Se representa como {uuid}. Este UUID se utiliza para representar un valor UUID nulo o no inicializado. Se usa comúnmente en bases de datos y sistemas para indicar la ausencia de un UUID o como marcador de posición cuando un UUID aún no está asignado. El Nil UUID es único en que es el único UUID que está garantizado que sea todo ceros, lo que lo hace fácilmente identificable y útil para casos especiales en el manejo de UUID."
  },
  "fr": {
    "title": "Qu'est-ce que Nil UUID ?",
    "description": "Un Nil UUID est un UUID spécial où tous les bits sont définis à zéro. Il est représenté comme {uuid}. Cet UUID est utilisé pour représenter une valeur UUID nulle ou non initialisée. Il est couramment utilisé dans les bases de données et les systèmes pour indiquer l'absence d'un UUID ou comme espace réservé lorsqu'un UUID n'est pas encore attribué. Le Nil UUID est unique en ce qu'il est le seul UUID garanti d'être entièrement composé de zéros, ce qui le rend facilement identifiable et utile pour les cas spéciaux dans la gestion des UUID."
  },
  "de": {
    "title": "Was ist Nil UUID?",
    "description": "Ein Nil UUID ist eine spezielle UUID, bei der alle Bits auf Null gesetzt sind. Sie wird als {uuid} dargestellt. Diese UUID wird verwendet, um einen null oder nicht initialisierten UUID-Wert darzustellen. Sie wird häufig in Datenbanken und Systemen verwendet, um das Fehlen einer UUID anzuzeigen oder als Platzhalter, wenn eine UUID noch nicht zugewiesen wurde. Die Nil UUID ist einzigartig darin, dass sie die einzige UUID ist, die garantiert nur aus Nullen besteht, was sie leicht erkennbar und nützlich für Sonderfälle in der UUID-Verarbeitung macht."
  },
  "it": {
    "title": "Cos'è Nil UUID?",
    "description": "Un Nil UUID è un UUID speciale in cui tutti i bit sono impostati a zero. È rappresentato come {uuid}. Questo UUID viene utilizzato per rappresentare un valore UUID nullo o non inizializzato. È comunemente usato nei database e nei sistemi for indicare l'assenza di un UUID o come segnaposto quando un UUID non è ancora assegnato. Il Nil UUID è unico in quanto è l'unico UUID garantito di essere composto interamente da zeri, rendendolo facilmente identificabile e utile per casi speciali nella gestione degli UUID."
  },
  "ja": {
    "title": "Nil UUIDとは？",
    "description": "Nil UUIDは、すべてのビットがゼロに設定された特別なUUIDです。{uuid}として表されます。このUUIDは、nullまたは初期化されていないUUID値を表すために使用されます。データベースやシステムで一般的に使用され、UUIDが存在しないことを示したり、UUIDがまだ割り当てられていない場合のプレースホルダーとして使用されます。Nil UUIDは、すべてがゼロであることが保証されている唯一のUUIDであり、UUID処理の特殊なケースで識別しやすく有用です。"
  },
  "ko": {
    "title": "Nil UUID란?",
    "description": "Nil UUID는 모든 비트가 0으로 설정된 특별한 UUID입니다. {uuid}으로 표현됩니다. 이 UUID는 null이거나 초기화되지 않은 UUID 값을 나타내는 데 사용됩니다. 데이터베이스와 시스템에서 일반적으로 사용되며, UUID가 없음을 나타내거나 UUID가 아직 할당되지 않은 경우의 자리 표시자로 사용됩니다. Nil UUID는 모든 비트가 0이라는 것이 보장되는 유일한 UUID로, UUID 처리의 특수한 경우에 쉽게 식별할 수 있고 유용합니다."
  },
  "ru": {
    "title": "Что такое Nil UUID?",
    "description": "Nil UUID - это специальный UUID, в котором все биты установлены в ноль. Он представляется как {uuid}. Этот UUID используется для представления нулевого или неинициализированного значения UUID. Он обычно используется в базах данных и системах для указания отсутствия UUID или в качестве заполнителя, когда UUID еще не назначен. Nil UUID уникален тем, что это единственный UUID, который гарантированно состоит из всех нулей, что делает его легко идентифицируемым и полезным для особых случаев в обработке UUID."
  },
  "pt": {
    "title": "O que é Nil UUID?",
    "description": "Um Nil UUID é um UUID especial onde todos os bits estão definidos como zero. É representado como {uuid}. Este UUID é usado para representar um valor UUID nulo ou não inicializado. É comumente usado em bancos de dados e sistemas para indicar a ausência de um UUID ou como um espaço reservado quando um UUID ainda não foi atribuído. O Nil UUID é único por ser o único UUID que é garantido ser composto inteiramente de zeros, tornando-o facilmente identificável e útil para casos especiais no tratamento de UUID."
  },
  "ar": {
    "title": "ما هو Nil UUID؟",
    "description": "Nil UUID هو UUID خاص حيث يتم تعيين جميع البتات إلى صفر. يتم تمثيله كـ {uuid}. يستخدم هذا UUID لتمثيل قيمة UUID فارغة أو غير مهيأة. يستخدم عادة في قواعد البيانات والأنظمة للإشارة إلى عدم وجود UUID أو كعنصر نائب عندما لم يتم تعيين UUID بعد. Nil UUID فريد من نوعه لأنه UUID الوحيد الذي يضمن أن يكون جميع أجزائه أصفارًا، مما يجعله سهل التعرف عليه ومفيدًا للحالات الخاصة في معالجة UUID."
  },
  "hi": {
    "title": "Nil UUID क्या है?",
    "description": "Nil UUID एक विशेष UUID है जहां सभी बिट्स शून्य पर सेट किए गए हैं। इसे {uuid} के रूप में दर्शाया जाता है। यह UUID एक null या अनइनिशियलाइज़्ड UUID मान का प्रतिनिधित्व करने के लिए उपयोग किया जाता है। यह आमतौर पर डेटाबेस और सिस्टम में UUID की अनुपस्थिति को इंगित करने या जब UUID अभी तक असाइन नहीं किया गया है तो प्लेसहोल्डर के रूप में उपयोग किया जाता है। Nil UUID इस मायने में अद्वितीय है कि यह एकमात्र UUID है जो पूरी तरह से शून्य होने की गारंटी है, जो इसे UUID हैंडलिंग के विशेष मामलों में आसानी से पहचानने योग्य और उपयोगी बनाता है।"
  },
  "tr": {
    "title": "Nil UUID nedir?",
    "description": "Nil UUID, tüm bitlerin sıfır olarak ayarlandığı özel bir UUID'dir. {uuid} olarak temsil edilir. Bu UUID, null veya başlatılmamış bir UUID değerini temsil etmek için kullanılır. Genellikle veritabanlarında ve sistemlerde bir UUID'nin yokluğunu belirtmek veya bir UUID henüz atanmadığında yer tutucu olarak kullanılır. Nil UUID, tamamen sıfırlardan oluşması garanti edilen tek UUID olması bakımından benzersizdir, bu da onu UUID işlemedeki özel durumlar için kolayca tanımlanabilir ve kullanışlı kılar."
  },
  "nl": {
    "title": "Wat is Nil UUID?",
    "description": "Een Nil UUID is een speciale UUID waarbij alle bits op nul zijn gezet. Het wordt weergegeven als {uuid}. Deze UUID wordt gebruikt om een null of niet-geïnitialiseerde UUID-waarde weer te geven. Het wordt vaak gebruikt in databases en systemen om de afwezigheid van een UUID aan te geven of als tijdelijke aanduiding wanneer een UUID nog niet is toegewezen. De Nil UUID is uniek omdat het de enige UUID is die gegarandeerd volledig uit nullen bestaat, wat het gemakkelijk identificeerbaar en nuttig maakt voor speciale gevallen in UUID-verwerking."
  },
  "sv": {
    "title": "Vad är Nil UUID?",
    "description": "En Nil UUID är en speciell UUID där alla bitar är satta till noll. Den representeras som {uuid}. Denna UUID används för att representera ett null eller oinitialiserat UUID-värde. Den används vanligtvis i databaser och system för att indikera frånvaron av en UUID eller som en platshållare när en UUID ännu inte har tilldelats. Nil UUID är unik genom att vara den enda UUID som garanterat består av endast nollor, vilket gör den lätt att identifiera och användbar för specialfall i UUID-hantering."
  },
  "pl": {
    "title": "Co to jest Nil UUID?",
    "description": "Nil UUID to specjalny UUID, w którym wszystkie bity są ustawione na zero. Jest reprezentowany jako {uuid}. Ten UUID jest używany do reprezentowania wartości UUID null lub niezainicjalizowanej. Jest powszechnie używany w bazach danych i systemach do wskazywania braku UUID lub jako symbol zastępczy, gdy UUID nie został jeszcze przypisany. Nil UUID jest unikalny, ponieważ jest jedynym UUID, który jest gwarantowany jako składający się w całości z zer, co czyni go łatwym do zidentyfikowania i przydatnym w szczególnych przypadkach obsługi UUID."
  },
  "vi": {
    "title": "Nil UUID là gì?",
    "description": "Nil UUID là một UUID đặc biệt trong đó tất cả các bit đều được đặt thành số không. Nó được biểu diễn dưới dạng {uuid}. UUID này được sử dụng để biểu diễn một giá trị UUID null hoặc chưa được khởi tạo. Nó thường được sử dụng trong cơ sở dữ liệu và hệ thống để chỉ ra sự vắng mặt của UUID hoặc làm trình giữ chỗ khi UUID chưa được gán. Nil UUID là duy nhất ở chỗ nó là UUID duy nhất được đảm bảo toàn bộ là số không, làm cho nó dễ dàng nhận dạng và hữu ích cho các trường hợp đặc biệt trong xử lý UUID."
  },
  "th": {
    "title": "Nil UUID คืออะไร?",
    "description": "Nil UUID เป็น UUID พิเศษที่บิตทั้งหมดถูกตั้งค่าเป็นศูนย์ แสดงเป็น {uuid} UUID นี้ใช้เพื่อแสดงค่า UUID ที่เป็น null หรือยังไม่ได้เริ่มต้น มักใช้ในฐานข้อมูลและระบบเพื่อระบุการไม่มี UUID หรือเป็นตัวยึดตำแหน่งเมื่อยังไม่ได้กำหนด UUID Nil UUID มีเอกลักษณ์เฉพาะตัวตรงที่เป็น UUID เดียวที่รับประกันว่าจะเป็นศูนย์ทั้งหมด ทำให้ง่ายต่อการระบุและมีประโยชน์สำหรับกรณีพิเศษในการจัดการ UUID"
  },
  "id": {
    "title": "Apa itu Nil UUID?",
    "description": "Nil UUID adalah UUID khusus di mana semua bit diatur ke nol. Ini direpresentasikan sebagai {uuid}. UUID ini digunakan untuk merepresentasikan nilai UUID null atau tidak diinisialisasi. Ini umumnya digunakan dalam database dan sistem untuk menunjukkan ketiadaan UUID atau sebagai placeholder ketika UUID belum ditetapkan. Nil UUID unik karena merupakan satu-satunya UUID yang dijamin seluruhnya terdiri dari nol, membuatnya mudah diidentifikasi dan berguna untuk kasus khusus dalam penanganan UUID."
  },
  "he": {
    "title": "?Nil UUID מהו",
    "description": "Nil UUID הוא UUID מיוחד שבו כל הביטים מוגדרים לאפס. הוא מיוצג כ-{uuid}. UUID זה משמש לייצוג ערך UUID ריק או לא מאותחל. הוא משמש בדרך כלל במסדי נתונים ומערכות כדי לציין היעדר UUID או כמציין מיקום כאשר UUID עדיין לא הוקצה. ה-Nil UUID הוא ייחודי בכך שהוא ה-UUID היחיד שהוא מובטח להיות מורכב כולו מאפסים, מה שהופך אותו לזיהוי קל ושימושי למקרים מיוחדים בטיפול ב-UUID."
  },
  "ms": {
    "title": "Apakah Nil UUID?",
    "description": "Nil UUID ialah UUID khas di mana semua bit ditetapkan kepada sifar. Ia diwakili sebagai {uuid}. UUID ini digunakan untuk mewakili nilai UUID null atau tidak diinisialisasi. Ia biasanya digunakan dalam pangkalan data dan sistem untuk menunjukkan ketiadaan UUID atau sebagai pemegang tempat apabila UUID belum ditetapkan. Nil UUID adalah unik kerana ia adalah satu-satunya UUID yang dijamin terdiri sepenuhnya daripada sifar, menjadikannya mudah dikenal pasti dan berguna untuk kes khas dalam pengendalian UUID."
  },
  "no": {
    "title": "Hva er Nil UUID?",
    "description": "En Nil UUID er en spesiell UUID der alle biter er satt til null. Den er representert som {uuid}. Denne UUID-en brukes for å representere en null eller ikke-initialisert UUID-verdi. Den brukes vanligvis i databaser og systemer for å indikere fravær av en UUID eller som en plassholder når en UUID ennå ikke er tildelt. Nil UUID er unik ved at den er den eneste UUID-en som er garantert å være helt null, noe som gjør den lett å identifisere og nyttig for spesielle tilfeller i UUID-håndtering."
  }
}
</i18n>
