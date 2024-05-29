import React,{ useState } from 'react'

export default function TextForm() {

  return (



    <div>
        <div className="mb-3">
            <h2 className='heading my-3 ' >TextUtils to analyze your text.</h2>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <button type="button" class="btn btn-primary"  onClick={toUppercase}>Uppercase</button>
            <button type="button" class="btn btn-primary" onClick={toLowercase}>Lowercase</button>
        </div>
    </div>
  )
}
