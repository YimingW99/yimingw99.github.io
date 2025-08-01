import Header from "./components/Header";
import Footer from "./components/Footer";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-800">
      <Header />
      <main className="flex-grow pt-16"> {/* Add padding-top to account for fixed header */}
        <SinglePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;