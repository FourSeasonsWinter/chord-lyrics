'use client'
import { useEffect } from "react";

export default function Error({ error }) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return <h2>Something went wrong...</h2>
}