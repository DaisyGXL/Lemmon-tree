/**
 * 接口模块
 * @author gaoxueling
 */
import $ from 'jquery';

class Interface {
    //获取遗漏接口
    getOmit(issue) {
        //箭头函数中this的指向是不是运行时的，而是定义时的
        let self = this;
        //使用Promise对象达到异步操作，避免了外部调用函数时回调
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'get/omit',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    //数据共享
                    self.setOmit(res.data);
                    resolve.call(self, res);
                },
                error: function(err) {
                    reject.call(err);
                }
            })
        });
    }

    //获取开奖号码的接口
    getOpenCode(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'get/opencode',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    self.setOpenCode(res.data);
                    resolve.call(self, res);
                },
                error: function(err) {
                    reject.call(err);
                }
            })
        });
    }

    //获取当前状态的接口
    getState(issue) {
        let self = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: 'get/state',
                data: {
                    issue: issue
                },
                dataType: 'json',
                success: function(res) {
                    resolve.call(self, res);
                },
                error: function(err) {
                    reject.call(err);
                }
            })
        });
    }
}

export default Interface;