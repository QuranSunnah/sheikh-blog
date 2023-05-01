import AuthBtn from "@/components/ui/button/authBtn";
import PrimaryBtn from "@/components/ui/button/primaryBtn";
import { useFetchTodos } from "@/repo/todos";
import { closeLoader, startLoader } from "@/store/feature/loaderSlice";
import { Button } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { data: session } = useSession();
  const { data: todos = [], isLoading: isFetchTodoLoading } = useFetchTodos();
  const isLoading = useSelector((state) => state.loader.isLoading);
  const dispatch = useDispatch();
  const { t } = useTranslation("home");

  const handleSignOut = async () => {
    signOut();
  };

  return (
    <main className={`flex min-h-screen flex-col items-center p-24`}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex mb-4 gap-4">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          welcome to NextJS App
        </p>
        <AuthBtn
          btnText="sign in by email"
          btnIcon="/assets/icons/gmail.svg"
          path="/signin/email"
          onClick={() => {}}
        />
        <PrimaryBtn
          btnText="continue"
          className="w-[20.375rem] h-[3.5rem] mt-[1.875rem]"
          isLoading={isLoading}
        />
      </div>
      <div>
        <Button.Group>
          <Button
            className="mr-2"
            aria-label="set loading"
            onClick={() => dispatch(startLoader())}
          >
            Start Loader
          </Button>
          <Button
            color="failure"
            aria-label="set loading"
            onClick={() => dispatch(closeLoader())}
          >
            Close Loader
          </Button>
        </Button.Group>
      </div>
      <div className="m-6 text-lg">
        {session ? (
          <div className="flex items-center flex-col border-4 p-4 gap-4">
            <p>Hello {session.user.name}</p>
            <Button
              className="border-2 p-2 rounded-md"
              role="button"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
            <Link href="/profile">Profile</Link>
          </div>
        ) : (
          <Link className="underline" href="/signin">
            Sign in
          </Link>
        )}
      </div>
      <div className="border-4 p-6 mb-4">
        <p>i18n Example</p>
        <p>{t("hello")}</p>
      </div>
      <div className="border-4 p-6">
        <p>react query example</p>
        {!isFetchTodoLoading && (
          <ul>
            {todos.slice(0, 5).map((todo) => {
              return <li key={todo.id}>{todo.title}</li>;
            })}
          </ul>
        )}
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}
