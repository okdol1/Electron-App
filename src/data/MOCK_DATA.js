import { v4 as uuidv4 } from "uuid";

const MOCK_DATA = [
  {
    id: uuidv4(),
    name: "Category 1",
    folders: [
      {
        id: uuidv4(),
        name: "Folder 1",
        files: null,
      },
      {
        id: uuidv4(),
        name: "Folder 2",
        files: [
          {
            id: uuidv4(),
            name: "File 1",
          },
          {
            id: uuidv4(),
            name: "File 2",
          },
          {
            id: uuidv4(),
            name: "File 3",
          },
          {
            id: uuidv4(),
            name: "File 4",
          },
          {
            id: uuidv4(),
            name: "File 5",
          },
          {
            id: uuidv4(),
            name: "File 6",
          },
          {
            id: uuidv4(),
            name: "File 7",
          },
          {
            id: uuidv4(),
            name: "File 8",
          },
          {
            id: uuidv4(),
            name: "File 9",
          },
          {
            id: uuidv4(),
            name: "File 10",
          },
        ],
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Category 2",
    folders: [
      {
        id: uuidv4(),
        name: "Folder 1",
        files: null,
      },
      {
        id: uuidv4(),
        name: "Folder 2",
        files: [
          {
            id: uuidv4(),
            name: "File 1",
          },
          {
            id: uuidv4(),
            name: "File 2",
          },
          {
            id: uuidv4(),
            name: "File 3",
          },
          {
            id: uuidv4(),
            name: "File 4",
          },
          {
            id: uuidv4(),
            name: "File 5",
          },
          {
            id: uuidv4(),
            name: "File 6",
          },
          {
            id: uuidv4(),
            name: "File 7",
          },
          {
            id: uuidv4(),
            name: "File 8",
          },
          {
            id: uuidv4(),
            name: "File 9",
          },
          {
            id: uuidv4(),
            name: "File 10",
          },
        ],
      },
    ],
  },
];

export default MOCK_DATA;
