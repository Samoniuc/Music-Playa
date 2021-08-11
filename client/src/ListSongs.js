import React, { Fragment, useEffect, useState } from "react";

//import EditTodo from "./EditTodo";

const ListSongs = () => {
  const [songs, setSongs] = useState([]);

// delete todo function

//   const deleteTodo = async id => {
//     try {
//       const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
//         method: "DELETE"
//       });

//       setTodos(todos.filter(todo => todo.todo_id !== id));
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

  const getSongs = async () => {
    try {
      const response = await fetch("http://localhost:5000/songs");
      const jsonData = await response.json();

      setSongs(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  console.log(songs);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {songs.map(song => (
            <tr key={song.song_id}>
              <td>{song.song_id}</td>
              <td>
                {song.song_title}
              </td>
              <td>
                {song.song_duration.minutes}:{song.song_duration.seconds}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListSongs;
