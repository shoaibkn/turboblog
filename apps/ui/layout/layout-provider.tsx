import Navigation from "@/components/navigation";
import { ThemeProvider } from "./theme-provider";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Navigation />
        <div className="max-w-6xl mx-auto p-4">{children}</div>
      </ThemeProvider>
    </main>
  );
}
