import RootLayout from "./Layout";
import Home from "./components/Home/Home";
import Pricing from "./components/Pricing/Pricing";
import QuestionsList from "./components/QuestionsList/QuestionsList";
import Services from "./components/Services/Services";

export default function App() {
  return (
    <main className="bg-neutral-50 w-full">
      <Home />
      <Services />
      <Pricing />
      <QuestionsList />
    </main>
  );
}
