<template>
  <DescriptionMarkdown
    :title="t('what-is-url-encoding')"
    :description="t('what-is-url-encoding-description-markdown')"
  />
</template>

<script setup lang="ts">
import { DescriptionMarkdown } from '@shared/ui/base'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<i18n lang="json">
{
  "en": {
    "what-is-url-encoding": "What is URL Encoding?",
    "what-is-url-encoding-description-markdown": "URL encoding (also called percent encoding) is a method to convert special characters into a format that can be safely transmitted over the internet. URLs can only contain certain characters, so any character that isn't allowed must be encoded.\n\n**How it works:**\n- Special characters are converted to `%` followed by their hexadecimal ASCII code\n- Example: a space becomes `%20`, `{'@'}` becomes `%40`\n- Only letters (A-Z, a-z), numbers (0-9), and some symbols (- _ . ~) don't need encoding\n\n**Common examples:**\n- Space → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Why it's needed:**\n- URLs have reserved characters with special meanings\n- Ensures data is transmitted correctly\n- Prevents conflicts with URL structure\n- Required for web forms and API calls"
  },
  "zh": {
    "what-is-url-encoding": "什么是 URL 编码？",
    "what-is-url-encoding-description-markdown": "URL 编码（也称为百分号编码）是将特殊字符转换为可以安全在互联网上传输的格式的方法。URL 只能包含某些字符，所以任何不被允许的字符都必须进行编码。\n\n**工作原理：**\n- 特殊字符被转换为 `%` 后跟其十六进制 ASCII 码\n- 例如：空格变成 `%20`，`{'@'}` 变成 `%40`\n- 只有字母（A-Z, a-z）、数字（0-9）和一些符号（- _ . ~）不需要编码\n\n**常见示例：**\n- 空格 → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**为什么需要：**\n- URL 有具有特殊含义的保留字符\n- 确保数据正确传输\n- 防止与 URL 结构发生冲突\n- Web 表单和 API 调用所必需"
  },
  "zh-CN": {
    "what-is-url-encoding": "什么是 URL 编码？",
    "what-is-url-encoding-description-markdown": "URL 编码（也称为百分号编码）是将特殊字符转换为可以安全在互联网上传输的格式的方法。URL 只能包含某些字符，所以任何不被允许的字符都必须进行编码。\n\n**工作原理：**\n- 特殊字符被转换为 `%` 后跟其十六进制 ASCII 码\n- 例如：空格变成 `%20`，`{'@'}` 变成 `%40`\n- 只有字母（A-Z, a-z）、数字（0-9）和一些符号（- _ . ~）不需要编码\n\n**常见示例：**\n- 空格 → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**为什么需要：**\n- URL 有具有特殊含义的保留字符\n- 确保数据正确传输\n- 防止与 URL 结构发生冲突\n- Web 表单和 API 调用所必需"
  },
  "zh-TW": {
    "what-is-url-encoding": "什麼是 URL 編碼？",
    "what-is-url-encoding-description-markdown": "URL 編碼（也稱為百分號編碼）是將特殊字元轉換為可以安全在網際網路上傳輸的格式的方法。URL 只能包含某些字元，所以任何不被允許的字元都必須進行編碼。\n\n**工作原理：**\n- 特殊字元被轉換為 `%` 後跟其十六進位 ASCII 碼\n- 例如：空格變成 `%20`，`{'@'}` 變成 `%40`\n- 只有字母（A-Z, a-z）、數字（0-9）和一些符號（- _ . ~）不需要編碼\n\n**常見範例：**\n- 空格 → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**為什麼需要：**\n- URL 有具有特殊含義的保留字元\n- 確保資料正確傳輸\n- 防止與 URL 結構發生衝突\n- Web 表單和 API 呼叫所必需"
  },
  "zh-HK": {
    "what-is-url-encoding": "什麼是 URL 編碼？",
    "what-is-url-encoding-description-markdown": "URL 編碼（也稱為百分號編碼）是將特殊字元轉換為可以安全在網際網路上傳輸的格式的方法。URL 只能包含某些字元，所以任何不被允許的字元都必須進行編碼。\n\n**工作原理：**\n- 特殊字元被轉換為 `%` 後跟其十六進位 ASCII 碼\n- 例如：空格變成 `%20`，`{'@'}` 變成 `%40`\n- 只有字母（A-Z, a-z）、數字（0-9）和一些符號（- _ . ~）不需要編碼\n\n**常見範例：**\n- 空格 → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**為什麼需要：**\n- URL 有具有特殊含義的保留字元\n- 確保資料正確傳輸\n- 防止與 URL 結構發生衝突\n- Web 表單和 API 呼叫所必需"
  },
  "es": {
    "what-is-url-encoding": "¿Qué es la codificación URL?",
    "what-is-url-encoding-description-markdown": "La codificación URL (también llamada codificación por porcentajes) es un método para convertir caracteres especiales en un formato que se puede transmitir de forma segura por internet. Las URL solo pueden contener ciertos caracteres, por lo que cualquier carácter que no esté permitido debe codificarse.\n\n**Cómo funciona:**\n- Los caracteres especiales se convierten a `%` seguido de su código ASCII hexadecimal\n- Ejemplo: un espacio se convierte en `%20`, `{'@'}` se convierte en `%40`\n- Solo las letras (A-Z, a-z), números (0-9) y algunos símbolos (- _ . ~) no necesitan codificación\n\n**Ejemplos comunes:**\n- Espacio → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Por qué es necesario:**\n- Las URL tienen caracteres reservados con significados especiales\n- Asegura que los datos se transmitan correctamente\n- Previene conflictos con la estructura de la URL\n- Requerido para formularios web y llamadas a API"
  },
  "fr": {
    "what-is-url-encoding": "Qu'est-ce que l'encodage URL ?",
    "what-is-url-encoding-description-markdown": "L'encodage URL (aussi appelé encodage par pourcentage) est une méthode pour convertir les caractères spéciaux en un format qui peut être transmis en toute sécurité sur internet. Les URL ne peuvent contenir que certains caractères, donc tout caractère non autorisé doit être encodé.\n\n**Comment ça fonctionne :**\n- Les caractères spéciaux sont convertis en `%` suivi de leur code ASCII hexadécimal\n- Exemple : un espace devient `%20`, `{'@'}` devient `%40`\n- Seules les lettres (A-Z, a-z), les chiffres (0-9) et certains symboles (- _ . ~) n'ont pas besoin d'encodage\n\n**Exemples courants :**\n- Espace → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Pourquoi c'est nécessaire :**\n- Les URL ont des caractères réservés avec des significations spéciales\n- Assure que les données sont transmises correctement\n- Prévient les conflits avec la structure de l'URL\n- Requis pour les formulaires web et les appels d'API"
  },
  "de": {
    "what-is-url-encoding": "Was ist URL-Codierung?",
    "what-is-url-encoding-description-markdown": "URL-Codierung (auch Prozent-Codierung genannt) ist eine Methode, um Sonderzeichen in ein Format zu konvertieren, das sicher über das Internet übertragen werden kann. URLs können nur bestimmte Zeichen enthalten, daher müssen alle nicht erlaubten Zeichen codiert werden.\n\n**Wie es funktioniert:**\n- Sonderzeichen werden zu `%` gefolgt von ihrem hexadezimalen ASCII-Code konvertiert\n- Beispiel: ein Leerzeichen wird zu `%20`, `{'@'}` wird zu `%40`\n- Nur Buchstaben (A-Z, a-z), Zahlen (0-9) und einige Symbole (- _ . ~) benötigen keine Codierung\n\n**Häufige Beispiele:**\n- Leerzeichen → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Warum es benötigt wird:**\n- URLs haben reservierte Zeichen mit besonderen Bedeutungen\n- Stellt sicher, dass Daten korrekt übertragen werden\n- Verhindert Konflikte mit der URL-Struktur\n- Erforderlich für Web-Formulare und API-Aufrufe"
  },
  "it": {
    "what-is-url-encoding": "Cos'è la codifica URL?",
    "what-is-url-encoding-description-markdown": "La codifica URL (chiamata anche codifica percentuale) è un metodo per convertire caratteri speciali in un formato che può essere trasmesso in sicurezza su internet. Gli URL possono contenere solo certi caratteri, quindi qualsiasi carattere non consentito deve essere codificato.\n\n**Come funziona:**\n- I caratteri speciali vengono convertiti in `%` seguito dal loro codice ASCII esadecimale\n- Esempio: uno spazio diventa `%20`, `{'@'}` diventa `%40`\n- Solo lettere (A-Z, a-z), numeri (0-9) e alcuni simboli (- _ . ~) non necessitano codifica\n\n**Esempi comuni:**\n- Spazio → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Perché è necessario:**\n- Gli URL hanno caratteri riservati con significati speciali\n- Assicura che i dati vengano trasmessi correttamente\n- Previene conflitti con la struttura dell'URL\n- Richiesto per moduli web e chiamate API"
  },
  "ja": {
    "what-is-url-encoding": "URL エンコーディングとは？",
    "what-is-url-encoding-description-markdown": "URL エンコーディング（パーセントエンコーディングとも呼ばれる）は、特殊文字をインターネット上で安全に送信できる形式に変換する方法です。URL は特定の文字のみを含むことができるため、許可されていない文字はエンコードする必要があります。\n\n**仕組み：**\n- 特殊文字は `%` とその後に続く 16 進数の ASCII コードに変換されます\n- 例：スペースは `%20` になり、`{'@'}` は `%40` になります\n- 文字（A-Z, a-z）、数字（0-9）、一部の記号（- _ . ~）のみエンコードは不要です\n\n**一般的な例：**\n- スペース → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**なぜ必要か：**\n- URL には特別な意味を持つ予約文字があります\n- データが正しく送信されることを保証します\n- URL 構造との競合を防ぎます\n- Web フォームと API 呼び出しに必要です"
  },
  "ko": {
    "what-is-url-encoding": "URL 인코딩이란?",
    "what-is-url-encoding-description-markdown": "URL 인코딩(퍼센트 인코딩이라고도 함)은 특수 문자를 인터넷을 통해 안전하게 전송할 수 있는 형식으로 변환하는 방법입니다. URL은 특정 문자만 포함할 수 있으므로 허용되지 않는 문자는 인코딩해야 합니다.\n\n**작동 방식:**\n- 특수 문자는 `%`와 그 뒤에 16진수 ASCII 코드로 변환됩니다\n- 예: 공백은 `%20`이 되고, `{'@'}`는 `%40`이 됩니다\n- 문자(A-Z, a-z), 숫자(0-9), 일부 기호(- _ . ~)만 인코딩이 필요하지 않습니다\n\n**일반적인 예:**\n- 공백 → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**왜 필요한가:**\n- URL에는 특별한 의미를 가진 예약 문자가 있습니다\n- 데이터가 올바르게 전송되도록 보장합니다\n- URL 구조와의 충돌을 방지합니다\n- 웹 폼과 API 호출에 필요합니다"
  },
  "ru": {
    "what-is-url-encoding": "Что такое URL-кодирование?",
    "what-is-url-encoding-description-markdown": "URL-кодирование (также называемое процентным кодированием) — это метод преобразования специальных символов в формат, который можно безопасно передавать через интернет. URL могут содержать только определенные символы, поэтому любые неразрешенные символы должны быть закодированы.\n\n**Как это работает:**\n- Специальные символы преобразуются в `%`, за которым следует их шестнадцатеричный ASCII-код\n- Пример: пробел становится `%20`, `{'@'}` становится `%40`\n- Только буквы (A-Z, a-z), цифры (0-9) и некоторые символы (- _ . ~) не нуждаются в кодировании\n\n**Распространенные примеры:**\n- Пробел → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Зачем это нужно:**\n- У URL есть зарезервированные символы со специальными значениями\n- Обеспечивает корректную передачу данных\n- Предотвращает конфликты со структурой URL\n- Необходимо для веб-форм и вызовов API"
  },
  "pt": {
    "what-is-url-encoding": "O que é codificação URL?",
    "what-is-url-encoding-description-markdown": "A codificação URL (também chamada de codificação por porcentagem) é um método para converter caracteres especiais em um formato que pode ser transmitido com segurança pela internet. URLs só podem conter certos caracteres, então qualquer caractere não permitido deve ser codificado.\n\n**Como funciona:**\n- Caracteres especiais são convertidos para `%` seguido de seu código ASCII hexadecimal\n- Exemplo: um espaço se torna `%20`, `{'@'}` se torna `%40`\n- Apenas letras (A-Z, a-z), números (0-9) e alguns símbolos (- _ . ~) não precisam de codificação\n\n**Exemplos comuns:**\n- Espaço → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Por que é necessário:**\n- URLs têm caracteres reservados com significados especiais\n- Garante que os dados sejam transmitidos corretamente\n- Previne conflitos com a estrutura da URL\n- Necessário para formulários web e chamadas de API"
  },
  "ar": {
    "what-is-url-encoding": "ما هو ترميز URL؟",
    "what-is-url-encoding-description-markdown": "ترميز URL (يُسمى أيضاً ترميز النسبة المئوية) هو طريقة لتحويل الأحرف الخاصة إلى تنسيق يمكن نقله بأمان عبر الإنترنت. يمكن أن تحتوي عناوين URL فقط على أحرف معينة، لذلك يجب ترميز أي حرف غير مسموح.\n\n**كيف يعمل:**\n- يتم تحويل الأحرف الخاصة إلى `%` متبوعاً برمز ASCII السادس عشر\n- مثال: المسافة تصبح `%20`، `{'@'}` تصبح `%40`\n- فقط الأحرف (A-Z, a-z) والأرقام (0-9) وبعض الرموز (- _ . ~) لا تحتاج ترميز\n\n**أمثلة شائعة:**\n- مسافة → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**لماذا مطلوب:**\n- عناوين URL لها أحرف محجوزة بمعاني خاصة\n- يضمن نقل البيانات بشكل صحيح\n- يمنع التعارض مع بنية URL\n- مطلوب لنماذج الويب واستدعاءات API"
  },
  "hi": {
    "what-is-url-encoding": "URL एन्कोडिंग क्या है?",
    "what-is-url-encoding-description-markdown": "URL एन्कोडिंग (प्रतिशत एन्कोडिंग भी कहलाता है) विशेष अक्षरों को एक ऐसे प्रारूप में परिवर्तित करने की विधि है जो इंटरनेट पर सुरक्षित रूप से प्रसारित की जा सकती है। URL में केवल कुछ निश्चित अक्षर हो सकते हैं, इसलिए कोई भी अनुमति न दिया गया अक्षर एन्कोड होना चाहिए।\n\n**यह कैसे काम करता है:**\n- विशेष अक्षरों को `%` के साथ उनके हेक्साडेसिमल ASCII कोड में परिवर्तित किया जाता है\n- उदाहरण: स्पेस `%20` बन जाता है, `{'@'}` `%40` बन जाता है\n- केवल अक्षर (A-Z, a-z), संख्याएं (0-9), और कुछ प्रतीक (- _ . ~) को एन्कोडिंग की आवश्यकता नहीं\n\n**सामान्य उदाहरण:**\n- स्पेस → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**यह क्यों आवश्यक है:**\n- URL में विशेष अर्थों वाले आरक्षित अक्षर होते हैं\n- सुनिश्चित करता है कि डेटा सही तरीके से प्रसारित हो\n- URL संरचना के साथ संघर्ष को रोकता है\n- वेब फॉर्म और API कॉल के लिए आवश्यक"
  },
  "tr": {
    "what-is-url-encoding": "URL kodlaması nedir?",
    "what-is-url-encoding-description-markdown": "URL kodlaması (yüzde kodlaması olarak da adlandırılır) özel karakterleri internet üzerinden güvenle iletilebilecek bir formata dönüştürme yöntemidir. URL'ler yalnızca belirli karakterleri içerebilir, bu nedenle izin verilmeyen herhangi bir karakter kodlanmalıdır.\n\n**Nasıl çalışır:**\n- Özel karakterler `%` ve ardından onaltılık ASCII kodlarına dönüştürülür\n- Örnek: boşluk `%20` olur, `{'@'}` `%40` olur\n- Sadece harfler (A-Z, a-z), sayılar (0-9) ve bazı semboller (- _ . ~) kodlama gerektirmez\n\n**Yaygın örnekler:**\n- Boşluk → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Neden gerekli:**\n- URL'lerin özel anlamları olan ayrılmış karakterleri vardır\n- Verilerin doğru şekilde iletilmesini sağlar\n- URL yapısıyla çakışmaları önler\n- Web formları ve API çağrıları için gereklidir"
  },
  "nl": {
    "what-is-url-encoding": "Wat is URL-codering?",
    "what-is-url-encoding-description-markdown": "URL-codering (ook wel procentcodering genoemd) is een methode om speciale tekens om te zetten naar een formaat dat veilig over het internet kan worden verzonden. URL's kunnen alleen bepaalde tekens bevatten, dus elk teken dat niet is toegestaan moet worden gecodeerd.\n\n**Hoe het werkt:**\n- Speciale tekens worden omgezet naar `%` gevolgd door hun hexadecimale ASCII-code\n- Voorbeeld: een spatie wordt `%20`, `{'@'}` wordt `%40`\n- Alleen letters (A-Z, a-z), cijfers (0-9) en enkele symbolen (- _ . ~) hoeven niet gecodeerd te worden\n\n**Veel voorkomende voorbeelden:**\n- Spatie → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Waarom het nodig is:**\n- URL's hebben gereserveerde tekens met speciale betekenissen\n- Zorgt ervoor dat gegevens correct worden verzonden\n- Voorkomt conflicten met URL-structuur\n- Vereist voor webformulieren en API-aanroepen"
  },
  "sv": {
    "what-is-url-encoding": "Vad är URL-kodning?",
    "what-is-url-encoding-description-markdown": "URL-kodning (även kallad procentkodning) är en metod för att konvertera specialtecken till ett format som kan överföras säkert över internet. URL:er kan bara innehålla vissa tecken, så alla tecken som inte är tillåtna måste kodas.\n\n**Hur det fungerar:**\n- Specialtecken konverteras till `%` följt av deras hexadecimala ASCII-kod\n- Exempel: ett mellanslag blir `%20`, `{'@'}` blir `%40`\n- Endast bokstäver (A-Z, a-z), siffror (0-9) och vissa symboler (- _ . ~) behöver inte kodas\n\n**Vanliga exempel:**\n- Mellanslag → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Varför det behövs:**\n- URL:er har reserverade tecken med speciella betydelser\n- Säkerställer att data överförs korrekt\n- Förhindrar konflikter med URL-struktur\n- Krävs för webbformulär och API-anrop"
  },
  "pl": {
    "what-is-url-encoding": "Czym jest kodowanie URL?",
    "what-is-url-encoding-description-markdown": "Kodowanie URL (nazywane także kodowaniem procentowym) to metoda konwersji znaków specjalnych do formatu, który może być bezpiecznie przesyłany przez internet. URL-e mogą zawierać tylko określone znaki, więc każdy niedozwolony znak musi być zakodowany.\n\n**Jak to działa:**\n- Znaki specjalne są konwertowane na `%` a następnie ich szesnastkowy kod ASCII\n- Przykład: spacja staje się `%20`, `{'@'}` staje się `%40`\n- Tylko litery (A-Z, a-z), cyfry (0-9) i niektóre symbole (- _ . ~) nie wymagają kodowania\n\n**Typowe przykłady:**\n- Spacja → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Dlaczego jest potrzebne:**\n- URL-e mają znaki zastrzeżone o specjalnych znaczeniach\n- Zapewnia prawidłowe przesyłanie danych\n- Zapobiega konfliktom ze strukturą URL\n- Wymagane dla formularzy internetowych i wywołań API"
  },
  "vi": {
    "what-is-url-encoding": "Mã hóa URL là gì?",
    "what-is-url-encoding-description-markdown": "Mã hóa URL (còn gọi là mã hóa phần trăm) là một phương thức chuyển đổi các ký tự đặc biệt thành định dạng có thể được truyền an toàn qua internet. URL chỉ có thể chứa một số ký tự nhất định, vì vậy bất kỳ ký tự nào không được phép đều phải được mã hóa.\n\n**Cách hoạt động:**\n- Các ký tự đặc biệt được chuyển đổi thành `%` theo sau là mã ASCII thập lục phân của chúng\n- Ví dụ: dấu cách trở thành `%20`, `{'@'}` trở thành `%40`\n- Chỉ các chữ cái (A-Z, a-z), số (0-9) và một số ký hiệu (- _ . ~) không cần mã hóa\n\n**Ví dụ phổ biến:**\n- Dấu cách → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Tại sao cần thiết:**\n- URL có các ký tự dành riêng với ý nghĩa đặc biệt\n- Đảm bảo dữ liệu được truyền chính xác\n- Ngăn chặn xung đột với cấu trúc URL\n- Bắt buộc cho biểu mẫu web và lời gọi API"
  },
  "th": {
    "what-is-url-encoding": "การเข้ารหัส URL คืออะไร?",
    "what-is-url-encoding-description-markdown": "การเข้ารหัส URL (เรียกอีกอย่างว่าการเข้ารหัสเปอร์เซ็นต์) เป็นวิธีการแปลงอักขระพิเศษให้อยู่ในรูปแบบที่สามารถส่งผ่านอินเทอร์เน็ตได้อย่างปลอดภัย URL สามารถมีได้เฉพาะอักขระบางตัวเท่านั้น ดังนั้นอักขระใดก็ตามที่ไม่ได้รับอนุญาตจะต้องถูกเข้ารหัส\n\n**วิธีการทำงาน:**\n- อักขระพิเศษจะถูกแปลงเป็น `%` ตามด้วยรหัส ASCII ฐานสิบหกของมัน\n- ตัวอย่าง: ช่องว่างกลายเป็น `%20`, `{'@'}` กลายเป็น `%40`\n- มีเพียงตัวอักษร (A-Z, a-z), ตัวเลข (0-9) และสัญลักษณ์บางตัว (- _ . ~) เท่านั้นที่ไม่ต้องเข้ารหัส\n\n**ตัวอย่างทั่วไป:**\n- ช่องว่าง → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**เหตุผลที่จำเป็น:**\n- URL มีอักขระสงวนที่มีความหมายพิเศษ\n- รับประกันว่าข้อมูลถูกส่งอย่างถูกต้อง\n- ป้องกันความขัดแย้งกับโครงสร้าง URL\n- จำเป็นสำหรับฟอร์มเว็บและการเรียก API"
  },
  "id": {
    "what-is-url-encoding": "Apa itu URL Encoding?",
    "what-is-url-encoding-description-markdown": "URL encoding (juga disebut percent encoding) adalah metode untuk mengkonversi karakter khusus ke dalam format yang dapat dikirim dengan aman melalui internet. URL hanya dapat berisi karakter tertentu, jadi karakter apa pun yang tidak diizinkan harus diencode.\n\n**Cara kerjanya:**\n- Karakter khusus dikonversi ke `%` diikuti oleh kode ASCII heksadesimal mereka\n- Contoh: spasi menjadi `%20`, `{'@'}` menjadi `%40`\n- Hanya huruf (A-Z, a-z), angka (0-9), dan beberapa simbol (- _ . ~) yang tidak perlu encoding\n\n**Contoh umum:**\n- Spasi → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Mengapa diperlukan:**\n- URL memiliki karakter reserved dengan makna khusus\n- Memastikan data dikirim dengan benar\n- Mencegah konflik dengan struktur URL\n- Diperlukan untuk form web dan panggilan API"
  },
  "he": {
    "what-is-url-encoding": "מה זה קידוד URL?",
    "what-is-url-encoding-description-markdown": "קידוד URL (נקרא גם קידוד אחוזים) הוא שיטה להמרת תווים מיוחדים לפורמט שניתן להעביר בבטחה דרך האינטרנט. URL יכולים להכיל רק תווים מסוימים, לכן כל תו שאינו מותר חייב להיות מקודד.\n\n**איך זה עובד:**\n- תווים מיוחדים מומרים ל-`%` ואחריו קוד ASCII הקסדצימלי שלהם\n- דוגמה: רווח הופך ל-`%20`, `{'@'}` הופך ל-`%40`\n- רק אותיות (A-Z, a-z), מספרים (0-9) וכמה סמלים (- _ . ~) לא צריכים קידוד\n\n**דוגמאות נפוצות:**\n- רווח → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**למה זה נדרש:**\n- ל-URL יש תווים שמורים עם משמעויות מיוחדות\n- מבטיח שנתונים מועברים נכון\n- מונע קונפליקטים עם מבנה ה-URL\n- נדרש לטפסי אינטרנט וקריאות API"
  },
  "ms": {
    "what-is-url-encoding": "Apakah URL Encoding?",
    "what-is-url-encoding-description-markdown": "URL encoding (juga dipanggil percent encoding) adalah kaedah untuk menukar aksara khas kepada format yang boleh dihantar dengan selamat melalui internet. URL hanya boleh mengandungi aksara tertentu, jadi mana-mana aksara yang tidak dibenarkan mesti dikodkan.\n\n**Bagaimana ia berfungsi:**\n- Aksara khas ditukar kepada `%` diikuti dengan kod ASCII heksadesimal mereka\n- Contoh: ruang menjadi `%20`, `{'@'}` menjadi `%40`\n- Hanya huruf (A-Z, a-z), nombor (0-9), dan beberapa simbol (- _ . ~) yang tidak memerlukan pengkodan\n\n**Contoh biasa:**\n- Ruang → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Mengapa diperlukan:**\n- URL mempunyai aksara terpelihara dengan makna khas\n- Memastikan data dihantar dengan betul\n- Menghalang konflik dengan struktur URL\n- Diperlukan untuk borang web dan panggilan API"
  },
  "no": {
    "what-is-url-encoding": "Hva er URL-koding?",
    "what-is-url-encoding-description-markdown": "URL-koding (også kalt prosentkoding) er en metode for å konvertere spesialtegn til et format som kan overføres trygt over internett. URL-er kan bare inneholde visse tegn, så alle tegn som ikke er tillatt må kodes.\n\n**Hvordan det fungerer:**\n- Spesialtegn konverteres til `%` etterfulgt av deres heksadesimale ASCII-kode\n- Eksempel: et mellomrom blir `%20`, `{'@'}` blir `%40`\n- Bare bokstaver (A-Z, a-z), tall (0-9) og noen symboler (- _ . ~) trenger ikke koding\n\n**Vanlige eksempler:**\n- Mellomrom → `%20`\n- `{'@'}` → `%40`\n- `#` → `%23`\n- `&` → `%26`\n- `?` → `%3F`\n\n**Hvorfor det er nødvendig:**\n- URL-er har reserverte tegn med spesielle betydninger\n- Sikrer at data overføres korrekt\n- Forhindrer konflikter med URL-struktur\n- Påkrevd for webskjemaer og API-kall"
  }
}
</i18n>
