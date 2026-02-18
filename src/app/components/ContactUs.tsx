import { useState } from "react";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industryType: "",
    companyName: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      number: formData.phone,
      company: formData.companyName,
      industryType: formData.industryType,
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxf7mbPGHn637TW_GOinfynCl1U_LNhm_sM-AUB3yxRMStr-WPJO1Kb3krP0GkPoMr1/exec",
        {
          method: "POST",
          mode: "no-cors", // IMPORTANT for iframe
          headers: {
            "Content-Type": "text/plain", // IMPORTANT
          },
          body: JSON.stringify(payload),
        },
      );

      // If no error thrown, assume success
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        industryType: "",
        companyName: "",
      });
    } catch (error) {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-2xl border border-white/10">
        <h2 className="text-3xl text-white mb-6">Contact Us</h2>

        {isSubmitted ? (
          <div className="bg-green-500/20 p-6 rounded-lg text-center text-white">
            Thank you! We’ll contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <input
              type="text"
              name="companyName"
              required
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            />

            <label htmlFor="industryType" className="block text-white text-sm mb-1">
              Industry Type
            </label>
            <select
              id="industryType"
              name="industryType"
              required
              value={formData.industryType}
              onChange={handleChange}
              className="w-full p-3 rounded bg-white/10 text-white"
            >
              <option className="text-black" value="">Select Industry</option>
              <option className="text-black" value="Pharmaceuticals">
                Pharmaceuticals
              </option>
              <option className="text-black" value="Automotive">Automotive</option>
              <option className="text-black" value="FMCG">FMCG</option>
              <option className="text-black" value="Food & Beverage">
                Food & Beverage
              </option>
              <option className="text-black" value="Electronics">Electronics</option>
              <option className="text-black" value="Other">Other</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded transition"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}