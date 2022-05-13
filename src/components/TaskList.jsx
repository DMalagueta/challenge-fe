import React, { useEffect, useState } from 'react'
import Tasks from './Tasks'

export default function TaskList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/tasks")
      .then((res) => res.json())
      .then((tasks) => setData(tasks));
  }, [data]);

  return (
        <div className="taskList">
            <ul>
                { 
                  data.map(t => (
                    <Tasks data={t} key={t.id}/>
                ))
                }
            </ul>
        </div>
  )
}
