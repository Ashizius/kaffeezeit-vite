import { JSX, PropsWithChildren, useEffect, useLayoutEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

export function useModal (){
  const location = useLocation();
  const ref = useRef<HTMLElement>(null);
  const restoreChildren = useRef<NodeListOf<ChildNode>>(null);
  useEffect(()=>{

    const modal = document.getElementById('modal');
    console.log(modal)
    restoreChildren.current = ref.current?.childNodes||null
    if (ref.current && modal) {
      ref.current.replaceChildren(modal)
    }
    console.log(restoreChildren.current)
    return ()=>{
      
      if (ref.current && modal && restoreChildren.current) {
        ref.current.replaceChildren(...restoreChildren.current)
      }
    }
  },[])
  return ref
}