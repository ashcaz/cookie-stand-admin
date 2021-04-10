import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("Your Question Will Go Here!");
  const [reply, setReply] = useState("Ask Me Anything!");

  function questionAskedHandler(event) {
    event.preventDefault();
    // alert(event.target.question.value)
    const randomReply = Math.random() > 0.5 ? "Yes" : "No";

    setReply(randomReply);
    setQuestion(event.target.question.value);
  }

  return (
    <div className="bg-green-50">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Cookie Stand Admin" />

      <main className="p-9">
        <ShowForm />
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
      <div className="w-full mx-auto bg-green-300 my-8 rounded-md pt-3">
        <h2 className="grid justify-items-center text-2xl">
          Create Cookie Stand
        </h2>
        <form onSubmit={questionAskedHandler} className="p-4 mt-0">
          <div className="inline-block">
            <label className="px-2">Location </label>
            <input name="location" className="flex-auto p-3" />
            <label className="px-2"> Minimum Customers per Hour </label>
            <input name="min" className="flex-auto p-3" />
            <label className="px-2"> Maximum Customers per Hour </label>
            <input name="max" className="flex-auto p-3" />
            <label className="px-2"> Average Cookies per Sale </label>
            <input name="max" className="flex-auto pl-3" />
          </div>

          <button className="px-12 py-4 m-4 bg-green-600 text-black-50">
            Create
          </button>
        </form>
      </div>
    );
  }
}
