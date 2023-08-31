export default function Layout({ children }) {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-4 py-6">
      {children}
    </main>
  );
}