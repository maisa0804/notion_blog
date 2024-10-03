import Hero from "@/components/sections/hero";

export default async function Home() {

  return (
    <>
      <div className="flex px-10 justify-start items-center my-12">
        <div>
          <h1 className="font-bold">Demo 'n' Code</h1>
          <p className="leading-8">Welcome to my workplace and library. I dump my works in here to share my knowledge and skill with you. I would love to collab, work, have fun with anybody. (Posts are created by <span><a href="https://www.notion.so/product" target="_brank" className="underline">Notion database</a></span>.)</p>
        </div>
      </div>
      <Hero />
    </>
  );
}
