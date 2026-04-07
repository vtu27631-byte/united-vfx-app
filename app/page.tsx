"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const announcement =
    "🚀 UNITED VFX LIVE — Chennai • Kodur • Tirupati — Book Now";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    reels: "",
    category: "Basic Reel",
    location: "Chennai",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const sendWhatsApp = () => {
    const message = `Hello UNITED VFX 🎬

Name: ${form.name}
Phone: ${form.phone}
No of Reels: ${form.reels}
Reel Type: ${form.category}
Location: ${form.location}

I have completed payment and want to confirm booking.`;

    if (typeof window !== "undefined") {
      window.open(
        `https://wa.me/917207299349?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    }
  };

  return (
    <main className="bg-gradient-to-b from-black via-[#1a0000] to-black text-white">

      {/* 🔥 MOVING TEXT */}
      <div className="bg-red-600 overflow-hidden whitespace-nowrap">
        <div className="animate-scroll inline-block px-4 py-2">
          {announcement}
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4 border-b border-red-900">

        {/* LOGO */}
        <img src="/logo.png" alt="logo" className="w-[160px] mb-3 md:mb-0" />

        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://www.instagram.com/united__vfx" target="_blank">
            <button className="border px-4 py-2 rounded-full text-sm">
              Instagram
            </button>
          </a>

          <a href="https://youtube.com/@unitedvfx-l8u" target="_blank">
            <button className="border px-4 py-2 rounded-full text-sm">
              YouTube
            </button>
          </a>

          <button
            onClick={() => setOpen(true)}
            className="bg-red-600 px-5 py-2 rounded-full text-sm"
          >
            Book Reel
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-20 px-5">
        <h1 className="text-4xl md:text-6xl font-bold">
          Cinematic Reel Shoots
        </h1>

        <p className="mt-4 text-gray-400">
          Chennai • Kodur • Tirupati <br />
          Budget Friendly Premium Quality
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 bg-red-600 px-8 py-3 rounded-full"
        >
          Book a Reel
        </button>
      </section>

      {/* PRICING */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl mb-6">Pricing</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="border p-6 rounded-xl">
            <h3>Basic</h3>
            <p className="text-yellow-400 text-2xl">₹1000</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3>Standard</h3>
            <p className="text-yellow-400 text-2xl">₹1500</p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3>Premium</h3>
            <p className="text-yellow-400 text-2xl">₹5000</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16">
        <h2 className="text-3xl text-center mb-8">FAQ</h2>

        <div className="space-y-4 max-w-xl mx-auto">
          {[
            { q: "What is UNITED VFX?", a: "Cinematic reel shooting & editing service." },
            { q: "Pricing?", a: "₹1000 to ₹5000 based on reel type." }
          ].map((item, i) => (
            <div
              key={i}
              className="border p-4 rounded-lg"
              onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
            >
              <div className="flex justify-between">
                <h3>{item.q}</h3>
                <span>+</span>
              </div>

              {activeFAQ === i && (
                <p className="mt-2 text-gray-400">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
          <div className="bg-[#140000] p-6 rounded-xl w-[90%] max-w-md">

            <h2 className="text-xl mb-4">Book Your Reel</h2>

            <input placeholder="Name" className="w-full mb-3 p-2 bg-black"
              onChange={(e)=>setForm({...form,name:e.target.value})}/>

            <input placeholder="Phone" className="w-full mb-3 p-2 bg-black"
              onChange={(e)=>setForm({...form,phone:e.target.value})}/>

            <input placeholder="No of Reels" className="w-full mb-3 p-2 bg-black"
              onChange={(e)=>setForm({...form,reels:e.target.value})}/>

            <select className="w-full mb-3 p-2 bg-black"
              onChange={(e)=>setForm({...form,category:e.target.value})}>
              <option>Basic Reel (₹1000)</option>
              <option>Standard Reel (₹1500)</option>
              <option>Premium Reel (₹5000)</option>
            </select>

            <select className="w-full mb-3 p-2 bg-black"
              onChange={(e)=>setForm({...form,location:e.target.value})}>
              <option>Chennai</option>
              <option>Kodur</option>
              <option>Tirupati</option>
            </select>

            {/* 💰 QR CODE */}
            <img src="/qr.png" className="w-40 mx-auto mb-3" />

            {/* 💰 PAY BUTTON */}
            <a href="upi://pay?pa=yourname@upi&pn=UNITED VFX&cu=INR" target="_blank">
              <button className="w-full bg-yellow-500 py-2 rounded mb-2">
                Pay Now (UPI)
              </button>
            </a>

            <button onClick={sendWhatsApp}
              className="w-full bg-green-600 py-2 rounded">
              Confirm Booking
            </button>

            <button onClick={()=>setOpen(false)}
              className="w-full mt-2 border py-2 rounded">
              Cancel
            </button>

          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 UNITED VFX
      </footer>

    </main>
  );
}