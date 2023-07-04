import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Your content goes here */}
      </main>
      <Footer />
    </div>
  );
}
