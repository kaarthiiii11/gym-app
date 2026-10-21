import React, { useState } from 'react';
import { deleteUserAPI } from '../Services/allAPI';

function UsersList({ users, setUsers }) {
    const [search, setSearch] = useState('');

  async function deleteUser(id) {
    const confirmDelete = window.confirm(
        'Are you sure you want to delete this user?'
    );

    if (!confirmDelete) {
        return;
    }

    try {
        await deleteUserAPI(id);

        setUsers(currentUsers =>currentUsers.filter(user => String(user.id) !== String(id)));

        alert('User deleted successfully');

    } catch (error) {
        console.error(error);
        alert('Unable to delete user. Check JSON Server.');
    }
}

    const visibleUsers = users.filter(user => {
        const name = user.name || user.username || '';
        const email = user.email || '';

        return `${name} ${email}`.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="admin-panel-card">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                <div>
                    <h4 className="fw-bold">Registered Users</h4>
                    <p className="text-secondary mb-0">
                        Total users: {users.length}
                    </p>
                </div>

                <input
                    type="text"
                    className="form-control"
                    style={{ maxWidth: '300px' }}
                    placeholder="Search by name or email"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Height</th>
                            <th>Weight</th>
                            <th>BMI</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {visibleUsers.map(user => (
                            <tr key={user.id}>
                                <td>
                                    {user.name || user.username || 'Not provided'}
                                </td>

                                <td>{user.email || 'Not provided'}</td>
                                <td>{user.age || '-'}</td>

                                <td>
                                    {user.height
                                        ? `${user.height} cm`
                                        : '-'}
                                </td>

                                <td>
                                    {user.weight
                                        ? `${user.weight} kg`
                                        : '-'}
                                </td>

                                <td>{user.bmi || '-'}</td>

                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}

                        {visibleUsers.length === 0 && (
                            <tr>
                                <td
                                    colSpan="7"
                                    className="text-center py-4"
                                >
                                    {users.length === 0
                                        ? 'No registered users found.'
                                        : 'No matching users found.'}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default UsersList;