import "./LoginPage.css";
import { LoginCard } from "../components/Card/LoginCard";
import { LoginImage } from "../components/Card/LoginImage";

function LoginPage() {
  return (
    <div className="w-screen h-screen LoginPage flex items-center justify-center bg-gradient-linear-white">
      <div className="bg-white w-8/10 h-9/10 rounded-3xl grid grid-cols-2 justify-center items-center shadow-2xl opacity-85 hover:opacity-100 transform transition duration-500 hover:scale-105">
        <LoginCard />
        <LoginImage />
      </div>
    </div>
  );
}

export { LoginPage };
