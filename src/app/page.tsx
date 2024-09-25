import Card from "@/components/card";
import dammy from "@/lib/dammy";

export default async function Home() {

  return (
    <div className="">
      <Card title={dammy.title} img={dammy.img} date={dammy.date} tags={dammy.tags} />
    </div>
  );
}
