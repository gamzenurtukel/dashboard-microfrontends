import Header from "./components/Header";

function App() {
  return (
    <main className="min-h-screen bg-gray-modern-50 dark:bg-gray-modern-800/80 text-white">
      <Header />
      <div className="flex flex-col gap-4 px-4 py-6 md:flex-row">
        {/* user card */}
        <section className="md:w-1/2"></section>
        {/* content Bar */}
        <section className="md:w-1/2"></section>
      </div>
    </main>
  );
}

export default App;
