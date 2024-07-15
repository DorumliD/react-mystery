import './Header.css'
import React from 'react'

function Header() {
  
  let array = [{
    question: 'Ushbu chorrahada avtobus haydovchisi kimga yo‘l berishi kerak emas?',
    answer1: 'hech kimga',
    answer2: 'qizil avtomobilga',
    answer3: 'oq avtomobilga',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/93/89-6.jpg'
},
{
    question: 'Ushbu yo‘l belgisi qaysi transport vositalarining harakatlanishini taqiqlaydi?',
    answer1: 'Xavfli yuk tashiyotgan transport vositalarining harakatlanishini',
    answer2: 'Ruxsat etilgan to‘la vazni 3.5tonnadan ortiq bo‘lgan yuk avtomobillarini',
    answer3: 'Portlovchi va tez alangalanuvchi yukni tashiyotgan transport vositalarining harakatlanishini',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/95/91-7.jpg'
}, 
{
    question: 'Agar avtomobilning o‘ng g‘ildiraklari nam qoplamali yo‘l yoqasiga chiqib qolsa, tavsiya etiladi:',
    answer1: 'Avtomobilni tormozlamasdan yo‘lning qatnov qismiga oxista ravon burish.',
    answer2: 'Avtomobilni tormozlash va to‘liq to‘xtatish',
    answer3: 'Avtomobilni tormozlab, yo‘lning harakat qismiga ohista ravon burish.',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'Ushbu holatda qaysi transport vositasi yo‘l berishi kerak?',
    answer1: 'Avtobus',
    answer2: 'Yengil avtomobil',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/88/80-1.jpg'
},
{
    question: 'Qaysi belgi to‘xtash chizig‘i oldida, u bo‘lmaganda, kesib o‘tiladigan qatnov qismining chetida to‘xtamasdan harakatlanishni taqiqlaydi?',
    answer1: 'd',
    answer2: 'b va c',
    answer3: 'a',
    answer4: 'a va d',
    answer5: 'b',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/88/84-2.jpg'
},
{
    question: 'Tumanga qarshi old chiroqlarni qorong‘i vaqtda, yo‘lning yoritilmagan qismlarida uzoqni yoki yaqinni yorituvchi chiroqlar bilan birga qo‘llash mumkinmi?',
    answer1: 'Mumkin',
    answer2: 'Mumkin emas',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/93/89-6.jpg'
},
{
    question: 'Ajratuvchi mintaqa - ...',
    answer1: 'Yo‘lning yonma-yon joylashgan qatnov qismlarini ajratuvchi, transport vositalari harakatlanishi yoki to‘xtashi uchun mo‘ljallanmagan, yo‘l sathidan ko‘tarilgan yoki maysazor, ariq, maxsus to‘siqlar bilan ajratilgan baland qismi',
    answer2: 'Avtomobillarning bir qator bo‘lib harakatlanishi uchun yetarlicha keng bo‘lgan, yo‘l chiziqlari bilan belgilangan yoki belgilanmagan yo‘l qatnov qismining har qanday bo‘ylama mintaqa',
    answer3: 'Yo‘lning relssiz transport vositalari harakati uchun mo‘ljallangan qismi',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'Yo‘l harakati xavfsizligini ta’minlash –',
    answer1: 'Yo‘llarda harakatni boshqarish bo‘yicha huquqiy, tashkiliy-texnikaviy tadbirlar va boshqaruv harakatlari majmui.',
    answer2: 'Yo‘l-transport hodisalarining kelib chiqish sabablarini oldini olishga, ularning og‘ir oqibatlarini kamaytirishga qaratilgan faoliyat.',
    answer3: 'Transport vositalari va piyodalarning harakatlanishi uchun qurilgan yoki moslashtirilgan yer bo‘lagi yoxud sun’iy inshoot yuzasi. Yo‘l avtomobil va shahar elektr transporti yo‘llarini hamda trotuarlarni o‘z ichiga oladi.',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'Hayvonlarni yoldan haydab o‘tishga qoidaga ko‘ra ruxsat etiladi:',
    answer1: 'Istalgan vaqtda',
    answer2: 'Kunning yorug‘ vaqtida',
    answer3: 'Kunning qorong‘i vaqtida',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'Bosh miya jarohatlanishining quyidagi alomatlar bilan xarakterlanadi:',
    answer1: 'Amneziya - xotiraning yo‘qolishi, sodir bo‘lgan jarohatlanish bilan bog‘liq va hayotidagi ba’zi voqealar xotirasidan o‘chadi',
    answer2: 'Yuqoridagi barcha holatlar',
    answer3: 'Qayt qilish bir - ikki marta, og‘ir holatlarda ko‘proq bo‘lishi mumkin',
    answer4: 'Hushdan ketish bir necha soniyadan bir necha soatgacha bo‘lishi mumkin',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'Svetoforning miltillovchi sariq ishorasi nima haqida ogohlantiradi?',
    answer1: 'Barcha javoblar to‘g‘ri',
    answer2: 'Chorraha tartibga solinmaganligi to‘g‘risida',
    answer3: 'Harakatlanishga ruxsat beradi',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'O‘ng tomondagi yondosh hududdan foydalanib qayrilib olishning ko‘rsatilgan qaysi usuli harakat xavfsizligini ta’minlaydi.',
    answer1: 'Faqat chap tomondagi suratda',
    answer2: 'Faqat o‘ng tomondagi suratda',
    answer3: 'Har ikki suratda',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/100/96-8.jpg'
},
{
    question: 'Chorraxani oxirgi bo‘lib qaysi transport vositasi kesib o‘tadi?',
    answer1: 'Yuk avtomobil',
    answer2: 'Yashil avtomobil',
    answer3: 'Qizil avtomobil',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/100/96-7.jpg'
},
{
    question: 'Qaysi rasmdagi avtomobil haydovchisi yuk tashish qoidasini buzayapti?',
    answer1: 'B',
    answer2: 'A',
    answer3: 'A va B',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/100/96-9.jpg'
},
{
    question: 'Balandlikda yo‘l chetida to‘siq mavjud bo‘lganda to‘xtagan avtomobilni joyidan g‘ildirab ketishini oldini olish uchun oldingi g‘ildiraklarni burib qo‘yish usuli qaysi javobda to‘g‘ri ko‘rsatilgan:',
    answer1: 'B va D',
    answer2: 'A va C',
    answer3: 'B va C',
    answer4: 'A va D',
    src:'https://e-avtomaktab.uz/storage/tests/96-6.png'
},
{
    question: 'Ushbu yol belgisi qanday nomlanadi?',
    answer1: 'Katta olchamli yuklarni tashish taqiqlangan',
    answer2: 'Yuk avtomobillari bilan quvib otish taqiqlangan',
    answer3: 'Xavfli yuk tashayotgan transport vositasining harakatlanishi taqiqlangan',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/100/88-8.jpg'
},
{
    question: 'Haydovchi yo‘lning relssiz transport vositalari harakatlanadigan bo‘laklar sonini belgilaydigan chiziqlar yoki yo‘l belgilari bo‘lmasa, bo‘laklar sonini qanday aniqlashi kerak?',
    answer1: 'Bunday yo‘lni ikki bo‘lakli qarama qarshi harakat tashkil qilingan yo‘l deb qabul qilishi kerak.',
    answer2: 'Qatnov qismining kengligini, transport vositalari orasidagi zarur yonlama oraliq masofani va ularning gabarit o‘lchamlarini hisobga olgan holda o‘zi aniqlaydi.',
    answer3: 'ikkalasi ham togri',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: '“Aholi punkti” atamasi nimani bildiradi?',
    answer1: 'Kirish va chiqish yo‘llari 5.22 — 5.25 belgilari bilan belgilangan hududni',
    answer2: 'Aholi yashaydigan hududni',
    answer3: 'Shahar, qishloq joylari hududini',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
{
    question: 'Ushbu ko‘rsatilgan holatda kim yo‘l berishi kerak?',
    answer1: 'Avtomobil haydovchisi',
    answer2: ' Motosikl haydovchisi',
    src:'https://e-avtoshkola.uz/uploads/tests/questions/94/90-6.jpg'
},
{
    question: 'Yo‘lning qatnov qismi:',
    answer1: 'Yo‘lning avtomobillar harakati uchun mo‘ljallangan qismi',
    answer2: 'Yo‘lning relssiz transport vositalari harakati uchun mo‘ljallangan qismi',
    answer3: 'Yo‘lning transport vositalari harakati uchun mo‘ljallangan qismi',
    src:'https://e-avtomaktab.uz/Vesperr/assets/img/testbox.svg'
},
];
  
  return (
    <div className='header'>
       <ul>
          {array.map(obj =>(
            <li key={obj}>Question: {obj.question}, Answer1: {obj.answer1}, Answer2: {obj.answer2}, Answer3: {obj.answer3} <img src={obj.src}></img> </li>
          ))}
       </ul>
    </div>
  );
};

export default Header;

