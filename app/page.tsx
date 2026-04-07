"use client";

import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const announcement =
    "🔥 UNITED VFX LIVE • 15 MIN REEL DELIVERY ⚡ • Chennai • Kodur • Tirupati • Book Now 🚀";

  const [form, setForm] = useState({
    name: "",
    phone: "",
    reels: "",
    category: "Basic",
    location: "Chennai",
  });

  const sendWhatsApp = () => {
    const msg = `Hello UNITED VFX 🎬

Name: ${form.name}
Phone: ${form.phone}
No of Reels: ${form.reels}
Type: ${form.category}
Location: ${form.location}`;

    window.open(
      `https://wa.me/917207299349?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <main className="container">

      {/* SCROLL BAR */}
      <div className="scroll-bar">
        <div className="scroll-text">
          <span>{announcement}</span>
          <span>{announcement}</span>
        </div>
      </div>

      {/* NAV */}
      <nav className="nav">
        <img src="/logo.png" className="logo" />

        <div className="nav-buttons">
          <a href="https://www.instagram.com/united__vfx" target="_blank">
            <button>Instagram</button>
          </a>

          <a href="https://youtube.com/@unitedvfx-l8u" target="_blank">
            <button>YouTube</button>
          </a>

          <button className="red-btn" onClick={() => setOpen(true)}>
            Book Reel
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Cinematic Reel Shoots</h1>
        <p>⚡ 15 Minutes Fast Delivery</p>

        <button className="red-btn" onClick={() => setOpen(true)}>
          Book Now
        </button>
      </section>

      {/* PRICING */}
      <section className="pricing">
        <h2>Pricing</h2>

        <div className="pricing-container">
          <div className="pricing-box">₹1000 Basic</div>
          <div className="pricing-box">₹1500 Standard</div>
          <div className="pricing-box">₹5000 Premium</div>
        </div>
      </section>

      {/* BOOKING MODAL */}
      {open && (
        <div className="modal">
          <div className="modal-box">

            <h2>Book Reel</h2>

            <input
              placeholder="Name"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              placeholder="Phone"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              placeholder="No of Reels"
              onChange={(e) =>
                setForm({ ...form, reels: e.target.value })
              }
            />

            <select
              onChange={(e) =>
                setForm({ ...form, category: e.target.value })
              }
            >
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>

            <select
              onChange={(e) =>
                setForm({ ...form, location: e.target.value })
              }
            >
              <option>Chennai</option>
              <option>Kodur</option>
              <option>Tirupati</option>
            </select>

            <img src="/qr.png" className="qr" />

            <a href="upi://pay?pa=yourname@upi&pn=UNITED VFX&cu=INR">
              <button className="pay-btn">Pay Now</button>
            </a>

            <button className="confirm-btn" onClick={sendWhatsApp}>
              Confirm Booking
            </button>

            <button onClick={() => setOpen(false)}>Cancel</button>

          </div>
        </div>
      )}
    </main>
  );
}