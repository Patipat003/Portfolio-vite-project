import Button from "../ui/Button";
import Toast from "../ui/Toast";

const Contact = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    Toast(`Copied to clipboard`);
  };

  return (
    <div className="mt-6">
      <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-base-200 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div>
          <h1 className="text-success text-3xl font-semibold">Let's Talk</h1>
          <p className="text-sm text-neutral-content/80 mt-4 leading-relaxed">
            Have a project in mind or just want to connect? Feel free to reach
            out — I’d love to chat.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center">
                📧
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
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center">
                📱
              </div>
              <div className="flex-1">
                <div className="text-sm text-success font-semibold">Phone</div>
                <div className="text-neutral-content/80 font-medium">
                  +66 98 584 6689
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center">
                💻
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
              <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center">
                💬
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
          <h2 className="text-success font-semibold text-lg">
            Contact Summary
          </h2>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
