import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import AlertPageExample from "@/pages/alert.page";
import AvatarPageExample from "@/pages/avatar.page";

const user = {
  avatarUrl: "https://i.pravatar.cc/300",
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-white dark:bg-zinc-900 transition-colors duration-500 ease-in-out">
        <ModeToggle />
        <div className="flex flex-col items-center justify-center h-screen">
          <AlertPageExample />
          <AvatarPageExample user={user} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
