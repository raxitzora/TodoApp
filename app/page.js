import connectDB from "@/lib/db";
export default async function Home() {
  await connectDB()
  
  return (
<div>
  <button>
    welcome to todo app
  </button>

  
</div>
  );
}
