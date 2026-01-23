import Repos from "./components/Repos";
import User from "./components/User";

export default async function Home() {
  return (
    <div className="w-full flex justify-center pt-10">
      <div className="w-full max-w-7xl flex">
        <div className="flex">
          <User />
        </div>
        <div className="w-full">
          <Repos />
        </div>
      </div>
    </div>
  );
}
