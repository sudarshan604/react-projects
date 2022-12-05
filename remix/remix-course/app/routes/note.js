import NewNote, { links as newNotestyles } from "~/components/NewNote";

export default function NotePage() {
  return (
    <main>
      <NewNote />
      <h1>My Notes</h1>
    </main>
  );
}

export function action() {}

export function links() {
  return [...newNotestyles()];
}
