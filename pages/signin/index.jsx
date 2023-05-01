import { signInWithEmailSchema } from "@/model/auth";
import { joiResolver } from "@hookform/resolvers/joi";
import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

function SignInPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(signInWithEmailSchema),
  });
  const onSubmit = async (data) => {
    const status = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/",
    });

    if (status.ok) {
      router.push(status.url);
    }
  };
  const handleGoogleSignin = async () => {
    signIn("google", {
      callbackUrl: "http://localhost:3000",
    });
  };

  return (
    <div className={`flex min-h-screen flex-col items-center p-24`}>
      <div className="flex gap-4 w-[1/2]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="mr-2 mb-2" htmlFor="email">
            <b>Email</b>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            placeholder="Enter Email"
            {...register("email")}
          />
          <p className="mb-2 text-rose-500">{errors.email?.message}</p>
          <label className="mr-2" htmlFor="email">
            <b>Password</b>
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            type="password"
            placeholder="Enter Password"
            {...register("password")}
          />
          <p className="text-rose-500">{errors.password?.message}</p>

          <Button className="m-4" type="submit">
            Submit{" "}
          </Button>
        </form>
      </div>
      <button
        className="border-4 p-4 gap-2 rounded flex"
        type="button"
        onClick={handleGoogleSignin}
      >
        Sign In with Google{" "}
        <Image
          alt="gmail icon"
          src="/assets/icons/gmail.svg"
          width="20"
          height="25"
        />
      </button>
    </div>
  );
}

export default SignInPage;
