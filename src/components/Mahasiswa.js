import React, { useState } from "react";
import Select from "../components/Penilaian";

const Mahasiswa = (props) => {
    const [penilaian1,setPenilaian1] = useState(1)
    const [penilaian2,setPenilaian2] = useState(1)
    const [penilaian3,setPenilaian3] = useState(1)
    const [penilaian4,setPenilaian4] = useState(1)

    props.result([penilaian1,penilaian2,penilaian3,penilaian4])
    return(
        <div>
            <div>
                <div>{props.name}</div>
                <Select 
                    value={penilaian1}
                    onClick={e=>setPenilaian1(parseInt(e.target.value))}
                    onChange={e=>setPenilaian1(parseInt(e.target.value))}
                />
                <Select 
                    value={penilaian2}
                    onClick={e=>setPenilaian2(parseInt(e.target.value))}
                    onChange={e=>setPenilaian2(parseInt(e.target.value))}
                />
                <Select 
                    value={penilaian3}
                    onClick={e=>setPenilaian3(parseInt(e.target.value))}
                    onChange={e=>setPenilaian3(parseInt(e.target.value))}
                />
                <Select 
                    value={penilaian4}
                    onClick={e=>setPenilaian4(parseInt(e.target.value))}
                    onChange={e=>setPenilaian4(parseInt(e.target.value))}
                />
            </div>
        </div>
    )
}

export default Mahasiswa