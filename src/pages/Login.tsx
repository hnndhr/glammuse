import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-[url('/img/bg-logreg.png')] bg-cover bg-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-96">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0,0 C200,50 400,80 600,60 C700,50 750,40 800,30 L800,0 Z" fill="rgba(244, 238, 213, 0.6)" />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-full h-96">
          <svg viewBox="0 0 800 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <path d="M0,400 C200,350 400,320 600,340 C700,350 750,360 800,370 L800,400 Z" fill="rgba(197, 165, 128, 0.5)" />
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">
        {/* Left Greeting */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div className="max-w-md">
            <h1 className="text-6xl lg:text-7xl font-bold text-warmBrown-800 mb-4 font-serif italic">Holla!</h1>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Beauty Smarter,</p>
            <p className="text-xl lg:text-2xl text-warmBrown-600 font-light italic">Style Better</p>
          </div>
        </div>

        {/* Right Login Form */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 lg:px-16">
          <div className="w-full max-w-sm">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                <img
                  src="/img/lotus.svg"
                  alt="GlamMuse Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-warmBrown-800 tracking-widest">GLAMMUSE</h2>
            </div>

            <h3 className="text-4xl font-bold text-warmBrown-800 text-center mb-8 font-serif">Login</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-cream-200/50 border-cream-300 rounded-lg text-warmBrown-800 placeholder-warmBrown-500 focus:border-warmBrown-500 focus:ring-warmBrown-500/20"
                required
              />

              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-cream-200/50 border-cream-300 rounded-lg text-warmBrown-800 placeholder-warmBrown-500 focus:border-warmBrown-500 focus:ring-warmBrown-500/20"
                required
              />

              <div className="text-center py-2">
                <span className="text-warmBrown-600 text-sm">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={handleRegisterClick}
                    className="text-warmBrown-800 font-semibold hover:text-warmBrown-900 transition-colors underline"
                  >
                    Register
                  </button>
                </span>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-cream-400 hover:bg-cream-500 text-warmBrown-800 font-semibold rounded-lg transition-colors duration-200 shadow-lg"
              >
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
