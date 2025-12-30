import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* LEFT: Login Form */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-sm space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your account to continue
            </p>
          </div>

          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              autoComplete="email"
            />
            <Input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />

            <Button className="w-full">Sign in</Button>
          </form>

          <div className="text-sm text-muted-foreground text-center">
            Don’t have an account?{" "}
            <span className="text-foreground cursor-pointer hover:underline">
              Sign up
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT: Image */}
      <div className="hidden md:block relative">
        <img
          src="/login.png"
          alt="Login"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
};

export default Login;
