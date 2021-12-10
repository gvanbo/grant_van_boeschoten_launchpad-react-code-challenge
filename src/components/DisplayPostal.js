const DisplayPostal = ({foundZip}) => {
    console.log('foundZip', foundZip)
    const cityName = foundZip[0]["place name"]


    return(
        <div>
            <h2>{cityName}</h2>
        </div>
    )
}

export default DisplayPostal