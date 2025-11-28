import Header from "./components/Header";
import { Suspense, lazy } from "react";

const UserCard = lazy(() => import("user_card/UserCard"));
const ContentBar = lazy(() => import("content_bar/ContentBar"));

function App() {
  return (
    <main className="min-h-screen bg-gray-modern-50 dark:bg-gray-modern-800/80 text-white">
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
    </main>
  );
}

export default App;
