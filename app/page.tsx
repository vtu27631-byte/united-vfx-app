"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    category: "Basic Reel",
    location: "Chennai",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 prevents hydration error

  const sendWhatsApp = () => {
    const message = `Hello UNITED VFX 🎬

Name: ${form.name}
Phone: ${form.phone}
Reel Type: ${form.category}
Location: ${form.location}

I want to book a reel shoot.`;

    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/917207299349?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  const faqs = [
    {
      q: "What exactly is UNITED VFX?",
      a: "We provide cinematic reel shooting and editing services with fast delivery.",
    },
    {
      q: "How is it different from a regular videographer?",
      a: "We focus only on reels with fast turnaround and budget pricing.",
    },
    {
      q: "What packages do you offer?",
      a: "Basic ₹500, Standard ₹1500, Premium ₹5000 depending on location.",
    },
    {
      q: "How fast is delivery?",
      a: "Usually within same day or within 24 hours.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-black via-[#1a0000] to-black text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-red-900">
        <h1 className="text-2xl font-bold">
          UNITED <span className="text-yellow-400">VFX</span>
        </h1>

        <div className="flex gap-4">
          <a href="https://www.instagram.com/united_veltech" target="_blank">
            <button className="border px-4 py-2 rounded-full">Instagram</button>
          </a>

          <a href="https://youtube.com/@unitedvfx-l8u" target="_blank">
            <button className="border px-4 py-2 rounded-full">YouTube</button>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="bg-red-600 px-5 py-2 rounded-full"
          >
            Book Reel
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-5">
        <h2 className="text-red-400 tracking-widest">
          UNITED VFX STUDIO
        </h2>

        <h1 className="text-5xl md:text-7xl font-bold mt-5">
          Shoot • Edit • Deliver <br />
          <span className="text-yellow-400">Cinematic Reels</span>
        </h1>

        <p className="mt-6 text-gray-400">
          Chennai • Kodur • Tirupati <br />
          Budget-friendly premium reels
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <button
            onClick={() => setOpen(true)}
            className="bg-red-600 px-8 py-3 rounded-full"
          >
            Book a Reel
          </button>

          <a href="https://wa.me/917207299349" target="_blank">
            <button className="border px-8 py-3 rounded-full">
              WhatsApp
            </button>
          </a>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl mb-10">Pricing</h2>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="border border-red-800 p-8 rounded-2xl">
            <h3>Basic Reel</h3>
            <p className="text-yellow-400 text-3xl mt-3">₹500</p>
          </div>

          <div className="border border-red-800 p-8 rounded-2xl">
            <h3>Standard Reel</h3>
            <p className="text-yellow-400 text-3xl mt-3">₹1500</p>
          </div>

          <div className="border border-red-800 p-8 rounded-2xl">
            <h3>Premium Reel</h3>
            <p className="text-yellow-400 text-3xl mt-3">₹5000</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <h2 className="text-4xl text-center mb-10 font-semibold">
          Got Questions?
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-[#1a0000] border border-red-900 rounded-xl p-5 cursor-pointer"
              onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
            >
              <div className="flex justify-between">
                <h3>{item.q}</h3>
                <span>⌄</span>
              </div>

              {activeFAQ === i && (
                <p className="mt-3 text-gray-400">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-[#140000] p-8 rounded-2xl w-[90%] max-w-md">

            <h2 className="text-2xl mb-5 text-center">Book Your Reel</h2>

            <input
              placeholder="Your Name"
              className="w-full mb-3 p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              className="w-full mb-3 p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <select
              className="w-full mb-3 p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              <option>Basic Reel (₹500)</option>
              <option>Standard Reel (₹1500)</option>
              <option>Premium Reel (₹5000)</option>
            </select>

            <select
              className="w-full mb-5 p-3 rounded bg-black border border-gray-700"
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            >
              <option>Chennai</option>
              <option>Kodur</option>
              <option>Tirupati</option>
            </select>

            <button
              onClick={sendWhatsApp}
              className="w-full bg-green-600 py-3 rounded-full"
            >
              Confirm via WhatsApp
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 w-full border py-2 rounded-full"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#0a0000] border-t border-red-900 px-6 py-12">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div>
            <h1 className="text-xl font-bold">
              UNITED <span className="text-yellow-400">VFX</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Cinematic Reel Booking Service <br />
              Chennai • Kodur • Tirupati
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-400">Trusted Reel Service</p>
            <p className="text-sm text-gray-500 mt-2">
              Fast • Affordable • Cinematic
            </p>
          </div>

          <div className="text-right space-x-4">
            <a href="https://www.instagram.com/united_veltech" target="_blank">
              Instagram
            </a>
            <a href="https://youtube.com/@unitedvfx-l8u" target="_blank">
              YouTube
            </a>
            <a href="https://wa.me/917207299349" target="_blank">
              WhatsApp
            </a>
          </div>

        </div>

        <div className="text-center mt-10 text-gray-500 text-sm">
          © 2026 UNITED VFX — All rights reserved
        </div>

      </footer>

    </main>
  );
}