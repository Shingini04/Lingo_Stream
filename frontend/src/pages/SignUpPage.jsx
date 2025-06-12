import { useState } from "react";
import { ShipWheelIcon } from "lucide-react";
import { Link } from "react-router";

import useSignUp from "../hooks/useSignUp";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // This is how we did it at first, without using our custom hook
  // const queryClient = useQueryClient();
  // const {
  //   mutate: signupMutation,
  //   isPending,
  //   error,
  // } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // });

  // This is how we did it using our custom hook - optimized version
  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-800 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="border border-yellow-400/20 shadow-2xl shadow-yellow-400/10 flex flex-col lg:flex-row w-full max-w-6xl mx-auto bg-gradient-to-r from-slate-900 to-gray-900 rounded-2xl overflow-hidden backdrop-blur-sm">
        {/* SIGNUP FORM - LEFT SIDE */}
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

            {/* ERROR MESSAGE IF ANY */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-lg mb-6 backdrop-blur-sm">
                <span>{error.response.data.message}</span>
              </div>
            )}

            <div className="w-full">
              <form onSubmit={handleSignup}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Create an Account</h2>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Join Streamify and start your language learning adventure!
                    </p>
                  </div>

                  <div className="space-y-5">
                    {/* FULLNAME */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200 backdrop-blur-sm"
                        value={signupData.fullName}
                        onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                        required
                      />
                    </div>
                    {/* EMAIL */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="john@gmail.com"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200 backdrop-blur-sm"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                        required
                      />
                    </div>
                    {/* PASSWORD */}
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-200">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all duration-200 backdrop-blur-sm"
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        required
                      />
                      <p className="text-xs text-gray-400 mt-1">
                        Password must be at least 6 characters long
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-4 h-4 bg-slate-800/50 border border-gray-600/50 rounded focus:ring-2 focus:ring-yellow-400/50 text-yellow-400" required />
                      <span className="text-xs leading-tight text-gray-300">
                        I agree to the{" "}
                        <span className="text-yellow-400 hover:text-yellow-300 hover:underline cursor-pointer">terms of service</span> and{" "}
                        <span className="text-yellow-400 hover:text-yellow-300 hover:underline cursor-pointer">privacy policy</span>
                      </span>
                    </div>
                  </div>

                  <button 
                    className="w-full py-3 px-6 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-black font-semibold rounded-lg shadow-lg hover:shadow-yellow-400/25 transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg" 
                    type="submit"
                    disabled={isPending}
                  >
                    {isPending ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Loading...
                      </div>
                    ) : (
                      "Create Account"
                    )}
                  </button>

                  <div className="text-center pt-4">
                    <p className="text-sm text-gray-300">
                      Already have an account?{" "}
                      <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-medium hover:underline transition-colors duration-200">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
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

export default SignUpPage;
