import * as elements from "typed-html"
import type {Router} from '../utils/router'

type CustomAttributes = elements.Attributes & {
    to: Router
}
export function Link(props : CustomAttributes) {
    let page = props.to.replace('/', '')
    if (!page) {
      page = 'home'  
    }
    return <a {...props} href={props.to}>{page}</a>
}