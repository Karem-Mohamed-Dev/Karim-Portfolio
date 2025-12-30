import Header from "./components/Header";
import About from "./Sections/About";

function App() {
  return (
    <main className="w-full h-full px-5 bg-[#f0f0f8]">
      <div className="mx-auto max-w-5xl min-h-screen border-0 md:border-r md:border-l md:border-[#eee]">
        <Header />
        <About />
      </div>
    </main>
  );
}

export default App;
