import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Section, Reveal } from "./Section";
import { profile } from "../data";

const { VITE_EMAILJS_SERVICE_ID: SERVICE, VITE_EMAILJS_TEMPLATE_ID: TEMPLATE, VITE_EMAILJS_PUBLIC_KEY: KEY } =
  import.meta.env;

const card =
  "hover-card panel border-l-4 !border-l-signal shadow-[0_0_60px_-20px_rgb(79_124_255/0.45)] h-full";

const MAX = 600;

// one console-style input: "$ name" prompt with a gradient underline that grows on focus
const Field = ({ label, children }) => (
  <label className="group block">
    <span className="mono text-mute flex items-center gap-2">
      <span className="text-cyan">$</span> {label}
    </span>
    <div className="mt-2 rounded-lg border border-rule bg-paper/60 px-4 transition duration-300 hover:border-signal/60 group-focus-within:border-cyan group-focus-within:bg-signal/5 group-focus-within:shadow-[0_0_0_3px_rgb(41_224_255/0.18),0_0_24px_rgb(79_124_255/0.35)]">
      {children}
    </div>
  </label>
);

const input =
  "w-full bg-transparent py-3 text-lg text-ink placeholder:text-white/40 focus:outline-none font-sans caret-cyan";

const Contact = () => {
  const formRef = useRef();
  const [len, setLen] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const sendEmail = (e) => {
    e.preventDefault();
    if (!SERVICE || !TEMPLATE || !KEY) {
      toast.error(`Contact form not configured. Email me at ${profile.email}`);
      return;
    }
    setStatus("sending");
    emailjs.sendForm(SERVICE, TEMPLATE, formRef.current, KEY).then(
      () => {
        toast.success("Message sent. I'll reply soon.");
        formRef.current.reset();
        setLen(0);
        setStatus("sent");
        setTimeout(() => setStatus("idle"), 3500);
      },
      () => {
        toast.error("Failed to send message. Please try again.");
        setStatus("idle");
      }
    );
  };

  return (
    <Section id="contact" full num="05" kicker="Contact" title={<>Let's build <em>something</em></>}>
      <div className="grid md:grid-cols-5 gap-4">
        <Reveal className="md:col-span-2">
          <div className={card + " p-5 md:p-7 flex flex-col gap-6"}>
            <p className="mono text-mute">Reach me directly</p>
            <a href={`mailto:${profile.email}`} className="flex items-start gap-3 font-display text-lg font-semibold break-all hover:text-cyan transition">
              <Mail size={20} className="mt-1 shrink-0 text-signal" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-cyan transition">
              <Phone size={20} className="shrink-0 text-signal" /> {profile.phone}
            </a>
            <p className="flex items-center gap-3">
              <MapPin size={20} className="shrink-0 text-signal" /> {profile.location}
            </p>
            <p className="mono text-mute mt-auto flex items-center gap-2">
              <span className="size-2 rounded-full bg-cyan animate-pulse" /> Usually replies within a day
            </p>
          </div>
        </Reveal>

        <Reveal i={1} className="md:col-span-3">
          <form ref={formRef} onSubmit={sendEmail} className={card + " overflow-hidden"}>
            {/* console title bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-rule bg-signal/5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="mono text-mute ml-3">new_message.sh</span>
            </div>

            <div className="p-5 md:p-7 space-y-6">
              <Field label="name">
                <input type="text" name="name" required placeholder="Your name" className={input} />
              </Field>
              <Field label="email">
                <input type="email" name="email" required placeholder="you@company.com" className={input} />
              </Field>
              <Field label="message">
                <textarea
                  rows="4"
                  name="message"
                  required
                  maxLength={MAX}
                  placeholder="Tell me about the role or project…"
                  onChange={(e) => setLen(e.target.value.length)}
                  className={input + " resize-none"}
                />
              </Field>

              <div className="flex items-center justify-between gap-4">
                <span className="mono text-mute">{len}/{MAX}</span>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-signal to-cyan px-6 py-3 mono !text-[#05070d] font-medium transition hover:shadow-[0_0_30px_rgb(41_224_255/0.5)] disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : status === "sent" ? "Sent ✓" : "Send message"}
                  <Send size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
