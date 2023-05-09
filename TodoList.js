import React from 'react'
// This is the list of my tasks.

const TodoList = () => {
  return (
    <div className='tasks'>
        <div className='plan-1'>
            <span className='plan'>
                Sim Replacement
            </span>
            <div className='btn-grp'>
                <button className='edit-btn'>
                   edit
                </button>
                <button className='delete-btn'>
                   delete
                </button>

            </div>

        </div>
        <div className='plan-1'>
            <span className='plan'>
                Update files
            </span>
            <div className='btn-grp'>
                <button className='edit-btn'>
                   edit
                </button>
                <button className='delete-btn'>
                   delete
                </button>

            </div>

        </div>
        <div className='plan-1'>
            <span className='plan'>
                Go for Checkup
            </span>
            <div className='btn-grp'>
                <button className='edit-btn'>
                   edit
                </button>
                <button className='delete-btn'>
                   delete
                </button>

            </div>

        </div>
        <div className='plan-1'>
            <span className='plan'>
                Resume work
            </span>
            <div className='btn-grp'>
                <button className='edit-btn'>
                   edit
                </button>
                <button className='delete-btn'>
                   delete
                </button>

            </div>

        </div>
        

    </div>
  )
}

export default TodoList