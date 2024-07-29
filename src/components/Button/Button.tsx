import * as React from "react";
import { useDispatch } from "react-redux";
import { invoke } from "@tauri-apps/api";

export interface ButtonProps {
    reduxmethod:any,
    reduxFiledName:any
}

const Button = (props: ButtonProps) => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        const ipFetcher = async () =>{ 
          const fetchedIp: any = await invoke("fetch_ip");
        const responseURL = `http://${fetchedIp}:9090`;
        dispatch(
            props.reduxmethod([
            [props.reduxFiledName],
            [responseURL]
          ])
        );
         }
         ipFetcher();
      },[])
}

export default Button;