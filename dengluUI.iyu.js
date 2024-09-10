
const { ref, reactive, computed, watch, watchEffect, inject, provide , onBeforeMount } = Vue
const ire = reactive, icd = computed, iwh = watch, iwt = watchEffect, iit = inject, ipe = provide, 响应变量 = ref, 响应对象 = reactive, 计算属性 = computed, 监视 = watch, 监视自动 = watchEffect, 注入 = inject, 提供 = provide;

export default {
__name: 'dengluUI',
__scopeId: 'data-v-eb4d5d54',
props: ['name'],
setup(ps, { expose: __expose }) {
__expose();
try {

function 载入(){

}
onBeforeMount(载入);

function touchstart_登录按钮(v0){

}

return { touchstart_登录按钮, 载入, ref, reactive, computed, watch, watchEffect, inject, provide , onBeforeMount };
} catch (__err) {
sysoerr(__err + '; ' + __err.stack);
return { };
}
}
,components: {  }
,template: '\n<div data-v-eb4d5d54 style="height:100%;width:100%;">\n<img data-v-eb4d5d54 src="res/i.png" style="margin-top:100px;height:60px;width:60px;"></img>\n\n<div data-v-eb4d5d54 style="font-weight:bold;margin-top:20px;font-size:20px;">My Software</div>\n\n<div data-v-eb4d5d54 style="color:gray;font-size:13px;">Welcome to Login</div>\n\n<div data-v-eb4d5d54 style="margin-top:40px;">\n<div data-v-eb4d5d54 style="margin-bottom:10px;font-size:15px;">账 号</div>\n\n<input data-v-eb4d5d54 type="text" value="" id="账号编辑框" style="font-size:15px;padding-right:10px;width:95%;padding-left:10px;text-align:start;border-radius:10px;background:#F5F5F5;border-style:double;border:0px solid black;outline-style:0px;outline:#cccccc solid 0px;outline-width:0px;height:45px;"></input>\n</div>\n\n<div data-v-eb4d5d54 style="margin-top:20px;">\n<div data-v-eb4d5d54 style="margin-bottom:10px;font-size:15px;">密 码</div>\n\n<input data-v-eb4d5d54 type="password" value="" id="密码编辑框" style="font-size:15px;padding-right:10px;width:95%;padding-left:10px;text-align:start;border-radius:10px;background:#F5F5F5;border-style:double;border:0px solid black;outline:#cccccc solid 1px;outline-width:0px;height:45px;"></input>\n</div>\n\n<div data-v-eb4d5d54 style="margin-top:30px;">\n<button data-v-eb4d5d54 id="登录按钮" style="box-shadow:3px 3px 3px 0px #cccccc;border-radius:10px;font-size:15px;color:white;background:#192A33;outline:#cccccc solid 0px;border:0px;height:50px;width:100%;" @touchstart="touchstart_登录按钮">登 录</button>\n</div>\n</div>\n'
}
