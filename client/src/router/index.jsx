/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import AuthProvider from "../context/AuthProvider";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";
import ErrorPage from "../pages/ErrorPage";
import NoteList from "../components/NodeList";
import Note from "../components/Note";
import { foldersLoader } from "../utils/folderUtils";
import {
  noteLoader,
  notesLoader,
  addNewNote,
  updateNote,
} from "../utils/noteUtils";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};
export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
            loader: foldersLoader,
            children: [
              {
                element: <NoteList />,
                path: `folder/:folderId`,
                action: addNewNote,
                loader: notesLoader,
                children: [
                  {
                    element: <Note />,
                    loader: noteLoader,
                    action: updateNote,
                    path: "note/:noteId",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
