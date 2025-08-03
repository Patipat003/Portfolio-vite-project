import { motion } from "framer-motion";
import Button from "../ui/Button";
import Toast from "../ui/Toast";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { BsLine } from "react-icons/bs";
import PetWidget from "../ui/PetWidget";

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    Toast(`Copied to clipboard`);
  };

  return (
    <div className="mt-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 border-1 border-neutral backdrop-blur-md bg-base-100/60 mb-6 p-8 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-success text-3xl font-semibold">Let's Talk</h1>
          <p className="text-sm text-neutral-content/80 mt-4 leading-relaxed">
            Have a project in mind or just want to connect? Feel free to reach
            out — I'd love to chat.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-neutral/50 h-10 w-10 rounded-full flex items-center justify-center">
                <MdEmail className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="flex text-sm text-success font-semibold">
                  Email
                </div>
                <div
                  className="flex items-center text-neutral-content/80 font-medium cursor-pointer hover:text-primary transition-colors"
                  onClick={() => copyToClipboard("patipat.singhasri@gmail.com")}
                >
                  <span>patipat.singhasri@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-neutral/50 h-10 w-10 rounded-full flex items-center justify-center">
                <MdOutlinePhoneIphone className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-success font-semibold">Phone</div>
                <div className="text-neutral-content/80 font-medium">
                  +66 98 584 6689
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-neutral/50 h-10 w-10 rounded-full flex items-center justify-center">
                <FaGithub className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-success font-semibold">GitHub</div>
                <a
                  href="https://github.com/patipat003"
                  target="_blank"
                  className="text-neutral-content/80 font-medium underline hover:text-primary transition-colors"
                >
                  github.com/patipat003
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-neutral/50 h-10 w-10 rounded-full flex items-center justify-center">
                <BsLine className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-success font-semibold">Line</div>
                <a
                  href="https://line.me/ti/p/~kz.champ"
                  target="_blank"
                  className="text-neutral-content/80 font-medium underline hover:text-primary transition-colors"
                >
                  line.me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-success font-bold text-lg">Contact Summary</h2>
          <div className="pr-2 text-sm text-neutral-content/90 leading-relaxed">
            Whether you're looking to collaborate, hire, or just chat tech — I'm
            always open. Let's connect!
          </div>

          <div className="border-t border-base-content/10 pt-4">
            <p className="text-sm text-neutral-content/70 italic">
              “Vibe Coding Enjoyer :smileyface:”
            </p>
          </div>

          <Button link="../Patipat's Resume.pdf" text="📄 Download Resume" />
          <PetWidget />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
