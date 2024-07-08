import { db } from "../src/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  Timestamp,
} from "firebase/firestore";
import { Task } from "../src/types";

const tasksCollection = collection(db, "tasks");

export async function addTask(task: Omit<Task, "id">): Promise<Task> {
  const taskWithTimestamp = {
    ...task,
    createdAt: Timestamp.fromDate(task.createdAt),
  };
  const docRef = await addDoc(tasksCollection, taskWithTimestamp);
  return { id: docRef.id, ...task };
}

export async function getTasks(): Promise<Task[]> {
  const querySnapshot = await getDocs(tasksCollection);
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      completed: data.completed,
      createdAt: data.createdAt.toDate(),
    } as Task;
  });
}

export async function updateTaskStatus(
  taskId: string,
  completed: boolean
): Promise<void> {
  const taskDoc = doc(db, "tasks", taskId);
  await updateDoc(taskDoc, { completed });
}
