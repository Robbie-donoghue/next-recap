import Image from "next/image";
import Link from "next/link";
import { dogs } from "./stores/dogData";

export default function Home() {
  return (
    <main>
      {dogs.map((dog) => (
        <div>
          <h1>{dog.name}</h1>
          <Link href={`/dogs/${dog.name}`}>Learn more</Link>
        </div>
      ))}
    </main>
  );
}
