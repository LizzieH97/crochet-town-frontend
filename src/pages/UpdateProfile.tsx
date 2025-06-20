import EditForm from "../components/EditForm";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

export default function UpdateProfile() {
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <section className="col-start-2 col-end-5 ml-10">
        <EditForm />
      </section>
    </main>
  );
}
