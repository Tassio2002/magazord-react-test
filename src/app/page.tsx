import Repos from "./components/repos";
import User from "./components/user";

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
