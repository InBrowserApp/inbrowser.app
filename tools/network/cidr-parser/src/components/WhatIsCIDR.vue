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
    "title": "What is CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) is a method for allocating IP addresses and IP routing. It uses a notation that combines an IP address with a suffix indicating the number of significant bits in the network portion. For example, 192.168.1.0/24 represents a network where the first 24 bits are the network portion and the remaining 8 bits are for host addresses within that network."
  },
  "zh": {
    "title": "什么是 CIDR？",
    "description": "CIDR（无类别域间路由）是一种分配 IP 地址和 IP 路由的方法。它使用一种记号，将 IP 地址与表示网络部分中有效位数的后缀相结合。例如，192.168.1.0/24 表示一个网络，其中前 24 位是网络部分，其余 8 位用于该网络内的主机地址。"
  },
  "zh-CN": {
    "title": "什么是 CIDR？",
    "description": "CIDR（无类别域间路由）是一种分配 IP 地址和 IP 路由的方法。它使用一种记号，将 IP 地址与表示网络部分中有效位数的后缀相结合。例如，192.168.1.0/24 表示一个网络，其中前 24 位是网络部分，其余 8 位用于该网络内的主机地址。"
  },
  "zh-TW": {
    "title": "什麼是 CIDR？",
    "description": "CIDR（無類別域間路由）是一種分配 IP 位址和 IP 路由的方法。它使用一種記號，將 IP 位址與表示網路部分中有效位數的後綴相結合。例如，192.168.1.0/24 表示一個網路，其中前 24 位是網路部分，其餘 8 位用於該網路內的主機位址。"
  },
  "zh-HK": {
    "title": "什麼是 CIDR？",
    "description": "CIDR（無類別域間路由）是一種分配 IP 位址和 IP 路由的方法。它使用一種記號，將 IP 位址與表示網路部分中有效位數的後綴相結合。例如，192.168.1.0/24 表示一個網路，其中前 24 位是網路部分，其餘 8 位用於該網路內的主機位址。"
  },
  "es": {
    "title": "¿Qué es CIDR?",
    "description": "CIDR (Enrutamiento Inter-Dominio Sin Clases) es un método para asignar direcciones IP y enrutamiento IP. Utiliza una notación que combina una dirección IP con un sufijo que indica el número de bits significativos en la porción de red. Por ejemplo, 192.168.1.0/24 representa una red donde los primeros 24 bits son la porción de red y los 8 bits restantes son para direcciones de host dentro de esa red."
  },
  "fr": {
    "title": "Qu'est-ce que CIDR ?",
    "description": "CIDR (Routage Inter-Domaines Sans Classes) est une méthode pour allouer des adresses IP et le routage IP. Il utilise une notation qui combine une adresse IP avec un suffixe indiquant le nombre de bits significatifs dans la partie réseau. Par exemple, 192.168.1.0/24 représente un réseau où les 24 premiers bits sont la partie réseau et les 8 bits restants sont pour les adresses d'hôte dans ce réseau."
  },
  "de": {
    "title": "Was ist CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) ist eine Methode zur Zuweisung von IP-Adressen und IP-Routing. Es verwendet eine Notation, die eine IP-Adresse mit einem Suffix kombiniert, das die Anzahl der signifikanten Bits im Netzwerkteil angibt. Zum Beispiel repräsentiert 192.168.1.0/24 ein Netzwerk, in dem die ersten 24 Bits der Netzwerkteil sind und die verbleibenden 8 Bits für Host-Adressen in diesem Netzwerk verwendet werden."
  },
  "it": {
    "title": "Cos'è CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) è un metodo per allocare indirizzi IP e routing IP. Utilizza una notazione che combina un indirizzo IP con un suffisso che indica il numero di bit significativi nella porzione di rete. Ad esempio, 192.168.1.0/24 rappresenta una rete dove i primi 24 bit sono la porzione di rete e i rimanenti 8 bit sono per indirizzi host all'interno di quella rete."
  },
  "ja": {
    "title": "CIDR とは？",
    "description": "CIDR（Classless Inter-Domain Routing）は、IPアドレスの割り当てとIPルーティングの方法です。IPアドレスとネットワーク部分の有効ビット数を示すサフィックスを組み合わせた記法を使用します。例えば、192.168.1.0/24は、最初の24ビットがネットワーク部分で、残りの8ビットがそのネットワーク内のホストアドレス用であるネットワークを表します。"
  },
  "ko": {
    "title": "CIDR이란 무엇인가요?",
    "description": "CIDR(Classless Inter-Domain Routing)은 IP 주소를 할당하고 IP 라우팅을 하는 방법입니다. IP 주소와 네트워크 부분의 유효 비트 수를 나타내는 접미사를 결합한 표기법을 사용합니다. 예를 들어, 192.168.1.0/24는 처음 24비트가 네트워크 부분이고 나머지 8비트는 해당 네트워크 내의 호스트 주소용인 네트워크를 나타냅니다."
  },
  "ru": {
    "title": "Что такое CIDR?",
    "description": "CIDR (Бесклассовая междоменная маршрутизация) — это метод выделения IP-адресов и IP-маршрутизации. Он использует обозначение, которое объединяет IP-адрес с суффиксом, указывающим количество значащих битов в сетевой части. Например, 192.168.1.0/24 представляет сеть, где первые 24 бита — это сетевая часть, а оставшиеся 8 битов — для адресов хостов в этой сети."
  },
  "pt": {
    "title": "O que é CIDR?",
    "description": "CIDR (Roteamento Inter-Domínio Sem Classes) é um método para alocar endereços IP e roteamento IP. Ele usa uma notação que combina um endereço IP com um sufixo indicando o número de bits significativos na porção de rede. Por exemplo, 192.168.1.0/24 representa uma rede onde os primeiros 24 bits são a porção de rede e os 8 bits restantes são para endereços de host dentro dessa rede."
  },
  "ar": {
    "title": "ما هو CIDR؟",
    "description": "CIDR (التوجيه بين النطاقات بدون فئات) هو طريقة لتخصيص عناوين IP وتوجيه IP. يستخدم تدوينًا يجمع بين عنوان IP ولاحقة تشير إلى عدد البتات المهمة في جزء الشبكة. على سبيل المثال، 192.168.1.0/24 يمثل شبكة حيث أول 24 بت هي جزء الشبكة والـ 8 بت المتبقية لعناوين المضيف داخل تلك الشبكة."
  },
  "hi": {
    "title": "CIDR क्या है?",
    "description": "CIDR (Classless Inter-Domain Routing) IP पते आवंटित करने और IP रूटिंग का एक तरीका है। यह एक नोटेशन का उपयोग करता है जो IP पते को एक प्रत्यय के साथ जोड़ता है जो नेटवर्क भाग में महत्वपूर्ण बिट्स की संख्या को दर्शाता है। उदाहरण के लिए, 192.168.1.0/24 एक नेटवर्क का प्रतिनिधित्व करता है जहाँ पहले 24 बिट्स नेटवर्क भाग हैं और शेष 8 बिट्स उस नेटवर्क के भीतर होस्ट पतों के लिए हैं।"
  },
  "tr": {
    "title": "CIDR Nedir?",
    "description": "CIDR (Sınıfsız Etki Alanları Arası Yönlendirme), IP adreslerini tahsis etme ve IP yönlendirme yöntemidir. Bir IP adresini ağ kısmındaki önemli bit sayısını gösteren bir son ek ile birleştiren bir gösterim kullanır. Örneğin, 192.168.1.0/24, ilk 24 bitin ağ kısmı ve kalan 8 bitin o ağ içindeki ana bilgisayar adresleri için olduğu bir ağı temsil eder."
  },
  "nl": {
    "title": "Wat is CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) is een methode voor het toewijzen van IP-adressen en IP-routing. Het gebruikt een notatie die een IP-adres combineert met een achtervoegsel dat het aantal significante bits in het netwerkgedeelte aangeeft. Bijvoorbeeld, 192.168.1.0/24 vertegenwoordigt een netwerk waarbij de eerste 24 bits het netwerkgedeelte zijn en de resterende 8 bits voor hostadressen binnen dat netwerk."
  },
  "sv": {
    "title": "Vad är CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) är en metod för att allokera IP-adresser och IP-routing. Den använder en notation som kombinerar en IP-adress med ett suffix som indikerar antalet signifikanta bitar i nätverksdelen. Till exempel representerar 192.168.1.0/24 ett nätverk där de första 24 bitarna är nätverksdelen och de återstående 8 bitarna är för värdadresser inom det nätverket."
  },
  "pl": {
    "title": "Co to jest CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) to metoda alokacji adresów IP i routingu IP. Używa notacji, która łączy adres IP z sufiksem wskazującym liczbę znaczących bitów w części sieciowej. Na przykład, 192.168.1.0/24 reprezentuje sieć, gdzie pierwsze 24 bity to część sieciowa, a pozostałe 8 bitów to adresy hostów w tej sieci."
  },
  "vi": {
    "title": "CIDR là gì?",
    "description": "CIDR (Classless Inter-Domain Routing) là một phương pháp phân bổ địa chỉ IP và định tuyến IP. Nó sử dụng ký hiệu kết hợp địa chỉ IP với hậu tố chỉ ra số bit quan trọng trong phần mạng. Ví dụ, 192.168.1.0/24 đại diện cho một mạng trong đó 24 bit đầu là phần mạng và 8 bit còn lại dành cho địa chỉ máy chủ trong mạng đó."
  },
  "th": {
    "title": "CIDR คืออะไร?",
    "description": "CIDR (Classless Inter-Domain Routing) เป็นวิธีการจัดสรรที่อยู่ IP และการกำหนดเส้นทาง IP โดยใช้สัญลักษณ์ที่รวมที่อยู่ IP กับส่วนต่อท้ายที่บ่งบอกจำนวนบิตที่สำคัญในส่วนเครือข่าย ตัวอย่างเช่น 192.168.1.0/24 แสดงถึงเครือข่ายที่ 24 บิตแรกเป็นส่วนเครือข่ายและ 8 บิตที่เหลือสำหรับที่อยู่โฮสต์ภายในเครือข่ายนั้น"
  },
  "id": {
    "title": "Apa itu CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) adalah metode untuk mengalokasikan alamat IP dan routing IP. Ini menggunakan notasi yang menggabungkan alamat IP dengan sufiks yang menunjukkan jumlah bit signifikan di bagian jaringan. Misalnya, 192.168.1.0/24 mewakili jaringan di mana 24 bit pertama adalah bagian jaringan dan 8 bit sisanya untuk alamat host dalam jaringan tersebut."
  },
  "he": {
    "title": "מה זה CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) הוא שיטה להקצאת כתובות IP ולניתוב IP. הוא משתמש בסימון המשלב כתובת IP עם סיומת המציינת את מספר הביטים המשמעותיים בחלק הרשת. לדוגמה, 192.168.1.0/24 מייצג רשת שבה 24 הביטים הראשונים הם חלק הרשת ו-8 הביטים הנותרים מיועדים לכתובות מארח ברשת זו."
  },
  "ms": {
    "title": "Apakah CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) adalah kaedah untuk memperuntukkan alamat IP dan penghalaan IP. Ia menggunakan notasi yang menggabungkan alamat IP dengan akhiran yang menunjukkan bilangan bit penting dalam bahagian rangkaian. Contohnya, 192.168.1.0/24 mewakili rangkaian di mana 24 bit pertama adalah bahagian rangkaian dan 8 bit yang tinggal adalah untuk alamat hos dalam rangkaian tersebut."
  },
  "no": {
    "title": "Hva er CIDR?",
    "description": "CIDR (Classless Inter-Domain Routing) er en metode for å allokere IP-adresser og IP-ruting. Den bruker en notasjon som kombinerer en IP-adresse med et suffiks som indikerer antallet signifikante bits i nettverksdelen. For eksempel representerer 192.168.1.0/24 et nettverk hvor de første 24 bitsene er nettverksdelen og de gjenværende 8 bitsene er for vertadresser innenfor det nettverket."
  }
}
</i18n>
