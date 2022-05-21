const xalqaro_savollar = [
    `Hisoblash tizimlari qanday qismlarga bo'linadi ?
    J: Dasturiy va apparat`,

    `Kompyuterda muammolarni hal qilish uchun mo'ljallangan dasturlarning to'plami deyiladi
    J: Dasturiy ta'minot`,

    `Axborotni qayta ishlash uchun birlashtirilgan qurilmalar to'plami deyiladi
    J: Apparat tizimi`,

    `Tizim dasturiy ta'minoti -
    J: Ma'lum bir shaxsiy kompyuter dasturi bilan bog'liq bo'lmagan va an'anaviy funktsiyalarni bajaradigan umumiy foydalanish dasturlari`,

    `«Aloqa muharrirlari» nima?
    J: Aloqa muharrirlari-Assembler, ob'ekt modullari va bir modulga ulanish orqali alohida-alohida olinganlarni birlashtirish uchun mo'ljallangan tizimni qayta ishlash dasturi.`,

    `"Yuklagichlar" nima?
    J: Yuklagichlar - dasturni qayta ishlash dasturiga (OP) yuklash va uning boshqaruvini o'tkazish. Ular, shuningdek, yuklagichlarni bog'laydigan alohida modullarni bog'laydi.`,

    `"Makroprotsessorlar" nima?
    J: Makroprotsessorlar - bu belgilarni qayta ishlash uchun mo'ljallangan dastur bo'lib, uning davomida ma'lum qisqa iboralar (makros qo'ng'iroqlar) uzun (makros kengaytmalar) bilan bog'lanadi. Makroprotsessorning kirish qismida makro qo'ng'iroqlardan ba'zi matnlar, chiqishda - makro kengaytmalar mavjud.
`,
`    Qaysi hollarda "til konvertorlari" ishlatiladi?
    J: Til konvertorlari-dastur matnini yuqori darajadagi bir tildan boshqa yuqori tilga aylantirishni amalga oshiradi.
`,
`    "Kutubxonachilar" nima?
    J: Kutubxonachilar - bu kutubxona fayllarini yaratish va saqlash dasturlari bo'lib, ular bir qator manba matnlari, ob'ekt modullari bo'lishi mumkin.
`,
`    «Отладчики» nima ?
    J: Отладчики  - bu faqat dasturni amalga oshirish jarayonida aniqlanishi mumkin bo'lgan xatolarni topish va mahalliylashtirish uchun mo'ljallangan dasturlar.
`,
    `"Deassembler" nima?
    J: Disassembler - bu mashina kodlari ketma-ketligini assembler tiliga o'zgartiruvchi dastur.
`,
`    «Kross - tizimlar» nima ?
    J: Kross - tizimlar - bu boshqa VM ning kompyuter kodlarida taqdim etilgan bir VM dasturlarini olish uchun mo'ljallangan dasturlar.
`,
`    OS funktsiyalariga taalluqli bo'lmagan javob variantini ko'rsating.
    J: kompyuter boshqaruvi
`,
`    OT komponentlariga taalluqli bo'lmagan javob variantini ko'rsating.
    J: yordamchi dasturlar, ma'lumotlar serveri
`,
    `Bu o'ziga xos nomga ega bo'lgan ixtiyoriy sonli baytlar ketma-ketligidir...
    J: Fayl
`,
    `Faylni identifikatsiya qiluvchi ba'zi belgilar ketma-ketligiga ... deyiladi.
    J: Nom
`,
`    Fayl mazmuni va ishlov berish dasturiga ko'rsatgich
    J: Kengaytma
`,
`    Qaysi javob fayl tizimi navlariga taalluqli emas
    J: QIC, RYFS
`,
    `Fayllar bilan ishlash uchun qaysi funksiya YO'Q
    J: Masshtablash
`,
`    Qancha turdagi fayl tizimi komponentlari tuzilmalari mavjud.
    J: 3
`,
`    Kompyuter texnikasi va amaliy dasturlarini boshqarishni hamda ularning bir-biri va foydalanuvchi bilan o‘zaro ta’sirini ta’minlovchi dasturiy vositalar majmuasi ... deyiladi.
    J: Operatsion tizim
`,
`    Nomlangan ma'lumotlar to'plamlarini yaratish, saqlash va ularga kirishni tashkil qilishni ta'minlaydigan komponent.
    J: Fayl tizimi
`,
`    Formal tillar nazariyasi nuqtai nazaridan kompilyatorning ikkita asosiy vazifasi nimadan iborat.
   J: Analiz va sintez
`,
`   Kirish (manba) tilda manba dasturni olib, uni bajaradigan dastur ... deyiladi?
   J:Interpretator
`,
`.. chiqish tilidagi gaplar va umuman, natijaviy dastur matnini tashkil etuvchi buyruqlar hosil qilish bilan bevosita bog‘liq bo‘lgan bosqichdir.
Kod generatsiyasi
`,
`Algoritmik til dasturini mashina tiliga tarjima qiluvchi translyatorning nomi nima?
Assembler
`,
`Manba (kirish) tildagi dasturni hosil bo'lgan (chiqish) tildagi ekvivalent dasturga o'tkazuvchi dastur ... deyiladi?
Translyator
`,
`Manba dasturini mashina buyruqlari tilida yoki assembler tilida unga tenglashtirilgan dasturga tarjima qiladigan dastur … deyiladi?
Kompilyator
`,
`“Kompilyator” atamasi qaysi tildan olingan va u nimani anglatadi?
ingliz tilidan "compiler", «tuzuvchi»
`,
`“Translyator” atamasi qaysi tildan olingan va u nimani anglatadi?
Ingliz tilidan «translator», «tarjimon»
`,
`... - kompilyatorning dastur belgilarini manba tilda o‘qiydigan va ulardan manba tilning so‘zlarini (leksemalarini) tuzadigan qismi.
Leksik tahlil (skaner)
`,
`... - kompilyatorning dastlabki dastur matnida sintaksisni ajratib ko'rsatishni amalga oshiradigan qismi.
Sintaktik tahlil
`
`... - kompilyatorning kirish tili semantikasi nuqtai nazaridan dastlabki dastur matnining toʻgʻriligini tekshiradigan qismi.
Semantik tahlil
`,
`Formal grammatika G(VT,VN,P,S) , bu yerda VT …
Ko'p terminal belgilari
`,
`Formal grammatika G(VT,VN,P,S) , bu yerda VN
Ko'p terminal bo'lmagan belgilar
`,
`Formal grammatika G(VT,VN,P,S) , bu yerda P 
Ko'p grammatik qoidalar
`,
`Formal grammatika G(VT,VN,P,S) , bu yerda S
Maqsad (boshlang'ich) grammatika belgisi
`,
`G grammatikasi tomonidan berilgan til qanday belgilanadi
L(G)
`,
`Chomskiyning grammatikasiga ko'ra,nechta grammatikaning turlari bilan farqlanadi
4
`,
`Grammatika qoidalarini yaratish usuli nima?
Notatsiya
`
`Grammatikani qurish shaklini aniqlang.
Backus-Naura Shakli.
`
`Belgilar qatorlarining tartiblangan jufti (α, β) ... deyiladi.
Qoida
`
`Xomskiyning grammatikasiga ko'ra, 0 tip…
Fraza tuzilishi grammatikasi
`,
`Xomskiyning grammatikasiga ko'ra, 1 tip…
Kontekstga sezgir va qisqartirilmaydigan grammatika
`,
`Xomskiyning grammatikasiga ko'ra, 2 tip…
Kontekstga sezgir bo'lmagan grammatika
`,
`Xomskiyning grammatikasiga ko'ra, 3 tip…
Muntazam grammatika
`,
`Turli xil grammatika turlarini ko'rsating
Yaratuvchi va tan oluvchi
`,
`Grammatika bu...
Muayyan tilda gaplarni ifodalash usulining tavsifi
`,
`“Rasmiy til”ga ta’rif bering.
Rasmiy til - bu so'zlardan (satrlardan) tashkil topgan ma'lum bir jumlalar to'plami.
`,
`Javob variantlaridan qaysi biri “leksik analizator” atamasi bilan sinonimdir.
Skaner
`,
`Leksik analizatorning xizmat jadvallari qancha guruhga bo'linadi
3
`,
`... tilning elementar belgilaridan tashkil topgan va tilning boshqa tuzilmaviy birliklarini o‘z ichiga olmagan tilning tarkibiy birligidir.
Leksema
`,
`... - chekli uzunlikdagi, alifbo belgilaridan tashkil topgan har qanday qator
Gap
`,
`... - ba'zi alifbo ustidagi har qanday jumlalar to'plami
Til
`,
`... - chekli bo'sh bo'lmagan belgilar to'plami
Alifbo
`,
`Leksik analizatorlarni amalga oshirishning ikkita usuli qanday?
Parallel va ketma-ket
`,
`Identifikatorlar jadvallarini tashkil qilishning eng samarali usuli qanday?
Xeshlash
`,
`“Identifikatorlar jadvali” nima?
Identifikatorlar jadvali - bu manba dastur elementlari haqidagi ma'lumotlarni saqlash uchun xizmat qiluvchi ma'lumotlar to'plami.
`,
`Tilning leksema yoki leksik birligi...?
Tilning elementar belgilaridan tashkil topgan va tilning boshqa tarkibiy birliklarini o'z ichiga olmaydigan tilning tarkibiy birligi.
`,
`Leksik tahlil nima?
Leksik tahlil - kompilyatorning dastur belgilarini o'qiydigan va ulardan manba tilning so'zlarini tuzadigan qismi.
`,
`Leksik tahlildan foydalanadigan jadvallarni aniqlang.
Terminal belgilar jadvali. Belgilar nomlari jadvali. Ruxsat etilgan jadval. Leksema kodlari jadvali
`,
`Nima terminal belgilar zamonaviy dasturlash tillarida ma'lumoti o'rtasidagi chegara belgilaridir
Bo'shliqlar, operatsiya belgilari, sharh belgilar, ajratgichlar (vergul, nuqta-vergul)
`,
`Dasturlasgh tillari leksemalari hisoblanadi
Til identifikatorlari va kalit so'zlar
`,
`Chiqish daraxtini qurilish usullarini aniqlang
Yuqoridan pastga. Pastdan yuqoriga
`,
`"Cheklangan avtomat» nima uchun ishlatiladi?
Cheklangan avtomat - har qanday satrlarni tanib olish uchun qurilma.
`,
`... - bu kirishni amalga oshirish kerak bo'lgan kirish belgilarining umumiy oqimida bu satrlarni tanlash.
Leksema chegarasini aniqlash
`,
`... bu belgilar zanjirining muayyan tilga tegishliligini aniqlashga imkon beruvchi maxsus avtomat
Aniqlovchi (разборщик)
`,
`Har bir aniq dasturlash tilining mumkin bo'lgan leksemalarining tarkibi aniqlanadi
Tilning sintaksisi
`,
`Grammatik chiqarish daraxti deyiladi ...
ba'zi chiqarish zanjiriga mos keladigan graf (daraxt)
`,
`Qanday chiqarish chap taraf deb ataladi
Agar birinchi chiqarishning har bir bosqichida sentensial shakldagi eng chap noterminal grammatika qoidalarini ishlab chiqadigan qoidalar bilan almashtirilsa
`,
`Qanday chiqarish o'ng tomon deb ataladi
Agar har bir bosqichda chiqish eng o'ngdagi noterminal qoida bilan almashtirilsa
`,
`Tahlil qilish muammosi
Leksemalar chegaralarini topish va ularni tanlash
`,
`Sentensial shakl nima?
bu qoidalar faqat terminal belgilarida ifodalanadi
`,
`Sintaktik analizator termini o'rniga boshqa  yana qanday termin  ishlatiladi
Parser
`,
`Sintaksik analizator uchun kirish nima?
leksemalar va leksik analizator jadvallari ketma-ketligi
`,
`Sintaksik analizator uchun chiqish nima?
tahlil daraxti va leksik analizator jadvallari
`,
`Javoblarning qaysi biri sintaktik analizatorning vazifalariga TAALLUQLI EMAS
to'g'ri sintaksis konstruktsiyalari uchun xotirani ajratish
`,
`LL(k) grammatikasidagi 1 harf nimani anglatadi
Kirish satrini chapdan o'ngga ko'rish
`,
`LR(k) grammatikasidagi 1 harf nimani anglatadi
Kirish satrini chapdan o'ngga ko'rish
`,
`2 harfi LL(k) grammatikasi degan ma'noni anglatadi
Zanjirning chap chiqishi qurilish
`,
`LR(k) grammatikasidagi 2 harf nimani anglatadi
Zanjirning o'ng chiqishi qurilish
`,
`Muayyan ma'noga ega bo'lgan belgilar (leksemalar) ning to'liq ketma-ketligi deyiladi ...
Sintaktik qurilish
`,
`Sinktatik analizator qurish uchun nechta va qanaqa metodlar ishlatiladi
2: jadvalga asoslangan va dasturiy ta'minotga asoslangan
`,
`Qanday grammatikalar yuqoridan pastga algoritmlar bilan bog'liq
LL(k) grammatikali
`,
`Qanday grammatikalar pastdan yuqoriga algoritmlar bilan bog'liq
LR(k) grammatikali
`,
`Qaysi usul quyi oqim parserlar sinfi uchun asosiy hisoblanadi
Rekursiv tushish usuli
`,
`Qaysi usul ishlab chiqarishning o'ng tomonini ushbu ishlab chiqarishning chap tomonidagi belgi bilan almashtirishga asoslangan.
O'tkazish usuli
`,
`Pastdan yuqoriga analizatorlar sinfi uchun qaysi usul asosiy hisoblanadi
O'tkazish usuli
`,
`Qaysi usul berilgan sinfning barcha mumkin bo'lgan konstruktsiyalari uchun dastur yozishni o'z ichiga oladi
jadval asosida boshqariladigan
`,
`Qaysi usul ma'lum bir til uchun dastur yozishni o'z ichiga oladi
dasturiy ta'minotga asoslangan
`,
`Sinktatik analizator qurish uchun nechta va qanaqa algoritmlar ishlatiladi
2: quyi(top-down) и yuqori(bottom-up)
`,
`Qaysi usul grammatika qoidalarini to'g'ridan-to'g'ri tanib oluvchi boshqaruv tuzilmalariga "tikish" ga asoslanadi.
Rekursiv tushish usuli
`,
`Sintaksis daraxtining qirralari nimaga mos keladi?
Operatsiya
`,
`Sintaktik daraxtning barglariga nima mos keladi
Operand
`,
`Sintaktik graflarni yaratish uchun qancha qoidalar qo'llaniladi
6
`,
`Sintaktik grafda qoida terminalining belgisi paydo bo'lishi quyidagicha ko'rsatiladi
dumaloq(oval)
`,
`Sintaktik grafda qoidaning noterminal belgisi paydo bo'lishi quyidagicha ko'rsatiladi
to'rtburchak
`,
`Sintaksik grafda ba'zi qoidalar ro'yxatining ko'rinishi quyidagicha ko'rsatiladi
bir necha qatorda parallel jarayon
`,
`Sintaktik grafda qoida qismini takrorlash paydo bo'lishi quyidagicha ko'rsatiladi
davriy qaytish shaklida
`,
`Gapni grammatik analiz vaqtida jarayonni boshqarishni tavsiflaydi
sintaksis grafi
`,
`. ... - matematik  akslantirishning yo'nalishli harakati diagrammasi.
sintaksis daraxti 
`,
`Bu hosil bo'lgan dasturni ishga tushirish vaqtida bir marta ajratilgan va natijada olingan dasturni bajarish muddati uchun amal qiladigan xotira maydoni.
Global xotira maydoni
`,
`Bu hosil bo'lgan dasturning ba'zi bir qismini bajarish boshida ajratilgan va ushbu fragmentni bajarish oxirida bo'shatish mumkin bo'lgan xotira maydoni.
Local xotira maydoni
`,
`Bu kompilyatsiya vaqtida hajmi ma'lum bo'lgan xotira maydoni
Ststik xotira maydoni
`,
`Bu kompilyatsiya vaqtida hajmi noma'lum bo'lgan xotira maydoni
Dinamik xotira maydoni
`,
`Optimallashtirish jarayoni uchun qanday ikkita mezon qo'llaniladi
band qilingan xotira miqdori va dasturni bajarilish tezligi
`,
`Optimallashtirish jarayoni qanday bosqichdan iborat
Sintez fazasi
`,
`Dastlabki dasturning leksik birliklarini ushbu leksik birlik uchun zarur bo'lgan xotira maydonining manzili, hajmi va atributlari bilan xaritalash jarayoni.
Xotirani taqsimlash
`,
`Massivlar uchun hajmni hisoblash qoidasining javob variantini belgilang
elementlar soni va bitta element uchun xotira hajmining kopaytmasi
`,
`Strukturalar  uchun hajmni hisoblash qoidasi uchun javob variantini ko'rsating (nomli maydonlar bilan yozuvlar)
barcha maydonlar bo'yicha xotira o'lchamlari yig'indisi
`,
`Birlashmalar  uchun hajmni hisoblash qoidasining javob variantini ko'rsating (birlashmalar, umumiy maydonlar, variantlari bo'lgan yozuvlar)
maksimal maydon hajmi
`,
`Ob'ektlarni (sinflarni) amalga oshirish uchun hajmni hisoblash qoidasiga javob variantini ko'rsating)
bir xil nomlangan maydonlar bilan xotira hajmi va ob'ektga yo'naltirilgan tilning xizmat ma'lumotlari uchun xotira
`,
`Samaraliroq natijaviy ob'yekt dasturini olish uchun kompilyatsiya qilingan dasturda operatsiyalarni qayta tartiblash va o'zgartirish bilan bog'liq ishlov berish deyiladi...
optimallashtirish jarayoni
`,
`Xotira maydoni
bu qandaydir tarzda mantiqiy birlashtirilgan ma'lumotlar uchun ajratilgan xotira yacheykalari blokidir.
`,
`Operandlardan oldin operatsiya belgisi bo'lgan Polsha yozuvi ... deyiladi.
prefiksli
`,
`Operandlardan keyin operatsiya belgisi bo'lgan Polsha yozuvi ... deyiladi.
postfiksli
`,
`Ikki turdagi uzilishlar qanday?
apparat va dasturiy ta'minot uzilishlari
`,
`a+b Ifoda uchun triada qanday aniqlanadi
+(a,b)
`,
`Ifoda uchun tetrada qanday aniqlanadi
+(a,b,R)
`,
`a+b Ifoda uchun postfiks polsha yozuvi qanday aniqlanadi
ab+
`,
`a+b Ifoda uchun prefiks polsha yozuvi qanday aniqlanadi
+ab
`,
`Javob variantini ko'rsating, bu erda ichki tasvirlash shakli ishlatiladi: <operatsiya>(<operand1><operand2><natija)
Tetrada
`,
`Javob variantini ko'rsating, bu erda ichki tasvirlash shakli ishlatiladi: <operatsiya>(<operand1><operand2>)
Triada 
`,
`Javob variantini ko'rsating, bu erda ichki tasvirlash shakli ishlatiladi: (<operand1><operand2><operatsiya>)
Qavssiz yozuv
`,
`Javob variantini ko'rsating, bu erda ichki tasvirlash shakli ishlatiladi:
 < команда>(<operand1><operand2>)
Assembler kodi
`,
`Haqiqiy rejim uchun mo'ljallangan dasturlarni bajarish qobiliyatini ta'minlovchi tizim.... deyiladi
uzilish tizimi
`,
` (00h-07h) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
Markaziy protsessor uzilishlari
`,
`(08h-0Fh) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
1-darajali uzilish nazoratchilari
`,
`(10h-1Fh) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
BIOS uzilishlari 
`,
`(20h-3Fh) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
DOS uzilishlari
`,
`(51h-5Fh) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
Tarmoq uzilishlari
`,
`(70h-77h) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
2-darajali uzilish nazoratchilari
`,
`(60h-6Fh) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
Foydalanuvchi uzilishlari
`,
`(78h-FFh) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
Turli maqsadlar uchun uzilishlar
`,
`(40h-50h) uzilishlar qaysi uzilishlar tizimi guruhiga tegishli
Qoshimcha BIOS uzilishlari 
`,
`Shaxsiy kompyuterlarda qancha turdagi uzilishlar mavjud va ular qanday belgilanadi
256 (00..ff)
`,
`y=a+b*c Ifoda uchun postfiks qavssiz yozuvni belgilang
yabc*+=
`,
`y=a+b*c Ifoda uchun prefiks qavssiz yozuvni belgilang
=y+a*bc 
`,
`y=a/b-c Ifoda uchun postfiks qavssiz yozuvni belgilang 
yab/c-=
`,
`y=a/b-c Ifoda uchun prefiks qavssiz yozuvni belgilang
=y-/abc
`,
`y=(a+b)*c Ifoda uchun postfiks qavssiz yozuvni belgilang
yab+c*=
`,
`Protsessorning qaysi elementi xotiradan ko'rsatmalarni olish va ularning dekodlanishini boshqaradi.
Nazoratchi 
`,
`Protsessorning qaysi elementi ma'lumotlar ustida arifmetik va mantiqiy amallarni bajaradi
Arifmetik- mantiqiy qurilma
`,
`Protsessorning qaysi elementi ko'rsatmalarning vaqtinchalik saqlovchisi hisoblanadi.
Registr 
`,
`Umumiy maqsadli protsessor registrlari
AX,BX,CX,DX
`,
`Protsessorning  segment registrlari
CS, DS, ES, SS
`,
`Mantiqiy holat protsessor registrlari
FLAGS
`,
`Ofset protsessor registrlari
BP, SI, DI, SP, IP
`,
`Assembler so'zi qaysi tildan olingan va nimani anglatadi
Inglizcha so'z, "kollektor"
`,
`Qaysi variant assemblerlash dasturiy ta’minotiga taalluqli emas
Lazy Assembler, HASM
`,
`Assemblerda buyruqlar nechta usulda beriladi
4
`,
`Assembler tili mashina kodining simvolli belgilash buyrug'i
Instruksiya 
`,
`Assambleya tilining qism dasturini belgilash buyrug'i
Makrokomanda 
`,
`Assambleya tili operatsiyalarini ko’rsatish buyrug’i
Direktiva   
`,
`Assambleya tili buyrug’ini tan olmaslik buyrug’i
Kommentariy 
`,
`Operandlarni qo'shish uchun qaysi assembly tili buyrug’i qo'llaniladi
Add
`,
`Operandlarni ayirish uchun qaysi assembly tili buyrug’i qo'llaniladi
Sub
`,
`Operandlarni ko’paytirish uchun qaysi assembly tili buyrug’i qo'llaniladi
Mul
`,
`Operandlarni bo’lish uchun qaysi assembler tili buyrug’i qo'llaniladi
Div
`,
`Operandlar qiymatlarini almashish uchun qaysi assembler tili buyrug’i qo'llaniladi
Xchg 
`,
`Operandlar qiymatlarini solishtirish uchun qaysi assembler tili buyrug’i qo'llaniladi
Cmp
`,
`Registrlarda qiymatlarni o'rnatish uchun qaysi assembler tili buyrug’I qo'llaniladi
Mov
`,
`Registr qiymatini stekga joylash uchun qaysi assembler tili buyrug’i qo'llaniladi
Push
`,
`Registr qiymatini stekdan chiqarish uchun qaysi assembler tili buyrug’i qo'llaniladi
Pop
`,
`Assambler tilini takrorlash bo'yicha ko'rsatma
Loop
`,
`Assemblerning registr qiymatini bir birlikka oshirish bo'yicha ko'rsatmasi
Inc
`,
`Assemblerning registr qiymatini bir birlikka kamaytirish bo'yicha ko'rsatmasi
Dec
`,
`Assambler tili registrlari qiymati ishorasini o'zgartirish bo'yicha ko'rsatma
Neg
`,
`Assambler tili turini o'zgartirish bo'yicha ko'rsatma
Cbw
`,
`Assambler tili mantiqiy qo'shish buyrug'i
And
`,
`Assambler tili mantiqiy ko’paytirish buyrug'i
Or
`,
`Assembler tilini qo'shishning mantiqiy inkori ko'rsatmasi
Xor
`,
`Assambler tili mantiqiy inkor buyrug'i
Not
`,
`Assambler tili o’ngga surish buyrug'i
Shr
`,
`Assambler tili chapga surish buyrug'i
Shl
`,
`Assambler tili siklik chapga surish buyrug'i
Rol
`,
`Assambler tili siklik o’ngga surish buyrug'i
Ror
`,
`Tenglik taqqoslash operatori assembler tilining shartli o'tish (Jxx) ko'rsatmasida qanday belgilanadi.
JE
`,
`Teng emas taqqoslash operatori assembler tilining shartli o'tish (Jxx) ko'rsatmasida qanday belgilanadi.
JNE
`,
`Kichik  taqqoslash operatori assembler tilining shartli o'tish (Jxx) ko'rsatmasida qanday belgilanadi.
JL
`,
`Katta taqqoslash operatori assembler tilining shartli o'tish (Jxx) ko'rsatmasida qanday belgilanadi.
JG
`,
`mov  ax, 20h
mov  cx, 4
rcl ax,cx 
buyruqlar bajarilgandan so'ng o'nlik sanoq tizimidagi AX registrining qiymatni  aniqlang
512
`,
`mov  ax, 20h
mov  cx, 4
rcr ax,cx
buyruqlar bajarilgandan so'ng o'nlik sanoq tizimidagi AX registrining qiymatni  aniqlang
2
`,
`mov  ax, 200
mov  bx, 120
add ax,bx
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
143
`,
`mov  ax, 10h
mov  cx, 3
m: dec ax
loop m
buyruqlar bajarilgandan so'ng o'nlik sanoq tizimidagi AX registrining qiymatni  aniqlang
13`,

`mov  ax, 10h
mov  cx, 3
m: dec ax
loop m
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
D`,

`mov  ax, 10
mov  cx, Ah
m: inc ax
loop m
buyruqlar bajarilgandan so'ng o'nlik sanoq tizimidagi AX registrining qiymatni  aniqlang
20
`,
`mov  ax, 10
mov  cx, Ah
m: inc ax
loop m
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
14
`,
`mov  ax, 27h
shl ax,1
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
4E
`,
`mov  ax, 27h
shr ax,1
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
13
`,
`mov  ax, aaaah
mov bx,9999h
sub ax,bx
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
4369
`,
`mov  ax, 1000
mov bx,5h
mul bx
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
1388
`,
`mov  ax, 1000
mov bx,100h
div bx
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
3`,

`mov  ax, 1000
mov bx,100h
div bx
buyruqlar bajarilgandan so'ng 16 lik sanoq tizimidagi AX registrining qiymatni  aniqlang
E8`,

`mov  ax,  FFh
mov bx,AAh
mul bx
buyruqlar bajarilgandan so'ng o’nlik sanoq tizimidagi AX registrining qiymatni  aniqlang
43350
`
]




const inp = document.querySelector(".inp")
const ul = document.querySelector(".ul")
const choise = document.querySelector(".choise")




function search1(){

    if(choise.value==1){
        savol = xalqaro_savollar
    }

    if(inp.value<2) return
    let newLst = []
    for(let sav of savol){
        if(sav.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase())){
            newLst.push(sav)
        }
    }
    render(newLst)
}


function render(lst){

    ul.innerHTML = null

    if(lst.length==0){
        if(choise.value==1){
            sav = xalqaro_savollar
        }
    }
    
    for(let sav of lst){
        let li = document.createElement("li")
        li.textContent = sav

        if(choise.value==2){
            li.classList.add("color-change")
        }

        ul.append(li)
    }
}


inp.addEventListener("keyup",()=>{
    search1()
})

choise.addEventListener("click",()=>{
    inp.value=""
    if(choise.value==1){
        render(xalqaro_savollar)
    }

})

render(xalqaro_savollar)

