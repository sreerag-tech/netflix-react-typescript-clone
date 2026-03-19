import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const MainLayout = () => {
    console.log('Layout rendered');
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white py-10">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

export default MainLayout;