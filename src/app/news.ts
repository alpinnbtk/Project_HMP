import { Injectable } from '@angular/core';
import { race, raceWith } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class News {

  berita = [
    {
      index: 0,
      title: '[QUIZ] Seberapa Sehat Matamu? Coba Uji Melalui Kuis Ini!',
      author: 'Rully Bunga',
      publishedDate: new Date('2025-09-25'),
      category: ['Kesehatan'],
      gambarCover: 'https://image.idntimes.com/post/20180409/cover-367f24ae5ab0e0215bc59c55f374e5e9.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
      gambar: [
        'https://image.idntimes.com/post/20180409/cover-367f24ae5ab0e0215bc59c55f374e5e9.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
        'https://freshvision.id/wp-content/uploads/2025/04/Seberapa-tajam-matamu-650x433.jpg',
        'https://cms.soulofjakarta.id/uploads/article/old-asset/mata_20171102_144710.jpg',
        'https://res.cloudinary.com/dk0z4ums3/image/upload/v1621835922/attached_image/tujuh-cara-menjaga-kesehatan-mata.jpg'
      ],
      description: 'Pastikan kamu memperhatikan gambar ini dengan baik ya sebelum kamu menjawab pertanyaannya. Sudah siap? Yuk langsung coba!',
      komentar: [
        { username: 'visionlover', komentar: 'Wah seru banget, kayak tes mata di optik wkwk 😂' },
        { username: 'indra22', komentar: 'Aku kok gagal terus ya, apa mataku minus makin parah?' },
        { username: 'fitrihijau', komentar: 'Berguna banget buat ngecek kesehatan mata tanpa harus ke dokter.' },
        { username: 'chorts', komentar: 'Next bikin quiz buat tes buta warna dong!' }
      ], 
      rating: [
        { username: 'visionlover', rate: 4 },
        { username: 'indra22', rate: 3 },
        { username: 'fitrihijau', rate: 5 },
        { username: 'chorts', rate: 4 }
      ]
    },
    {
      index: 1,
      title: 'Zulhas Dampingi Prabowo ke AS Bawa Misi Pangan dan Iklim',
      author: 'Trio Hamdani',
      publishedDate: new Date('2025-09-25'),
      category: ['Ekonomi', 'Nasional'],
      gambarCover: 'https://image.idntimes.com/post/20250925/upload_a749e1ce364a27c32d25354362f14d9e_a939925d-4936-4dc7-a126-f5d52737ac60.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
      gambar: [
        'https://image.idntimes.com/post/20250925/upload_a749e1ce364a27c32d25354362f14d9e_a939925d-4936-4dc7-a126-f5d52737ac60.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
        'https://awsimages.detik.net.id/community/media/visual/2023/11/24/pan-9_43.jpeg?w=600&q=90',
        'https://thumb-hw.tvonenews.com/images/2025/09/25/68d55e43ed05c-menko-pangan-zulkifli-hasan-bersama-presiden-ri-prabowo-subianto.jpg',
        'https://c.inilah.com/reborn/2025/09/Whats_App_Image_2025_09_25_at_17_28_57_35ee3ef215.jpeg'
      ],
      description: 'Jakarta, IDN Times - Menteri Koordinator (Menko) Pangan Zulkifli Hasan menggarisbawahi pidato Presiden Prabowo Subianto mengenai krisis pangan yang disampaikan dalam Sidang Umum PBB di Amerika Serikat (AS). Dia menilai, kehadiran Prabowo di forum internasional tersebut sekaligus menunjukkan Indonesia tidak lagi sekadar hadir sebagai partisipan, melainkan tampil sebagai pemain utama yang membawa solusi. Dia menyebut, momen tersebut menjadi penanda era baru diplomasi Indonesia',
      komentar: [
        { username: 'ekonommuda', komentar: 'Semoga misi pangan ini benar-benar ada hasilnya, bukan cuma wacana.' },
        { username: 'agussetia', komentar: 'Bangga sih Indonesia jadi pemain utama di forum internasional 👏' },
        { username: 'nadiar', komentar: 'Tapi masalah pangan di dalam negeri juga jangan dilupain dong.' },
        { username: 'alpinnbtk', komentar: 'Diplomasi iklim juga penting, semoga ada aksi nyata.' }
      ],
      rating: [
        { username: 'ekonommuda', rate: 4 },
        { username: 'agussetia', rate: 5 },
        { username: 'nadiar', rate: 4 },
        { username: 'alpinnbtk', rate: 4 }
      ]
    },
    {
      index: 2,
      title: '7 Rekomendasi Mobil Listrik Keluarga, BYD M6 hingga GAC Aion Y Plus',
      author: 'Uswatun Khasanah',
      publishedDate: new Date('2025-09-25'),
      category: ['Teknologi'],
      gambarCover: 'https://image.idntimes.com/post/20250425/product-m6-top-86a7c8fbdc72570d029cdb712dd0c68d-f9448f3954e0f27b9f7ae09e084cd572.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
      gambar: [
        'https://image.idntimes.com/post/20250425/product-m6-top-86a7c8fbdc72570d029cdb712dd0c68d-f9448f3954e0f27b9f7ae09e084cd572.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
        'https://image.idntimes.com/post/20241227/kia-ev9-0d0879cd6006178dcd7a55e9d63a5c01.jpg',
        'https://image.idntimes.com/post/20250223/maxus-mifa-9-9707fc84772566518e5eeb38c3506942.jpg',
        'https://image.idntimes.com/post/20250223/toyota-bz4x-95a7ec01a88044ec97e9a0dd19554f61.jpg'
      ],
      description: 'Jakarta, IDN Times – Perjalanan bersama keluarga butuh kendaraan yang nyaman, irit, dan ramah lingkungan. Mobil listrik kini jadi pilihan populer karena biaya operasionalnya lebih murah. Selain itu, teknologinya makin canggih dengan fitur keselamatan dan kenyamanan terbaik. Beberapa mobil listrik untuk keluarga menawarkan kabin luas dan teknologi canggih. Lantas, apa saja mobil listrik yang layak kamu pertimbangkan untuk perjalanan keluargamu? Yuk, simak daftar lengkapnya dan temukan pilihan terbaik di artikel ini',
      komentar: [
        { username: 'mobilmania', komentar: 'Keren sih tapi harga pasti masih tinggi buat kebanyakan orang.' },
        { username: 'greenfuture', komentar: 'Akhirnya ada pilihan mobil listrik yang family friendly 👍' },
        { username: 'jokocar', komentar: 'Baterainya tahan berapa lama ya? Takutnya repot isi ulang.' },
        { username: 'fitrihijau', komentar: 'Aku suka desain Kia EV9, modern banget.' }
      ],
      rating: [
        { username: 'mobilmania', rate: 4 },
        { username: 'greenfuture', rate: 5 },
        { username: 'jokocar', rate: 4 },
        { username: 'fitrihijau', rate: 5 }
      ]
    },
    {
      index: 3,
      title: 'Misi Lolos Piala Dunia 2026: Timnas Indonesia Punya Persiapan Sepekan',
      author: 'Tino Satrio',
      publishedDate: new Date('2025-09-25'),
      category: ['Olahraga', 'Nasional'],
      gambarCover: 'https://image.idntimes.com/post/20250611/upload_27a0dbe571fdab2202b4f5aaa0ce0d42.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
      gambar: [
        'https://image.idntimes.com/post/20250611/upload_27a0dbe571fdab2202b4f5aaa0ce0d42.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
        'https://image.idntimes.com/post/20250906/foto_3banding2_990e1a41-a748-479f-8a73-48b2b029d7c5.jpg',
        'https://kitagaruda.id/_next/image?url=https%3A%2F%2Fkitagaruda.sgp1.cdn.digitaloceanspaces.com%2F01K35RHBRWRFEW9E1N25CJD241.jpg&w=2048&q=75',
        'https://cdn1-production-images-kly.akamaized.net/Jaw4DgkuSfBwRYmAop1O30gUPbU=/0x220:5168x3133/800x450/filters:quality(75):strip_icc():format(webp):watermark(kly-media-production/assets/images/watermarks/bola/watermark-color-landscape-new.png,725,20,0)/kly-media-production/medias/5339674/original/047240900_1757081733-20250904AA_Timnas_Indonesia_vs_China_Taipei-08.JPG'
      ],
      description: 'Jakarta, IDN Times - Putaran keempat Kualifikasi Piala Dunia 2026 zona Asia tinggal menghitung hari. Timnas Indonesia dijadwalkan bertolak ke Arab Saudi yang terbagi dalam beberapa kloter, pada 1-2 Oktober 2025. Artinya, Timnas memiliki waktu persiapan sepekan demi menyiapkan diri dalam persaingan satu tiket ke putaran final Piala Dunia 2026. Itu karena laga perdana mereka dijadwalkan pada 9 Oktober mendatang, kontra Arab Saudi.',
      komentar: [
        { username: 'garudapride', komentar: 'Gas terus timnas! Minimal seri lawan Arab Saudi udah keren.' },
        { username: 'bolaindo', komentar: 'Persiapan sepekan cukup gak ya? Lawan berat loh.' },
        { username: 'fanatikbola', komentar: 'Ayo Garuda, jangan kasih kendor 💪🔥' }
      ], 
      rating: [
        { username: 'garudapride', rate: 5 },
        { username: 'bolaindo', rate: 4 },
        { username: 'fanatikbola', rate: 5 }
      ]
    },
    {
      index: 4,
      title: 'Selena Gomez dan Benny Blanco Resmi Menikah',
      author: 'Zahrotustianah',
      publishedDate: new Date('2025-09-28'),
      category: ['Viral', 'Public Figure'],
      gambarCover: 'https://image.idntimes.com/post/20250928/upload_a654c0b773965de938d9a48bb9ab3480_d6cf73bf-ab95-4267-94be-dc1a690d26b8.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
      gambar: [
        'https://image.idntimes.com/post/20250928/upload_a654c0b773965de938d9a48bb9ab3480_d6cf73bf-ab95-4267-94be-dc1a690d26b8.jpg?tr=w-1200,f-webp,q-75&width=1200&format=webp&quality=75',
        'https://ichef.bbci.co.uk/news/480/cpsprodpb/26cb/live/cb177ec0-9c40-11f0-a118-f58186d9ac13.png.webp',
        'https://cdn-images.vtv.vn/thumb_w/730/66349b6076cb4dee98746cf1/2025/10/01/sammblake-photos-latest-post-went-112528592-92a501-27488576037647393472167-33037298886991583916454.jpg',
        'https://people.com/thmb/64QyxDbKyyM5xQ3cYDauDJ0RH1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1040x543:1042x545)/selena-gomez-benny-blanco-wedding-092825-02-08acc5fee9174d45a2836fdd68722ff5.jpg'
      ],
      description: 'Selena Gomez resmi menikah dengan Benny Blanco. Pelantun lagu "Come & Get It" tersebut mengumumkannya lewat sederet foto pernikahan yang diunggah ke Instagram resminya, Sabtu (27/9/2025) waktu setempat. "9.27.25," tulis Selena dengan emoji hati berwarna putih. Selena Gomez dan Benny Blanco pertama kali bertemu ketika sang aktris masih berusia 17 tahun. Saat itu, ibunda Selena mempertemukannya dengan Blanco untuk membantu sang anak membangun karier musiknya. Mereka pun menjadi teman dan melakukan sejumlah proyek kolaborasi bersama.',
      komentar: [
        { username: 'fanselena', komentar: 'Selamat Selena! Semoga langgeng sama Benny 💖' },
        { username: 'popculture', komentar: 'Wah akhirnya juga nikah, banyak fans yang nunggu moment ini.' },
        { username: 'indoviral', komentar: 'Cakep banget fotonya, kayak di film romantis.' },
        { username: 'cynthialuv', komentar: 'Semoga bahagia selalu yaa 🥰' }
      ], 
      rating: [
        { username: 'fanselena', rate: 5 },
        { username: 'popculture', rate: 4 },
        { username: 'indoviral', rate: 5 },
        { username: 'cynthialuv', rate: 4 }
      ]
    },
    {
      index: 5,
      title: 'KPK Sita Rp 1,3 M dari Ilham Habibie, Asalnya dari Cicilan Mercy Dibeli RK',
      author: 'DetikNews',
      publishedDate: new Date('2025-10-01T??:??:00'),
      category: ['Hukum', 'Korupsi'],
      gambarCover: 'https://statik.tempo.co/data/2025/09/30/id_1431680/1431680_720.jpg',
      gambar: [
        'https://statik.tempo.co/data/2025/09/30/id_1431680/1431680_720.jpg',
        'https://awsimages.detik.net.id/community/media/visual/2025/09/03/potret-ilham-akbar-habibie-penuhi-panggilan-kpk-soal-kasus-korupsi-iklan-bjb-1756887137565_169.jpeg?w=600&q=90',
        'https://media.suara.com/pictures/653x366/2025/09/30/43985-anak-presiden-ketiga-bj-habibie-ilham-habibie.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJoGNsLY3RMgQ6S6uLyToO6XuWpa5y_izFMw&s'
      ],
      description: 'KPK menyita uang sebesar Rp 1,3 miliar dari Ilham Habibie. Uang tersebut diduga berasal dari cicilan mobil Mercy yang dibeli oleh RK terkait kasus yang ditangani.',
      komentar: [
        { username: 'justicewatcher', komentar: 'Kasusnya makin rumit ya, kok bisa sampai cicilan mobil ikut nyangkut 😮' },
        { username: 'rakyatjelas', komentar: 'Rp 1,3 M itu uang kecil buat mereka, tapi gede banget buat rakyat biasa.' },
        { username: 'lawstudent', komentar: 'Semoga KPK bisa bener-bener bongkar semua alurnya, jangan tebang pilih.' },
        { username: 'bandungkepo', komentar: 'RK lagi-lagi disebut, pasti bakal ramai nih.' }
      ], 
      rating: [
        { username: 'ekonomindo', rate: 4 },
        { username: 'dagangjaya', rate: 5 },
        { username: 'analisisekonomi', rate: 4 },
        { username: 'netizenpeduli', rate: 3 },
        { username: 'optimisnusantara', rate: 5 }
      ]
    },
    {
      index: 6,
      title: 'Bangunan Ponpes Ambruk di Sidoarjo Diduga Tak Berizin-Konstruksi Tak Standar',
      author: 'DetikNews',
      publishedDate: new Date('2025-10-01T??:??:00'),
      category: ['Nasional', 'Peristiwa'],
      gambarCover: 'https://statik.tempo.co/data/2025/09/30/id_1431574/1431574_720.jpg',
      gambar: [
        'https://statik.tempo.co/data/2025/09/30/id_1431574/1431574_720.jpg',
        'https://cdn01.metrotvnews.com/dynamic/content/2025/09/29/NP6C3oJ5/a_68dab7b045d16.jpg?w=720',
        'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/7865/live/fd290140-9e84-11f0-aaa6-730f9358a2bf.jpg.webp',
        'https://cdn0-production-images-kly.akamaized.net/xs_06m4H0zK-IkEQz0kn3VKhr24=/800x400/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/5366393/original/085860400_1759225913-1.jpg'
      ],
      description: 'Musala sebuah pondok pesantren di Sidoarjo roboh dan menelan korban. Dugaan kuat menunjukkan bangunan tidak berizin dan konstruksi tidak sesuai standar.',
      komentar: [
        { username: 'indonesiabuild', komentar: 'Bangunan pendidikan kok bisa ga ada izin, bahaya banget.' },
        { username: 'wargajawa', komentar: 'Kasihan santri-santri yang jadi korban, harusnya bisa dicegah 😢' },
        { username: 'arsitekmuda', komentar: 'Pakai material murah dan tanpa standar, ya wajar roboh.' },
        { username: 'netizenkritis', komentar: 'Pemda juga harus tanggung jawab soal pengawasan.' }
      ],
      rating: [
        { username: 'wargajabar', rate: 4 },
        { username: 'motorlover', rate: 3 },
        { username: 'pajakjelas', rate: 5 },
        { username: 'bandungmania', rate: 4 },
        { username: 'netizenkritis', rate: 4 }
      ]
    },
    {
      index: 7,
      title: 'Prabowo akan Terbitkan Perpres Tata Kelola MBG: SPPG Harus Punya Chef Terlatih',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T12:27:00'),
      category: ['Politik', 'Pemerintahan'],
      gambarCover: 'https://suaragarut.id/upload/postingan/1759098075_isvyou7phc0pnpf.jpeg',
      gambar: [
        'https://suaragarut.id/upload/postingan/1759098075_isvyou7phc0pnpf.jpeg',
        'https://i0.wp.com/rmnews.id/wp-content/uploads/2025/10/we-1.jpeg?fit=600%2C338&ssl=1',
        'https://img.idxchannel.com/media/1200/images/idx/2025/01/20/Presiden_Prabowo_Makan_Bergizi_Gratis.jpg',
        'https://asset.kompas.com/crops/x5peCksDYqVGhsZtgAm9mz0GLlM=/0x0:0x0/750x500/data/photo/2025/10/01/68dcb865c832e.jpg'
      ],
      description: 'Presiden Prabowo Subianto akan menyusun Peraturan Presiden terkait tata kelola program Makan Bergizi Gratis (MBG), dengan persyaratan Dapur SPPG harus dikelola oleh tenaga berkompeten (chef terlatih).',
      komentar: [
        { username: 'politikindo', komentar: 'Debatnya seru, tapi lebih banyak gimmick daripada solusi nyata.' },
        { username: 'pemilu2024', komentar: 'Publik lebih butuh program konkrit, bukan saling serang personal.' },
        { username: 'mahasiswakritik', komentar: 'Moderatornya kurang tegas, jadi banyak yang interupsi.' },
        { username: 'indonesiavote', komentar: 'Minimal rakyat bisa lihat kualitas calon presidennya.' }
      ],
      rating: [
        { username: 'politikindo', rate: 4 },
        { username: 'pemilu2024', rate: 5 },
        { username: 'mahasiswakritik', rate: 4 },
        { username: 'indonesiavote', rate: 4 }
      ]
    },
    {
      index: 8,
      title: 'Impor Indonesia Agustus 2025 Turun 6,56%, Ini Sebabnya',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T12:15:00'),
      category: ['Ekonomi', 'Perdagangan'],
      gambarCover: 'https://www.pajak.com/storage/2025/02/WhatsApp-Image-2025-02-17-at-12.12.09-758x506.jpeg',
      gambar: [
        'https://www.pajak.com/storage/2025/02/WhatsApp-Image-2025-02-17-at-12.12.09-758x506.jpeg',
        'https://infobanknews.com/wp-content/uploads/2023/10/Barang-Impor-jpeg.webp',
        'https://a-cdn.sindonews.net/dyn/480/content/2018/07/16/34/1322174/realisasi-impor-indonesia-turun-menjadi-usd11-26-miliar-XB2-thumb.jpg',
        'https://www.pajak.com/storage/2024/10/WhatsApp-Image-2024-10-15-at-14.09.31-758x505.jpeg'
      ],
      description: 'BPS mencatat bahwa impor Indonesia pada Agustus 2025 menurun sebesar 6,56% dibanding periode sama tahun lalu, yang disebabkan melemahnya permintaan domestik dan harga komoditas global.',
      komentar: [
        { username: 'ekonomindo', komentar: 'Turunnya impor bisa jadi sinyal daya beli dalam negeri lagi melemah.' },
        { username: 'dagangjaya', komentar: 'Bisa juga karena produksi lokal meningkat, makanya impor turun.' },
        { username: 'analisisekonomi', komentar: 'Harus dilihat juga sektor apa yang paling turun, apakah bahan baku atau konsumsi.' },
        { username: 'netizenpeduli', komentar: 'Kalau impor turun tapi ekspor juga turun, ekonomi tetap bahaya sih.' },
        { username: 'optimisnusantara', komentar: 'Semoga ini tanda kemandirian industri lokal makin kuat.' }
      ],
      rating: [
        { username: 'ekonomindo', rate: 4 },  
        { username: 'dagangjaya', rate: 5 },
        { username: 'analisisekonomi', rate: 4 },
        { username: 'netizenpeduli', rate: 3 },
        { username: 'optimisnusantara', rate: 5 }
      ]     
    },
    {
      index: 9,
      title: 'Dedi Mulyadi: Pemutihan Pajak Kendaraan di Jabar Berakhir, Lihat dan Rasakan Hasilnya',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T15:32:00'),
      category: ['Regional', 'Kebijakan'],
      gambarCover: 'https://asset.kompas.com/crops/JBC8fQxU6got2ZP3vpNijk6ROCs=/0x0:0x0/1200x800/data/photo/2025/09/25/68d4f6ec02f62.jpg',
      gambar: [
        'https://asset.kompas.com/crops/JBC8fQxU6got2ZP3vpNijk6ROCs=/0x0:0x0/1200x800/data/photo/2025/09/25/68d4f6ec02f62.jpg',
        'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01k55z9gtm23edz4s6x918gs2j.jpg',
        'https://media.suara.com/pictures/970x544/2025/04/11/82813-fakta-pemutihan-pajak-kendaraan-jawa-barat-2025-samsatinfo.jpg',
        'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/247/2025/09/23/Pemutihan-Pajak-Kendaraan-2091053470.jpg'
      ],
      description: 'Pemerintah Jawa Barat resmi mengakhiri program pemutihan pajak kendaraan bermotor. Dedi Mulyadi mengajak warga mengevaluasi manfaat dan kerugiannya.',
      komentar: [
        { username: 'wargajabar', komentar: 'Kemarin banyak yang manfaatin pemutihan ini, lumayan ngurangin beban rakyat.' },
        { username: 'motorlover', komentar: 'Sayang telat tahu, udah keburu berakhir 😭' },
        { username: 'pajakjelas', komentar: 'Program bagus sih, tapi harus rutin biar masyarakat lebih taat pajak.' },
        { username: 'bandungmania', komentar: 'Hasilnya keliatan kok, banyak kendaraan yang akhirnya diurus legalitasnya.' },
        { username: 'netizenkritis', komentar: 'Semoga gak cuma gimmick politik, tapi benar-benar ada manfaatnya buat rakyat.' }
      ],
      rating: [
        { username: 'wargajabar', rate: 4 },
        { username: 'motorlover', rate: 3 },
        { username: 'pajakjelas', rate: 5 },
        { username: 'bandungmania', rate: 4 },
        { username: 'netizenkritis', rate: 4 }
      ]
    },
    {
      index: 10,
      title: 'KPK Pastikan Panggil Ridwan Kamil Usai Sita Uang Rp 1,3 Miliar',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T??:??:00'),
      category: ['Hukum', 'Politik'],
      gambarCover: 'https://media.suara.com/pictures/653x366/2025/08/28/67376-ridwan-kamil-diperiksa-bareskrim-bareskrim-periksa-ridwan-kamil-ridwan-kamil-rk.jpg',
      gambar: [
        'https://media.suara.com/pictures/653x366/2025/08/28/67376-ridwan-kamil-diperiksa-bareskrim-bareskrim-periksa-ridwan-kamil-ridwan-kamil-rk.jpg',
        'https://cdn.antaranews.com/cache/1200x800/2025/09/17/IMG_0365.jpg.webp',
        'https://cdn.antaranews.com/cache/1200x800/2025/08/28/1000056337.jpg',
        'https://cdn.antaranews.com/cache/1200x800/2025/03/14/deklarasi-komunitas-relawan-dukung-ridwan-suswono-01092024-dr-01.jpg.webp'
      ],
      description: 'Setelah tindakan penyitaan uang oleh KPK, lembaga tersebut memastikan akan memanggil Gubernur Jawa Barat Ridwan Kamil untuk klarifikasi lebih lanjut.',
      komentar: [
        { username: 'rakyatjelas', komentar: 'Semoga kasus ini bener-bener diusut tuntas, jangan ada yang kebal hukum.' },
        { username: 'bandungkepo', komentar: 'Nama RK makin sering muncul, pasti jadi sorotan publik.' },
        { username: 'lawstudent', komentar: 'Pemanggilan ini penting buat transparansi, biar jelas alur uangnya.' },
        { username: 'justicewatch', komentar: 'Rp 1,3 M itu bukan uang kecil, masyarakat berhak tahu kebenarannya.' },
        { username: 'indonesiakritis', komentar: 'Kalau bener bersih ya bagus, kalau ada salah ya harus tanggung jawab.' }
      ],
      rating: [
        { username: 'rakyatjelas', rate: 4 },
        { username: 'bandungkepo', rate: 3 },
        { username: 'lawstudent', rate: 5 },
        { username: 'justicewatch', rate: 4 },
        { username: 'indonesiakritis', rate: 4 }
      ]
    },
    {
      index: 11,
      title: 'Musala Pesantren Al Khoziny Ambruk, DPR Minta Pemerintah Beri Pendampingan Pembangunan',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T09:58:00'),
      category: ['Nasional', 'Peristiwa'],
      gambarCover: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01k2p4csver0gs030k4e87pjv0.jpg',
      gambar: [
        'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01k2p4csver0gs030k4e87pjv0.jpg',
        'https://cdn0-production-images-kly.akamaized.net/9VtGUmA5s-BJS_M8Lh12G_ltvT8=/800x450/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/5126500/original/085872100_1739080931-40128a57-6212-4d0d-ac80-9925f7f7d720.jpeg',
        'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2025/09/30/Bangunan-Ponpes-Al-Khoziny-Sidoarjo-Ambruk-Angger-Bondan-3-3216214447.jpeg',
        'https://beritanasional.com/storage/2025/09/pemerintah-diminta-gerak-cepat-tangani-musibah-ambruknya-musala-ponpes-al-khoziny-30092025-161721.jpg'
      ],
      description: 'Musala Ponpes Al Khoziny di Sidoarjo roboh saat salat Asar. DPR mendesak pemerintah memberikan pendampingan agar pembangunan kembali lebih aman dan sesuai standar.',
      komentar: [
        { username: 'santri_sidoarjo', komentar: 'Innalillahi, semoga korban diberi kesabaran dan ketabahan.' },
        { username: 'warganet77', komentar: 'Harusnya ada pengawasan bangunan pesantren, jangan sampai asal jadi.' },
        { username: 'edukasiislam', komentar: 'Pemerintah perlu serius bantu rekonstruksi, biar bisa dipakai lagi untuk ibadah.' },
        { username: 'newsupdate', komentar: 'Kejadian ini harus jadi pelajaran agar pembangunan sesuai standar.' },
        { username: 'harapanumat', komentar: 'Semoga musala bisa cepat dibangun kembali dan lebih aman.' }
      ],
      rating: [
        { username: 'santri_sidoarjo', rate: 5 },
        { username: 'warganet77', rate: 4 },
        { username: 'edukasiislam', rate: 5 },
        { username: 'newsupdate', rate: 4 },
        { username: 'harapanumat', rate: 5 }
      ]
    },
    {
      index: 12,
      title: 'Kasus Bocah Perempuan Tewas Membusuk di Jakut, Warga Lihat Wajah Korban Penuh Lebam',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T09:38:00'),
      category: ['Nasional', 'Kejadian'],
      gambarCover: 'https://i.ytimg.com/vi/CL2YLeCPRoU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQ4QZlkclKdo959CIULJkKC3Jaow',
      gambar: [
        'https://i.ytimg.com/vi/CL2YLeCPRoU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCQ4QZlkclKdo959CIULJkKC3Jaow',
        'https://media.kompas.tv/library/image/content_article/article_img/20250924171731.webp',
        'https://awsimages.detik.net.id/community/media/visual/2025/09/22/lokasi-penemuan-mayat-bocah-perempuan-usia-8-tahun-di-penjaringan-jakarta-utara-1758523757106_169.jpeg?w=600&q=90',
        'https://asset.kompas.com/crops/unQ84m5tXDlWXy3fIYyEH7VUN40=/0x0:0x0/750x500/data/photo/2025/09/22/68d0fed9c2418.jpg'
      ],
      description: 'Seorang bocah perempuan ditemukan tewas membusuk di kamar kos di Jakarta Utara. Warga melaporkan kondisi tubuh korban penuh bekas lebam, penyelidikan sedang berlangsung.',
      komentar: [
        { username: 'jakutnews', komentar: 'Ngeri banget kasusnya, semoga pelaku segera ditangkap polisi.' },
        { username: 'ibu_rumah', komentar: 'Kasihan banget anak kecil, nggak kebayang sakitnya.' },
        { username: 'justice4kids', komentar: 'Harus ada hukuman berat biar jadi efek jera buat pelaku kekerasan anak.' },
        { username: 'mata_warga', komentar: 'Lingkungan harus lebih peduli kalau ada tanda-tanda kekerasan di sekitar.' },
        { username: 'prihatinbanget', komentar: 'Semoga keluarga diberi kekuatan, miris sekali dengar kasus ini.' }
      ],
      rating: [
        { username: 'jakutnews', rate: 5 },
        { username: 'ibu_rumah', rate: 4 },
        { username: 'justice4kids', rate: 5 },
        { username: 'mata_warga', rate: 4 },
        { username: 'prihatinbanget', rate: 5 }
      ]
    },
    {
      index: 13,
      title: 'Jakarta Diguyur Hujan, Sejumlah Ruas Jalan Terpantau Padat',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T09:32:00'),
      category: ['Metropolitan', 'Cuaca'],
      gambarCover: 'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/11/JKT2-Himbauan-WFH-Pekerja-Ibu-Kota-eca5.jpg',
      gambar: [
        'https://assets.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/jawapos/2022/11/JKT2-Himbauan-WFH-Pekerja-Ibu-Kota-eca5.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_yIWYwzzn4p3pGZleu-yFAHHnNoMcooZO0g&s',
        'https://cdn0-production-images-kly.akamaized.net/S3kr1Akt2bqr2tpDyuTMTKoMFEw=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3938374/original/017867600_1645165607-20220218-Waspada_Cuaca_Ekstrem_di_Jakarta-5.jpg',
        'https://img.idxchannel.com/media/700/images/idx/2023/12/31/Hujan_Bundaran_HI-1.jpg'
      ],
      description: 'Hujan deras mengguyur Jakarta pagi ini. Akibatnya, beberapa ruas jalan mengalami kepadatan lalu lintas signifikan.',
      komentar: [
        { username: 'commuterlife', komentar: 'Baru hujan sebentar aja jalanan udah macet parah 😩' },
        { username: 'ojekonline', komentar: 'Orderan rame pas hujan, tapi jalannya bikin lama banget.' },
        { username: 'jakartans', komentar: 'Semoga nggak sampai banjir, soalnya udah mulai masuk musim hujan nih.' },
        { username: 'mobilmania', komentar: 'Hujan dikit langsung padat, transportasi publik harus lebih siap.' },
        { username: 'wargajakarta', komentar: 'Setiap hujan, selalu macet. Kayak nggak ada solusi dari tahun ke tahun.' }
      ],
      rating: [
        { username: 'commuterlife', rate: 4 },
        { username: 'ojekonline', rate: 3 },
        { username: 'jakartans', rate: 5 },
        { username: 'mobilmania', rate: 4 },
        { username: 'wargajakarta', rate: 2 }
      ]
    },
    {
      index: 14,
      title: 'Prabowo Pimpin Upacara Peringatan Hari Kesaktian Pancasila 2025 di Lubang Buaya',
      author: 'Liputan6',
      publishedDate: new Date('2025-10-01T07:46:00'),
      category: ['Nasional', 'Upacara'],
      gambarCover: 'https://awsimages.detik.net.id/visual/2025/10/01/presiden-prabowo-subianto-memimpin-upacara-peringatan-hari-kesaktian-pancasila-2025-di-monumen-pancasila-sakti-lubang-buaya-ja-1759296388927.jpeg?w=650&q=80',
      gambar: [
        'https://awsimages.detik.net.id/visual/2025/10/01/presiden-prabowo-subianto-memimpin-upacara-peringatan-hari-kesaktian-pancasila-2025-di-monumen-pancasila-sakti-lubang-buaya-ja-1759296388927.jpeg?w=650&q=80',
        'https://akcdn.detik.net.id/visual/2025/10/01/prabowo-di-upacara-1-oktober-di-lubang-buaya-1759281951934_169.jpeg?w=400&q=90',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQZGTz3ppiXtCHZMe2brVsuW2p5KaTXTFcTg&s',
        'https://img.okezone.com/okz/1200/content/2025/10/01/337/3173646/prabowo-KkEZ_large.jpg'
      ],
      description: 'Presiden Prabowo Subianto bertindak sebagai inspektur upacara peringatan Hari Kesaktian Pancasila di Monumen Pancasila Sakti, Lubang Buaya, Jakarta Timur.',
      komentar: [
        { username: 'merahputih', komentar: 'Upacara ini penting untuk mengingatkan generasi muda tentang sejarah bangsa.' },
        { username: 'indonesiahebat', komentar: 'Semoga nilai-nilai Pancasila benar-benar diterapkan, bukan cuma seremonial.' },
        { username: 'sejarahwan', komentar: 'Lubang Buaya selalu jadi saksi sejarah yang harus diingat.' },
        { username: 'nasionalis', komentar: 'Bagus Prabowo hadir langsung, menunjukkan penghormatan terhadap sejarah.' },
        { username: 'realitaid', komentar: 'Jangan hanya memperingati, tapi implementasi Pancasila di kehidupan sehari-hari juga penting.' }
      ],
      rating: [
        { username: 'merahputih', rate: 5 },
        { username: 'indonesiahebat', rate: 4 },
        { username: 'sejarahwan', rate: 5 },
        { username: 'nasionalis', rate: 4 },
        { username: 'realitaid', rate: 5 }
      ]
    }
  ]

  addReply(p_index: number, p_reply: string) {

  }

  addComment(p_newComment: string, p_index: number, p_currentUser: string) {
    this.berita[p_index].komentar.push({
      username: p_currentUser, komentar: p_newComment
    });
  }
  addRating(p_newRating: number, p_index: number, p_currentUser: string) {
    const existing = this.berita[p_index].rating.find((r: any) => r.username === p_currentUser);
    if (existing) {
      existing.rate = p_newRating;
    } else {
      this.berita[p_index].rating.push({
        username: p_currentUser, rate: p_newRating
      });
    }
  }
}
