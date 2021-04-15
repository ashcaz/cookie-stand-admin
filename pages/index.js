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

        <div className="mt-8">
          {/* <h3 className="text-sm text-center text-gray-500">
            Report Table coming soon...
          </h3>
          <p className="text-sm pt-10 text-center text-gray-500 results">
            {formInfo}
          </p> */}
          <ResponseTable />
        </div>
        <Footer />
      </main>
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
          <div className="flex-1 bg-green-200 rounded-md p-3">
            <label className="text-sm"> Minimum Customers per Hour </label>
            <input name="minCustomers" className="w-full p-0.5" />
          </div>
          <div className="flex-1 bg-green-200 rounded-md p-3">
            <label className="text-sm"> Maximum Customers per Hour </label>
            <input name="maxCustomers" className="w-full p-0.5" />
          </div>
          <div className="flex-1 bg-green-200 rounded-md p-3">
            <label className="text-sm"> Average Cookies per Sale </label>
            <input name="avgCookies" className="w-full p-0.5" />
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

  function ResponseTable(props) {
    return (
      <table className="w-1/2 mx-auto my-4">
        <thead>
          <tr>
            <th className="border-green-700">No.</th>
            <th className="border-green-700">Question</th>
            <th className="border-green-700">Reponse</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="">1</td>
            <td className="">2</td>
            <td className="">3</td>
          </tr>
        </tbody>
      </table>
    );
  }

  function Footer() {
    return (
      <footer className="flex p-4 mt-8 bg-green-500 ">
        <p className="text-left text-black">&copy;2021</p>
      </footer>
    );
  }
}
