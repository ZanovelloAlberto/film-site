import Post from "../Blog/Post2";


import React from 'react'
import { Film } from "../../utils/mybase";

export default function index() {
    return (
        <div>
            <Post post={{} as Film}/>
        </div>
    )
}
