"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  const announcement =
    "🔥 UNITED VFX LIVE • 15 MIN REEL DELIVERY ⚡ • Chennai • Kodur • Tirupati • Book Now 🚀";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    reels: "",
    category: "Basic Reel",
    location: "Chennai",
  });

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const sendWhatsApp = () => {
    const msg = `Hello UNITED VFX 🎬

Name: ${form.name}
Phone: ${form.phone}
Reels: ${form.reels}
Type: ${form.category}
Location: ${form.location}`;

    window.open(`https://wa.me/917207299349?text=${encodeURIComponent(msg)}`);
  };

  return (
    <main className="min-h-screen">

      {/* SCROLL BAR */}
      <div className="bg-red-600 overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap">
          <span className="mx-6">{announcement}</span>
          <span className="mx-6">{announcement}</span>
        </div>
      </div>

      {/* NAV */}
      <nav className="flex flex-col md:flex-row justify-between items-center p-5 border-b border-red-900">
        <img src="/logo.png" className="w-40 mb-3 md:mb-0" />

        <div className="flex gap-3 flex-wrap justify-center">
          <a href="https://www.instagram.com/united__vfx" target="_blank">
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
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Cinematic Reel Shoots</h1>

        <p className="mt-4 text-gray-400">
          ⚡ 15 Minutes Fast Delivery <br />
          Chennai • Kodur • Tirupati
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 bg-red-600 px-8 py-3 rounded-full"
        >
          Book Now
        </button>
      </section>

      {/* PRICING */}
      <section className="text-center py-10">
        <h2 className="text-2xl mb-6">Pricing</h2>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="border p-6 rounded-xl">₹1000 Basic</div>
          <div className="border p-6 rounded-xl">₹1500 Standard</div>
          <div className="border p-6 rounded-xl">₹5000 Premium</div>
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center">
          <div className="bg-[#140000] p-6 rounded-xl w-[90%] max-w-md">

            <h2 className="mb-4 text-xl">Book Reel</h2>

            <input placeholder="Name" className="w-full mb-2"
              onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input placeholder="Phone" className="w-full mb-2"
              onChange={(e)=>setForm({...form,phone:e.target.value})}/>
            <input placeholder="No of Reels" className="w-full mb-2"
              onChange={(e)=>setForm({...form,reels:e.target.value})}/>

            <select className="w-full mb-2"
              onChange={(e)=>setForm({...form,category:e.target.value})}>
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>

            <select className="w-full mb-3"
              onChange={(e)=>setForm({...form,location:e.target.value})}>
              <option>Chennai</option>
              <option>Kodur</option>
              <option>Tirupati</option>
            </select>

            <img src="/qr.png" className="w-32 mx-auto mb-3" />

            <a href="upi://pay?pa=yourname@upi">
              <button className="w-full bg-yellow-500 py-2 mb-2">Pay</button>
            </a>

            <button onClick={sendWhatsApp}
              className="w-full bg-green-600 py-2">
              Confirm
            </button>

          </div>
        </div>
      )}

    </main>
  );
}