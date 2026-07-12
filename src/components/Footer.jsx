export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        <div>
          <h2 className="text-3xl font-bold text-red-600">
            TAM'S HUB
          </h2>

          <p className="text-gray-400 mt-3">
            Minister of Good Deals 🚀
          </p>

          <p className="text-gray-500 mt-2">
            Phones, Laptops, Tablets & Accessories.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">
            Contact Us
          </h3>

          <p className="text-gray-400">
            📱 WhatsApp: +234 904 313 3938
          </p>

          <p className="text-gray-400 mt-2">
            📧 Email: info@tamshub.com
          </p>

          <p className="text-gray-400 mt-2">
            📍 Lagos, Nigeria
          </p>
        </div>
      </div>

      <div className="border-t border-zinc-800 mt-10 pt-6 text-center text-gray-500">
        © 2026 TAM'S HUB. All rights reserved.
      </div>
    </footer>
  );
}