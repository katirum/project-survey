import React from 'react';

const Opening = ({ name, onNameChange, onCounterChange }) => {
  return (
    <div className="container">
      <h1>Karticakes</h1>
      <p> Dear Cakers, you are receiving this survey because of
            your recent purchase at our bakery.
            We actively use feedback from you to constantly improve our service
            and provide you with the best possible products.
            So, please feel free to fill in this survey and help us to be your favourite bakery!
            First of all, we would like to know our lovely customer more.
            Please type in your name below😊
      </p>
      <form>
        <input
          type="text"
          placeholder="Type your name here"
          value={name}
          onNameChange={onNameChange} />
      </form>
      <button type="button" onClick={onCounterChange}>Start Review</button>
    </div>
  )
}

export default Opening;