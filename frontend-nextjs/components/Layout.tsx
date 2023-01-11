import Navbar from "./Header";

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
