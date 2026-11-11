//hardcoded valid login data for data driven testingc. This is good to use when you know the login details
// export function validUsers(){
//     return [
//         {
//             username: 'standard_user',
//             password: 'secret_sauce',
//         },
//         {
//             username: 'visual_user',
//             password: 'secret_sauce'
//         },
//     ];
// }
export const loginData = {
    validUser: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    invalidUser: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    }
};