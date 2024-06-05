
import ArtikelImage from '../assets/img/artikel/ArtikelKesehatanAnjing1.png';

const ViewArtikelPage = () => {
  const article = {
    title: "Bagaimana Merawat Kucing Kesayanganmu?",
    paragraphs: [
      "Bagi Anda yang baru memelihara kucing dan masih bingung tentang perawatan dasarnya, berikut beberapa cara yang bisa dilakukan.",
      "1. Beri makan secara teratur",
      "Tips merawat kucing yang paling penting yaitu memberi makan sesuai kebutuhannya. Makanan kucing yang dipilih harus seimbang untuk tahap kehidupannya. Anda juga bisa memberikan anabul daging sapi, ayam, hati ayam, dan ikan yang sudah dimasak. Hindari daging mentah, busuk, atau ikan berduri kepada anabul. Selain itu, kucing harus diberi camilan sebanyak 5 – 10% dari makanan utamanya. Camilan kucing bermacam-macam, tetapi yang paling sering diberikan adalah wet food. Anda dapat memberikan wet food sebanyak 1 – 2 kali dalam seminggu.",
      "2. Beri tempat minum kucing",
      "Sama seperti manusia, kucing membutuhkan air minum untuk menjaga kesehatan. Dengan mencukupi kebutuhan minumnya, anabul dapat terhindar dari dehidrasi, penyakit infeksi saluran kemih, dan penyakit ginjal. Nah, Anda perlu mengetahui cara minum yang disukai kucing Anda. Jika Anda pernah melihat kucing minum dari keran atau mengais-ngais mangkuk airnya, kemungkinan ia lebih suka minum di air mengalir. Bila kucing menyukai air mengalir, sediakan tempat minum khusus yang terdapat pancuran air sehingga anabul mau minum dari mangkoknya. Jangan lupa ganti air minumnya 1 kali sehari.",
      "3. Sisir bulu kucing setiap hari",
      "Cara menjaga kesehatan kucing yang baik selanjutnya yaitu dengan menyisir bulu kucing setiap hari. Kebiasaan ini ternyata bisa mendekatkan Anda dengan kucing peliharaan. Anabul memang bisa membersihkan bulu-bulu rontok dengan menjilati dan merawat dirinya sendiri, tetapi Anda juga dapat membantunya dalam hal ini. Lagi pula, menyisir sambil mengelus-ngelus bulu kucing merupakan kegiatan yang menyenangkan.",
      "4. Sediakan litter box",
      "Pasir kucing salah satu hal penting dalam cara merawat kucing ialah menyediakan litter box alias kotak pasir untuk kucing buang air. Pilihlah pasir kucing yang tidak berdebu agar kucing tidak mudah bersin-bersin. Anda juga sebaiknya menyediakan tambahan litter box, setidaknya satu buah. Jika Anda memelihara 2 kucing, sediakan 3 litter box. Dengan adanya litter box ekstra, kucing Anda punya alternatif jika tidak ingin menggunakan kotak biasanya karena alasan tertentu. Lokasi menempatkan kotak pasir juga perlu Anda perhatikan. Pastikan kotak berada di tempat yang mudah diakses dan nyaman bagi kucing. Satu yang terpenting, pastikan litter box selalu dalam kondisi kering, jangan sampai lembab.",
      "5. Sediakan tempat menggaruk",
      "Ini adalah perilaku alami, sehat, dan penting bagi kucing. Sayangnya, perilaku ini bisa merusak berbagai perabotan di rumah, misalnya sofa atau karpet. Oleh karena itu, sediakan tiang garukan untuk kucing. Memang perlu beberapa waktu bagi kucing mengenali tiang garukan ini.",
      "6. Menjaga kebersihan kucing",
      "Kucing adalah hewan yang selalu menjaga kebersihan diri. Mereka bisa menghabiskan banyak waktu untuk membersihkan dirinya sendiri.Tidak perlu terlalu sering, cukup mandikan anabul 1 – 2 kali dalam sebulan. Memandikan kucing secara rutin juga mencegah masalah kutu kucing dan infeksi jamur. Memotong kuku kucing sekaligus membersihkan kotoran dan kuman yang menempel yang mana bisa berpindah ke barang-barang atau tubuh manusia.",
    ],
  };

  return (
    <div style={{ width: '100%', maxWidth: '1181px', margin: '0 auto', padding: '20px' }}>
      <img 
        src={ArtikelImage} 
        alt="Artikel" 
        style={{ width: '100%', height: '577px', objectFit: 'cover' }} 
      />
      <div style={{ marginTop: '60px' }}>
        <h1 style={{ marginBottom: '20px' }}>{article.title}</h1>
        {article.paragraphs.map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '15px', lineHeight: '1.6' }}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ViewArtikelPage;
