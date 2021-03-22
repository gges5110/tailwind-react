import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="bg-black w-96 h-48 rounded-lg bg-purple-200 p-2">
          <img
            class="w-32 h-32 rounded-full mx-auto"
            src={logo}
            alt=""
            width="384"
            height="512"
          />

          <div class="font-medium">
            <div class="text-blue-600">Gerry Wu</div>
            <div class="text-gray-500">Software Engineer, RetailMeNot</div>
          </div>
        </div>

        <button>Button</button>
      </div>
    </div>
  );
}

export default App;
