import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, Github } from "lucide-react";

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
        <div className="w-full max-w-md space-y-10 animate-in fade-in duration-700">
          <div className="flex gap-2">
            <Button className="w-[49%] h-12 text-md" variant={"outline"}>
              <Google />
              Google
            </Button>
            <Button className="w-[49%] h-12 text-md" variant={"outline"}>
              <Github />
              Github
            </Button>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-[#ffffff40] ml-1">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="name@company.com"
                className="focus:border-white/1 py-5 focus:ring-white/1 transition-all placeholder:text-[#ffffff20]"
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
                className="focus:border-white/1 py-5 focus:ring-white/1 transition-all placeholder:text-[#ffffff20]"
              />
            </div>

            <Button
              className="w-full h-12 font-light mt-4 rounded-none"
              variant={"outline"}
            >
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
      <div className="hidden lg:block relative bg-[#111]">
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
            <img
              src="https://avatars.githubusercontent.com/u/130325184?v=4"
              className="size-10 rounded-full border border-white/10"
              alt=""
            />
            <div>
              <p className="text-sm text-white font-medium">Mutawirr</p>
              <p className="text-xs text-[#ffffff40]">
                CTO at{" "}
                <a
                  href="https://aquawar.vercel.app"
                  className="underline text-muted-foreground"
                >
                  Aquawar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const Google = () => (
  <svg
    width="800px"
    height="800px"
    viewBox="-3 0 262 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path
      d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      fill="#4285F4"
    />
    <path
      d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      fill="#34A853"
    />
    <path
      d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      fill="#FBBC05"
    />
    <path
      d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      fill="#EB4335"
    />
  </svg>
);
