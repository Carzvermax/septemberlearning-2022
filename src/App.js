import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TodosPage from "./pages/TodosPage/TodosPage";
import AlbumsPage from "./pages/AlbumsPage/AlbumsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import MainLayuot from "./layouts/MainLayuot";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PostPage from "./pages/PostPage/PostPage";


const App = () => {
  return (
      <div>
      <Routes>
          <Route path={'/'} element={<MainLayuot/>}>
          <Route index element={<HomePage/>}/>
          <Route path={'todos'} element={<TodosPage/>}/>
          <Route path={'albums'} element={<AlbumsPage/>}/>
          <Route path={'comments'} element={<CommentsPage/>}>
              <Route path={'posts/:postId'} element={<PostPage/>}/>
          </Route>
          </Route>
          <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
      </div>
  );
}

export default App;
