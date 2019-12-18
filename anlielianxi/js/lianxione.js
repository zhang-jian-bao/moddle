/**
 * Created by 0 on 2019-09-16.
 */
function rem(){
    document.documentElement.style.fontSize=
        document.documentElement.clientWidth/6.4+"px";
}
rem();
window.onresize=rem;
