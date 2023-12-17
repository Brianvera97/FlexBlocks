import { Component } from "react";
import styles from "../ContentMain/ContentMain.module.css"

class ContentMain extends Component{
    render(){
        return(
            <div className={styles.contentMain}> {this.props.children}</div>
        )
    }
}
export default ContentMain