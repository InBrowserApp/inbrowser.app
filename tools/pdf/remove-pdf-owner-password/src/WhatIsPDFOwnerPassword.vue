<template>
  <ToolSectionHeader>
    {{ t('title') }}
  </ToolSectionHeader>
  <ToolSection>
    {{ t('description') }}
  </ToolSection>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ToolSectionHeader, ToolSection } from '@shared/ui/tool'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "title": "What is PDF Owner Password?",
    "description": "A PDF owner password is a password that is used to restrict documents in PDF files. In Adobe Acrobat, the owner password is known as the change permissions password. Sometimes also referred as a restriction password, PDF permissions password, or PDF master password depending on the PDF users. As of the latest PDF version, document restrictions put in place with an owner password can include the following: Printing, Changing the document, Document assembly, Content copying, Content copying for accessibility, Page and graphics extraction, Commenting, Filling of form fields, Signing, Creation of template pages."
  },
  "zh": {
    "title": "什么是 PDF 所有者密码？",
    "description": "PDF 所有者密码是用于限制 PDF 文件中文档权限的密码。在 Adobe Acrobat 中，所有者密码被称为更改权限密码。根据 PDF 用户的不同，有时也被称为限制密码、PDF 权限密码或 PDF 主密码。根据最新的 PDF 版本，通过所有者密码设置的文档限制可以包括以下内容：打印、更改文档、文档装配、内容复制、辅助功能内容复制、页面和图形提取、注释、表单字段填写、签名、模板页面创建。"
  },
  "zh-CN": {
    "title": "什么是 PDF 所有者密码？",
    "description": "PDF 所有者密码是用于限制 PDF 文件中文档权限的密码。在 Adobe Acrobat 中，所有者密码被称为更改权限密码。根据 PDF 用户的不同，有时也被称为限制密码、PDF 权限密码或 PDF 主密码。根据最新的 PDF 版本，通过所有者密码设置的文档限制可以包括以下内容：打印、更改文档、文档装配、内容复制、辅助功能内容复制、页面和图形提取、注释、表单字段填写、签名、模板页面创建。"
  },
  "zh-TW": {
    "title": "什麼是 PDF 所有者密碼？",
    "description": "PDF 所有者密碼是用於限制 PDF 檔案中文件權限的密碼。在 Adobe Acrobat 中，所有者密碼被稱為更改權限密碼。根據 PDF 使用者的不同，有時也被稱為限制密碼、PDF 權限密碼或 PDF 主密碼。根據最新的 PDF 版本，透過所有者密碼設置的文件限制可以包括以下內容：列印、更改文件、文件裝配、內容複製、輔助功能內容複製、頁面和圖形提取、註釋、表單欄位填寫、簽名、模板頁面創建。"
  },
  "zh-HK": {
    "title": "什麼是 PDF 所有者密碼？",
    "description": "PDF 所有者密碼是用於限制 PDF 檔案中文件權限的密碼。在 Adobe Acrobat 中，所有者密碼被稱為更改權限密碼。根據 PDF 使用者的不同，有時也被稱為限制密碼、PDF 權限密碼或 PDF 主密碼。根據最新的 PDF 版本，透過所有者密碼設置的文件限制可以包括以下內容：列印、更改文件、文件裝配、內容複製、輔助功能內容複製、頁面和圖形提取、註釋、表單欄位填寫、簽名、模板頁面創建。"
  },
  "es": {
    "title": "¿Qué es la Contraseña de Propietario de PDF?",
    "description": "Una contraseña de propietario de PDF es una contraseña que se utiliza para restringir documentos en archivos PDF. En Adobe Acrobat, la contraseña de propietario se conoce como contraseña de cambio de permisos. A veces también se refiere como contraseña de restricción, contraseña de permisos de PDF, o contraseña maestra de PDF dependiendo de los usuarios de PDF. Según la última versión de PDF, las restricciones de documento establecidas con una contraseña de propietario pueden incluir lo siguiente: Impresión, Cambio del documento, Ensamblaje de documento, Copia de contenido, Copia de contenido para accesibilidad, Extracción de páginas y gráficos, Comentarios, Llenado de campos de formulario, Firma, Creación de páginas de plantilla."
  },
  "fr": {
    "title": "Qu'est-ce que le Mot de Passe Propriétaire PDF ?",
    "description": "Un mot de passe propriétaire PDF est un mot de passe utilisé pour restreindre les documents dans les fichiers PDF. Dans Adobe Acrobat, le mot de passe propriétaire est connu sous le nom de mot de passe de modification des permissions. Parfois appelé aussi mot de passe de restriction, mot de passe de permissions PDF, ou mot de passe maître PDF selon les utilisateurs PDF. Selon la dernière version PDF, les restrictions de document mises en place avec un mot de passe propriétaire peuvent inclure les éléments suivants : Impression, Modification du document, Assemblage de document, Copie de contenu, Copie de contenu pour l'accessibilité, Extraction de pages et graphiques, Commentaires, Remplissage de champs de formulaire, Signature, Création de pages de modèle."
  },
  "de": {
    "title": "Was ist ein PDF-Besitzer-Passwort?",
    "description": "Ein PDF-Besitzer-Passwort ist ein Passwort, das verwendet wird, um Dokumente in PDF-Dateien zu beschränken. In Adobe Acrobat ist das Besitzer-Passwort als Berechtigung-ändern-Passwort bekannt. Manchmal auch als Beschränkungs-Passwort, PDF-Berechtigungs-Passwort oder PDF-Master-Passwort bezeichnet, je nach PDF-Benutzer. Gemäß der neuesten PDF-Version können Dokumentbeschränkungen, die mit einem Besitzer-Passwort eingerichtet werden, Folgendes umfassen: Drucken, Dokument ändern, Dokumentzusammenstellung, Inhalte kopieren, Inhalte für Barrierefreiheit kopieren, Seiten- und Grafikextraktion, Kommentieren, Ausfüllen von Formularfeldern, Signieren, Erstellung von Vorlagenseiten."
  },
  "it": {
    "title": "Cos'è la Password del Proprietario PDF?",
    "description": "Una password del proprietario PDF è una password utilizzata per limitare i documenti nei file PDF. In Adobe Acrobat, la password del proprietario è conosciuta come password di modifica delle autorizzazioni. A volte viene anche chiamata password di restrizione, password delle autorizzazioni PDF, o password master PDF a seconda degli utenti PDF. Secondo l'ultima versione PDF, le restrizioni del documento messe in atto con una password del proprietario possono includere quanto segue: Stampa, Modifica del documento, Assemblaggio del documento, Copia del contenuto, Copia del contenuto per l'accessibilità, Estrazione di pagine e grafica, Commenti, Riempimento di campi modulo, Firma, Creazione di pagine modello."
  },
  "ja": {
    "title": "PDF オーナーパスワードとは？",
    "description": "PDF オーナーパスワードは、PDF ファイル内の文書を制限するために使用されるパスワードです。Adobe Acrobat では、オーナーパスワードは権限変更パスワードとして知られています。PDF ユーザーによっては、制限パスワード、PDF 権限パスワード、または PDF マスターパスワードとも呼ばれることがあります。最新の PDF バージョンでは、オーナーパスワードで設定される文書制限には以下が含まれます：印刷、文書の変更、文書の組み立て、コンテンツのコピー、アクセシビリティのためのコンテンツコピー、ページとグラフィックの抽出、コメント、フォームフィールドの入力、署名、テンプレートページの作成。"
  },
  "ko": {
    "title": "PDF 소유자 비밀번호란?",
    "description": "PDF 소유자 비밀번호는 PDF 파일에서 문서를 제한하는 데 사용되는 비밀번호입니다. Adobe Acrobat에서 소유자 비밀번호는 권한 변경 비밀번호로 알려져 있습니다. PDF 사용자에 따라 제한 비밀번호, PDF 권한 비밀번호, 또는 PDF 마스터 비밀번호라고도 불립니다. 최신 PDF 버전에 따르면, 소유자 비밀번호로 설정된 문서 제한사항에는 다음이 포함될 수 있습니다: 인쇄, 문서 변경, 문서 조립, 콘텐츠 복사, 접근성을 위한 콘텐츠 복사, 페이지 및 그래픽 추출, 주석, 양식 필드 작성, 서명, 템플릿 페이지 생성."
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
