import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-orange-100 to-yellow-100 text-gray-800 font-sans px-6 py-10">

      {/* Hero Section */}
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4">
          🛍️ Selamat Datang di <span className="text-pink-600">ZeroNine Store</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-700">
          Temukan produk terbaik kami dengan harga terjangkau dan kualitas terpercaya!
        </p>
        <button
          className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full shadow-lg transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Klik Promo Spesial 🎁 ({count})
        </button>
      </header>

 {/* Product Showcase */}
<section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-20">
  {[
    {
      name: "Sepatu Sneakers",
      desc: "Nyaman dipakai seharian, cocok untuk gaya kasual dan sporty.",
      price: "Rp350.000",
      img: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Handphone Zeta X",
      desc: "Performa tinggi dengan kamera jernih, cocok untuk produktivitas dan hiburan.",
      price: "Rp2.500.000",
      img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      name: "Tas Ransel Stylish",
      desc: "Desain elegan, banyak ruang penyimpanan, pas untuk kerja atau kuliah.",
      price: "Rp250.000",
      img: "https://images.pexels.com/photos/4042801/pexels-photo-4042801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ].map((product, idx) => (
    <div key={idx} className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-left">
      <div className="w-full overflow-hidden rounded-md mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="w-full object-cover rounded-md"
          style={{ height: "112px" }} // Atur tinggi gambar langsung di sini
        />
      </div>
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{product.desc}</p>
      <span className="font-bold text-pink-600 text-sm">{product.price}</span>
    </div>
  ))}
</section>






      {/* Tentang Toko */}
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-4">Kenapa Belanja di ZeroNine Store?</h2>
        <p className="text-gray-700">
          Kami menyediakan berbagai macam produk fashion, elektronik, dan aksesoris rumah dengan harga terbaik.
          Layanan cepat, pengiriman aman, dan garansi produk original.
        </p>
      </section>

   {/* Team Section */}
<section className="bg-gradient-to-r from-white via-pink-50 to-white py-16 px-6 rounded-2xl shadow-inner max-w-6xl mx-auto mb-20">
  <h2 className="text-3xl font-bold text-center text-pink-600 mb-12">Tim Kami</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[
      {
        name: "Sarah Amelia",
        role: "UI/UX Designer",
        img: "https://randomuser.me/api/portraits/women/65.jpg",
        desc: "Ahli merancang pengalaman pengguna yang intuitif dan estetis.",
      },
      {
        name: "Rizky Fadlan",
        role: "Frontend Developer",
        img: "https://randomuser.me/api/portraits/men/45.jpg",
        desc: "Membangun antarmuka dengan performa tinggi dan modern.",
      },
      {
        name: "Dina Putri",
        role: "Marketing Manager",
        img: "https://randomuser.me/api/portraits/women/32.jpg",
        desc: "Strategi pemasaran kreatif untuk menjangkau lebih banyak pelanggan.",
      },
      {
        name: "Budi Santoso",
        role: "Customer Support",
        img: "https://randomuser.me/api/portraits/men/12.jpg",
        desc: "Siap membantu pelanggan dengan ramah dan cepat tanggap.",
      },
    ].map((member, idx) => (
      <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-md"
        />
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-pink-600 text-sm font-medium">{member.role}</p>
        <p className="text-gray-600 text-sm mt-2">{member.desc}</p>
      </div>
    ))}
  </div>
</section>


{/* Contact Section */}
<section className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto text-center mb-20">
  <h2 className="text-3xl font-bold text-pink-600 mb-6">Hubungi Kami</h2>
  <p className="text-gray-600 mb-6">
    Ada pertanyaan atau ingin kerja sama? Kirim pesan kepada kami melalui form di bawah ini.
  </p>
  <form className="flex flex-col gap-4 text-left">
    <input type="text" placeholder="Nama Anda" className="p-3 rounded-lg border border-gray-300" required />
    <input type="email" placeholder="Alamat Email" className="p-3 rounded-lg border border-gray-300" required />
    <textarea placeholder="Pesan Anda" rows="5" className="p-3 rounded-lg border border-gray-300" required></textarea>
    <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition">
      Kirim Pesan
    </button>
  </form>
</section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10 border-t pt-6">
        © 2025 ZeroNine Store. Dibuat dengan ❤️ pakai React + Tailwind.
      </footer>
    </div>
  )
}

export default App
