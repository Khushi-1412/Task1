import React from "react"

function Footer() {
    return (
        <div
            className='d-flex justify-content-center align-items-center'
            style={{ height: "40px" }}
        >
            <div>
                <span>
                    <a href='https://google.com'>Privacy Policy</a>
                </span>
                <span style={{color: "#fff"}}> |</span>
            </div>
        </div>
    )
}

export default Footer