import { getAllPosts } from "@/lib/data/getAllPosts";


export default async function Home() {
  
  const posts = await getAllPosts()

  console.log(posts)


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>hello</h1>
      <ul>
        <li></li>
        <li></li>
      </ul>


    </div>
  );
}
