import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Alltask() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/get-all-task')
      .then(res => res.json())
      .then(data => {
        setTasks(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1 className='text-2xl'>Loading...</h1>
      </div>
    );
  }

  const handleEdit = (taskId) => {
    navigate(`/create-task`,{state: { taskId } });
  };
  return (
    <div className='flex justify-center flex-col items-center py-10'>
      <h1 className='text-3xl font-bold mb-6'>All Tasks</h1>
      <ul className='w-full max-w-xl space-y-4 grid md:grid-cols-2'>
        {tasks.length === 0 ? (
          <li className='text-center text-gray-500'>No tasks found.</li>
        ) : (
          tasks.map((task, idx) => (
            <li key={task._id || idx} className='bg-white shadow rounded p-4 text-black'>
              <div className='font-semibold'>{task.title || 'Untitled Task'}</div>
              {task.description && <div className='text-sm text-gray-600'>{task.description}</div>}
              {task.status && (
                <div className='text-sm p-1 bg-red-600 w-1/2 flex justify-center items-center text-white rounded-full'>
                  {task.status}
                </div>
              )}
              <button
                className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={() =>handleEdit(task._id) }
              >
                Edit
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Alltask;