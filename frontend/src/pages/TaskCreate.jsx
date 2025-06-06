import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserData } from '../service/data';

const TaskCreate = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const taskId = location.state?.taskId;

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: ''
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const isEditMode = Boolean(taskId);

  // Fetch task if editing
  useEffect(() => {
    if (isEditMode) {
      fetch(`http://localhost:8080/api/get-task/${taskId}`)
        .then(res => res.json())
        .then(data => {
            console.log("Fetched task data:", data);
          if (data.success && data.data) {
            setFormData({
              title: data.data.title || '',
              description: data.data.description || '',
              status: data.data.status || ''
            });
          }
        })
        .catch(err => {
          console.error("Error fetching task:", err);
        });
    }
  }, [taskId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      createdBy: getUserData()?._id
    };

    const payload1 = {
      ...formData
     
    };

    console.log(payload1)
    try {
      const response = await fetch(
        isEditMode
          ? `http://localhost:8080/api/update-task/${taskId}`
          : 'http://localhost:8080/api/create-task',
        {
          method: isEditMode ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(isEditMode?payload1:payload)
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);
        setError(false);
        navigate('/all-task'); 
      } else {
        throw new Error(data.message);
      }
    } catch (err) {
      console.error("Error submitting task:", err);
      setError(true);
      setMessage(err.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isEditMode ? 'Update Task' : 'Create Task'}
      </h2>

      {message && (
        <div className={`mb-4 p-2 rounded text-center ${error ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter task title"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter task description"
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          >
            <option value="">Select status</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          {isEditMode ? 'Update Task' : 'Create Task'}
        </button>
      </form>
    </div>
  );
};

export default TaskCreate;
