import React, {useState} from 'react';
import {repoInterface} from "../App";

export function MasterDetail(props: any) {

    return (
        <div className="w-full h-screen">
            {props.children}
        </div>
    );
};
export function MasterDetailItem({payload, setSelected}: { payload: repoInterface, setSelected: Function }) {
    return (
        <div className="cursor-pointer" onClick={()=> setSelected(payload)}>
            {payload.name}
        </div>
    );
}

export function MasterDetail_Detail(props: any) {
    return (
        <div className="">
            {props.children}
        </div>
    );
}
