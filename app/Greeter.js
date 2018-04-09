/**
 * Created by PC on 2017/6/30.
 */

var config=require('./config.json');
// module.exports = function() {
//     var greet = document.createElement('div');
//     greet.innerHTML = config.greetText;
//     return greet;
// };

//使用ES6的语法如下
import React ,{Component} from 'react';

import styles from  './css/Greeter.css';

export default class Greeter extends Component{
    render(){
        return(
            <div className={styles.root}>
                我使用完全
                {config.greetText}
            </div>
        )
    }
}