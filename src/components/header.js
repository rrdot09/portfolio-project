import Logo from "./Logo";
import NavigationBar from "./NavigationBar";


export default function Header() {
  return (
    <header className="header">
      <NavigationBar />
      <Logo />
    </header>
  );
}
