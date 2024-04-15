import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CATEGORIES from "./utils/demo/categories";

function App() {
  return (
    <>
      <NavBar />
      <div className="border-b-2 border-grey pt-36"></div>
      <div className="flex flex-wrap p-4 px-10 items-center sm:hidden md:hidden">
        <span className="font-medium pe-1 cursor-default text-sm">
          CATEGORIES
        </span>
        <i class="ri-arrow-right-s-line text-xl"></i>
        <div className="flex flex-wrap gap-4 items-center ps-3 ">
          {CATEGORIES.map((cat) => (
            <p className="cursor-pointer hover:text-accient/100 text-sm">
              {cat}
            </p>
          ))}
        </div>
      </div>
      <Home />
    </>
  );
}

export default App;
