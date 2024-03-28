import Image from "next/image";

export default function Page({ params }) {
  console.log(params.singleDog);
  return (
    <div>
      <h1>one dog</h1>
      <Image
        src={
          "https://i2-prod.mirror.co.uk/incoming/article3178421.ece/ALTERNATES/s1200c/Brown-Chihuahua.jpg"
        }
        height={500}
        width={500}
      ></Image>
    </div>
  );
}
