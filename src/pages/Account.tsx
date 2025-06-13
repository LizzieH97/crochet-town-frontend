import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function Account() {
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <h1>This is the account page</h1>
    </main>
  );
}
