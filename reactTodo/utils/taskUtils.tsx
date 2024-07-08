import { db } from "../src/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Task } from "../src/types";

const tasksCollection = collection(db, "tasks");

export async function addTask(task: Omit<Task, "id">): Promise<Task> {
  const docRef = await addDoc(tasksCollection, task);
  return { id: docRef.id, ...task };
}

export async function getTasks(): Promise<Task[]> {
  const querySnapshot = await getDocs(tasksCollection);
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() }) as Task
  );
}

export async function updateTaskStatus(
  taskId: string,
  completed: boolean
): Promise<void> {
  const taskDoc = doc(db, "tasks", taskId);
  await updateDoc(taskDoc, { completed });
}
