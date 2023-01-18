import Logo from "../atoms/Logo";
import NavigationBar from "../molecules/NavigationBar";

export default function Header() {
  return (
    <header className="header">
      <NavigationBar />
      <Logo />
    </header>
  );
}
