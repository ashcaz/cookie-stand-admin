import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [formInfo, setInfo] = useState("");

  function infoHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJSON = JSON.stringify(Object.fromEntries(formData));

    setInfo(formJSON);
  }

  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="p-9">
        <div className="w-3/4 p-3 bg-green-300 rounded-md mx-auto">
          <div className="text-center">
            <h3 className="w-full text-center text-2xl p-2">
              Create Cookie Stand
            </h3>
          </div>

          <ShowForm />
        </div>

        <div className="m-4">
          <h3 className="text-sm text-center text-gray-500">
            Report Table coming soon...
          </h3>
          <p className="text-sm p-4 text-center text-gray-500 results">
            {formInfo}
          </p>
        </div>
      </main>

      <footer className="p-4 mt-8 bg-green-500 ">
        <p className="text-left text-black">&copy;2021</p>
      </footer>
    </div>
  );

  function Header(props) {
    return (
      <header className="flex p-4 bg-green-500 text-black-50">
        <h1 className="text-4xl border-color-black">{props.title}</h1>
      </header>
    );
  }

  function ShowForm(props) {
    return (
      <form onSubmit={infoHandler} className="">
        <div className="flex-1">
          <label className="text-sm w-1/6">Location </label>
          <input name="location" className="w-5/6 mb-4" />
        </div>
        <div className="grid grid-flow-col grid-cols-4 gap-4">
          <div className="flex-1">
            <label className="text-sm"> Minimum Customers per Hour </label>
            <input name="min" className="w-full p-0.5" />
          </div>
          <div className="flex-1">
            <label className="text-sm"> Maximum Customers per Hour </label>
            <input name="max" className="w-full p-0.5" />
          </div>
          <div className="flex-1">
            <label className="text-sm"> Average Cookies per Sale </label>
            <input name="max" className="w-full p-0.5" />
          </div>
          <div className="flex-1">
            <button className="text-sm px-16 py-4 m-4 bg-green-600 text-black-50">
              Create
            </button>
          </div>
        </div>
      </form>
    );
  }
}
