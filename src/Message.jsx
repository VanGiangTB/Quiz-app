import React from 'react';

function Message() {
    return (
        <div className='bg-black w-full h-full  top-0 left-0 fixed flex-col '>
            <div className='text-black bg-white rounded  relative w-1/2 px-12 py-12 items-center text-4xl flex justify-center top-1/4 left-1/4 transform scale-125  '>
                "Test is over!"
                <br />
                "You can close the browser now"
                <br />
                "Check your mailbox for final results"

            </div>
        </div>
    );
}

export default Message;