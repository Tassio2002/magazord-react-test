import Repos from "./components/repos";
import User from "./components/user";

export default async function Home() {
  return (
    <div className="flex">
      <Repos />
      <User />
    </div>
  );
}
