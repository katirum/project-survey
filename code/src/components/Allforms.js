import React, { useState } from 'react';

import Opening from './Opening';
import Firstquestion from './Firstquestion';
import Secondquestion from './Secondquestion';
import Thirdquestion from './Thirdquestion';
import Fourthquestion from './Fourthquestion'
import Summary from './Summary'

const Allforms = () => {
  /* All functions connected to the return below */
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState('');
  const [cakeOption, setCakeOption] = useState([])
  const [quality, setCakeQuality] = useState('');
  const [service, setService] = useState('');
  const [opinion, setOpinion] = useState('');

  /* Every onChange function that affects the input */
  const onCounterChange = () => {
    setCounter(counter + 1)
  }
  const onNameChange = (event) => {
    setName(event.target.value)
  }
  const onCakeOptionChange = (cake) => {
    if (cakeOption.includes(cake)) {
      const filteredCakeOption = cakeOption.filter((item) => {
        return item !== cake
      })
      setCakeOption(filteredCakeOption)
    } else {
      setCakeOption([...cakeOption, cake])
    }
  }
  const onCakeQualityChange = (event) => {
    setCakeQuality(event.target.value)
  }
  const onServiceChange = (event) => {
    setService(event.target.value);
  }
  const onOpinionChange = (event) => {
    setOpinion(event.target.value);
  }
  return (
    <>
      {counter === 1 && (
        <Opening
          name={name}
          onNameChange={onNameChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 2 && (
        <Firstquestion
          cakeOption={cakeOption}
          onCakeOptionChange={onCakeOptionChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 3 && (
        <Secondquestion
          quality={quality}
          onCakeQualityChange={onCakeQualityChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 4 && (
        <Thirdquestion
          service={service}
          onServiceChange={onServiceChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 5 && (
        <Fourthquestion
          opinion={opinion}
          onOpinionChange={onOpinionChange}
          onCounterChange={onCounterChange} />
      )}

      {counter === 6 && (
        <Summary
          name={name}
          cakeOption={cakeOption}
          quality={quality}
          service={service}
          opinion={opinion} />
      )}
    </>
  )
};

export default Allforms;