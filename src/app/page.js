import Image from "next/image";

export default function Home() {
  return (
    <>
    <header>
        <h1>My Website Header</h1>
        <nav>
          <h3>Navigation</h3>
        </nav>
    </header>



    <aside>
        <h3>Sidebar</h3>
        <p>This is some sidebar content. You can put links or any information here.</p>
    </aside>

    <main>
        <h2>Main Content</h2>
        <p>This is the main content area where your primary information will be displayed.</p>
    </main>

    <footer>
        <p>Footer Information &copy; 2024</p>
    </footer>
    </>
  );
}
