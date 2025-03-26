import React from "react";
import Header from "../components/layout/Header";
import Skills from "../components/layout/Skills";

const Portfolio = () => {
  return (
    <div data-theme="synthwave" className="w-full max-w-7xl mx-auto bg-base-100">
      <Header />

      {/* Information */}
      <div className="flex w-full flex-col lg:flex-row gap-4 p-4">
        
        <div className="card grow max-w-xs mx-auto lg:max-w-md place-items-center">
          <div className="avatar">
            <div className="w-72 overflow-hidden">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card rounded-box grid h-32 grow place-items-center flex flex-col p-4">
          <div>
            <div className="mb-6 text-5xl">PPPPP SSSSS</div>
            <div className="mockup-code w-full">
              <pre data-prefix="$"><code>Hello my name is ....</code></pre>
              <pre data-prefix=">" className="text-warning"><code>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, hic?</code></pre>
              <pre data-prefix=">" className="text-success"><code>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, exercitationem.!</code></pre>
              <pre data-prefix=">" className="text-success"><code>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, exercitationem.!</code></pre>
              <pre data-prefix=">" className="text-success"><code>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, exercitationem.!</code></pre>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills */}
      <Skills />
    </div>
  );
};

export default Portfolio;
