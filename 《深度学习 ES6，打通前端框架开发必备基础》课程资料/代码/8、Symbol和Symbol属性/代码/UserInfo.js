let userName = Symbol('userName');
export class UserInfo {
    [userName]() {
        return 'zhangsan'
    }
    show() {
        console.log(this[userName]());
    }

}