import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <span className="uppercase tracking-[4px] text-red-500 font-bold">
            CONTACT US
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5">
            We'd Love To Hear From You
          </h1>

          <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg">
            Need help choosing a device or have questions about an order?
            Our team is ready to assist you.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Contact Information */}

          <div>

            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div className="flex items-center gap-5">

                <div className="bg-red-600 p-4 rounded-2xl">
                  <FaPhoneAlt className="text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Phone
                  </h3>

                  <p className="text-zinc-400">
                    +234 904 313 3938
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-red-600 p-4 rounded-2xl">
                  <FaEnvelope className="text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Email
                  </h3>

                  <p className="text-zinc-400">
                    info@tamshub.com
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-5">

                <div className="bg-red-600 p-4 rounded-2xl">
                  <FaMapMarkerAlt className="text-2xl" />
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    Location
                  </h3>

                  <p className="text-zinc-400">
                    Lagos, Nigeria
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Contact Form */}

          <div className="bg-zinc-900 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Send a Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-zinc-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-red-500"
              />

              <button
                type="button"
                className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-bold transition"
              >
                Send Message
              </button>

            </form>

            <a
              href="https://wa.me/2349043133938"
              target="_blank"
              rel="noreferrer"
              className="mt-6 flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 py-4 rounded-xl font-bold transition"
            >
              <FaWhatsapp />
              Chat on WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}