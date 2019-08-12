import React from 'react'
import { Redirect } from '@reach/router'

export default function NotFoundRoute() {
  return <Redirect noThrow to="/" />
}
