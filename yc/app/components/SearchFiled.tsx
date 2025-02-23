import React from 'react'
import Form from 'next/form'

export default function SearchFiled() {
  return (
    <div>
        <Form 
        action="/"
        className='search-form'
        >
            {/* On submission, the input value will be appended to 
                the URL, e.g. /?query=abc */}
            <input 
            name="query"
            className='search-input'
            defaultValue=""
            placeholder='Search for Startups'
             />
            <button type="submit">Submit</button>
        </Form>
    </div>
  )
}
