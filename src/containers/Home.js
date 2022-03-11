import React, { useState } from "react";
import Mahasiswa from "../components/Mahasiswa";

const Home = (props) => {
    const result = [
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
    ]
    const mahasiswa1 = (data) =>{
        result[0] = data
    }
    const mahasiswa2 = (data) =>{
        result[1] = data
    }
    const mahasiswa3 = (data) =>{
        result[2] = data
    }
    const mahasiswa4 = (data) =>{
        result[3] = data
    }
    const mahasiswa5 = (data) =>{
        result[4] = data
    }
    const mahasiswa6 = (data) =>{
        result[5] = data
    }
    const mahasiswa7 = (data) =>{
        result[6] = data
    }
    const mahasiswa8 = (data) =>{
        result[7] = data
    }
    const mahasiswa9 = (data) =>{
        result[8] = data
    }
    const mahasiswa10 = (data) =>{
        result[9] = data
    }
    function save(){
        console.log(result)
        const data = JSON.stringify(
            {
                aspek_penilaian_1 : {
                    mahasiswa_1 : result[0][0],
                    mahasiswa_2 : result[1][0],
                    mahasiswa_3 : result[2][0],
                    mahasiswa_4 : result[3][0],
                    mahasiswa_5 : result[4][0],
                    mahasiswa_6 : result[5][0],
                    mahasiswa_7 : result[6][0],
                    mahasiswa_8 : result[7][0],
                    mahasiswa_9 : result[8][0],
                    mahasiswa_10 : result[9][0]
                },
                aspek_penilaian_2 : {
                    mahasiswa_1 : result[0][1],
                    mahasiswa_2 : result[1][1],
                    mahasiswa_3 : result[2][1],
                    mahasiswa_4 : result[3][1],
                    mahasiswa_5 : result[4][1],
                    mahasiswa_6 : result[5][1],
                    mahasiswa_7 : result[6][1],
                    mahasiswa_8 : result[7][1],
                    mahasiswa_9 : result[8][1],
                    mahasiswa_10 : result[9][1]
                },
                aspek_penilaian_3 : {
                    mahasiswa_1 : result[0][2],
                    mahasiswa_2 : result[1][2],
                    mahasiswa_3 : result[2][2],
                    mahasiswa_4 : result[3][2],
                    mahasiswa_5 : result[4][2],
                    mahasiswa_6 : result[5][2],
                    mahasiswa_7 : result[6][2],
                    mahasiswa_8 : result[7][2],
                    mahasiswa_9 : result[8][2],
                    mahasiswa_10 : result[9][2]
                },
                aspek_penilaian_4 : {
                    mahasiswa_1 : result[0][3],
                    mahasiswa_2 : result[1][3],
                    mahasiswa_3 : result[2][3],
                    mahasiswa_4 : result[3][3],
                    mahasiswa_5 : result[4][3],
                    mahasiswa_6 : result[5][3],
                    mahasiswa_7 : result[6][3],
                    mahasiswa_8 : result[7][3],
                    mahasiswa_9 : result[8][3],
                    mahasiswa_10 : result[9][3]
                },
            }
        )
    }
    return(
        <div>
            <Mahasiswa name={'Mahasiswa 1'} result={mahasiswa1}/>
            <Mahasiswa name={'Mahasiswa 2'} result={mahasiswa2}/>
            <Mahasiswa name={'Mahasiswa 3'} result={mahasiswa3}/>
            <Mahasiswa name={'Mahasiswa 4'} result={mahasiswa4}/>
            <Mahasiswa name={'Mahasiswa 5'} result={mahasiswa5}/>
            <Mahasiswa name={'Mahasiswa 6'} result={mahasiswa6}/>
            <Mahasiswa name={'Mahasiswa 7'} result={mahasiswa7}/>
            <Mahasiswa name={'Mahasiswa 8'} result={mahasiswa8}/>
            <Mahasiswa name={'Mahasiswa 9'} result={mahasiswa9}/>
            <Mahasiswa name={'Mahasiswa 10'} result={mahasiswa10}/>
            <button onClick={()=>save()}>save</button>
        </div>
    )
}

export default Home