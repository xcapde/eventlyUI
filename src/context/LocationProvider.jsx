import { createContext } from "react";
import { useLocation } from "react-router-dom";

const LocationContext = createContext();


const LocationProvider = ({ children }) => {

    const location = useLocation().pathname;

    return (
        <LocationProvider value={location}>
            {children}
        </LocationProvider>
    )
}

export { LocationProvider };
export default LocationContext;