import { createClerkSupabaseClientSsr } from './client';
import AddTaskForm from './AddTaskForm';

export default async function Home() {
  const client = createClerkSupabaseClientSsr();
  const { data, error } = await client.from('tasks').select();
  if (error) {
    throw error;
  }
  const tasks = data;

  return (
    <div>
      <h1>Tasks</h1>

      <div>
        {tasks?.map((task: any) => (
          <p key={task.id || task.name}>{task.name}</p> // 修正: `key` を追加
        ))}
      </div>

      <AddTaskForm />
    </div>
  );
}
