import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] grid grid-cols-1 lg:grid-cols-2">
      <Link
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-[#ffffff60] hover:text-white transition-colors z-10"
      >
        <ArrowLeft className="size-4" />
        <span className="text-sm font-light">Back to home</span>
      </Link>

      {/* LEFT: Login Form */}
      <div className="flex items-center justify-center px-8 sm:px-12">
        <div className="w-full max-w-md space-y-10 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className="space-y-4">
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
            <h1 className="text-4xl font-medium text-white tracking-tight">
              Access Control
            </h1>
            <p className="text-[#ffffff40] font-light">
              Enter your credentials to access the infrastructure console.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#ffffff40] ml-1">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="name@company.com"
                className="bg-white/3 border-white/5 h-12 rounded-2xl focus:border-white/20 transition-all text-white placeholder:text-[#ffffff20]"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs uppercase tracking-widest text-[#ffffff40]">
                  Password
                </label>
                <a
                  href="#"
                  className="text-[10px] uppercase tracking-widest text-[#ffffff30] hover:text-white/60 transition-colors"
                >
                  Forgot?
                </a>
              </div>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-white/3 border-white/5 h-12 rounded-2xl focus:border-white/20 transition-all text-white placeholder:text-[#ffffff20]"
              />
            </div>

            <Button className="w-full h-12 rounded-2xl bg-white text-black hover:bg-white/90 font-medium mt-4">
              Sign In
            </Button>
          </form>

          <div className="text-sm text-[#ffffff40] text-center lg:text-left font-light">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-white hover:underline underline-offset-4"
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT: Visual Side */}
      <div className="hidden lg:block relative m-6 rounded-[3rem] overflow-hidden bg-[#111]">
        <img
          src="/login.png"
          alt="Login backdrop"
          className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-[10s]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute bottom-12 left-12 right-12">
          <p className="text-2xl font-light text-white leading-tight mb-4">
            "Reboot has completely transformed how we handle our cloud
            deployment. Service is blazing fast."
          </p>
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-white/10 border border-white/10" />
            <div>
              <p className="text-sm text-white font-medium">Alex Rivera</p>
              <p className="text-xs text-[#ffffff40]">CTO at TechFlow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
