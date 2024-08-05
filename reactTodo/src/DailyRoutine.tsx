import { useState, useEffect } from "react";

import { RoutineTask, RoutineTaskDescription } from "./types";

const dailyRoutineTaskList: RoutineTask[] = [
  {
    id: 1,
    time: "10am",
    descriptions: [
      { task: "Wake up", completed: false },
      { task: "coffee", completed: false },
      { task: "leetcode easy", completed: false },
    ],
  },
  {
    id: 2,
    time: "11am",
    descriptions: [
      { task: "Job applications", completed: false },
      { task: "Email cleanup", completed: false },
      { task: "CV adjustments", completed: false },
    ],
  },
  {
    id: 3,
    time: "12pm",
    descriptions: [
      { task: "Small git commit for current project", completed: false },
    ],
  },
  { id: 4, time: "1pm", descriptions: [{ task: "Break", completed: false }] },
  {
    id: 5,
    time: "2pm",
    descriptions: [{ task: "Continue working on projects", completed: false }],
  },
  { id: 6, time: "3pm", descriptions: [{ task: "Break", completed: false }] },
  {
    id: 7,
    time: "3:30pm",
    descriptions: [{ task: "Leetcode medium", completed: false }],
  },
  {
    id: 8,
    time: "4:30pm",
    descriptions: [{ task: "Misc items to do", completed: false }],
  },
  {
    id: 9,
    time: "5:30pm",
    descriptions: [
      { task: "Email and job application checks", completed: false },
    ],
  },
];
