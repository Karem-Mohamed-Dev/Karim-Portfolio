import Header from "./components/Header";
import About from "./Sections/About";
import Skills from "./Sections/Skills";

function App() {
  return (
    <main className="w-full h-full md:px-5 bg-[#F7FBFF]">
      <div className="bg-white mx-auto max-w-4xl min-h-screen border-0 md:border-r md:border-l md:border-[#eee] md:px-15 px-5">
        <Header />
        <About />
        <Skills />
      </div>
    </main>
  );
}

export default App;
