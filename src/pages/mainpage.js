import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import tick from "../assets/images/icon-list.svg";

export default function MainPage() {
  return (
    <>
      <main className="min-h-screen sm:grid sm:place-items-center sm:bg-blue-900 sm:p-8">
        <section className="mx-auto flex max-h-max min-h-screen w-full flex-col bg-white sm:min-h-fit sm:max-w-screen-md sm:flex-row sm:gap-4 sm:rounded-xl sm:p-6">
          <div className="rounded-md sm:order-2">
            <img src={illustrationMobile} alt="" className="w-full sm:hidden" />
            <img
              src={illustrationDesktop}
              alt=""
              className="hidden h-full sm:block"
            />
          </div>
          <article className="flex flex-grow flex-col gap-6 p-6 font-medium sm:justify-around">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-bold md:text-5xl">Stay updated!</h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <ul className="grid list-none gap-2">
                <li className="flex items-start gap-3">
                  <img src={tick} alt="" />
                  <p>Product discovery and building what matters</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src={tick} alt="" />
                  <p>Measuring to ensure updates are a success</p>
                </li>
                <li className="flex items-start gap-3">
                  <img src={tick} alt="" />
                  <p>And much more!</p>
                </li>
              </ul>
            </div>
            <form className="grid gap-4" action="/success">
              <div className="grid grid-cols-2 gap-1">
                <label htmlFor="email" className="order-1 text-sm">
                  Email address
                </label>
                <input
                  name="email"
                  id="email"
                  placeholder="email@company.com"
                  type="email"
                  className="peer order-3 col-span-2 rounded-md border-gray-300 px-5 py-2 placeholder:font-normal placeholder:text-gray-400 invalid:border-red-400 invalid:bg-red-100"
                />
                <span className="invisible order-2 self-center justify-self-end text-xs text-red-400 peer-invalid:visible">
                  Valid Email Required
                </span>
              </div>
              <input
                type="submit"
                value="Subscribe to monthly newsletter"
                className="rounded-md bg-gradient-to-r from-blue-900 to-blue-900 p-2 text-center font-medium text-white shadow-sm hover:cursor-pointer hover:from-pink-500 hover:to-orange-500 hover:shadow-lg hover:shadow-orange-100"
              />
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
