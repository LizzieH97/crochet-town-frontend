import Header from "../components/Header";
import SideBar from "../components/SideBar";
import SigninForm from "../components/SigninForm";

export default function SignIn() {
  return (
    <main className="grid bg-olive grid-cols-5 grid-rows-[auto_auto_1fr] grid-flow-row gap-5">
      <Header />
      <section className="col-start-5 col-end-6 row-start-2 row-span-full h-full sticky">
        <SideBar />
      </section>
      <section className="col-start-1 col-end-5 ">
        <SigninForm />
      </section>
    </main>
  );
}
