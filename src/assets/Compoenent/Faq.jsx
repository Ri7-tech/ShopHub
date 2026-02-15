import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
export default function Faq({index,data}) {
  return (
    <>
     <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={index}>
                  <Accordion.Header>{data.question}</Accordion.Header>
                  <Accordion.Body>
                    {data.answer}
                  </Accordion.Body>
                </Accordion.Item>
                </Accordion>
    </>
  )
}
