import React, { useCallback, useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import { Button, Card, FormGroup, InputGroup, TextArea } from '@blueprintjs/core';
import { useLocation } from 'react-router-dom';


function CreateEditBoard() {
  const location = useLocation();
  const [ isEditing, setIsEditing ] = useState(false);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    if (location.pathname === "/editBoard" && location.state) {
      setIsEditing(true)
    }
  }, [location.pathname, location.state])

  console.log(location)

  const initialValues = {
    boardName: "",
    boardDescription: ""
  }

  const onSubmit = useCallback((body) => {
    setLoading(true)
    if (isEditing) {
      console.log("updating board", body)
    } else {
      console.log("creating new board", body)
    }
  }, [isEditing]);

  return (
    <Card style={{
      minWidth: "50%",
      maxWidth: "100%",
      height: "auto"
    }}>
      <Formik onSubmit={onSubmit} initialValues={initialValues}>
        {
          ({ setFieldValue, values }) => {
            return <Form>
              <h1>{isEditing ? "Edit board" : "Create new board"}</h1>
              <FormGroup
                label="Board Name"
                labelFor="boardName"
              >
                <InputGroup
                  placeholder="My new awesome board!"
                  id="boardName"
                  onChange={(e: any) => setFieldValue("boardName", e.target.value)}
                  value={values.boardName}
                  readOnly={loading}
                />
              </FormGroup>
              <FormGroup
                label="Board Description"
                labelFor="boardDescription"
              >
                <TextArea
                  id="boardDescription"
                  growVertically={true}
                  large={true}
                  intent="primary"
                  onChange={(e: any) => setFieldValue("boardDescription", e.target.value)}
                  value={values.boardDescription}
                  fill
                  placeholder="Small description (max 150 characters)"
                  maxLength={150}
                  readOnly={loading}
                />
              </FormGroup>
              <Button text={isEditing ? "Save changes" : "Create"} intent="success" icon="chevron-right" type="submit" loading={loading} />
            </Form>
          }
        }
      </Formik>
    </Card>
  )
}

export default CreateEditBoard
