import Repos from "./components/repos";
import User from "./components/user";

export default async function Home() {
  return (
    <div className="">
      <div className="flex justify-center max-w-6xl pt-10">
        <div className="">
          <User />
        </div>
        <div>
          <Repos />
        </div>
        
      </div>
    </div>

  );
}
