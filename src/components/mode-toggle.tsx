import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/alerts/dropdown";
import { useTheme } from "@/components/theme-provider";
type Theme = "dark" | "light" | "system";
export function ModeToggle() {
  const { setTheme } = useTheme();

  const handleThemeChange = (theme: Theme) => {
    setTheme(theme);
  };

  return (
    <Dropdown>
      <DropdownButton outline className="light:text-white">
        Select Theme
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu>
        <DropdownItem onClick={() => handleThemeChange("light")}>
          <SunIcon />
          <DropdownLabel> Light</DropdownLabel>
        </DropdownItem>
        <DropdownItem onClick={() => handleThemeChange("dark")}>
          <MoonIcon />
          <DropdownLabel>Dark</DropdownLabel>
        </DropdownItem>
        <DropdownItem>
          <ComputerDesktopIcon onClick={() => handleThemeChange("system")} />
          <DropdownLabel>System</DropdownLabel>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
