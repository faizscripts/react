import {useState, useEffect} from "react";

const Route = ({path, children}) => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        window.addEventListener('popstate', onLocationChange)

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }

    }, [])

    const onLocationChange = () => {
        setCurrentPath(window.location.pathname)
    }

    return window.location.pathname === path ? children : null
}

export default Route