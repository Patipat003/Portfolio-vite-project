import { motion } from "framer-motion";
import Button from "../ui/Button";
import Toast from "../ui/Toast";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { BsLine } from "react-icons/bs";
import PetWidget from "../ui/PetWidget";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    Toast(`Copied to clipboard`);
  };

  return (
    <>
      <motion.div
        className="border-1 border-neutral backdrop-blur-md bg-base-100/60 mb-6 p-8 rounded-xl shadow-xl space-y-4 hover:scale-[1.01] transition-all duration-300"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center">
          <h1 className="text-success text-3xl font-semibold">Let's Talk</h1>
          <p className="text-sm text-neutral-content/80 mt-4 leading-relaxed">
            Have a project in mind or just want to connect? Feel free to reach
            out — I'd love to chat.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-base-200 rounded-lg">
          <div className="flex flex-col p-4 justify-center space-y-6 text-sm md:text-base">
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
                  <span className="truncate w-39 sm:w-full">
                    patipat.singhasri@gmail.com
                  </span>
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
          <ContactForm />
        </div>
        <div className="space-y-2">
          <div className="border-t border-base-content/10 pt-4">
            <p className="text-sm text-neutral-content/70 italic mb-4">
              “I don’t know everything. I only know what I know. :smileyface:”
            </p>
            <Button link="../Resume.pdf" text="📄 Download Resume" />
          </div>
          <PetWidget />
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
