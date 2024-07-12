import React from "react"
import { useRouteError } from "react-router-dom"

const Error = () => {

    const err = useRouteError();
    console.log(err)

    return(
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-2xl font-bold">OOPS!!!</h1>
            <h2 className="text-xl font-medium">Something went wrong!</h2>
            <h2 className="text-xl font-medium">{err.status + " : " + err.statusText}</h2>
            <h2 className="text-xl font-medium">{err.data}</h2>
        </div>
    )
}
export default Error