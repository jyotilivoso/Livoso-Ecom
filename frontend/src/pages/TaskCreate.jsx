import React, { useState } from 'react';
import { getUserData } from '../service/data';
import SummerApi from '../common';

const TaskCreate = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: '',
        // user who creates the task
    });
    console.log("formdata",formData);

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const Payload = {
            ...formData,
            createdBy: getUserData()?._id,
        };
        console.log("payload data is ", Payload);

        try {
            const res = await fetch("http://localhost:8080/api/create-task", {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Payload)
            });
            clg("response is ", res);

            const data = await res.json();

            if (data.success) {
                setMessage(data.message);
                setError(false);
                setFormData({
                    title: '',
                    description: '',
                    status: '',
                    _id: '',
                    createdBy: ''
                });
                clg

            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            // setMessage(err.message);
            setError(true);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Create Task</h2>

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
                        <option value="IN_PROGRESS">In Progress</option>
                        <option value="COMPLETED">Completed</option>
                    </select>
                </div>

                {/* <div>
                    <label className="block font-semibold mb-1">Created By</label>
                    <input
                        type="text"
                        name="createdBy"
                        value={formData.createdBy}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded p-2"
                        placeholder="Enter creator name or ID"
                        required
                    />
                </div> */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                    Create Task
                </button>
            </form>
        </div>
    );
};

export default TaskCreate;
