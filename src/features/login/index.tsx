import { Button, LoginCard } from "@/src/features";
import { loginUser } from "@/src/store/auth";
import { AppDispatch } from "@/src/store/store";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const { success, message } = await dispatch(loginUser(email, password)) as { success: boolean; message?: string };

        if (success) {
            router.push('/dashboard');
        } else {
            setErrorMessage(message || 'Login failed!');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-b from-[#2E3248] to-purple-2">

            <div className="flex flex-col rounded-lg h-full w-[500px] justify-center items-center">
                <div className="h-full flex items-center">
                    <svg 
                        width="300" 
                        height="100
                        " 
                        viewBox="0 0 212 66" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M136.96 66C135.958 66 135.457 65.5874 135.457 64.7622V1.23781C135.457 0.412604 135.958 0 136.96 0H155.954C156.956 0 157.457 0.412604 157.457 1.23781V64.7622C157.457 65.5874 156.956 66 155.954 66H136.96Z" fill="white"/>
                        <path d="M96.3366 66C95.4166 66 94.6166 65.66 93.9366 64.98L81.9366 52.98C81.2966 52.34 80.9766 51.54 80.9766 50.58V15.42C80.9766 14.46 81.2966 13.66 81.9366 13.02L93.9366 1.02C94.6166 0.339998 95.4166 0 96.3366 0H114.577C115.497 0 116.297 0.339998 116.977 1.02L128.977 13.02C129.617 13.66 129.937 14.46 129.937 15.42V50.58C129.937 51.54 129.617 52.34 128.977 52.98L116.977 64.98C116.297 65.66 115.497 66 114.577 66H96.3366ZM105.337 46.02H105.457C106.257 46.02 106.877 45.8 107.317 45.36C107.757 44.92 107.977 44.3 107.977 43.5V22.5C107.977 21.7 107.757 21.08 107.317 20.64C106.877 20.2 106.257 19.98 105.457 19.98H105.277C104.477 19.98 103.877 20.2 103.477 20.64C103.117 21.08 102.937 21.7 102.937 22.5V43.5C102.937 44.3 103.137 44.92 103.537 45.36C103.977 45.8 104.577 46.02 105.337 46.02Z" fill="white"/>
                        <path d="M55.9598 66C54.9579 66 54.457 65.5874 54.457 64.7622V1.23781C54.457 0.412604 54.9579 0 55.9598 0H74.9543C75.9561 0 76.457 0.412604 76.457 1.23781V64.7622C76.457 65.5874 75.9561 66 74.9543 66H55.9598Z" fill="white"/>
                        <path d="M24.48 66C24.2 66 23.9 65.96 23.58 65.88C23.3 65.8 23 65.68 22.68 65.52L11.7 60.3L1.08 55.2C0.36 54.88 0 54.08 0 52.8V15.42C0 14.46 0.32 13.66 0.96 13.02L12.96 1.02C13.64 0.339998 14.44 0 15.36 0H33.6C34.52 0 35.32 0.339998 36 1.02L48 13.02C48.64 13.66 48.96 14.46 48.96 15.42V40.02H22.8V42.3L27.78 44.52L39.3 47.82C39.74 47.86 39.96 48.48 39.96 49.68V64.5C39.96 65.5 39.46 66 38.46 66H24.48ZM25.26 28.62H25.38C26.9 28.62 28.04 28.18 28.8 27.3C29.6 26.42 30 25.12 30 23.4V23.22C30 21.5 29.6 20.2 28.8 19.32C28.04 18.44 26.9 18 25.38 18H25.2C23.8 18 22.7 18.44 21.9 19.32C21.14 20.2 20.76 21.5 20.76 23.22V23.4C20.76 25.12 21.14 26.42 21.9 27.3C22.66 28.18 23.78 28.62 25.26 28.62Z" fill="white"/>
                        <path d="M186.938 2.14011e-06C187.218 2.11563e-06 187.518 0.040003 187.838 0.120005C188.118 0.200007 188.418 0.320002 188.738 0.480005L199.718 5.7L210.338 10.8C211.058 11.12 211.418 11.92 211.418 13.2L211.418 50.58C211.418 51.54 211.098 52.34 210.458 52.98L198.458 64.98C197.778 65.66 196.978 66 196.058 66L177.818 66C176.898 66 176.098 65.66 175.418 64.98L163.418 52.98C162.778 52.34 162.458 51.54 162.458 50.58L162.458 25.98L188.618 25.98L188.618 23.7L183.638 21.48L172.118 18.18C171.678 18.14 171.458 17.52 171.458 16.32L171.458 1.5C171.458 0.500003 171.958 3.4497e-06 172.958 3.36228e-06L186.938 2.14011e-06ZM186.158 37.38L186.038 37.38C184.518 37.38 183.378 37.82 182.618 38.7C181.818 39.58 181.418 40.88 181.418 42.6L181.418 42.78C181.418 44.5 181.818 45.8 182.618 46.68C183.378 47.56 184.518 48 186.038 48L186.218 48C187.618 48 188.718 47.56 189.518 46.68C190.278 45.8 190.658 44.5 190.658 42.78L190.658 42.6C190.658 40.88 190.278 39.58 189.518 38.7C188.758 37.82 187.638 37.38 186.158 37.38Z" fill="white"/>
                    </svg>
                </div>
                <div className="h-full w-full">
                    <form 
                        className="w-full text-start mb-6" 
                        onSubmit={handleLogin}
                    >
                        <LoginCard>
                            <label className="text-white/50 text-2xl font-light p-2">EMAIL</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Write your email here"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-xl p-2 mt-2 w-full bg-transparent text-white rounded-[10px]"
                                required
                            />
                        </LoginCard>
                        <LoginCard>
                            <label className="text-white/50 text-2xl font-light p-2">Password</label>
                            <div className="relative w-full">
                                <input 
                                    type={showPassword ? 'text' : 'password'} 
                                    name="password" 
                                    placeholder="Write your password here" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    className=" text-xl p-2 mt-2 w-full bg-transparent text-white rounded-[10px]"
                                    required
                                />
                                <button type="button" onClick={togglePasswordVisibility} className="text-gray-4 absolute right-0 p-4">
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </LoginCard>
                        <div className="flex flex-col justify-between w-full gap-2">
                            <Button
                                type="submit"
                                className="text-2xl font-bold bg-white text-purple-2 p-8 hover:bg-white/75"
                                >
                                Login
                            </Button>
                            <div className="h-10 w-full flex justify-center items-center">
                                {errorMessage && <p className="text-white font-semibold bg-red-500 p-1 px-4 rounded-[10px]">{errorMessage}</p>}
                            </div>
                        </div>
                        {/* <p>Forget password</p> */}
                    </form>
                    <LoginCard className="flex flex-col justify-center items-center mb-2">
                        <span className="text-white">Login with Pin?</span>
                    </LoginCard>
                    {/* <Link href="/" className="text-lg w-full"> */}
                        <Button className="text-2xl font-bold bg-white text-purple-2 p-8 hover:bg-white/75">
                            Login Pin
                        </Button>
                    {/* </Link> */}
                </div>
                <div className="flex items-end justify-start h-full p-2 text-white">
                    <p>developed by Trio Mas Kentir</p>
                </div>
            </div>

        </div>
    )
}