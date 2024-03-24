"use client"

export default function ErrorBoundry({error} : {
    error: Error
}){
    return <h2>{error.message}</h2>
}