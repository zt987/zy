
const { ref, reactive, computed, watch, watchEffect, inject, provide , onBeforeMount } = Vue
const ire = reactive, icd = computed, iwh = watch, iwt = watchEffect, iit = inject, ipe = provide, 响应变量 = ref, 响应对象 = reactive, 计算属性 = computed, 监视 = watch, 监视自动 = watchEffect, 注入 = inject, 提供 = provide;

import dengluUI_iyu from './dengluUI.iyu.js'
export default {
__name: 'main',
setup(ps, { expose: __expose }) {
__expose();
try {

function 载入(){

}
onBeforeMount(载入);

return { 载入, ref, reactive, computed, watch, watchEffect, inject, provide , onBeforeMount };
} catch (__err) {
sysoerr(__err + '; ' + __err.stack);
return { };
}
}
,components: { dengluUI_iyu }
,template: '\n<div><dengluUI_iyu name="dengluUI.iyu"></dengluUI_iyu>\n</div>\n'
}
