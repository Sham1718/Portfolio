import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/mqednbwy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium text-indigo-500 tracking-widest uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Let's Work Together
          </h2>

          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm currently open to freelance projects and full-time opportunities.
            If you have a project in mind or just want to say hi, my inbox is always open!
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                icon: "📧",
                label: "Email",
                value: "sbharaskar8485@email.com",
                href: "mailto:sbharaskar8485@email.com",
              },
              {
                icon: "💼",
                label: "LinkedIn",
                value: "linkedin.com/in/shyambharaskar",
                href: "https://www.linkedin.com/in/shyambharaskar",
              },
              {
                icon: "🐙",
                label: "GitHub",
                value: "github.com/Sham1718",
                href: "https://github.com/Sham1718",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-indigo-500/50 transition-colors group"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800"
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@email.com"
              className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-medium text-sm transition-colors duration-200"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "✅ Message Sent!"
              : "Send Message →"}
          </button>

          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;