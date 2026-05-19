import { motion } from "framer-motion";
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
    <section
      id="contact"
      className="py-24 bg-[#0B0F14] px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <span className="text-sm font-medium text-[#94A3B8] tracking-widest uppercase">
            Get In Touch
          </span>

          <h2 className="text-4xl font-bold text-white">
            Let's Work Together
          </h2>

          <p className="text-[#94A3B8] leading-relaxed">
            I'm currently open to full-time opportunities and backend engineering roles.
            If you have a project in mind or would like to connect, feel free to reach out.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {[
              {
                label: "Email",
                value: "sbharaskar8485@gmail.com",
                href: "mailto:sbharaskar8485@gmail.com",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/shyambharaskar",
                href: "https://www.linkedin.com/in/shyambharaskar",
              },
              {
                label: "GitHub",
                value: "github.com/Sham1718",
                href: "https://github.com/Sham1718",
              },
            ].map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-4 rounded-xl bg-[#11161C] border border-[#1F2933] hover:bg-[#161C23] transition-colors"
              >
                <p className="text-xs text-[#94A3B8] uppercase tracking-wider">
                  {item.label}
                </p>

                <p className="text-sm font-medium text-white mt-1">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-5 bg-[#11161C] rounded-2xl p-8 border border-[#1F2933]"
        >

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              className="px-4 py-3 rounded-xl bg-[#161C23] border border-[#1F2933] text-white text-sm focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
              Your Email
            </label>

            <input
              type="email"
              name="email"
              required
              placeholder="john@email.com"
              className="px-4 py-3 rounded-xl bg-[#161C23] border border-[#1F2933] text-white text-sm focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-[#94A3B8] uppercase tracking-wider">
              Message
            </label>

            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project..."
              className="px-4 py-3 rounded-xl bg-[#161C23] border border-[#1F2933] text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full py-3 rounded-xl bg-white text-black hover:opacity-90 transition-opacity text-sm font-medium"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message Sent ✓"
              : "Send Message"}
          </motion.button>

          {status === "error" && (
            <p className="text-sm text-red-500 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;