import { useSearchParams } from "react-router-dom";
import tick from "../assets/images/icon-success.svg";

export default function SuccessPage() {
    let [search, setSearch] = useSearchParams();
    const email = search.get('email')
  return (
    <>
      <main className="grid min-h-screen place-items-center bg-blue-900 sm:p-8">
        <section className="flex h-screen flex-col justify-between gap-6 bg-white p-6 sm:h-fit sm:max-w-96 sm:rounded-lg sm:px-12 sm:py-8">
          <div className="sm:hidden"></div>
          <div className="grid gap-6">
            <img src={tick} alt="" className="size-14" />
            <h1 className="text-4xl font-bold sm:text-5xl">
              Thanks for subscribing!
            </h1>
            <p className="font-medium">
              A confirmation email has been sent to{" "}
              <strong>{email}</strong>. Please open it and click
              the button inside to confirm your subscription.
            </p>
          </div>
          <a
            href="/"
            className="rounded-md bg-gradient-to-r from-blue-900 to-blue-900 p-2 text-center font-medium text-white shadow-sm hover:from-pink-500 hover:to-orange-500 hover:shadow-lg hover:shadow-orange-100"
          >
            Dismiss message
          </a>
        </section>
      </main>
    </>
  );
}
