import { login, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

let types = {
    LOGIN: 'login',
    SET_TOKEN:'setToken'
};

export default {
    namespaced: true,
    state:{
        token:''
    },
    actions:{
        login(context, payLoad) {

            const account = payLoad.account && payLoad.account.trim();

            return new Promise((resolve,reject)=>{

                login(account,payLoad.password).then(response=>{

                    const data = response.data;
                    //context.commit(types.SET_TOKEN, data.token)

                    console.log(data)

                    let status = data.status;

                    if (status === 1){ // 登录成功

                        setToken(data.data.token)
                    }else{


                    }

                    resolve(data);

                }).catch(error=>{

                    reject(error)
                })
            })

            // 异步请求
            //context.commit(types.LOGIN, payLoad);
        }
    },
    mutations:{
        [types.LOGIN](state, payload) {

            //state.historyManagerData = payload.dataJson
        },

        [types.SET_TOKEN](state,payload){

            state.token = payload;
        }
    }
}