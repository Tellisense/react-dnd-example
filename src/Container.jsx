import React, { useState, useCallback } from 'react'
import State from './State'
import Lob from './Lob'
import Mac from './Mac'
import update from 'immutability-helper'
const style = {
  width: 400,
}
const Container = () => {
  // eslint-disable-next-line no-lone-blocks
  {
    const [states, setStates] = useState(["Colorado", "New Mexico", "Texas", "Oklahoma", "Arkansas", "Louisiana", "Mississippi"])
    const [mac, setMac] = useState(["jh", "jl", "jn"])
    const [lob, setLob] = useState(["part A", "part B"])



    const moveState = useCallback(
      (dragIndex, hoverIndex) => {
        const dragState = states[dragIndex]
        setStates(
          update(states, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragState],
            ],
          }),
        )
      },
      [states],
    )


    const moveMac = useCallback(
      (dragIndex, hoverIndex) => {
        const dragMac = mac[dragIndex]
        setMac(
          update(mac, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragMac],
            ],
          }),
        )
      },
      [mac],
    )
    const moveLob = useCallback(
      (dragIndex, hoverIndex) => {
        const dragLob = lob[dragIndex]
        setLob(
          update(lob, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragLob],
            ],
          }),
        )
      },
      [lob],
    )

    const renderState = (state, index) => {
      return (
        <State
          key={index}
          index={index}
          text={state}
          moveState={moveState}
        />
      )
    }


    const renderMac = (mac, index) => {
      return (
        <Mac
          key={index}
          index={index}
          text={mac}
          moveMac={moveMac}
        />
      )
    }


    const renderLob = (lob, index) => {
      return (
        <Lob
          key={index}
          index={index}
          text={lob}
          moveLob={moveLob}
        />
      )
    }



    return (
      <>
        <div style={style}>{states.map((item, i) => renderState(item, i))}</div>
        <div>{JSON.stringify(states)}</div>
        <hr />
        <div style={style}>{mac.map((item, i) => renderMac(item, i))}</div>
        <div>{JSON.stringify(mac)}</div>
        <hr />
        <div style={style}>{lob.map((item, i) => renderLob(item, i))}</div>
        <div>{JSON.stringify(lob)}</div>
      </>
    )
  }
}


export default Container