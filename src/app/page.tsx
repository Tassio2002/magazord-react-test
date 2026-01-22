import Repos from "./components/repos";
import User from "./components/user";

export default async function Home() {
  const data = await fetch(`https://api.github.com/users/Tassio2002`)
const repos = await data.json()
console.log(repos)
  return (
    <div className="flex">
      <Repos />
      <User />
    </div>
  );
}
