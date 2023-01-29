// import UserForm from "./components/UserForm/UserForm";
// import Users from "./components/Users/Users";
// import {useEffect, useState} from "react";
// import {usersService} from "./services";

import {commentsService} from "./services";
import {useEffect, useState} from "react";
import CommentForm from "./components/CommentForm/CommentForm";
import Comments from "./components/Comments/Comments";

const App = () => {
    // const [users, setUsers] = useState([]);
    //
    // useEffect(()=> {
    //     usersService.getAll().then(({data}) => setUsers([...data]))
    // }, [])

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        commentsService.getAll().then(({data}) => setComments([...data]))
    }, [])


    return (
    <div className="App">
      {/*<UserForm setUsers={setUsers}/>*/}
    <CommentForm setComments={setComments}/>
      <hr/>
        <Comments comments={comments}/>
      {/*<Users users={users}/>*/}
    </div>
  );
}

export default App;
