import { QueryProvider } from "@/shared/lib/query-provider";
import { Header } from "@/widgets/header";
import { ListTasks } from "@/entites/task/ui/list-tasks";

function App(): React.JSX.Element {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto py-8">
          <ListTasks />
        </main>
      </div>
    </QueryProvider>
  );
}

export default App;
