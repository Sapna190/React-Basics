import React,{ useState } from 'react'

export default function TextForm() {

  return (
    <div>
        <div className="mb-3">
            <h2 className='heading my-3 ' style={myStyle}>TextUtils to analyze your text.</h2>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
  )
}
