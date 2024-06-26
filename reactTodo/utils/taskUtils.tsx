import { db } from "../src/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Task } from "../src/types";

const tasksCollection = collection(db, "tasks");

export async function addTask(task: Task): Promise<void> {
  await addDoc(tasksCollection, task);
}

export async function getTasks(): Promise<Task[]> {
  const querySnapshot = await getDocs(tasksCollection);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Task
  );
}
