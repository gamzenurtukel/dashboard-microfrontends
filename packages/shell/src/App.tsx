import Header from "./components/Header";
import { Suspense, lazy } from "react";
import Modal from "./components/Modal";
import { useModalStore } from "./store/modal-store";

const UserCard = lazy(() => import("user_card/UserCard"));
const ContentBar = lazy(() => import("content_bar/ContentBar"));

function App() {
  const { isOpen, onClose } = useModalStore();
  return (
    <main className="min-h-screen bg-slate-900/60 text-white">
      <Header />
      <div className="flex flex-col gap-4 px-4 py-6 md:flex-row">
        {/* user card */}
        <section className="md:w-1/2">
          <Suspense fallback={<div>Loading user...</div>}>
            <UserCard />
          </Suspense>
        </section>
        {/* content Bar */}
        <section className="md:w-1/2">
          <Suspense fallback={<div>Loading content...</div>}>
            <ContentBar />
          </Suspense>
        </section>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} title="Örnek Modal" />
    </main>
  );
}

export default App;
