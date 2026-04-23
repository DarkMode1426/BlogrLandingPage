import second from "./assets/images/illustration-editor-mobile.svg";
import phones from "./assets/images/illustration-phones.svg";
import laptop from "./assets/images/illustration-laptop-mobile.svg";
import logo from "./assets/images/logo.svg";
import arrowL from "./assets/images/icon-arrow-light.svg";
import arrowD from "./assets/images/icon-arrow-dark.svg";
import desktop from "./assets/images/illustration-editor-desktop.svg";
import close from "./assets/images/icon-close.svg";
import hamburger from "./assets/images/icon-hamburger.svg";
import { use, useState } from "react";

function App() {
  return (
    <div className="flex flex-col gap-9">
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
}

export default App;

function First() {
  const [openConnect, setOpenConnect] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubConnect, setOpenSubConnect] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-full max-w-[380px] md:max-w-[768px] lg:max-w-[1440px] h-[600px] mx-auto overflow-hidden text-white py-9 px-6 md:px-10 lg:px-20 xl:px-32
      bg-gradient-to-br from-[#ff7e5f] via-[#ff3d6b] to-[#ff3d6b] rounded-bl-[100px]"
      >
        <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full top-[-80px] right-[-80px]"></div>
        <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full bottom-[-60px] left-[-60px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-white/5 rounded-full bottom-[100px] right-[-50px]"></div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center relative">
            <img src={logo} alt="logo" />
            <div className="hidden lg:flex flex-1 justify-between items-center px-10">
              <div className="flex justify-start gap-3 ">
                <span className="flex items-center gap-2 cursor-pointer">
                  <p>Product</p>
                  <img src={arrowL} alt="arrow" />
                </span>

                <span className="flex items-center gap-2 cursor-pointer">
                  <p>Company</p>
                  <img src={arrowL} alt="arrow" />
                </span>
                <span
                  onClick={() => setOpenConnect(!openConnect)}
                  className="flex items-center gap-2 cursor-pointer relative"
                >
                  <p>Connect</p>
                  <img
                    src={arrowL}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      openConnect ? "rotate-180" : ""
                    }`}
                  />
                  {openConnect && (
                    <div className="absolute text-[12px] top-full left-0 mt-2 bg-white text-black shadow-md rounded-md py-4 pl-4 pr-8">
                      <p className="mb-2">Contact</p>
                      <p className="mb-2">Newletter</p>
                      <p className="mb-2">linkedIn</p>
                    </div>
                  )}
                </span>
              </div>
              <p>Login</p>
            </div>
            <img
              onClick={() => setOpenMenu(!openMenu)}
              src={openMenu ? close : hamburger}
              alt="menu"
              className="lg:hidden "
            />
            {openMenu && (
              <div className="absolute flex flex-col justify-center items-center py-8 gap-4 left-1/2 top-full w-[calc(100%-2rem)] md:w-[calc(100%-2rem)] mt-4 -translate-x-1/2 bg-white shadow-lg rounded-md text-black lg:hidden">
                <span className="flex items-center gap-2 cursor-pointer">
                  <p className="font-semibold">Product</p>
                  <img src={arrowD} alt="arrow" />
                </span>

                <span className="flex items-center gap-2 cursor-pointer">
                  <p className="font-semibold">Company</p>
                  <img src={arrowD} alt="arrow" />
                </span>
                <span
                  onClick={() => setOpenSubConnect(!openSubConnect)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <p className="font-semibold">Connect</p>
                  <img
                    src={arrowD}
                    alt="arrow"
                    className={`transition-transform duration-300 ${
                      openSubConnect ? "rotate-180" : ""
                    }`}
                  />
                </span>
                {openSubConnect && (
                  <div className="flex flex-col justify-center items-center bg-gray-200 w-[calc(100%-4rem)] py-6 gap-2 ">
                    <p className="mb-2">Contact</p>
                    <p className="mb-2">Newletter</p>
                    <p className="mb-2">linkedIn</p>
                  </div>
                )}
                <hr className="border border-gray-400 my-4 w-[calc(100%-4rem)]" />
                <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:gap-12 lg:hidden">
                  <p className="font-semibold">Login</p>
                  <button className="px-6 py-2 bg-[#ff3d6b] text-white rounded-full font-semibold hover:opacity-50 transition-opacity">
                    Sign Up
                  </button>
                </div>
              </div>
            )}

            <button className="hidden lg:block px-6 py-2 bg-white text-[#ff3d6b] rounded-full font-semibold hover:opacity-50 transition-opacity">
              Sign Up
            </button>
          </div>

          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="font-semibold text-[32px] leading-tight">
              A modern publishing platform
            </h1>

            <p className="text-[20px] text-white/80">
              Grow your audience and build your online brand
            </p>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-white text-[#ff3d6b] rounded-full font-semibold hover:opacity-50 transition-opacity">
                Start for Free
              </button>

              <button className="px-6 py-3 border border-white rounded-full font-semibold hover:bg-white hover:text-[#ff3d6b]">
                Learn More
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

function Second() {
  return (
    <div className="flex flex-col gap-9 w-full max-w-[326px] md:max-w-[688px] lg:max-w-[1440px] h-[1080px] md:max-h-[1215px] lg:max-h-[882px] lg:relative mx-auto items-center">
      <p className=" text-[24px] text-blue-800 font-semibold lg:mt-6 lg:absolute z-10 lg:text-[48px]">
        Designed for the future
      </p>

      <img
        className="w-full h-[326px] object-cover lg:hidden"
        src={second}
        alt="illus"
      />
      <div className="flex flex-col w-[318px] md:w-[540px] h-[620px] md:h-[444px] lg:h-[882px] gap-9 lg:hidden">
        <div className="flex flex-col items-center text-center gap-4 flex-1">
          <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
            Introducing an extensible editor
          </h2>
          <p className="text-[14px] leading-7 text-blue-300 ">
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4 flex-1">
          <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
            Robust content management
          </h2>
          <p className="text-[14px] leading-7 text-blue-300 ">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you're in full control.
          </p>
        </div>
      </div>

      <div className="hidden lg:relative lg:block w-full h-full overflow-hidden ">
        <div className="flex flex-col justify-between max-w-[540px]  h-[608px] lg:w-1/2 absolute top-52 left-[10%]">
          <div className="flex flex-col items-center text-center gap-4 ">
            <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
              Introducing an extensible editor
            </h2>
            <p className="text-[14px] leading-7 text-blue-300 ">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 ">
            <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
              Robust content management
            </h2>
            <p className="text-[14px] leading-7 text-blue-300 ">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>
        <img
          className="hidden lg:block lg:absolute top-0 right-[-10%] w-1/2 h-full "
          src={desktop}
          alt="illus"
        />
      </div>
    </div>
  );
}

function Third() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-[375px] md:max-w-[768px] lg:max-w-[1440px] h-[798px] md:max-h-[636px] lg:max-h-[499px] mx-auto overflow-hidden">
      <div
        className="absolute bottom-0 lg:top-1/2 lg:-translate-y-1/2 left-0 w-full max-w-[375px]  md:max-w-[768px] lg:max-w-[1440px]  h-[625px] md:h-[474px] lg:max-h-[420px] lg:mx-auto text-white p-8
      bg-gradient-to-br from-[#18024b] via-[#0f0130] to-[#0d0124] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden z-0"
      >
        <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full top-[-80px] right-[-80px]"></div>
        <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full bottom-[-60px] left-[-60px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-white/5 rounded-full bottom-[100px] right-[-50px]"></div>
      </div>
      <div className="relative z-10 bg-transparent flex flex-col lg:flex-row items-center mx-6 gap-12 lg:max-w-[1110px] ">
        <img
          className="w-full max-w-[327px]  md:max-w-[346px] lg:max-w-[472px] lg:h-[560px]"
          src={phones}
          alt="phones"
        />
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
          <h2 className="text-[28px] leading-relaxed text-white font-semibold">
            State of the Art Infrastructure
          </h2>
          <p className="text-[14px] leading-7 text-white">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </div>
  );
}

function Fourth() {
  return (
    <div className="flex flex-col items-center lg:flex-row relative w-full justify-between max-w-[375px] md:max-w-[699px] h-[918px] md:h-[1137px] mx-auto lg:max-w-[1440px] lg:max-h-[786px]">
      <img
        className="w-full scale-110 h-[326px] object-cover md:scale-100 md:w-[699px] md:h-[699px] lg:hidden"
        src={laptop}
        alt="laptop"
      />
      <div className="flex flex-col items-center text-center gap-4 px-6 lg:hidden">
        <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
          Free, open, simple
        </h2>
        <p className="text-[14px] leading-7 text-blue-300 ">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-4 px-6 lg:hidden">
        <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
          Powerful tooling
        </h2>
        <p className="text-[14px] leading-7 text-blue-300 ">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
      <div className="hidden lg:flex items-center absolute justify-between top-0 left-[-8%] max-w-[1275px]">
        <img
          className="w-full scale-110 h-[326px] object-cover md:scale-100 md:w-[699px] lg:max-w-[700px] md:h-[699px] lg:max-h-[788px] lg:mr-10"
          src={laptop}
          alt="laptop"
        />
        <div className="hidden lg:flex flex-col pl-6 w-[540px] h-[416px] justify-between">
          <div className="flex flex-col items-center text-center gap-4 px-6 lg:items-start lg:text-left">
            <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
              Free, open, simple
            </h2>
            <p className="text-[14px] leading-7 text-blue-300 ">
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4 px-6 lg:items-start lg:text-left">
            <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
              Powerful tooling
            </h2>
            <p className="text-[14px] leading-7 text-blue-300 ">
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Fifth() {
  return (
    <div className="flex flex-col w-full max-w-[380px] md:max-w-[768px] lg:max-w-[1440px] py-16 items-center h-[900px] md:h-[359px]  bg-slate-900 rounded-tr-[100px] mx-auto">
      <div className="flex flex-col items-center h-full justify-between md:w-[687px] lg:w-[1040px]  md:h-[215px] md:flex-row mx-auto md:items-start">
        <img className="w-[100px] h-[33px] mb-12" src={logo} alt="logo" />
        <div className=" flex flex-col items-center gap-4 lg:items-start ">
          <h4 className="text-[20px] leading-none text-white font-bold">
            Product
          </h4>
          <div className="flex flex-col items-center justify-between "></div>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Overview
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Pricing
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Marketplace
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Features
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Intregations
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4 lg:items-start">
          <h4 className="text-[20px] leading-none text-white font-bold">
            Company
          </h4>
          <div className="flex flex-col items-center justify-between"></div>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            About
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Team
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Blog
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Career
          </p>
        </div>
        <div className=" flex flex-col items-center gap-4 lg:items-start">
          <h4 className="text-[20px] leading-none text-white font-bold">
            Contact
          </h4>
          <div className="flex flex-col items-center justify-between "></div>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Contact
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            Newslatter
          </p>
          <p className="text-[14px] text-white hover:underline cursor-pointer">
            LinkedIn
          </p>
        </div>
      </div>
    </div>
  );
}
