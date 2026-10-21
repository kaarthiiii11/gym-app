import React from 'react';

function AdminNavbar({ section, setSection, logout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
         <div className="navbar-brand d-flex align-items-center" >

                    <span className="fs-2 me-2">
                       <img src="https://images.emojiterra.com/google/android-11/512px/1f3cb-2642.png" style={{ width: '30px',height:'35px' }} alt="boy" className='me-3'  />
                    </span>

                    <div>
                        <h4 className="mb-0 fw-bold">
                            Fit<span className="text-success">Zone</span>
                        </h4>
                    </div>

                </div>

        <div className="d-flex flex-wrap gap-2">
          <button
            className={`btn ${section === 'dashboard' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setSection('dashboard')} >
            Dashboard
          </button>

          <button className={`btn ${section === 'users' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setSection('users')}
          >
            Users
          </button>

          <button className={`btn ${section === 'workouts' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setSection('workouts')}
          >
            Workouts
          </button>

          <button className={`btn ${section === 'diets' ? 'btn-light' : 'btn-outline-light'}`} onClick={() => setSection('diets')}
          >
            Diet Plans
          </button>

          <button className="btn btn-danger" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar;