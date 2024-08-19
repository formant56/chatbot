import Form from "./components/Form/Form";
import Chatbox from "./components/Chatbox/Chatbox";
import { Chatbox2 } from "./components/Chatbox/Chatbox2";
import { Chatbox3 } from "./components/Chatbox/Chatbox3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      <Chatbox2 />
      <Chatbox3 />
    </main>
  );
}
