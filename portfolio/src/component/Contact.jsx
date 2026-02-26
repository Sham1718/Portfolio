import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    // Add your form submission logic here (EmailJS, Formspree, etc.)
    console.log(form);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Let's Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm currently open to freelance projects and full-time opportunities.
            If you have a project in mind or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              { icon: "📧", label: "Email", value: "you@email.com", href: "mailto:you@email.com" },
              { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/yourname", href: "https://linkedin.com" },
              { icon: "🐙", label: "GitHub", value: "github.com/yourname", href: "https://github.com" },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-colors group">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{item.label}</p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition-colors">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
          {[
            { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
            { name: "email", label: "Your Email", type: "email", placeholder: "john@email.com" },
          ].map(field => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required
                className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              rows={5}
              className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm transition-colors duration-200"
          >
            {sent ? "✅ Message Sent!" : "Send Message →"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;