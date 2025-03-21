
export default function Layout({ children }) {
  return (
    <main>
      <h1 style={{padding: .6 + "rem", opacity: .3}}>Edit mode</h1>
      {children}
    </main>
  );
}
