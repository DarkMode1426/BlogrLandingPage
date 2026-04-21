import second from "./assets/images/illustration-editor-mobile.svg";
import phones from "./assets/images/illustration-phones.svg";
import laptop from "./assets/images/illustration-laptop-mobile.svg";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <div className="flex flex-col gap-9 items-center justify-center">
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
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-full max-w-[380px] h-[600px] py-9 px-4 overflow-hidden text-white p-8
      bg-gradient-to-br from-[#ff7e5f] via-[#ff6a6a] to-[#ff3d6b] rounded-bl-[100px]"
      >
        <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full top-[-80px] right-[-80px]"></div>
        <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full bottom-[-60px] left-[-60px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-white/5 rounded-full bottom-[100px] right-[-50px]"></div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" />
            <div className="flex flex-col gap-1">
              <span className="w-6 h-[4px] bg-white"></span>
              <span className="w-6 h-[4px] bg-white"></span>
              <span className="w-6 h-[4px] bg-white"></span>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="font-semibold text-[32px] leading-tight">
              A modern publishing platform
            </h1>

            <p className="text-[20px] text-white/80">
              Grow your audience and build your online brand
            </p>

            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-white text-[#ff3d6b] rounded-full font-semibold">
                Start for Free
              </button>

              <button className="px-6 py-3 border border-white rounded-full font-semibold">
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
    <div className="flex flex-col gap-9 w-full max-w-[326px] h-[1080px] items-center">
      <p className=" text-[24px] text-blue-800 font-semibold ">
        Designed for the future
      </p>

      <img className="w-full h-[326px] object-cover" src={second} alt="illus" />

      <div className="flex flex-col w-[318px] h-[620px] gap-9">
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
    </div>
  );
}

function Third() {
  return (
    <div className="relative flex flex-col items-center w-full max-w-[375px] h-[798px] border border-black overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full max-w-[375px] h-[625px] text-white p-8
      bg-gradient-to-br from-[#18024b] via-[#0f0130] to-[#0d0124] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden z-0"
      >
        <div className="absolute w-[300px] h-[300px] bg-white/10 rounded-full top-[-80px] right-[-80px]"></div>
        <div className="absolute w-[250px] h-[250px] bg-white/10 rounded-full bottom-[-60px] left-[-60px]"></div>
        <div className="absolute w-[200px] h-[200px] bg-white/5 rounded-full bottom-[100px] right-[-50px]"></div>
      </div>
      <div className="relative z-10 bg-transparent flex flex-col items-center mx-6 gap-12">
        <img src={phones} alt="phones" />
        <div className="flex flex-col items-center text-center gap-8">
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
    <div className="flex flex-col items-center w-full justify-between max-w-[375px] h-[918px] ">
      <img
        className="w-full scale-110 h-[326px] object-cover"
        src={laptop}
        alt="laptop"
      />
      <div className="flex flex-col items-center text-center gap-4 px-6">
        <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
          Introducing an extensible editor
        </h2>
        <p className="text-[14px] leading-7 text-blue-300 ">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </div>
      <div className="flex flex-col items-center text-center gap-4 px-6">
        <h2 className="text-[28px] leading-none text-blue-500 font-semibold">
          Robust content management
        </h2>
        <p className="text-[14px] leading-7 text-blue-300 ">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you're
          in full control.
        </p>
      </div>
    </div>
  );
}

function Fifth() {
  return (
    <div className="flex flex-col w-full max-w-[380px] py-16 items-center h-[900px] bg-slate-900 rounded-tr-[100px]">
      <img className="w-[100px] h-[33px] mb-12" src={logo} alt="logo" />
      <div className="flex flex-col items-center h-full justify-between">
        <div className=" flex flex-col items-center gap-4">
          <h4 className="text-[20px] leading-none text-white font-bold">
            Product
          </h4>
          <div className="flex flex-col items-center justify-between"></div>
          <p className="text-[14px] text-white ">Overview</p>
          <p className="text-[14px] text-white ">Pricing</p>
          <p className="text-[14px] text-white ">Marketplace</p>
          <p className="text-[14px] text-white ">Features</p>
          <p className="text-[14px] text-white ">Intregations</p>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <h4 className="text-[20px] leading-none text-white font-bold">
            Company
          </h4>
          <div className="flex flex-col items-center justify-between"></div>
          <p className="text-[14px] text-white ">About</p>
          <p className="text-[14px] text-white ">Team</p>
          <p className="text-[14px] text-white ">Blog</p>
          <p className="text-[14px] text-white ">Career</p>
        </div>
        <div className=" flex flex-col items-center gap-4">
          <h4 className="text-[20px] leading-none text-white font-bold">
            Contact
          </h4>
          <div className="flex flex-col items-center justify-between"></div>
          <p className="text-[14px] text-white ">Contact</p>
          <p className="text-[14px] text-white ">Newslatter</p>
          <p className="text-[14px] text-white ">LinkedIn</p>
        </div>
      </div>
    </div>
  );
}
