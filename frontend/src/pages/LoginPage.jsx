import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: loginMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: login,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, loginMutation } = useLogin();

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation(loginData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="border border-yellow-400/20 shadow-2xl shadow-yellow-400/10 flex flex-col lg:flex-row w-full max-w-6xl mx-auto bg-gradient-to-r from-slate-900 to-gray-900 rounded-2xl overflow-hidden backdrop-blur-sm">
        {/* LOGIN FORM SECTION */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-l-2xl"></div>
          
          <div className="relative z-10">
            {/* LOGO */}
            <div className="mb-8 flex items-center justify-start gap-3">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl shadow-lg">
                <ShipWheelIcon className="size-8 text-black" />
              </div>
              <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 tracking-wider drop-shadow-sm">
                LingoStream
              </span>
            </div>

            {/* ERROR MESSAGE DISPLAY */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg mb-6 backdrop-blur-sm">
                <span>{error.response.data.message}</span>
              </div>
            )}

            <div className="w-full">
              <form onSubmit={handleLogin}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Sign in to your account to continue your language journey
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="hello@example.com"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200 backdrop-blur-sm"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200 backdrop-blur-sm"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-400/25 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg" 
                      disabled={isPending}
                    >
                      {isPending ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                          Signing in...
                        </div>
                      ) : (
                        "Sign In"
                      )}
                    </button>

                    <div className="text-center pt-4">
                      <p className="text-sm text-gray-300">
                        Don't have an account?{" "}
                        <Link to="/signup" className="text-yellow-400 hover:text-yellow-300 font-medium hover:underline transition-colors duration-200">
                          Create one
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-br from-slate-800/50 to-gray-800/30 items-center justify-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"></div>
          
          <div className="max-w-md p-8 relative z-10">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-2xl blur-xl"></div>
              <img 
                src="/i.png" 
                alt="Language connection illustration" 
                className="w-full h-full relative z-10 drop-shadow-2xl" 
              />
            </div>

            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold text-white leading-tight">
                Connect with language partners worldwide
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
